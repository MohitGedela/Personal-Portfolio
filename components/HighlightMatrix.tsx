"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#+*=<>[]{}";

export function HighlightMatrix() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    host.appendChild(canvas);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let cols = 0;
    let rows = 0;
    const cell = 18;
    let grid: string[] = [];
    const mouse = { x: -9999, y: -9999 };
    const trail: Array<{ x: number; y: number; life: number }> = [];

    const rebuild = () => {
      cols = Math.ceil(width / cell) + 1;
      rows = Math.ceil(height / cell) + 1;
      grid = Array.from({ length: cols * rows }, () => GLYPHS[(Math.random() * GLYPHS.length) | 0]);
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = host.clientWidth;
      height = host.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rebuild();
    };

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      trail.push({ x: mouse.x, y: mouse.y, life: 0.7 });
      if (trail.length > 18) trail.shift();
    };

    let tickCount = 0;
    const tick = () => {
      frame = window.requestAnimationFrame(tick);
      tickCount += 1;

      ctx.fillStyle = "#070b14";
      ctx.fillRect(0, 0, width, height);

      if (tickCount % 20 === 0) {
        for (let n = 0; n < 18; n += 1) {
          const i = (Math.random() * grid.length) | 0;
          grid[i] = GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
      }

      ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const x = col * cell + cell / 2;
          const y = row * cell + cell / 2;

          let glow = Math.max(0, 1 - Math.hypot(x - mouse.x, y - mouse.y) / 72);
          for (let t = 0; t < trail.length; t += 1) {
            const point = trail[t];
            const d = Math.hypot(x - point.x, y - point.y);
            glow = Math.max(glow, Math.max(0, 1 - d / 52) * point.life);
          }

          if (glow < 0.05) {
            ctx.fillStyle = "rgba(148, 163, 184, 0.1)";
          } else if (glow < 0.4) {
            ctx.fillStyle = `rgba(96, 165, 250, ${0.12 + glow * 0.28})`;
          } else {
            ctx.fillStyle = `rgba(147, 197, 253, ${0.28 + glow * 0.32})`;
          }

          ctx.fillText(grid[row * cols + col], x, y);
        }
      }

      for (let i = trail.length - 1; i >= 0; i -= 1) {
        trail[i].life -= 0.055;
        if (trail[i].life <= 0) trail.splice(i, 1);
      }
    };

    const surface = host.parentElement ?? host;
    resize();
    tick();
    window.addEventListener("resize", resize);
    surface.addEventListener("pointermove", onMove);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      surface.removeEventListener("pointermove", onMove);
      canvas.remove();
    };
  }, []);

  return (
    <div ref={hostRef} className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-transparent to-[#070b14]/55" />
    </div>
  );
}
