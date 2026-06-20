"use client";

import Galaxy from "@/components/landing/Galaxy";
import {
  HERO_STATS_FADE_HEIGHT,
  HERO_STATS_TOP,
} from "@/components/landing/layout";

function scaled(scale: number, value: number) {
  return value * scale;
}

export default function HeroGalaxyBackground({ scale }: { scale: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 overflow-hidden"
      style={{ height: scaled(scale, HERO_STATS_TOP) }}
      aria-hidden
    >
      <div className="absolute inset-0 left-1/2 w-screen -translate-x-1/2 opacity-80">
        <Galaxy
          transparent
          mouseInteraction
          mouseRepulsion
          repulsionStrength={0.95}
          density={1.6}
          glowIntensity={0.28}
          saturation={0.62}
          hueShift={16}
          huePull={0.72}
          hueSpread={46}
          twinkleIntensity={0.3}
          rotationSpeed={0.06}
          starSpeed={0.4}
          maxRenderPixels={1_920_000}
          pauseOffscreen
        />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 left-1/2 w-screen -translate-x-1/2"
        style={{
          height: scaled(scale, HERO_STATS_FADE_HEIGHT),
          backgroundImage:
            "linear-gradient(to bottom, rgba(1, 1, 1, 0) 5.582%, rgb(1, 1, 1) 50%)",
        }}
      />
    </div>
  );
}
