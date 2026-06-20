"use client";

import { useChromaSpotlight, handleChromaCardMove } from "./useChromaSpotlight";
import "./ChromaGrid.css";

export type ChromaItem = {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
};

type ChromaGridProps = {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  columns?: number;
  rows?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
};

const DEMO: ChromaItem[] = [
  {
    image: "https://i.pravatar.cc/300?img=8",
    title: "Alex Rivera",
    subtitle: "Full Stack Developer",
    handle: "@alexrivera",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "https://github.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=11",
    title: "Jordan Chen",
    subtitle: "DevOps Engineer",
    handle: "@jordanchen",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg, #10B981, #000)",
    url: "https://linkedin.com/in/",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Morgan Blake",
    subtitle: "UI/UX Designer",
    handle: "@morganblake",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
    url: "https://dribbble.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=16",
    title: "Casey Park",
    subtitle: "Data Scientist",
    handle: "@caseypark",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg, #EF4444, #000)",
    url: "https://kaggle.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=25",
    title: "Sam Kim",
    subtitle: "Mobile Developer",
    handle: "@thesamkim",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg, #8B5CF6, #000)",
    url: "https://github.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=60",
    title: "Tyler Rodriguez",
    subtitle: "Cloud Architect",
    handle: "@tylerrod",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #000)",
    url: "https://aws.amazon.com/",
  },
];

export function ChromaGrid({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}: ChromaGridProps) {
  const data = items?.length ? items : DEMO;
  const { rootRef, fadeRef, handleMove, handleLeave } = useChromaSpotlight({
    damping,
    fadeOut,
    ease,
  });

  const handleCardClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        ["--r" as string]: `${radius}px`,
        ["--cols" as string]: columns,
        ["--rows" as string]: rows,
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleChromaCardMove}
          onClick={() => handleCardClick(c.url)}
          style={{
            ["--card-border" as string]: c.borderColor || "transparent",
            ["--card-gradient" as string]: c.gradient,
            cursor: c.url ? "pointer" : "default",
          }}
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle ? <span className="handle">{c.handle}</span> : null}
            <p className="role">{c.subtitle}</p>
            {c.location ? <span className="location">{c.location}</span> : null}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
}

export default ChromaGrid;
