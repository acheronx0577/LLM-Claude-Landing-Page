"use client";

import { useAction } from "convex/react";
import { useState, type FormEvent } from "react";
import { useContactRateLimit } from "@/hooks/useContactRateLimit";
import { api } from "../../../convex/_generated/api";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-[10px] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.06)] px-4 py-3 font-sans text-[16px] text-white placeholder:text-[#bcbcbc] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#ff541f] focus:ring-2 focus:ring-[#ff541f]/30 disabled:cursor-not-allowed disabled:opacity-50";

export default function ContactForm() {
  const submitContact = useAction(api.contact.submit);
  const {
    clientId,
    isRateLimited,
    countdownLabel,
    remaining,
    applyRateLimitResult,
  } = useContactRateLimit();
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const inputsDisabled = formState === "submitting" || isRateLimited;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!clientId || isRateLimited) {
      return;
    }

    setFormState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await submitContact({
        clientId,
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        message: String(formData.get("message") ?? ""),
      });

      applyRateLimitResult(result.resetAt);

      if (!result.ok) {
        setFormState("error");
        setErrorMessage(
          `Rate limit reached. You can send 3 messages every 15 minutes.`,
        );
        return;
      }

      form.reset();
      setFormState("success");
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <div className="w-[560px] shrink-0" data-name="Contact-Form">
      <h2 className="font-display text-[32px] font-semibold leading-[1.3] tracking-[-0.9545px] text-white">
        Get in touch
      </h2>
      <p className="mt-3 font-sans text-[18px] leading-normal text-[#bcbcbc]">
        Want to reach Acheronx0577 about LLM Claude, integrations, or
        collaboration? Send a message and I&apos;ll get back to you.
      </p>

      {isRateLimited ? (
        <div
          className="mt-6 rounded-[10px] border border-[rgba(255,84,31,0.35)] bg-[rgba(255,84,31,0.08)] px-5 py-4"
          role="status"
          aria-live="polite"
        >
          <p className="font-sans text-[14px] text-[#bcbcbc]">
            Rate limit reached — 3 messages per 15 minutes.
          </p>
          <p className="mt-2 font-display text-[40px] font-semibold leading-none tracking-[-1px] text-[#ff541f] tabular-nums">
            {countdownLabel}
          </p>
          <p className="mt-2 font-sans text-[14px] text-[#bcbcbc]">
            Try again when the timer reaches 00:00.
          </p>
        </div>
      ) : (
        <p className="mt-4 font-sans text-[14px] text-[#bcbcbc]">
          {remaining} {remaining === 1 ? "message" : "messages"} left in this
          15-minute window.
        </p>
      )}

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-sans text-[14px] text-[#bcbcbc]">Name</span>
            <input
              className={inputClassName}
              type="text"
              name="name"
              autoComplete="name"
              required
              maxLength={120}
              disabled={inputsDisabled}
              placeholder="Your name"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-sans text-[14px] text-[#bcbcbc]">Email</span>
            <input
              className={inputClassName}
              type="email"
              name="email"
              autoComplete="email"
              required
              maxLength={254}
              disabled={inputsDisabled}
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="font-sans text-[14px] text-[#bcbcbc]">Message</span>
          <textarea
            className={`${inputClassName} min-h-[120px] resize-y`}
            name="message"
            required
            maxLength={5000}
            disabled={inputsDisabled}
            placeholder="What would you like to talk about?"
          />
        </label>

        {formState === "success" && !isRateLimited ? (
          <p
            className="font-sans text-[16px] text-[#7dffb2]"
            role="status"
            aria-live="polite"
          >
            Message sent — thanks for reaching out.
          </p>
        ) : null}

        {formState === "error" && !isRateLimited ? (
          <p
            className="font-sans text-[16px] text-[#ff8a80]"
            role="alert"
            aria-live="assertive"
          >
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={inputsDisabled || !clientId}
          className="w-fit cursor-pointer rounded-[10px] bg-[#ff541f] px-[35px] py-[15px] font-display text-[20px] font-semibold leading-[19.2px] text-white transition-[transform,filter] duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:scale-100"
        >
          {formState === "submitting"
            ? "Sending…"
            : isRateLimited
              ? `Wait ${countdownLabel}`
              : "Send message"}
        </button>
      </form>
    </div>
  );
}
