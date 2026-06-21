"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useMemo, type ReactNode } from "react";
import SiteMetricsHub from "@/components/landing/SiteMetricsHub";
import SiteMetricsHubOffline from "@/components/landing/SiteMetricsHubOffline";

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  const convex = useMemo(
    () => (convexUrl ? new ConvexReactClient(convexUrl) : null),
    [convexUrl],
  );

  if (!convex) {
    return (
      <>
        {children}
        <SiteMetricsHubOffline />
      </>
    );
  }

  return (
    <ConvexProvider client={convex}>
      {children}
      <SiteMetricsHub />
    </ConvexProvider>
  );
}
