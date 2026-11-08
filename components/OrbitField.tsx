"use client";

export function OrbitField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="orbit-grid absolute inset-0 opacity-40" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <g className="orbit-ring" style={{ ["--orbit-dur" as string]: "48s" }}>
          <ellipse cx="600" cy="400" rx="420" ry="220" />
        </g>
        <g className="orbit-ring" style={{ ["--orbit-dur" as string]: "64s", animationDirection: "reverse" }}>
          <ellipse cx="600" cy="400" rx="300" ry="300" />
        </g>
        <g className="orbit-ring" style={{ ["--orbit-dur" as string]: "36s" }}>
          <ellipse cx="600" cy="400" rx="180" ry="420" />
        </g>

        <g className="orbit-nodes">
          <circle className="orbit-node" cx="180" cy="160" r="2.5" style={{ animationDelay: "0s" }} />
          <circle className="orbit-node" cx="980" cy="140" r="2.5" style={{ animationDelay: "0.6s" }} />
          <circle className="orbit-node" cx="220" cy="640" r="2.5" style={{ animationDelay: "1.2s" }} />
          <circle className="orbit-node" cx="1040" cy="600" r="2.5" style={{ animationDelay: "1.8s" }} />
          <circle className="orbit-node" cx="600" cy="120" r="2.5" style={{ animationDelay: "0.3s" }} />
          <circle className="orbit-node" cx="600" cy="680" r="2.5" style={{ animationDelay: "1.4s" }} />
          <circle className="orbit-node" cx="140" cy="400" r="2.5" style={{ animationDelay: "0.9s" }} />
          <circle className="orbit-node" cx="1060" cy="400" r="2.5" style={{ animationDelay: "2.1s" }} />
        </g>

        <g className="orbit-links">
          <path d="M180 160 L600 120 L980 140" />
          <path d="M140 400 L600 400 L1060 400" />
          <path d="M220 640 L600 680 L1040 600" />
          <path d="M180 160 L140 400 L220 640" />
          <path d="M980 140 L1060 400 L1040 600" />
        </g>

        <circle className="orbit-pulse" cx="600" cy="400" r="70" />
        <circle className="orbit-pulse" cx="600" cy="400" r="120" style={{ animationDelay: "1.4s" }} />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/70 via-[#070b14]/35 to-[#070b14]/85" />
    </div>
  );
}
