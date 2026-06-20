import {
  HERO_STATS_TOP,
  landingContentColumnCenter,
  landingContentColumnDivider,
} from "@/components/landing/layout";

const STATS = [
  { label: "Tools", value: "8+" },
  { label: "Protocols", value: "ACP" },
  { label: "Run modes", value: "3" },
] as const;

function StatColumn({
  label,
  value,
  centerX,
}: {
  label: string;
  value: string;
  centerX: number;
}) {
  return (
    <div className="absolute top-[59px] text-center leading-normal">
      <p
        className="-translate-x-1/2 absolute font-sans text-[#ff541f] text-[23px] top-px whitespace-nowrap"
        style={{ left: centerX }}
      >
        {label}
      </p>
      <p
        className="-translate-x-1/2 absolute font-display font-semibold text-[46px] text-white top-[42px] whitespace-nowrap"
        style={{ left: centerX }}
      >
        {value}
      </p>
    </div>
  );
}

export default function HeroStatsBar() {
  const dividerLeft = landingContentColumnDivider(0);
  const dividerRight = landingContentColumnDivider(1);

  return (
    <div
      className="-translate-x-1/2 absolute border border-[rgba(255,255,255,0.1)] border-solid h-[214px] left-1/2 overflow-clip w-[1440px]"
      style={{ top: HERO_STATS_TOP }}
      data-name="Stats"
    >
      {STATS.map((stat, index) => (
        <StatColumn
          key={stat.label}
          label={stat.label}
          value={stat.value}
          centerX={landingContentColumnCenter(index as 0 | 1 | 2)}
        />
      ))}

      {[dividerLeft, dividerRight].map((left) => (
        <div
          key={left}
          className="-translate-y-1/2 absolute flex h-[134px] items-center justify-center top-1/2 w-0"
          style={{ left }}
        >
          <div className="-rotate-90 flex-none">
            <div className="h-0 relative w-[134px]">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 134 2"
                  aria-hidden
                >
                  <line
                    stroke="white"
                    strokeOpacity="0.1"
                    strokeWidth="2"
                    x2="134"
                    y1="1"
                    y2="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
