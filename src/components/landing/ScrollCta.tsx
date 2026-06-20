"use client";

import { useSmoothScrollTo } from "@/hooks/useSmoothScrollTo";
import svgPaths from "@/imports/AiLandingPage1/svg-3a59wk3hgj";
import type { ReactNode } from "react";

type ScrollCtaProps = {
  target: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "primary-with-arrow";
  className?: string;
};

const interactiveClass =
  "cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff541f]";

export default function ScrollCta({
  target,
  children,
  variant = "primary",
  className = "",
}: ScrollCtaProps) {
  const scrollTo = useSmoothScrollTo();

  if (variant === "outline") {
    return (
      <button
        type="button"
        onClick={() => scrollTo(target)}
        className={`relative rounded-[10px] shrink-0 ${interactiveClass} ${className}`}
      >
        <span className="content-stretch flex items-center justify-center overflow-clip px-[35px] py-[15px] relative rounded-[inherit] font-['Sk-Modernist:Regular',sans-serif] text-[20px] text-white leading-[19.2px]">
          {children}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute border border-[rgba(252,252,252,0.23)] border-solid inset-0 rounded-[10px]"
        />
      </button>
    );
  }

  if (variant === "primary-with-arrow") {
    return (
      <button
        type="button"
        onClick={() => scrollTo(target)}
        className={`bg-[#ff541f] content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[34px] py-[15px] relative rounded-[10px] shrink-0 ${interactiveClass} ${className}`}
      >
        <span className="font-['Sk-Modernist:Bold',sans-serif] text-[20px] text-white leading-[19.2px]">
          {children}
        </span>
        <span className="h-[16.1px] relative shrink-0 w-[23px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 23 16.1"
          >
            <path d={svgPaths.p497c700} fill="white" />
          </svg>
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => scrollTo(target)}
      className={`bg-[#ff541f] content-stretch flex items-center justify-center overflow-clip px-[35px] py-[15px] relative rounded-[10px] shrink-0 ${interactiveClass} ${className}`}
    >
      <span className="font-['Sk-Modernist:Bold',sans-serif] text-[20px] text-white leading-[19.2px]">
        {children}
      </span>
    </button>
  );
}
