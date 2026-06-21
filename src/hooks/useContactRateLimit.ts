"use client";

import { useQuery } from "convex/react";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../convex/_generated/api";

const CLIENT_ID_KEY = "llm-claude-contact-client-id";
const RESET_AT_KEY = "llm-claude-contact-reset-at";

function getOrCreateClientId(): string {
  const existing = localStorage.getItem(CLIENT_ID_KEY);
  if (existing) {
    return existing;
  }

  const id = crypto.randomUUID();
  localStorage.setItem(CLIENT_ID_KEY, id);
  return id;
}

function readStoredResetAt(): number | null {
  const raw = localStorage.getItem(RESET_AT_KEY);
  if (!raw) {
    return null;
  }

  const resetAt = Number(raw);
  if (!Number.isFinite(resetAt) || resetAt <= Date.now()) {
    localStorage.removeItem(RESET_AT_KEY);
    return null;
  }

  return resetAt;
}

function persistResetAt(resetAt: number | null) {
  if (resetAt && resetAt > Date.now()) {
    localStorage.setItem(RESET_AT_KEY, String(resetAt));
    return;
  }

  localStorage.removeItem(RESET_AT_KEY);
}

function formatCountdown(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function useContactRateLimit() {
  const [clientId, setClientId] = useState<string | null>(null);
  const [resetAt, setResetAt] = useState<number | null>(null);
  const [countdownMs, setCountdownMs] = useState(0);

  useEffect(() => {
    setClientId(getOrCreateClientId());
    setResetAt(readStoredResetAt());
  }, []);

  const serverStatus = useQuery(
    api.contactRateLimit.status,
    clientId ? { clientId } : "skip",
  );

  useEffect(() => {
    if (!serverStatus?.resetAt) {
      if (serverStatus && serverStatus.allowed) {
        persistResetAt(null);
        setResetAt(null);
      }
      return;
    }

    persistResetAt(serverStatus.resetAt);
    setResetAt((current) =>
      current && current > serverStatus.resetAt!
        ? current
        : serverStatus.resetAt,
    );
  }, [serverStatus]);

  const applyRateLimitResult = useCallback(
    (nextResetAt: number | null) => {
      if (nextResetAt && nextResetAt > Date.now()) {
        persistResetAt(nextResetAt);
        setResetAt(nextResetAt);
        return;
      }

      persistResetAt(null);
      setResetAt(null);
    },
    [],
  );

  useEffect(() => {
    if (!resetAt) {
      setCountdownMs(0);
      return;
    }

    const tick = () => {
      const remaining = resetAt - Date.now();
      if (remaining <= 0) {
        persistResetAt(null);
        setResetAt(null);
        setCountdownMs(0);
        return;
      }

      setCountdownMs(remaining);
    };

    tick();
    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, [resetAt]);

  const isRateLimited = countdownMs > 0;
  const remaining = serverStatus?.remaining ?? MAX_SUBMISSIONS_FALLBACK;

  return {
    clientId,
    isRateLimited,
    countdownLabel: formatCountdown(countdownMs),
    remaining,
    applyRateLimitResult,
  };
}

const MAX_SUBMISSIONS_FALLBACK = 3;
