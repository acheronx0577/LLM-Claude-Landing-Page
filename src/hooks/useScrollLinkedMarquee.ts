"use client";

import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

type UseScrollLinkedMarqueeOptions = {
  scrollSpeed?: number;
  /** Pixels per second when idle (left → right). */
  idleSpeed?: number;
  idleDelayMs?: number;
};

export function useScrollLinkedMarquee({
  scrollSpeed = 0.42,
  idleSpeed = 32,
  idleDelayMs = 140,
}: UseScrollLinkedMarqueeOptions = {}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const lastScrollRef = useRef<number | null>(null);
  const lastScrollTimeRef = useRef(0);
  const reducedMotion = useSyncExternalStore(
    subscribe,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const wrapOffset = useCallback(() => {
    const loopWidth = loopWidthRef.current;
    if (loopWidth <= 0) return;

    offsetRef.current =
      ((((offsetRef.current % loopWidth) + loopWidth) % loopWidth) - loopWidth);
  }, []);

  const applyTransform = useCallback(() => {
    wrapOffset();
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  }, [wrapOffset]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      loopWidthRef.current = track.scrollWidth / 2;
      applyTransform();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [applyTransform]);

  useLenis((lenis) => {
    if (reducedMotion) return;

    if (lastScrollRef.current === null) {
      lastScrollRef.current = lenis.scroll;
      lastScrollTimeRef.current = performance.now();
      return;
    }

    const delta = lenis.scroll - lastScrollRef.current;
    if (delta !== 0) {
      lastScrollRef.current = lenis.scroll;
      lastScrollTimeRef.current = performance.now();
      offsetRef.current -= delta * scrollSpeed;
      applyTransform();
    }
  });

  useEffect(() => {
    if (reducedMotion) return;

    let frame = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 32);
      lastTime = now;

      if (now - lastScrollTimeRef.current >= idleDelayMs) {
        offsetRef.current += (idleSpeed * dt) / 1000;
        applyTransform();
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion, idleSpeed, idleDelayMs, applyTransform]);

  useEffect(() => {
    if (!reducedMotion) return;

    const track = trackRef.current;
    if (track) {
      track.style.transform = "translate3d(0, 0, 0)";
    }
  }, [reducedMotion]);

  return { trackRef, reducedMotion };
}
