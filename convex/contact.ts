"use node";

import { v } from "convex/values";
import { Resend } from "resend";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not configured in Convex environment variables`);
  }
  return value;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const clientIdValidator = v.string();

type RateLimitStatus = {
  allowed: boolean;
  remaining: number;
  resetAt: number | null;
};

type SubmitResult =
  | { ok: true; remaining: number; resetAt: number | null }
  | { ok: false; remaining: 0; resetAt: number };

export const submit = action({
  args: {
    clientId: clientIdValidator,
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args): Promise<SubmitResult> => {
    const rateLimit: RateLimitStatus = await ctx.runQuery(
      internal.contactRateLimit.check,
      {
        clientId: args.clientId,
        email: args.email,
      },
    );

    if (!rateLimit.allowed) {
      return {
        ok: false as const,
        remaining: 0,
        resetAt: rateLimit.resetAt!,
      };
    }

    const name = args.name.trim();
    const email = args.email.trim().toLowerCase();
    const message = args.message.trim();

    if (!name || name.length > 120) {
      throw new Error("Please enter a valid name.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      throw new Error("Please enter a valid email address.");
    }
    if (!message || message.length > 5000) {
      throw new Error("Please enter a message (max 5000 characters).");
    }

    const resend = new Resend(requireEnv("RESEND_API_KEY"));
    const { error } = await resend.emails.send({
      from: requireEnv("CONTACT_FROM_EMAIL"),
      to: requireEnv("CONTACT_TO_EMAIL"),
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    await ctx.runMutation(internal.contactMutations.record, {
      name,
      email,
      message,
    });

    await ctx.runMutation(internal.contactRateLimit.record, {
      clientId: args.clientId,
      email,
    });

    const afterSubmit: RateLimitStatus = await ctx.runQuery(
      internal.contactRateLimit.check,
      {
        clientId: args.clientId,
        email,
      },
    );

    return {
      ok: true as const,
      remaining: afterSubmit.remaining,
      resetAt: afterSubmit.resetAt,
    };
  },
});
