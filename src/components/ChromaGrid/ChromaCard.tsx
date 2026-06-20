"use client";

import type { CSSProperties, MouseEvent, ReactNode, HTMLAttributes } from "react";
import { handleChromaCardMove } from "./useChromaSpotlight";

type ChromaCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  borderColor?: string;
};

export default function ChromaCard({
  children,
  className = "",
  style,
  borderColor = "#ff541f",
  onClick,
  ...rest
}: ChromaCardProps) {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    handleChromaCardMove(e);
  };

  return (
    <div
      className={`chroma-card ${className}`}
      style={{
        ...style,
        ["--card-border" as string]: borderColor,
      }}
      onMouseMove={handleMove}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
}
