"use client";

import { useLenis } from "lenis/react";
import { useEffect, useId, useState } from "react";

const FAQ_ITEMS = [
  {
    question: "What is this platform used for?",
    answer:
      "It's an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use.",
  },
  {
    question: "What happens if I hit my free generation limit?",
    answer:
      "You'll be prompted to upgrade to a paid plan for higher limits. Your existing projects stay saved, and you can still browse, export previous work, and manage your account on the free tier.",
  },
  {
    question: "Do I need design experience to use it?",
    answer:
      "No. Describe what you want in plain language and the AI handles layout, styling, and variations. Designers can still fine-tune outputs when they want more control.",
  },
  {
    question: "Can I collaborate with my team?",
    answer:
      "Yes. Share projects with teammates, leave feedback on iterations, and keep brand assets in a shared workspace so everyone stays aligned.",
  },
  {
    question: "Is it really free to use?",
    answer:
      "You can start for free with a monthly generation allowance. Paid plans unlock higher limits, priority processing, and team features when you're ready to scale.",
  },
] as const;

function FaqArrow({ open }: { open: boolean }) {
  return (
    <div
      className={`relative size-[28.62px] shrink-0 transition-transform duration-300 ease-out ${
        open ? "rotate-180" : "rotate-0"
      }`}
      aria-hidden
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28.6202 28.6202"
      >
        <path
          d="M23.7516 10.6734L15.9765 18.4485C15.0583 19.3668 13.5557 19.3668 12.6375 18.4485L4.86234 10.6734"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeOpacity="0.6"
          strokeWidth="1.78876"
        />
      </svg>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const lenis = useLenis();
  const baseId = useId();

  useEffect(() => {
    lenis?.resize();
  }, [openIndex, lenis]);

  return (
    <div
      className="absolute content-stretch flex flex-col gap-[76px] items-center left-[274px] top-[3694px] w-[891.995px]"
      data-name="FAQ-Section"
    >
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[29px] items-center not-italic relative shrink-0 text-center w-[830px]">
        <div className="flex flex-col font-['Sk-Modernist:Bold',sans-serif] justify-center relative shrink-0 text-[64px] text-white w-[555.708px] whitespace-pre-wrap leading-[normal]">
          <p className="mb-0">{`Frequently Asked `}</p>
          <p>Questions</p>
        </div>
        <p className="font-['Sk-Modernist:Regular',sans-serif] text-[#d9d9d9] text-[20px] leading-[28.62px] max-w-[830px]">
          {`Got questions? We've got answers. Find everything you need to know about using our platform, plans, and features.`}
        </p>
      </div>

      <div
        className="content-stretch flex flex-col gap-[22.658px] items-start relative shrink-0 w-full"
        data-name="FAQ-Content"
        role="list"
      >
        {FAQ_ITEMS.map((item, index) => {
          const open = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;

          return (
            <div key={item.question} className="relative shrink-0 w-full" role="listitem">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 border-b border-solid border-[rgba(255,255,255,0.1)]"
              />
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                className="relative flex w-full cursor-pointer items-start justify-between rounded-sm p-[23.85px] text-left transition-colors duration-200 hover:bg-white/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff541f]"
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <div className="min-w-0 flex-1 pr-4">
                  <p className="font-['Sk-Modernist:Regular',sans-serif] text-[20px] text-white leading-[28.62px]">
                    {item.question}
                  </p>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!open}
                    className="grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none"
                    style={{
                      gridTemplateRows: open ? "1fr" : "0fr",
                      opacity: open ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-[23.85px] font-['Sk-Modernist:Regular',sans-serif] text-[18px] text-[#919191] leading-[23.85px] tracking-[-0.0596px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                <FaqArrow open={open} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
