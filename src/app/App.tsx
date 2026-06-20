"use client";

import { useEffect, useState } from "react";
import AiLandingPage from "@/imports/AiLandingPage1/index";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 5610;

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      setScale(Math.min(window.innerWidth / DESIGN_WIDTH, 1));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-full max-w-[100vw] overflow-hidden" style={{ background: "#010101" }}>
      <div
        className="mx-auto"
        style={{
          width: DESIGN_WIDTH * scale,
          height: DESIGN_HEIGHT * scale,
        }}
      >
        <div
          style={{
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
          }}
        >
          <AiLandingPage />
        </div>
      </div>
    </div>
  );
}
