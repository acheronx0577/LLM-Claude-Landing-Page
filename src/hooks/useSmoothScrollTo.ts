"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useSmoothScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (sectionId: string, offset = -100) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const reducedMotion = prefersReducedMotion();

      if (lenis && !reducedMotion) {
        lenis.scrollTo(element, {
          offset,
          duration: 1.2,
        });
        return;
      }

      const top = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({
        top,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    [lenis],
  );
}
