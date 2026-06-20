"use client";

import CliInstallBox from "@/components/landing/CliInstallBox";
import ScrollCta from "@/components/landing/ScrollCta";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="absolute content-stretch flex flex-col gap-[22px] items-center left-[217px] top-[195px] w-[1005px] pb-[8px]"
      data-name="HeroSection-Content"
    >
      <div className="bg-linear-to-r content-stretch flex from-[rgba(255,84,31,0.13)] items-center justify-center px-[24px] py-[10px] relative rounded-[50.898px] shrink-0 to-[rgba(255,84,31,0.04)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[50.898px] border-[0.943px] border-solid border-[rgba(255,255,255,0.15)]"
        />
        <p className="font-['Sk-Modernist:Regular',sans-serif] text-[16px] text-[rgba(255,255,255,0.75)] tracking-[-0.2px]">
          Open source · TypeScript · ACP + MCP
        </p>
      </div>

      <p className="[word-break:break-word] min-w-full w-min shrink-0 text-center font-['Sk-Modernist:Bold',sans-serif] text-[80px] not-italic leading-0 text-white">
        <span className="leading-[88px]">Code smarter, in your </span>
        <span className="leading-[88px] text-[#ff541f]">terminal</span>
        <span className="leading-[88px]">.</span>
      </p>

      <p className="[word-break:break-word] w-[720px] shrink-0 text-center font-['Sk-Modernist:Regular',sans-serif] text-[22px] not-italic leading-[normal] text-[rgba(255,255,255,0.7)]">
        LLM Claude is a terminal AI coding assistant with Read, Write, Bash, LSP
        tools, and ACP editor integration—built for Groq, OpenRouter, and your
        workflow.
      </p>

      <CliInstallBox />

      <div className="content-stretch flex gap-[23px] items-center relative shrink-0">
        <ScrollCta target="services">See features</ScrollCta>
        <ScrollCta target="pricing" variant="outline">
          Run modes
        </ScrollCta>
      </div>
    </div>
  );
}
