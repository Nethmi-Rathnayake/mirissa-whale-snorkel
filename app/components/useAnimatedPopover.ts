"use client";

import { useEffect, useRef, useState } from "react";

export function useAnimatedPopover() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<"top" | "bottom">("bottom");
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const open = () => {
    setMounted(true);
    requestAnimationFrame(() => {
      const container = containerRef.current;
      const panel = panelRef.current;
      if (container && panel) {
        const rect = container.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        setPlacement(
          spaceBelow < panel.offsetHeight + 16 && spaceAbove > spaceBelow
            ? "top"
            : "bottom"
        );
      }
      requestAnimationFrame(() => setVisible(true));
    });
  };

  const close = () => {
    setVisible(false);
    window.setTimeout(() => setMounted(false), 300);
  };

  const toggle = () => (mounted ? close() : open());

  useEffect(() => {
    if (!mounted) return;

    const onPointerDown = (e: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mounted]);

  return { containerRef, panelRef, mounted, visible, placement, open, close, toggle };
}
