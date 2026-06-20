"use client";

import ScrollCta from "@/components/landing/ScrollCta";
import { SECTION_CTA_TOP } from "@/components/landing/layout";
import imgImage18 from "@/imports/AiLandingPage1/e405ec2b7332198a2fbf9efe2ec7d8d13de44505.png";
import { imgImage19 } from "@/imports/AiLandingPage1/svg-e5rgk";

const CTA_GRADIENT =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1120 850' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.4000000059604645'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(56 0 0 51 560 278.8)'><stop stop-color='rgba(255,255,255,1)' offset='0.073497'/><stop stop-color='rgba(255,212,199,0.95)' offset='0.11569'/><stop stop-color='rgba(255,170,143,0.9)' offset='0.15789'/><stop stop-color='rgba(255,127,87,0.85)' offset='0.20008'/><stop stop-color='rgba(255,105,59,0.825)' offset='0.22118'/><stop stop-color='rgba(255,84,31,0.8)' offset='0.24228'/><stop stop-color='rgba(253,107,61,0.85)' offset='0.27171'/><stop stop-color='rgba(251,130,92,0.9)' offset='0.30114'/><stop stop-color='rgba(249,152,122,0.95)' offset='0.33057'/><stop stop-color='rgba(247,175,153,1)' offset='0.36'/><stop stop-color='rgba(249,152,122,1)' offset='0.39497'/><stop stop-color='rgba(251,130,92,1)' offset='0.42994'/><stop stop-color='rgba(253,107,61,1)' offset='0.46491'/><stop stop-color='rgba(255,84,31,1)' offset='0.49988'/><stop stop-color='rgba(191,63,23,0.75)' offset='0.62491'/><stop stop-color='rgba(128,42,16,0.5)' offset='0.74994'/><stop stop-color='rgba(64,21,8,0.25)' offset='0.87497'/><stop stop-color='rgba(0,0,0,0)' offset='1'/></radialGradient></defs></svg>\")";

export default function CtaSection() {
  return (
    <section
      className="-translate-x-1/2 absolute left-1/2 w-[1120px]"
      style={{ top: SECTION_CTA_TOP }}
      data-name="CTA-Section"
      aria-labelledby="cta-heading"
    >
      <div className="relative h-[375px] overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.04)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[30px]">
          <div
            className="absolute left-0 top-[-410px] h-[850px] w-full rounded-[10px]"
            style={{ backgroundImage: CTA_GRADIENT }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-size-[39.5px_39.5px] bg-top-left opacity-23"
            style={{
              backgroundImage: `url("${imgImage18}")`,
              maskImage: `url("${imgImage19}")`,
              WebkitMaskImage: `url("${imgImage19}")`,
            }}
            aria-hidden
          />
        </div>

        <div className="relative flex h-full flex-col items-center justify-center gap-[35px] px-[56px] py-[48px]">
          <h2
            id="cta-heading"
            className="max-w-[789px] text-center font-['Sk-Modernist:Bold',sans-serif] text-[64px] leading-[normal] text-white"
          >
            Ready to run it locally?
          </h2>
          <p className="max-w-[618px] text-center font-['Sk-Modernist:Regular',sans-serif] text-[20px] leading-[22.4px] text-[rgba(255,255,255,0.88)]">
            Clone the repo, add your API key, and start chatting in the
            terminal, or wire it into your editor over ACP.
          </p>
          <ScrollCta target="home" variant="primary-with-arrow">
            Clone the repo
          </ScrollCta>
        </div>
      </div>
    </section>
  );
}
