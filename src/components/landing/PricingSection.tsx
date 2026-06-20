import PricingTierCard from "@/components/landing/pricing/PricingTierCard";
import ChromaSpotlight from "@/components/ChromaGrid/ChromaSpotlight";
import {
  PricingPeriodProvider,
  PricingToggle,
} from "@/components/landing/PricingPeriod";
import { SECTION_PRICING_TOP } from "@/components/landing/layout";

const FREE_FEATURES = [
  "20 design generations/month",
  "Low-res downloads",
  "Basic style presets",
  "Limited customization options",
] as const;

const PRO_FEATURES = [
  "Everything in Free",
  "Enigma AI",
  "Unlimited design generations",
  "Custom Themes",
  "High-resolution exports",
  "Custom Extensions",
  "Developer Tools",
] as const;

const TEAM_FEATURES = [
  "Everything in Free",
  "Unlimited Shared Commands",
  "Unlimited Shared Quicklinks",
  "Priority support",
] as const;

export default function PricingSection() {
  return (
    <div
      id="pricing"
      className="absolute left-[120px] flex w-[1199.34px] flex-col content-stretch items-center gap-[45px]"
      style={{ top: SECTION_PRICING_TOP }}
      data-name="Pricing-Section"
    >
      <div className="relative flex w-[780px] shrink-0 flex-col content-stretch items-center gap-[20px] text-center leading-0 [word-break:break-word] not-italic">
        <div className="relative flex w-[600px] shrink-0 flex-col justify-center font-display font-semibold text-white">
          <p className="font-display font-semibold text-[64px]">
            <span className="leading-[normal]">{`Choose the Plan That’s Right `}</span>
            <span className="leading-[normal]">for You</span>
          </p>
        </div>
        <div className="relative flex w-min min-w-full shrink-0 flex-col justify-center font-sans text-[20px] text-[#d9d9d9]">
          <p className="leading-[24px]">
            Giving you access to essential features and over 1,000 creative tools.
            Upgrade to the Pro Plan to unlock powerful AI capabilities, cloud
            syncing, and a whole new level of creative freedom.
          </p>
        </div>
      </div>
      <PricingPeriodProvider>
        <div className="relative flex w-full shrink-0 flex-col content-stretch items-center gap-[25px]">
          <PricingToggle />
          <ChromaSpotlight className="relative flex w-full shrink-0 items-center" radius={380}>
            <PricingTierCard
              name="Free"
              borderColor="rgba(255,255,255,0.35)"
              borderClassName="rounded-bl-[20px] rounded-tl-[20px]"
              borderOverlayClassName="border border-[rgba(255,255,255,0.1)] rounded-bl-[20px] rounded-tl-[20px]"
              descriptionLine1="Everything you need to supercharge your"
              descriptionLine2="productivity."
              monthly={0}
              yearly={0}
              features={[...FREE_FEATURES]}
              tickVariant="white"
            />
            <PricingTierCard
              name="Pro"
              borderColor="#ff7044"
              nameClassName="font-display font-semibold text-[30px] text-[#ff541f]"
              borderClassName="rounded-[20px]"
              borderOverlayClassName="border-3 border-[#ff7044] rounded-[20px]"
              descriptionLine1="Unlock a new level of your personal"
              descriptionLine2="productivity."
              monthly={17}
              yearly={14}
              showDiscount
              periodSuffixClassName="font-sans text-[16px] font-normal text-[rgba(255,255,255,0.75)]"
              features={[...PRO_FEATURES]}
              tickVariant="orange"
            />
            <PricingTierCard
              name="Team"
              borderColor="rgba(255,255,255,0.35)"
              borderClassName="rounded-br-[20px] rounded-tr-[20px]"
              borderOverlayClassName="border border-[rgba(255,255,255,0.1)] rounded-br-[20px] rounded-tr-[20px]"
              descriptionLine1="Everything you need to supercharge your"
              descriptionLine2="productivity."
              monthly={37}
              yearly={30}
              showDiscount
              features={[...TEAM_FEATURES]}
              tickVariant="white"
            />
          </ChromaSpotlight>
        </div>
      </PricingPeriodProvider>
    </div>
  );
}
