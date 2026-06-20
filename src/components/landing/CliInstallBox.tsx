"use client";

import { useState } from "react";

export const LLM_CLAUDE_REPO = "https://github.com/acheronx0577/LLM-Claude.git";
const LLM_CLAUDE_INSTALL = `git clone ${LLM_CLAUDE_REPO}`;

function CopyIcon() {
  return (
    <svg
      aria-hidden
      className="size-[18px] shrink-0"
      fill="none"
      viewBox="0 0 18 18"
    >
      <rect
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.25"
        width="10"
        x="5.5"
        y="2.5"
      />
      <path
        d="M4 6.5H3.25A1.25 1.25 0 0 0 2 7.75v7A1.25 1.25 0 0 0 3.25 16h7A1.25 1.25 0 0 0 11.5 14.75V14"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden
      className="size-[18px] shrink-0 text-[#ff541f]"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        d="M4.5 9.25 7.5 12.25 13.5 5.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function CliInstallBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(LLM_CLAUDE_INSTALL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-[10px]">
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {copied ? "Install command copied to clipboard" : ""}
      </div>
      <div className="relative w-fit max-w-full rounded-[12px] border border-[#ff541f] bg-[rgba(0,0,0,0.45)] p-[3px] shadow-[0_0_24px_rgba(255,84,31,0.12)]">
        <div className="flex items-center gap-[10px] rounded-[8px] bg-[#0a0a0a] px-[14px] py-[11px]">
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Copied to clipboard" : "Copy install command"}
            className="flex shrink-0 cursor-pointer items-center justify-center rounded-[6px] p-[5px] text-[rgba(255,255,255,0.65)] transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff541f]"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
          <code className="whitespace-nowrap font-['Consolas','Monaco','Courier_New',monospace] text-[14px] leading-[20px] text-[rgba(255,255,255,0.92)]">
            {LLM_CLAUDE_INSTALL}
          </code>
        </div>
      </div>
      <p className="max-w-[920px] text-center font-['Sk-Modernist:Regular',sans-serif] text-[14px] text-[rgba(255,255,255,0.62)]">
        Supported on Windows, macOS, and Linux · then{" "}
        <code className="text-[rgba(255,255,255,0.65)]">bun install</code> and{" "}
        <code className="text-[rgba(255,255,255,0.65)]">.\run.ps1</code>
      </p>
    </div>
  );
}
