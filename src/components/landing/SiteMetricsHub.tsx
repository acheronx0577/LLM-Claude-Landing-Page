"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import {
  SiteMetricsHubPanel,
  type SystemStats,
} from "@/components/landing/SiteMetricsHubPanel";

const VIEW_SESSION_KEY = "llm_site_view_recorded";
const VISITOR_ID_KEY = "llm_site_visitor_id";
const STATS_POLL_MS = 4_000;

function getOrCreateVisitorId() {
  const existing = sessionStorage.getItem(VISITOR_ID_KEY);
  if (existing) {
    return existing;
  }
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `v_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  sessionStorage.setItem(VISITOR_ID_KEY, id);
  return id;
}

export default function SiteMetricsHub() {
  const viewCount = useQuery(api.siteStats.getViewCount);
  const recordVisit = useMutation(api.siteStats.recordVisit);

  const [open, setOpen] = useState(false);
  const [serverStats, setServerStats] = useState<SystemStats | null>(null);
  const viewRecordedRef = useRef(false);

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
    let cancelled = false;

    const bootstrap = async () => {
      try {
        const seen =
          viewRecordedRef.current ||
          sessionStorage.getItem(VIEW_SESSION_KEY) === "1";
        if (!seen) {
          viewRecordedRef.current = true;
          await recordVisit({ visitorId: getOrCreateVisitorId() });
          sessionStorage.setItem(VIEW_SESSION_KEY, "1");
        }
      } catch {
        // Non-blocking analytics.
      }

      if (!cancelled) {
        await refreshServerStats();
      }
    };

    void bootstrap();

    return () => {
      cancelled = true;
    };
  }, [recordVisit, refreshServerStats]);

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
      viewCount={viewCount?.views}
      backendLive={viewCount !== undefined}
      backendLoading={viewCount === undefined}
      serverStats={serverStats}
    />
  );
}
