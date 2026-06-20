import svgPaths from "@/imports/AiLandingPage1/svg-3a59wk3hgj";
import ChromaCard from "@/components/ChromaGrid/ChromaCard";

function FeatureArrowIcon() {
  return (
    <div className="absolute flex items-center justify-center right-[9.64px] size-[70.715px] top-[13.42px]">
      <div className="-rotate-45 flex-none">
        <div className="relative h-[50px] w-[50.007px] overflow-clip rounded-[333px] bg-[#ff541f]" data-name="Background">
          <div className="absolute left-1/2 top-1/2 size-[23.999px] -translate-x-1/2 -translate-y-1/2" data-name="Image">
            <div className="absolute left-0 top-0 size-[23.999px] overflow-clip" data-name="image fill">
              <div className="absolute left-0 top-0 size-[24px]" data-name="image">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <g id="image">
                    <path
                      d={svgPaths.p24e37800}
                      stroke="var(--stroke-0, white)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-[13px_50px_13px_-23.99px]" data-name="SVG">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <g id="svg11695750082">
                <path
                  d={svgPaths.p24e37800}
                  stroke="var(--stroke-0, #FF541F)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

type FeatureLinkCardProps = {
  className: string;
  description: string;
  descriptionClassName?: string;
  title: string;
  titleClassName?: string;
  style?: React.CSSProperties;
  arrowClassName?: string;
  borderColor?: string;
};

export default function FeatureLinkCard({
  className,
  description,
  descriptionClassName = "absolute left-[20px] top-[19px] w-[354.42px]",
  title,
  titleClassName = "absolute left-[20px] top-[124.2px]",
  style,
  arrowClassName,
  borderColor = "#ff541f",
}: FeatureLinkCardProps) {
  return (
    <ChromaCard
      className={className}
      style={style}
      borderColor={borderColor}
      data-name="Link"
    >
      <div className="absolute inset-0 z-[2]">
      <p
        className={`[word-break:break-word] absolute font-sans text-[18px] leading-[19.2px] not-italic text-[rgba(217,217,217,0.85)] ${descriptionClassName}`}
      >
        {description}
      </p>
      {arrowClassName ? (
        <div className={arrowClassName}>
          <FeatureArrowIcon />
        </div>
      ) : (
        <FeatureArrowIcon />
      )}
      <p
        className={`[word-break:break-word] absolute font-sans text-[34px] leading-[40.8px] not-italic whitespace-nowrap text-white ${titleClassName}`}
      >
        {title}
      </p>
      </div>
    </ChromaCard>
  );
}
