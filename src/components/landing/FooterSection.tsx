import ContactForm from "@/components/landing/ContactForm";
import type { CSSProperties } from "react";
import svgPaths from "@/imports/AiLandingPage1/svg-3a59wk3hgj";
import {
  DESIGN_WIDTH,
  FOOTER_BLOCK_HEIGHT,
} from "@/components/landing/layout";

const FOOTER_COLUMNS = [
  {
    id: "about",
    title: "LLM Claude",
    titleAccent: false,
    items: [
      "Open-source terminal agent for the CodeCrafters challenge—TypeScript, Bun, tool calling, LSP intelligence, ACP editor support, and optional MCP servers.",
    ],
  },
  {
    id: "project",
    title: "Project",
    titleAccent: true,
    items: ["GitHub repo", "Tools", "Run modes", "FAQ"],
  },
  {
    id: "source",
    title: "Source",
    titleAccent: true,
    items: [
      "github.com/acheronx0577/\nLLM-Claude",
      "TypeScript · Bun · ACP",
      "Open source",
    ],
  },
] as const;

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
          className="flex flex-col gap-[48px] px-[101px] py-[66px]"
          style={{
            width: DESIGN_WIDTH,
            height: FOOTER_BLOCK_HEIGHT,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
          }}
        >
          <div
            className="grid w-full grid-cols-[1fr_560px] items-start gap-x-[64px]"
            data-name="Footer-Main"
          >
            <div
              className="flex min-w-0 items-start gap-[40px]"
              data-name="Footer-Content"
            >
              {FOOTER_COLUMNS.map((column) => (
                <div
                  key={column.id}
                  className={`flex flex-col gap-[23px] ${column.id === "about" ? "w-[220px] shrink-0" : "whitespace-nowrap"}`}
                  data-name={`Content ${column.id}`}
                >
                  <p
                    className={`font-display text-[24px] font-semibold leading-[1.4] tracking-[-0.4772px] ${
                      column.titleAccent ? "text-[#ff541f]" : "text-[32px] tracking-[-0.9545px] text-white"
                    }`}
                  >
                    {column.title}
                  </p>
                  <div className="flex flex-col gap-[15px] font-sans text-[18px] leading-normal text-[#bcbcbc]">
                    {column.items.map((item) => (
                      <p key={item} className="[word-break:break-word] whitespace-pre-line">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <ContactForm />
          </div>

          <div className="relative h-px w-full">
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

          <div className="flex items-center justify-between">
            <p className="font-sans text-[18px] leading-normal text-white">
              © 2026 LLM Claude. Open source.
            </p>
            <div className="flex gap-[8px]">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
