"use client";

import { useEffect, useId, useRef, useState } from "react";

/**
 * Cross-browser hollow wordmark.
 * Uses SVG stroke (supported the same in Chrome / Edge / Safari)
 * instead of -webkit-text-stroke, which Edge compounds and collides.
 */
// Vertical box is fixed to Inter's cap height (0.727em of 152) plus padding, so the
// SVG is ~0.78em tall — the same as the live site's line-height: 0.78 wordmark.
const PAD = 4;
const CAP = 110.5;

export function Wordmark() {
  const textRef = useRef<SVGTextElement>(null);
  const [box, setBox] = useState({ x: -PAD, y: -CAP - PAD, w: 880, h: CAP + PAD * 2 });
  const viewBox = `${box.x} ${box.y} ${box.w} ${box.h}`;
  // Match the original CSS wordmark: font-size clamp(4rem, 16vw, 15rem), SVG font-size is 152
  const width = `min(100%, calc(clamp(4rem, 16vw, 15rem) * ${(box.w / 152).toFixed(4)}))`;
  // Strip ":" from React ids so url(#...) resolves in every browser
  const maskId = `wm-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  useEffect(() => {
    let cancelled = false;

    const measure = () => {
      const node = textRef.current;
      if (!node) return;
      const bbox = node.getBBox();
      if (!bbox.width || !bbox.height) return;
      if (!cancelled) {
        setBox({
          x: bbox.x - PAD,
          y: -CAP - PAD,
          w: bbox.width + PAD * 2,
          h: CAP + PAD * 2,
        });
      }
    };

    const run = () => {
      measure();
      // Second pass after layout settles
      requestAnimationFrame(measure);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(run).catch(run);
    } else {
      run();
    }

    window.addEventListener("resize", measure);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <svg
      className="wordmark-svg"
      style={{ width }}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="PORTFOLIO"
      preserveAspectRatio="xMidYMid meet"
    >
      {/*
        Variable fonts (Inter) keep overlapping contours inside glyphs, and the
        negative letter-spacing overlaps neighbouring glyphs. Some engines (Edge)
        stroke every contour, drawing lines through letters. Instead we stroke at
        2x width and mask out everything inside the filled glyph union, leaving a
        clean outer outline that renders identically everywhere.
      */}
      <defs>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x="-10000"
          y="-10000"
          width="20000"
          height="20000"
        >
          <rect x="-10000" y="-10000" width="20000" height="20000" fill="#fff" />
          <text
            x="0"
            y="0"
            className="wordmark-outline wordmark-mask-fill"
          >
            PORTFOLIO
          </text>
        </mask>
      </defs>
      <text
        ref={textRef}
        x="0"
        y="0"
        className="wordmark-outline"
        mask={`url(#${maskId})`}
      >
        PORTFOLIO
      </text>
    </svg>
  );
}
