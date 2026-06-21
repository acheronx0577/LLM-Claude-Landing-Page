"use client";

export type SystemStats = {
  cpuPercent?: number;
  memoryMb?: number;
  memoryPercent?: number;
  uptimeSec?: number;
};

const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL ??
  "https://github.com/acheronx0577/LLM-Claude";

function formatViewCount(value: number | null | undefined) {
  if (value === null || value === undefined || !Number.isFinite(value) || value < 0) {
    return "—";
  }
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

function formatUptime(seconds: number | undefined) {
  const total = Math.max(0, Number(seconds) || 0);
  if (total < 60) {
    return `${total}s`;
  }
  const minutes = Math.floor(total / 60);
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = Math.floor(minutes / 60);
  const remMin = minutes % 60;
  return remMin ? `${hours}h ${remMin}m` : `${hours}h`;
}

function metricToneClass(
  percent: number | undefined,
  warnAt: number,
  hotAt: number,
) {
  if (typeof percent !== "number" || !Number.isFinite(percent)) {
    return "";
  }
  if (percent >= hotAt) {
    return "is-hot";
  }
  if (percent >= warnAt) {
    return "is-warn";
  }
  return "";
}

function GitHubIcon() {
  return (
    <svg
      className="site-metrics-github-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

type SiteMetricsHubPanelProps = {
  open: boolean;
  onToggle: () => void;
  viewCount: number | null | undefined;
  backendLive: boolean;
  backendLoading: boolean;
  serverStats: SystemStats | null;
};

export function SiteMetricsHubPanel({
  open,
  onToggle,
  viewCount,
  backendLive,
  backendLoading,
  serverStats,
}: SiteMetricsHubPanelProps) {
  const cpu =
    typeof serverStats?.cpuPercent === "number"
      ? `${serverStats.cpuPercent}%`
      : "—";
  const memory =
    typeof serverStats?.memoryMb === "number" ? `${serverStats.memoryMb} MB` : "—";
  const backendLabel = backendLoading ? "…" : backendLive ? "Live" : "—";
  const backendClass = backendLive && !backendLoading ? "is-ok" : "is-warn";
  const uptime =
    typeof serverStats?.uptimeSec === "number"
      ? formatUptime(serverStats.uptimeSec)
      : "—";

  return (
    <aside
      className={`site-metrics${open ? " is-open" : ""}`}
      aria-label="Site metrics"
    >
      <div className="site-metrics-shell">
        <button
          type="button"
          className="site-metrics-toggle"
          aria-expanded={open}
          aria-controls="site-metrics-panel"
          aria-label={open ? "Collapse site metrics" : "Expand site metrics"}
          data-lenis-prevent
          onClick={onToggle}
        >
          <span className="site-metrics-chevron" aria-hidden="true" />
        </button>

        <div
          id="site-metrics-panel"
          className="site-metrics-panel"
          aria-hidden={!open}
          data-lenis-prevent
        >
          <div className="site-metrics-inner">
            <div className="site-metrics-stack">
              <div
                className="site-metrics-views-pill"
                aria-label="Website views"
                aria-live="polite"
              >
                <span className="site-metrics-views-label">Website views</span>
                <span className="site-metrics-views-value">
                  {formatViewCount(viewCount)}
                </span>
              </div>

              <section
                className="site-metrics-grid-section"
                aria-label="Server resource usage"
                aria-live="polite"
              >
                <p className="site-metrics-grid-label">Server</p>
                <dl className="site-metrics-grid">
                  <div className="site-metrics-row">
                    <dt>CPU</dt>
                    <dd
                      className={metricToneClass(serverStats?.cpuPercent, 70, 90)}
                    >
                      {cpu}
                    </dd>
                  </div>
                  <div className="site-metrics-row">
                    <dt>RAM</dt>
                    <dd
                      className={metricToneClass(
                        serverStats?.memoryPercent,
                        75,
                        90,
                      )}
                    >
                      {memory}
                    </dd>
                  </div>
                  <div className="site-metrics-row">
                    <dt>Backend</dt>
                    <dd className={backendClass}>{backendLabel}</dd>
                  </div>
                  <div className="site-metrics-row">
                    <dt>Uptime</dt>
                    <dd>{uptime}</dd>
                  </div>
                </dl>
              </section>
            </div>

            <a
              className="site-metrics-github"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
