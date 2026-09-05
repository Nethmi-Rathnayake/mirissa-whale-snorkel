"use client";

import { useEffect, useRef } from "react";

const BUBBLES = [
  { left: "6%", size: 5, duration: 16, delay: 0, drift: 10 },
  { left: "14%", size: 3, duration: 21, delay: 3, drift: -8 },
  { left: "23%", size: 6, duration: 19, delay: 7, drift: 14 },
  { left: "31%", size: 4, duration: 24, delay: 2, drift: -6 },
  { left: "40%", size: 3, duration: 17, delay: 9, drift: 8 },
  { left: "49%", size: 5, duration: 22, delay: 5, drift: -12 },
  { left: "58%", size: 4, duration: 18, delay: 11, drift: 6 },
  { left: "66%", size: 6, duration: 25, delay: 1, drift: -10 },
  { left: "74%", size: 3, duration: 20, delay: 8, drift: 12 },
  { left: "82%", size: 5, duration: 23, delay: 4, drift: -8 },
  { left: "90%", size: 4, duration: 16, delay: 13, drift: 9 },
  { left: "96%", size: 3, duration: 27, delay: 6, drift: -14 },
];

export default function OceanScrollEffect() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = rootRef.current;
    if (!root) return;

    let ticking = false;

    const updateDepth = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      root.style.setProperty(
        "--ocean-depth",
        Math.min(1, Math.max(0, progress)).toFixed(4)
      );
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateDepth);
    };

    updateDepth();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="ocean-scroll-effect motion-reduce:hidden"
    >
      <div className="ocean-tint" />
      <div className="ocean-rays">
        <span className="ocean-ray ocean-ray-1" />
        <span className="ocean-ray ocean-ray-2" />
        <span className="ocean-ray ocean-ray-3" />
      </div>
      <div className="ocean-caustics" />
      <div className="ocean-bubbles">
        {BUBBLES.map((bubble, i) => (
          <span
            key={i}
            className="ocean-bubble"
            style={
              {
                left: bubble.left,
                "--bubble-size": `${bubble.size}px`,
                "--bubble-duration": `${bubble.duration}s`,
                "--bubble-delay": `${bubble.delay}s`,
                "--bubble-drift": `${bubble.drift}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
