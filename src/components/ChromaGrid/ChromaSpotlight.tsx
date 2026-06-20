"use client";

import type { CSSProperties, PointerEvent, ReactNode, HTMLAttributes } from "react";
import { useChromaSpotlight } from "./useChromaSpotlight";
import "./ChromaGrid.css";

type ChromaSpotlightProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
};

export default function ChromaSpotlight({
  children,
  className = "",
  style,
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  ...rest
}: ChromaSpotlightProps) {
  const { rootRef, fadeRef, handleMove, handleLeave } = useChromaSpotlight({
    damping,
    fadeOut,
    ease,
  });

  return (
    <div
      ref={rootRef}
      className={`chroma-spotlight ${className}`}
      style={{
        ...style,
        ["--r" as string]: `${radius}px`,
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...rest}
    >
      {children}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
}
