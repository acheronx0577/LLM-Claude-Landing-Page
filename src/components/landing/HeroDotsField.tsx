import { DOTS_TOP } from "@/components/landing/layout";
import { HERO_FLAT_DOTS, HERO_ROTATED_DOTS } from "@/components/landing/heroDotsData";
import {
  FLAT_DOT_PRESETS,
  FlatOrangeDot,
  ROTATED_DOT_PRESETS,
  RotatedOrangeDot,
} from "@/components/landing/OrangeDot";

export default function HeroDotsField() {
  return (
    <div
      className="pointer-events-none absolute left-[calc(50%+458.27px)] flex h-[1200.607px] w-[1410.535px] -translate-x-1/2 items-start justify-center"
      style={{ top: DOTS_TOP }}
      aria-hidden
    >
      <div className="flex-none rotate-[-9.69deg]">
        <div
          className="relative h-[1002.806px] w-[1259.655px] opacity-50"
          data-name="Dots"
        >
          <div className="absolute contents left-[-416.56px] top-[-144.57px]">
            {HERO_ROTATED_DOTS.map((dot) => (
              <RotatedOrangeDot
                key={`${dot.preset}-${dot.left}-${dot.top}-${dot.overlay ? "o" : "n"}`}
                left={dot.left}
                top={dot.top}
                preset={ROTATED_DOT_PRESETS[dot.preset]}
                overlay={dot.overlay}
              />
            ))}
            {HERO_FLAT_DOTS.map((dot) => (
              <FlatOrangeDot
                key={`${dot.preset}-${dot.left}-${dot.top}-${dot.overlay ? "o" : "n"}`}
                left={dot.left}
                top={dot.top}
                preset={FLAT_DOT_PRESETS[dot.preset]}
                overlay={dot.overlay}
              />
            ))}
            <div className="absolute left-[-416.56px] top-[238.37px] flex h-[520.891px] w-[181.521px] items-center justify-center">
              <div className="flex-none rotate-[-170.31deg]">
                <div className="relative h-[511.919px] w-[96.696px]" data-name="Vector">
                  <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 32 32"
                    aria-hidden
                  >
                    <g id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
