"use client";

import { NAV_TOP } from "@/components/landing/layout";
import { LLM_CLAUDE_REPO } from "@/components/landing/CliInstallBox";
import { useSmoothScrollTo } from "@/hooks/useSmoothScrollTo";
import svgPaths from "@/imports/AiLandingPage1/svg-3a59wk3hgj";
import { useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Tools" },
  { id: "about", label: "About" },
  { id: "docs", label: "Docs" },
  { id: "contact", label: "Contact" },
] as const;

type NavId = (typeof NAV_ITEMS)[number]["id"];

export default function LandingNav() {
  const scrollTo = useSmoothScrollTo();
  const [active, setActive] = useState<NavId>("home");

  const handleNav = (id: NavId) => {
    setActive(id);
    scrollTo(id, id === "home" ? 0 : -100);
  };

  return (
    <div
      className="absolute inset-x-0 z-20 grid grid-cols-[1fr_auto_1fr] items-center px-[48px]"
      style={{ top: NAV_TOP }}
      data-name="Navigation"
    >
      <button
        type="button"
        onClick={() => handleNav("home")}
        className="flex items-center justify-center relative shrink-0 cursor-pointer justify-self-start rounded-sm transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff541f]"
        aria-label="Scroll to top"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[40.318px] relative w-[54px]" data-name="Logo">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 54 40.3175"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p28e34040}
                fill="white"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </button>

      <div
        className="content-stretch flex gap-[48px] items-start justify-self-center relative shrink-0"
        data-name="Nav-Links"
        role="navigation"
        aria-label="Primary"
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = active === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => handleNav(id)}
              aria-current={isActive ? "page" : undefined}
              className={`relative shrink-0 cursor-pointer rounded-sm pb-2 font-sans text-[22px] leading-[normal] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff541f] ${
                isActive
                  ? "font-display font-semibold text-white"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {label}
              <span
                aria-hidden
                className={`absolute bottom-0 left-0 h-[2px] w-full rounded-[1.5px] bg-[#ff541f] transition-all duration-300 motion-reduce:transition-none ${
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <a
        href={LLM_CLAUDE_REPO.replace(/\.git$/, "")}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#ff541f] content-stretch flex items-center justify-center overflow-clip px-[35px] py-[15px] relative rounded-[10px] shrink-0 cursor-pointer justify-self-end transition-[transform,filter] duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white no-underline"
        data-name="Link"
      >
        <span className="font-display font-semibold text-[20px] text-white leading-[19.2px]">
          GitHub
        </span>
      </a>
    </div>
  );
}
