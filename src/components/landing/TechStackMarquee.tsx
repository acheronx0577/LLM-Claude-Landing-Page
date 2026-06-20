"use client";

import { TECH_STACK_ITEMS } from "@/components/landing/techStackData";
import { useScrollLinkedMarquee } from "@/hooks/useScrollLinkedMarquee";

const LOOP_ITEMS = [...TECH_STACK_ITEMS, ...TECH_STACK_ITEMS];
export const HERO_TECH_STACK_TITLE_ID = "hero-tech-stack-title";

export default function TechStackMarquee() {
  const { trackRef, reducedMotion } = useScrollLinkedMarquee();

  return (
    <div className="relative w-full overflow-hidden py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-[#010101] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-[#010101] to-transparent"
      />

      <div
        ref={trackRef}
        className={`flex w-max items-center will-change-transform ${
          reducedMotion
            ? "mx-auto flex-wrap justify-center gap-x-10 gap-y-5 px-8"
            : "gap-12 pl-8"
        }`}
      >
        {(reducedMotion ? TECH_STACK_ITEMS : LOOP_ITEMS).map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex shrink-0 items-center gap-3.5"
          >
            {item.icon}
            <span className="font-sans text-[15px] leading-none text-[rgba(255,255,255,0.72)] whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
