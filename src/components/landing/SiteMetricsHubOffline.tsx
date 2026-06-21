"use client";

import { useCallback, useEffect, useState } from "react";
import {
  SiteMetricsHubPanel,
  type SystemStats,
} from "@/components/landing/SiteMetricsHubPanel";

const STATS_POLL_MS = 4_000;

export default function SiteMetricsHubOffline() {
  const [open, setOpen] = useState(false);
  const [serverStats, setServerStats] = useState<SystemStats | null>(null);

  const refreshServerStats = useCallback(async () => {
    try {
      const response = await fetch("/api/system-stats", { cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      if (data.ok === true) {
        setServerStats(data);
      }
    } catch {
      // Keep last known stats.
    }
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const tick = () => {
      void refreshServerStats();
    };

    const immediateId = window.setTimeout(tick, 0);
    const intervalId = window.setInterval(tick, STATS_POLL_MS);

    return () => {
      window.clearTimeout(immediateId);
      window.clearInterval(intervalId);
    };
  }, [open, refreshServerStats]);

  return (
    <SiteMetricsHubPanel
      open={open}
      onToggle={() => setOpen((value) => !value)}
      viewCount={null}
      backendLive={false}
      backendLoading={false}
      serverStats={serverStats}
    />
  );
}
