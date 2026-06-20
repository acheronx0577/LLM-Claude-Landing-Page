import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "LLM Claude — Terminal AI Coding Assistant",
  description:
    "Open-source CLI for AI-assisted coding with Read, Write, Bash, LSP tools, and ACP editor integration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-clip">
      <body className="overflow-x-clip">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
