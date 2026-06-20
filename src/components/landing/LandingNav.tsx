"use client";

import { useSmoothScrollTo } from "@/hooks/useSmoothScrollTo";
import svgPaths from "@/imports/AiLandingPage1/svg-3a59wk3hgj";
import { useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact us" },
  { id: "about", label: "About us" },
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
      className="-translate-x-1/2 absolute content-stretch flex gap-[244px] items-center left-1/2 top-[50px] z-20"
      data-name="Navigation"
    >
      <button
        type="button"
        onClick={() => handleNav("home")}
        className="flex items-center justify-center relative shrink-0 cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff541f]"
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
        className="content-stretch flex gap-[65px] items-start relative shrink-0"
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
              className={`relative shrink-0 cursor-pointer rounded-sm pb-2 font-['Sk-Modernist:Regular',sans-serif] text-[22px] leading-[normal] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff541f] ${
                isActive
                  ? "font-['Sk-Modernist:Bold',sans-serif] text-white"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {label}
              <span
                aria-hidden
                className={`absolute bottom-0 left-0 h-[2px] w-full rounded-[1.5px] bg-[#ff541f] transition-all duration-300 ${
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => scrollTo("pricing")}
        className="bg-[#ff541f] content-stretch flex items-center justify-center overflow-clip px-[35px] py-[15px] relative rounded-[10px] shrink-0 cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        data-name="Link"
      >
        <span className="font-['Sk-Modernist:Bold',sans-serif] text-[20px] text-white leading-[19.2px]">
          Login
        </span>
      </button>
    </div>
  );
}
