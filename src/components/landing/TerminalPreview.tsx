"use client";

import type { ReactNode } from "react";

const VERSION = "0.0.1";
const TIPS = [
  "Use /help to see slash commands",
  "Write/Edit changes ask for review first",
  "Copy mcp.json.example → mcp.json for MCP tools",
];

const MASCOT_WIDTH = 14;

const MASCOT = [
  "  ／l、",
  "（ﾟ､ ｡ ７",
  "  l  ~ヽ",
  "  じしf_,)ノ",
].map((line) => line.padEnd(MASCOT_WIDTH));

const TRANSCRIPT = [
  {
    role: "you" as const,
    text: "trim agent history before each Groq call",
  },
  {
    role: "system" as const,
    text: "▸ Read app/agent.ts",
  },
  {
    role: "system" as const,
    text: "▸ Edit app/agent.ts · review (+12 / -4)",
  },
  {
    role: "system" as const,
    text: "Review changes? [y] accept  [r] review  [d] decline",
  },
  {
    role: "you" as const,
    text: "y",
  },
  {
    role: "assistant" as const,
    text: "Applied. Older turns drop after ~48k chars so Groq stays under limit.",
  },
];

type TranscriptEntry = (typeof TRANSCRIPT)[number];

function transcriptLabel(entry: TranscriptEntry): string {
  if (entry.role === "you") return "You";
  if (entry.role === "assistant") return "Assistant";
  return "System";
}

function transcriptLabelClass(entry: TranscriptEntry): string {
  return entry.role === "system"
    ? "text-[rgba(255,255,255,0.45)]"
    : "font-semibold text-[#ff541f]";
}

function transcriptTextClass(entry: TranscriptEntry): string {
  if (entry.role === "system") {
    return entry.text.startsWith("▸")
      ? "text-[#ffb089]"
      : "text-[rgba(255,255,255,0.62)]";
  }
  if (entry.role === "assistant") {
    return "text-[rgba(255,255,255,0.82)]";
  }
  return "text-[rgba(255,255,255,0.92)]";
}

function TranscriptLine({ entry }: { entry: TranscriptEntry }) {
  const label = transcriptLabel(entry);
  return (
    <Mono className="block">
      <span className={transcriptLabelClass(entry)}>{label}</span>
      <span className="text-[rgba(255,255,255,0.62)]">: </span>
      <span className={transcriptTextClass(entry)}>{entry.text}</span>
    </Mono>
  );
}

function Mono({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-sans text-[12.5px] leading-[20px] ${className}`}
    >
      {children}
    </span>
  );
}

function DashboardRow({
  left,
  right = "",
}: {
  left: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[44%_1px_1fr] gap-0">
      <div className="min-w-0 px-[10px] py-px">{left}</div>
      <div className="bg-[rgba(255,255,255,0.18)]" aria-hidden />
      <div className="min-w-0 px-[10px] py-px">{right}</div>
    </div>
  );
}

function HorizontalFill() {
  return (
    <span
      className="block min-w-0 flex-1 overflow-hidden whitespace-nowrap font-sans text-[12.5px] leading-[20px] text-white"
      aria-hidden
    >
      {"━".repeat(500)}
    </span>
  );
}

function BoxTitle({ title }: { title: string }) {
  return (
    <div className="flex w-full items-center px-[10px] py-[8px]">
      <Mono className="shrink-0 text-white">┏━ </Mono>
      <Mono className="shrink-0 font-semibold text-[#ff541f]">{title}</Mono>
      <Mono className="shrink-0 text-white">&nbsp;</Mono>
      <HorizontalFill />
      <Mono className="shrink-0 text-white">┓</Mono>
    </div>
  );
}

function BoxFooter() {
  return (
    <div className="flex w-full items-center px-[10px] py-[6px]">
      <Mono className="shrink-0 text-white">┗</Mono>
      <HorizontalFill />
      <Mono className="shrink-0 text-white">┛</Mono>
    </div>
  );
}

export default function TerminalPreview() {
  const title = `LLM Claude v${VERSION}`;

  return (
    <div
      aria-hidden
      className="relative mt-[8px] w-full max-w-[920px]"
    >
      <div className="rounded-[18px] border border-[rgba(255,84,31,0.35)] bg-linear-to-b from-[rgba(255,84,31,0.18)] to-[rgba(255,84,31,0.04)] p-px shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="overflow-hidden rounded-[17px] bg-[#050505] px-[14px] py-[14px]">
          <div className="overflow-hidden rounded-[8px] border border-[rgba(255,255,255,0.12)] bg-[#080808]">
            <BoxTitle title={title} />

            <div className="border-t border-[rgba(255,255,255,0.08)]">
              <DashboardRow
                left={
                  <Mono className="text-[rgba(255,255,255,0.92)]">
                    Welcome back{" "}
                    <span className="font-semibold text-[#a8d8ff]">coder</span>!
                  </Mono>
                }
                right={
                  <Mono className="font-semibold text-[#ff541f]">
                    Tips for getting started
                  </Mono>
                }
              />

              <DashboardRow
                left={
                  <div className="flex justify-center py-[2px]">
                    <div className="space-y-px">
                      {MASCOT.map((line, index) => (
                        <Mono key={index} className="block text-[#6ee7ff] whitespace-pre">
                          {line}
                        </Mono>
                      ))}
                    </div>
                  </div>
                }
                right={
                  <div className="space-y-[2px] py-[2px]">
                    {TIPS.map((tip) => (
                      <Mono
                        key={tip}
                        className="block text-[rgba(255,255,255,0.78)]"
                      >
                        {tip}
                      </Mono>
                    ))}
                  </div>
                }
              />

              <DashboardRow
                left={
                  <Mono className="font-semibold text-[#ff541f]">
                    Gpt Oss 120b
                  </Mono>
                }
              />

              <DashboardRow
                left={
                  <Mono className="text-[rgba(255,255,255,0.72)]">
                    Groq · local dev
                  </Mono>
                }
              />

              <DashboardRow
                left={
                  <Mono className="text-[rgba(255,255,255,0.45)]">
                    8 tools · MCP off
                  </Mono>
                }
              />

              <DashboardRow
                left={
                  <Mono className="text-[rgba(255,255,255,0.45)]">
                    D:\Code\LLM-Claude
                  </Mono>
                }
              />

              <BoxFooter />
            </div>
          </div>

          <div className="mt-[12px] space-y-[4px] px-[4px]">
            <Mono className="block text-[rgba(255,255,255,0.28)]">
              {"─".repeat(58)}
            </Mono>

            {TRANSCRIPT.map((entry) => (
              <TranscriptLine
                key={`${entry.role}-${entry.text}`}
                entry={entry}
              />
            ))}

            <div className="flex items-center gap-[6px] pt-[6px]">
              <Mono className="text-[rgba(255,255,255,0.92)]">&gt; </Mono>
              <span
                className="inline-block h-[16px] w-[8px] bg-[#ff541f] motion-reduce:hidden animate-pulse"
                aria-hidden
              />
            </div>

            <Mono className="block pt-[2px] text-[rgba(255,255,255,0.35)]">
              Ready · type /help or ask a coding question
            </Mono>
          </div>
        </div>
      </div>
    </div>
  );
}
