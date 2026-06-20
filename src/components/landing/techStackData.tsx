import type { ReactNode } from "react";

export type TechStackItem = {
  id: string;
  name: string;
  icon: ReactNode;
};

function IconShell({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)]">
      {children}
    </span>
  );
}

export const TECH_STACK_ITEMS: TechStackItem[] = [
  {
    id: "typescript",
    name: "TypeScript",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <rect fill="#3178C6" height="24" rx="4" width="24" />
          <path
            d="M12.5 17.5V19.5H7V16.5H9.5V11H7V8.5H12.5V17.5ZM17 8.5H14.5V19.5H17V8.5Z"
            fill="white"
          />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "react",
    name: "React",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <circle cx="12" cy="12" fill="none" r="2.2" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" fill="none" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" />
          <ellipse
            cx="12"
            cy="12"
            fill="none"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            fill="none"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.2"
            transform="rotate(120 12 12)"
          />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <circle cx="12" cy="12" fill="white" r="10" />
          <path d="M8 7.5h8v1.8l-4.8 7.2H16V18H8v-1.8l4.8-7.2H8V7.5Z" fill="black" />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "bun",
    name: "Bun",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <rect fill="#FBF0DF" height="24" rx="6" width="24" />
          <path
            d="M7 14c1.2-3 2.8-4.5 5-4.5s3.8 1.5 5 4.5"
            fill="none"
            stroke="#3B2F2F"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <circle cx="9" cy="10" fill="#3B2F2F" r="1" />
          <circle cx="15" cy="10" fill="#3B2F2F" r="1" />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "node",
    name: "Node.js",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path
            d="M12 2 20 6.5v11L12 22 4 17.5v-11L12 2Z"
            fill="none"
            stroke="#68A063"
            strokeWidth="1.5"
          />
          <path d="M12 7v10M9 9.5h6" stroke="#68A063" strokeLinecap="round" strokeWidth="1.3" />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "groq",
    name: "Groq",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path
            d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z"
            fill="none"
            stroke="#F55036"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "mcp",
    name: "MCP",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path
            d="M8 8h8v8H8V8Zm2 2v4h4v-4h-4Z"
            fill="none"
            stroke="#ff541f"
            strokeWidth="1.5"
          />
          <path d="M4 12h2M18 12h2M12 4v2M12 18v2" stroke="#ff541f" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "acp",
    name: "ACP",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path
            d="M6 7h12v10H6V7Zm2 2v6h8V9H8Z"
            fill="none"
            stroke="#ff7044"
            strokeWidth="1.5"
          />
          <path d="M10 12h4" stroke="#ff7044" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "zed",
    name: "Zed",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path d="M7 7h10v2H7V7Zm0 4h7v2H7v-2Zm0 4h10v2H7v-2Z" fill="#84CC16" />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "git",
    name: "Git",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path
            d="M7 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm10 14a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 19.5l10-10"
            fill="none"
            stroke="#F05032"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "bash",
    name: "Bash",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path
            d="M4 8.5 10 14l-2.5 2M14 16h6"
            fill="none"
            stroke="#4EAA25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      </IconShell>
    ),
  },
  {
    id: "lsp",
    name: "LSP",
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path
            d="M8 6h8v12H8V6Zm2 2v2h4V8h-4Zm0 4v2h4v-2h-4Z"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.4"
          />
        </svg>
      </IconShell>
    ),
  },
];
