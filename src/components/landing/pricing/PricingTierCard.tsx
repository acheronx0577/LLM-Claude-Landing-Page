import {
  PlanPeriodSuffix,
  PlanPrice,
} from "@/components/landing/PricingPeriod";
import {
  PricingFeatureRow,
  PricingGlowButton,
  PricingSeparator,
} from "@/components/landing/pricing/PricingUi";

type PricingTierCardProps = {
  name: string;
  nameClassName?: string;
  borderClassName: string;
  borderOverlayClassName: string;
  descriptionLine1: string;
  descriptionLine2: string;
  monthly: number;
  yearly: number;
  showDiscount?: boolean;
  periodSuffixClassName?: string;
  features: string[];
  tickVariant: "white" | "orange";
};

export default function PricingTierCard({
  name,
  nameClassName = "font-sans text-[18px] text-white",
  borderClassName,
  borderOverlayClassName,
  descriptionLine1,
  descriptionLine2,
  monthly,
  yearly,
  showDiscount = false,
  periodSuffixClassName = "font-sans text-[16px] text-[rgba(255,255,255,0.75)]",
  features,
  tickVariant,
}: PricingTierCardProps) {
  return (
    <div
      className={`relative flex w-[399.78px] shrink-0 flex-col items-center gap-[35px] bg-[#1b1b1c] px-[30px] py-[20px] ${borderClassName}`}
      data-name="Main container"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 border-solid ${borderOverlayClassName}`}
      />
      <div className="relative w-full shrink-0" data-name="Header container">
        <div
          className={`relative flex size-full flex-col items-start gap-[24px] px-[32px] leading-0 [word-break:break-word] ${name === "Pro" ? "" : "not-italic whitespace-nowrap"}`}
        >
          <div className={`relative flex shrink-0 flex-col justify-center ${nameClassName}`}>
            <p className="leading-[normal]">{name}</p>
          </div>
          <div className="relative flex shrink-0 flex-col justify-center font-sans text-[16px] leading-0 text-[rgba(255,255,255,0.75)] [word-break:break-word] not-italic whitespace-nowrap">
            <p className="mb-0 leading-[24px]">{descriptionLine1}</p>
            <p className="leading-[24px]">{descriptionLine2}</p>
          </div>
          <div className="relative flex shrink-0 items-center gap-[8px]" data-name="Price container">
            <div className="relative flex shrink-0 flex-col justify-center font-display font-semibold text-[40px] leading-0 tracking-[-1.6px] text-white [word-break:break-word] not-italic">
              <PlanPrice monthly={monthly} yearly={yearly} />
            </div>
            <div
              className={`relative flex shrink-0 flex-col justify-center leading-0 [word-break:break-word] not-italic ${periodSuffixClassName}`}
            >
              <PlanPeriodSuffix />
            </div>
            {showDiscount ? (
              <div
                className="relative flex shrink-0 items-center justify-center rounded-[24px] bg-[#ff541f] px-[8px] py-[5px]"
                data-name="span"
              >
                <div className="relative flex h-[14px] w-[31.277px] shrink-0 flex-col justify-center font-display font-semibold text-[12px] leading-0 text-white [word-break:break-word] not-italic">
                  <p className="leading-[14px]">-20%</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <PricingSeparator />
      <div className="relative w-full shrink-0" data-name="Included features container">
        <div className="relative flex size-full flex-col items-start gap-[15px] px-[32px]">
          <div className="relative flex w-full shrink-0 flex-col justify-center font-sans text-[16px] leading-0 text-[rgba(255,255,255,0.75)] [word-break:break-word] not-italic">
            <p className="leading-[24px]">What’s included</p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[14px]"
            data-name="Features list"
          >
            {features.map((feature) => (
              <PricingFeatureRow
                key={feature}
                label={feature}
                tickVariant={tickVariant}
              />
            ))}
          </div>
        </div>
      </div>
      <PricingGlowButton />
    </div>
  );
}
