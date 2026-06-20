import svgPaths from "@/imports/AiLandingPage1/svg-3a59wk3hgj";

export function PricingSeparator() {
  return (
    <div
      className="relative h-px w-full shrink-0 bg-linear-to-r from-[rgba(255,255,255,0)] via-1/2 via-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)]"
      data-name="Separator"
    />
  );
}

export function PricingGlowButton() {
  return (
    <div
      className="relative flex shrink-0 flex-col items-start rounded-[10px]"
      data-name="Button Glow"
    >
      <div
        className="relative flex shrink-0 items-center gap-[12px] rounded-[8px] bg-[rgba(0,0,0,0.5)] px-[20px] py-[10px] backdrop-blur-[10px]"
        data-name="Glow Button"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[8px] border border-solid border-white shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_10px_10px_0px_rgba(0,0,0,0.1)]"
        />
        <div className="relative flex shrink-0 flex-col justify-center font-sans text-[18px] leading-0 whitespace-nowrap text-white [word-break:break-word] not-italic">
          <p className="leading-[normal]">Subscribe</p>
        </div>
        <div className="relative size-[24px] shrink-0" data-name="Chevron Right">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              d="M8 20L16 12L8 4"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute inset-[-10px] rounded-[10px] bg-[#ff541f] opacity-20 mix-blend-screen blur-[10px]"
        data-name="Glow"
      />
      <div className="absolute inset-0 rounded-[8px] mix-blend-overlay" data-name="Outline">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[8px] border border-solid border-white"
        />
      </div>
    </div>
  );
}

function PricingTickIcon({ variant }: { variant: "white" | "orange" }) {
  if (variant === "white") {
    return (
      <div className="relative size-[24px] shrink-0" data-name="Tick Icon">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <g id="tick-circle">
            <path
              d={svgPaths.p2933eac0}
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.8"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p77ff900}
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.8"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative size-[24px] shrink-0" data-name="Tick Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <g id="tick-circle">
          <path
            d={svgPaths.p2933eac0}
            fill="var(--fill-0, #FF541F)"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path d={svgPaths.p77ff900} fill="var(--fill-0, #FF541F)" />
          <path
            d={svgPaths.p77ff900}
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

export function PricingFeatureRow({
  label,
  tickVariant,
}: {
  label: string;
  tickVariant: "white" | "orange";
}) {
  return (
    <div
      className="relative flex w-full shrink-0 items-start gap-[12px]"
      data-name="Feature item"
    >
      <PricingTickIcon variant={tickVariant} />
      <div className="relative flex min-w-px flex-[1_0_0] flex-col justify-center font-sans text-[16px] leading-0 text-[rgba(255,255,255,0.75)] [word-break:break-word] not-italic">
        <p className="leading-[24px]">{label}</p>
      </div>
    </div>
  );
}
