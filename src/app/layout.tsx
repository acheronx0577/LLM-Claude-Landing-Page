import type { Metadata } from "next";
import ConvexClientProvider from "@/components/ConvexClientProvider";
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
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#ff541f] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        <ConvexClientProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
