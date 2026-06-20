"use client";

import { useEffect, useState } from "react";
import FooterSection from "@/components/landing/FooterSection";
import LandingEdgeDecorations from "@/components/landing/LandingEdgeDecorations";
import HeroGalaxyBackground from "@/components/landing/HeroGalaxyBackground";
import LandingBackgrounds from "@/components/landing/LandingBackgrounds";
import LandingNav from "@/components/landing/LandingNav";
import {
  DESIGN_CANVAS_HEIGHT,
  DESIGN_PAGE_HEIGHT,
  DESIGN_WIDTH,
  NAV_BAND_HEIGHT,
  NAV_SCRIM_HEIGHT,
} from "@/components/landing/layout";
import AiLandingPage from "@/imports/AiLandingPage1/index";

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      setScale(Math.min(window.innerWidth / DESIGN_WIDTH, 1));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scaledFooterHeight = (DESIGN_PAGE_HEIGHT - DESIGN_CANVAS_HEIGHT) * scale;
  const navBandHeight = NAV_BAND_HEIGHT * scale;
  const navScrimHeight = NAV_SCRIM_HEIGHT * scale;

  return (
    <div className="w-full overflow-x-clip bg-[#010101]">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: DESIGN_PAGE_HEIGHT * scale }}
      >
        <LandingBackgrounds scale={scale} />
        <HeroGalaxyBackground scale={scale} />
        <LandingEdgeDecorations scale={scale} />

        <div
          className="pointer-events-none fixed inset-x-0 top-0 z-20"
          style={{ height: navScrimHeight }}
        >
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 left-1/2 w-screen -translate-x-1/2"
            style={{
              height: navScrimHeight,
              backgroundImage:
                "linear-gradient(to bottom, rgba(1, 1, 1, 0.88) 0%, rgba(1, 1, 1, 0.52) 42%, rgba(1, 1, 1, 0.18) 72%, rgba(1, 1, 1, 0) 100%)",
            }}
          />
          <div
            className="pointer-events-auto absolute inset-x-0 top-0 mx-auto overflow-visible"
            style={{ width: DESIGN_WIDTH * scale, height: navBandHeight }}
          >
            <div
              style={{
                width: DESIGN_WIDTH,
                height: NAV_BAND_HEIGHT,
                transformOrigin: "top left",
                transform: `scale(${scale})`,
              }}
            >
              <LandingNav />
            </div>
          </div>
        </div>

        <div
          className="relative z-1 mx-auto overflow-hidden bg-transparent"
          style={{
            width: DESIGN_WIDTH * scale,
            height: DESIGN_CANVAS_HEIGHT * scale,
          }}
        >
          <div
            style={{
              width: DESIGN_WIDTH,
              height: DESIGN_CANVAS_HEIGHT,
              transformOrigin: "top left",
              transform: `scale(${scale})`,
            }}
          >
            <AiLandingPage />
          </div>
        </div>

        <FooterSection scale={scale} style={{ minHeight: scaledFooterHeight }} />
      </div>
    </div>
  );
}
