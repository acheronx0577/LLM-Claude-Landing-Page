import FeatureLinkCard from "@/components/landing/FeatureLinkCard";
import { FEATURES_SECTION_TOP } from "@/components/landing/layout";
import svgPaths from "@/imports/AiLandingPage1/svg-3a59wk3hgj";

const GRADIENT_CARD =
  "linear-gradient(142.853deg, rgba(0, 0, 0, 0) 23.339%, rgba(255, 60, 0, 0.3) 96.361%), linear-gradient(90deg, rgba(39, 40, 41, 0.7) 0%, rgba(39, 40, 41, 0.7) 100%)";

export default function FeaturesSection() {
  return (
    <div
      id="services"
      className="absolute left-1/2 h-[674px] w-[1200px] -translate-x-1/2 overflow-visible"
      style={{ top: FEATURES_SECTION_TOP }}
      data-name="Features-Section"
    >
      <div
        className="absolute left-0 right-[520px] top-0 h-[280px] overflow-visible"
        data-name="Container"
      >
        <div className="absolute left-0 right-0 top-0 h-[211px]" data-name="Heading 2">
          <p className="[word-break:break-word] absolute left-0 top-0 w-[675.81px] font-sans text-[64px] leading-[70.4px] not-italic text-white">
            <span>{`Built for the terminal. Powered by `}</span>
            <span className="font-display font-semibold text-[#ff541f]">AI</span>
            <span>.</span>
          </p>
        </div>
        <div className="[word-break:break-word] absolute left-0 top-[230px] w-[661px] whitespace-pre-wrap font-sans text-[18px] leading-[21.6px] not-italic text-[rgba(255,255,255,0.85)]">
          <p className="mb-0">{`Agent loop with tool calling, LSP intelligence, and editor integration.`}</p>
          <p>Read, write, bash, and ship from one CLI.</p>
        </div>
      </div>
      <div
        className="absolute left-0 right-0 top-[320px] h-[668px] overflow-clip"
        data-name="Container"
      >
        <FeatureLinkCard
          className="absolute left-0 right-[732px] top-0 h-[199px] overflow-clip rounded-[20px]"
          style={{ backgroundImage: GRADIENT_CARD }}
          description="Inspect and modify project files with Read, Write, and Edit tools—complete with review prompts before changes land."
          title="Read & Write"
        />
        <FeatureLinkCard
          className="absolute left-[488px] right-0 top-0 h-[199px] overflow-clip rounded-[20px] border-[1.25px] border-solid border-[rgba(255,84,31,0.2)] bg-[rgba(39,40,41,0.7)]"
          description="Run shell commands in your repo with the Bash tool—ideal for tests, builds, git status, and quick diagnostics."
          descriptionClassName="absolute left-[18.75px] top-[17.75px] w-[448.03px]"
          title="Bash execution"
          titleClassName="absolute left-[18.75px] top-[122.95px]"
          arrowClassName="absolute flex items-center justify-center right-[8.39px] size-[70.715px] top-[12.17px]"
        />
        <FeatureLinkCard
          className="absolute left-0 right-[488px] top-[219px] h-[199px] overflow-clip rounded-[20px] border-[1.25px] border-solid border-[rgba(255,84,31,0.2)] bg-[rgba(39,40,41,0.7)]"
          description="Go to definitions, find references, and pull TypeScript diagnostics without leaving the terminal session."
          descriptionClassName="absolute left-[18.75px] top-[17.75px] w-[452.83px]"
          title="LSP intelligence"
          titleClassName="absolute left-[18.75px] top-[122.95px]"
          arrowClassName="absolute flex items-center justify-center right-[8.39px] size-[70.715px] top-[12.17px]"
        />
        <FeatureLinkCard
          className="absolute left-[732px] right-0 top-[219px] h-[199px] overflow-clip rounded-[20px]"
          style={{ backgroundImage: GRADIENT_CARD }}
          description="Speak ACP over stdio for Zed and other editors, or load MCP servers for extra tools in chat mode."
          descriptionClassName="absolute left-[20px] top-[19px] w-[327.36px]"
          title="ACP & MCP"
        />
      </div>
      <div
        className="absolute flex inset-[-2.37%_9.99%_70.16%_71.92%] items-center justify-center overflow-visible"
        style={{ containerType: "size" }}
      >
        <div className="flex-none h-[hypot(-104.949cqw,139.634cqh)] w-[hypot(139.634cqw,104.949cqh)] rotate-[36.93deg]">
          <div className="relative size-full" data-name="#05">
            <div className="absolute inset-[13.5%_11%_13.67%_11%]" data-name="Vector">
              <div className="absolute inset-[-0.54%_-0.51%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 122.167 114.156"
                  aria-hidden
                >
                  <path
                    d={svgPaths.p7b99100}
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.22657"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
