"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor-hover]")) setHovering(true);
    };
    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor-hover]")) setHovering(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      // Ring follows with lag
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 transition-none"
      >
        <div
          className={`rounded-full bg-[#FFD000] transition-all duration-150 ${
            hovering ? "h-2 w-2 opacity-100" : clicking ? "h-1.5 w-1.5" : "h-1.5 w-1.5"
          }`}
        />
      </div>

      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 transition-none"
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            hovering
              ? "h-10 w-10 border-[#FFD000]/60 scale-110"
              : clicking
              ? "h-5 w-5 border-[#23D5E8]/80"
              : "h-7 w-7 border-white/30"
          }`}
        />
      </div>
    </>
  );
}
