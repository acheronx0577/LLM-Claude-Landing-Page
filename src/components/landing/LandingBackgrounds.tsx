/* eslint-disable @next/next/no-img-element -- full-bleed decorative backgrounds */
import {
  DESIGN_CANVAS_HEIGHT,
  FAQ_ELLIPSE_HEIGHT,
  FAQ_ELLIPSE_TOP,
  FAQ_GLOW_PRIMARY_HEIGHT,
  FAQ_GLOW_PRIMARY_TOP,
  FAQ_GLOW_SECONDARY_HEIGHT,
  FAQ_GLOW_SECONDARY_TOP,
  PRICING_BG_HEIGHT,
  PRICING_BG_TOP,
  PRICING_BG_WIDTH,
  PRICING_FADE_HEIGHT,
  PRICING_FADE_TOP,
  SECTION_CTA_TOP,
} from "@/components/landing/layout";
import imgEllipse854 from "@/imports/AiLandingPage1/9382e141d5529dd9db9db242f01dd2133f738bec.png";
import imgImage85 from "@/imports/AiLandingPage1/af720a97be322b14c921af44c089732d20919580.png";

function scaled(scale: number, value: number) {
  return value * scale;
}

/** Fade diagonal FAQ glows out before the CTA band (design canvas y). */
function diagonalGlowMask(top: number, height: number, fadeEnd = SECTION_CTA_TOP - 40) {
  const fadeStart = fadeEnd - 360;
  const startPct = Math.max(0, Math.min(100, ((fadeStart - top) / height) * 100));
  const endPct = Math.max(0, Math.min(100, ((fadeEnd - top) / height) * 100));

  if (endPct <= 0) {
    return undefined;
  }

  if (startPct >= endPct) {
    return "linear-gradient(to bottom, transparent 0%, transparent 100%)";
  }

  return `linear-gradient(to bottom, black 0%, black ${startPct}%, transparent ${endPct}%)`;
}

function DiagonalGlow({
  top,
  height,
  scale,
  gradientId,
  x2,
}: {
  top: number;
  height: number;
  scale: number;
  gradientId: string;
  x2: number;
}) {
  const maskImage = diagonalGlowMask(top, height);

  return (
    <div
      className="absolute left-1/2 flex w-screen -translate-x-1/2 items-center justify-center overflow-hidden"
      style={{
        top: scaled(scale, top),
        height: scaled(scale, height),
        maskImage,
        WebkitMaskImage: maskImage,
      }}
    >
      <div className="w-[140%] max-w-none rotate-42">
        <svg
          className="block w-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox={`0 0 ${x2} 46.0352`}
          aria-hidden
        >
          <line
            stroke={`url(#${gradientId})`}
            strokeWidth="46.0352"
            x2={x2}
            y1="23.0176"
            y2="23.0176"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id={gradientId}
              x1={x2 * 0.5}
              x2={x2 * 0.15}
              y1="46.0345"
              y2="-62.7093"
            >
              <stop stopColor="white" stopOpacity="0.06" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function LandingBackgrounds({ scale }: { scale: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 overflow-hidden"
      style={{ height: scaled(scale, DESIGN_CANVAS_HEIGHT) }}
      aria-hidden
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
        style={{
          top: scaled(scale, PRICING_BG_TOP),
          height: scaled(scale, PRICING_BG_HEIGHT),
          width: scaled(scale, PRICING_BG_WIDTH),
        }}
      >
        <div
          className="-scale-y-100 size-full opacity-60"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <img
            alt=""
            className="size-full object-cover object-center"
            src={imgImage85}
          />
        </div>
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: scaled(scale, PRICING_FADE_TOP),
          height: scaled(scale, PRICING_FADE_HEIGHT),
          width: scaled(scale, PRICING_BG_WIDTH),
          backgroundImage:
            "linear-gradient(-0.150382deg, rgb(1, 1, 1) 4.5104%, rgba(1, 1, 1, 0) 57.638%)",
        }}
      />

      <DiagonalGlow
        top={FAQ_GLOW_PRIMARY_TOP}
        height={FAQ_GLOW_PRIMARY_HEIGHT}
        scale={scale}
        gradientId="landing-faq-glow-primary"
        x2={1995.57}
      />

      <DiagonalGlow
        top={FAQ_GLOW_SECONDARY_TOP}
        height={FAQ_GLOW_SECONDARY_HEIGHT}
        scale={scale}
        gradientId="landing-faq-glow-secondary"
        x2={1915.28}
      />

      <div
        className="absolute left-1/2 w-screen -translate-x-1/2"
        style={{
          top: scaled(scale, FAQ_ELLIPSE_TOP),
          height: scaled(scale, FAQ_ELLIPSE_HEIGHT),
        }}
      >
        <div className="relative mx-auto size-full max-w-[940px]">
          <div className="absolute inset-[-40.69%_-42.55%]">
            <img
              alt=""
              className="block size-full max-w-none"
              height={1783}
              src={imgEllipse854}
              width={1740}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
