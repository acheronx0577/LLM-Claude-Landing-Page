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

const baseInteractiveClass =
  "cursor-pointer transition-[transform,background-color,filter,border-color] duration-200 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2";

const primaryInteractiveClass = `${baseInteractiveClass} hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] focus-visible:outline-white`;

const outlineInteractiveClass = `${baseInteractiveClass} hover:scale-[1.02] hover:bg-white/5 active:scale-[0.98] focus-visible:outline-[#ff541f]`;

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
        className={`group relative rounded-[10px] shrink-0 ${outlineInteractiveClass} ${className}`}
      >
        <span className="content-stretch flex items-center justify-center overflow-clip px-[35px] py-[15px] relative rounded-[inherit] font-sans text-[20px] text-white leading-[19.2px]">
          {children}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute border border-[rgba(252,252,252,0.23)] border-solid inset-0 rounded-[10px] transition-colors duration-200 group-hover:border-[rgba(252,252,252,0.42)] motion-reduce:transition-none"
        />
      </button>
    );
  }

  if (variant === "primary-with-arrow") {
    return (
      <button
        type="button"
        onClick={() => scrollTo(target)}
        className={`bg-[#ff541f] content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[34px] py-[15px] relative rounded-[10px] shrink-0 ${primaryInteractiveClass} ${className}`}
      >
        <span className="font-display font-semibold text-[20px] text-white leading-[19.2px]">
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
      className={`bg-[#ff541f] content-stretch flex items-center justify-center overflow-clip px-[35px] py-[15px] relative rounded-[10px] shrink-0 ${primaryInteractiveClass} ${className}`}
    >
      <span className="font-display font-semibold text-[20px] text-white leading-[19.2px]">
        {children}
      </span>
    </button>
  );
}
