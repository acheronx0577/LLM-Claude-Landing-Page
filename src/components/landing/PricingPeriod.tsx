"use client";

import { useLenis } from "lenis/react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type BillingPeriod = "monthly" | "yearly";

const PricingPeriodContext = createContext<{
  period: BillingPeriod;
  setPeriod: (period: BillingPeriod) => void;
} | null>(null);

function usePricingPeriod() {
  const context = useContext(PricingPeriodContext);
  if (!context) {
    throw new Error("PlanPrice must be used within PricingPeriodProvider");
  }
  return context;
}

export function PricingPeriodProvider({ children }: { children: ReactNode }) {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <PricingPeriodContext.Provider value={{ period, setPeriod }}>
      {children}
    </PricingPeriodContext.Provider>
  );
}

export function PricingToggle() {
  const { period, setPeriod } = usePricingPeriod();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.resize();
  }, [period, lenis]);

  return (
    <div
      className="relative grid grid-cols-2 gap-0 rounded-[333px] bg-[rgba(255,255,255,0.1)] p-[10px] shrink-0"
      data-name="Toggle"
      role="group"
      aria-label="Billing period"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-[10px] bottom-[10px] left-[10px] w-[calc(50%-10px)] rounded-[20px] bg-[rgba(255,255,255,0.2)] transition-transform duration-300 ease-out motion-reduce:transition-none"
        style={{
          transform:
            period === "yearly" ? "translateX(calc(100% + 0px))" : "translateX(0)",
        }}
      />
      <button
        type="button"
        onClick={() => setPeriod("monthly")}
        aria-pressed={period === "monthly"}
        className={`relative z-10 rounded-[20px] px-[32px] py-[5px] font-sans text-[16px] leading-[24px] transition-colors duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff541f] ${
          period === "monthly" ? "text-white" : "text-[#919191]"
        }`}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => setPeriod("yearly")}
        aria-pressed={period === "yearly"}
        className={`relative z-10 rounded-[20px] px-[32px] py-[5px] font-sans text-[16px] leading-[24px] transition-colors duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff541f] ${
          period === "yearly" ? "text-white" : "text-[#919191]"
        }`}
      >
        Yearly
      </button>
    </div>
  );
}

export function PlanPrice({
  monthly,
  yearly,
}: {
  monthly: number;
  yearly?: number;
}) {
  const { period } = usePricingPeriod();
  const amount = period === "monthly" ? monthly : (yearly ?? Math.round(monthly * 0.8));

  return (
    <p className="leading-[normal] transition-opacity duration-300">{`$${amount}`}</p>
  );
}

export function PlanPeriodSuffix() {
  const { period } = usePricingPeriod();

  return (
    <p className="leading-[24px] transition-opacity duration-300">
      {period === "monthly" ? "/ month" : "/ month, billed yearly"}
    </p>
  );
}
