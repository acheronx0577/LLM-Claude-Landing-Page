import type { CSSProperties } from "react";
import svgPaths from "@/imports/AiLandingPage1/svg-3a59wk3hgj";
import {
  DESIGN_WIDTH,
  FOOTER_BLOCK_HEIGHT,
} from "@/components/landing/layout";

export default function FooterSection({
  scale,
  style,
}: {
  scale: number;
  style?: CSSProperties;
}) {
  return (
    <footer
      id="contact"
      className="w-full bg-[rgba(255,255,255,0.06)]"
      style={style}
      data-name="Footer"
    >
      <div
        className="mx-auto overflow-hidden"
        style={{
          width: DESIGN_WIDTH * scale,
          height: FOOTER_BLOCK_HEIGHT * scale,
        }}
      >
        <div
          className="flex flex-col items-start px-[101px] py-[66px]"
          style={{
            width: DESIGN_WIDTH,
            height: FOOTER_BLOCK_HEIGHT,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
          }}
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-0 place-items-start relative shrink-0"
            data-name="Footer-Content"
          >
            <div className="[word-break:break-word] col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 not-italic place-items-start relative row-1">
              <div
                className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
                data-name="Content 1"
              >
                <p className="col-1 font-display font-semibold leading-[1.3] ml-0 mt-0 relative row-1 text-[32px] text-white tracking-[-0.9545px] whitespace-nowrap">
                  LLM Claude
                </p>
                <p className="col-1 font-sans leading-normal ml-0 mt-[63px] relative row-1 text-[#bcbcbc] text-[18px] w-[307.341px]">
                  Open-source terminal agent for the CodeCrafters
                  challenge—TypeScript, Bun, tool calling, LSP intelligence, ACP
                  editor support, and optional MCP servers.
                </p>
              </div>
              <div
                className="col-1 content-stretch flex flex-col gap-[22.907px] items-start ml-[450.51px] mt-0 relative row-1 whitespace-nowrap"
                data-name="Content 2"
              >
                <div className="flex flex-col font-display font-semibold justify-center relative shrink-0 text-[#ff541f] text-[24px] tracking-[-0.4772px]">
                  <p className="leading-[1.4]">Project</p>
                </div>
                <div
                  className="content-stretch flex flex-col font-sans gap-[15.272px] items-start relative shrink-0 text-[#bcbcbc] text-[18px]"
                  data-name="List"
                >
                  <p className="leading-normal">GitHub repo</p>
                  <p className="leading-normal">Tools</p>
                  <p className="leading-normal">Run modes</p>
                  <p className="leading-normal">FAQ</p>
                </div>
              </div>
              <div
                className="col-1 content-stretch flex flex-col gap-[22.907px] items-start ml-[730.17px] mt-0 relative row-1 whitespace-nowrap"
                data-name="Content 4"
              >
                <div className="flex flex-col font-display font-semibold justify-center relative shrink-0 text-[#ff541f] text-[24px] tracking-[-0.4772px]">
                  <p className="leading-[1.4]">Docs</p>
                </div>
                <div
                  className="content-stretch flex flex-col font-sans gap-[15.272px] items-start relative shrink-0 text-[#bcbcbc] text-[18px]"
                  data-name="List"
                >
                  <p className="leading-normal">Local setup</p>
                  <p className="leading-normal">Environment vars</p>
                  <p className="leading-normal">CodeCrafters submit</p>
                  <p className="leading-normal">MCP config</p>
                </div>
              </div>
              <div
                className="col-1 content-stretch flex flex-col gap-[22.907px] items-start ml-[1041.33px] mt-0 relative row-1 whitespace-nowrap"
                data-name="Content 3"
              >
                <div className="flex flex-col font-display font-semibold justify-center relative shrink-0 text-[#ff541f] text-[24px] tracking-[-0.4772px]">
                  <p className="leading-[1.4]">Source</p>
                </div>
                <div
                  className="content-stretch flex flex-col font-sans gap-[22.907px] items-start relative shrink-0 text-[#bcbcbc] text-[18px]"
                  data-name="List"
                >
                  <p className="leading-normal">
                    github.com/acheronx0577/
                    <br aria-hidden />
                    LLM-Claude
                  </p>
                  <p className="leading-normal">TypeScript · Bun · ACP</p>
                  <p className="leading-normal">Open source</p>
                </div>
              </div>
            </div>
            <div className="col-1 h-0 ml-0 mt-[265.34px] relative row-1 w-[1237px]">
              <div className="absolute inset-[-1.91px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1237 1.90895"
                  aria-hidden
                >
                  <line
                    opacity="0.3"
                    stroke="#FF541F"
                    strokeWidth="1.90895"
                    x2="1237"
                    y1="0.954475"
                    y2="0.954475"
                  />
                </svg>
              </div>
            </div>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[303.52px] place-items-start relative row-1">
              <div className="col-1 content-stretch flex gap-[7.636px] items-start ml-[1091.92px] mt-0 relative row-1">
                {[
                  { id: "facebook", path: svgPaths.p3d3dbb80 },
                  { id: "github", path: svgPaths.p3cf6c900 },
                  { id: "twitter", path: svgPaths.pa657980 },
                  { id: "google", path: svgPaths.p2949e700 },
                ].map((icon) => (
                  <div
                    key={icon.id}
                    className="relative size-[30.543px] shrink-0 rounded-[95.448px]"
                  >
                    <div className="relative size-full overflow-clip rounded-[inherit]">
                      <div className="absolute inset-[18.75%_20.31%_20.31%_18.75%]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 18.6123 18.6123"
                          aria-hidden
                        >
                          <path
                            d={svgPaths.p3acb3500}
                            fill="#FF541F"
                            opacity="0"
                          />
                          <path d={icon.path} fill="#FF541F" />
                        </svg>
                      </div>
                    </div>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-[95.448px] border border-solid border-[#ff541f]"
                    />
                  </div>
                ))}
              </div>
              <p className="[word-break:break-word] col-1 font-sans leading-normal ml-0 mt-[3.8px] not-italic relative row-1 text-[18px] text-white whitespace-nowrap">
                © 2026 LLM Claude. Open source.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
