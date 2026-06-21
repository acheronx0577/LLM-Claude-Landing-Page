import { v } from "convex/values";
import type { QueryCtx } from "./_generated/server";
import { internalMutation, internalQuery, query } from "./_generated/server";

export const WINDOW_MS = 15 * 60 * 1000;
export const MAX_SUBMISSIONS = 3;

const clientIdValidator = v.string();
const emailValidator = v.string();

function validateClientId(clientId: string) {
  if (!/^[0-9a-f-]{36}$/i.test(clientId)) {
    throw new Error("Invalid client id.");
  }
}

function validateEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized) || normalized.length > 254) {
    throw new Error("Invalid email.");
  }
  return normalized;
}

async function countRecentEvents(
  ctx: QueryCtx,
  index: "by_clientId_submittedAt" | "by_email_submittedAt",
  field: "clientId" | "email",
  value: string,
) {
  const windowStart = Date.now() - WINDOW_MS;
  return ctx.db
    .query("contactRateLimitEvents")
    .withIndex(index, (q) => q.eq(field, value).gte("submittedAt", windowStart))
    .collect();
}

function statusFromEvents(events: Array<{ submittedAt: number }>) {
  const count = events.length;
  const remaining = Math.max(0, MAX_SUBMISSIONS - count);

  if (count < MAX_SUBMISSIONS) {
    return { allowed: true as const, remaining, resetAt: null as number | null };
  }

  const oldestSubmittedAt = events.reduce(
    (min, event) => Math.min(min, event.submittedAt),
    events[0].submittedAt,
  );

  return {
    allowed: false as const,
    remaining: 0,
    resetAt: oldestSubmittedAt + WINDOW_MS,
  };
}

async function rateLimitStatusForClient(ctx: QueryCtx, clientId: string) {
  validateClientId(clientId);
  const events = await countRecentEvents(
    ctx,
    "by_clientId_submittedAt",
    "clientId",
    clientId,
  );
  return statusFromEvents(events);
}

async function rateLimitStatusForEmail(ctx: QueryCtx, email: string) {
  const normalizedEmail = validateEmail(email);
  const events = await countRecentEvents(
    ctx,
    "by_email_submittedAt",
    "email",
    normalizedEmail,
  );
  return statusFromEvents(events);
}

async function combinedRateLimitStatus(
  ctx: QueryCtx,
  clientId: string,
  email?: string,
) {
  const clientStatus = await rateLimitStatusForClient(ctx, clientId);
  if (!clientStatus.allowed) {
    return clientStatus;
  }

  if (!email) {
    return clientStatus;
  }

  const emailStatus = await rateLimitStatusForEmail(ctx, email);
  if (!emailStatus.allowed) {
    return emailStatus;
  }

  return {
    allowed: true as const,
    remaining: Math.min(clientStatus.remaining, emailStatus.remaining),
    resetAt: null as number | null,
  };
}

export const status = query({
  args: { clientId: clientIdValidator },
  handler: async (ctx, args) => {
    return rateLimitStatusForClient(ctx, args.clientId);
  },
});

export const check = internalQuery({
  args: {
    clientId: clientIdValidator,
    email: v.optional(emailValidator),
  },
  handler: async (ctx, args) => {
    return combinedRateLimitStatus(ctx, args.clientId, args.email);
  },
});

export const record = internalMutation({
  args: {
    clientId: clientIdValidator,
    email: emailValidator,
  },
  handler: async (ctx, args) => {
    validateClientId(args.clientId);
    const email = validateEmail(args.email);
    const submittedAt = Date.now();

    await ctx.db.insert("contactRateLimitEvents", {
      clientId: args.clientId,
      email,
      submittedAt,
    });
  },
});
