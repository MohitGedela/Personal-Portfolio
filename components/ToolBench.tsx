const tools: Array<{ name: string; mark: string } | null> = [
  { name: "TypeScript", mark: "TS" },
  { name: "React", mark: "Re" },
  null,
  { name: "Next.js", mark: "Ne" },
  { name: "Python", mark: "Py" },
  null,
  { name: "Java", mark: "Jv" },
  { name: "OpenCV", mark: "CV" },
  { name: "Tailwind", mark: "Tw" },
  null,
  { name: "Node", mark: "No" },
  { name: "Gemini", mark: "Ge" },
  null,
  { name: "Raspberry Pi", mark: "Pi" },
  { name: "Socket.io", mark: "So" },
  { name: "MediaPipe", mark: "Mp" },
  null,
  { name: "Three.js", mark: "3j" },
  { name: "Flask", mark: "Fl" },
  { name: "Streamlit", mark: "St" },
];

const rows = [0, 1, 2, 3].map((row) => {
  const slice = tools.map((tool, index) => ((index + row * 3) % 5 === 0 ? null : tools[(index + row * 2) % tools.length]));
  return slice;
});

function Tile({ tool }: { tool: { name: string; mark: string } | null }) {
  if (!tool) {
    return <div className="h-[68px] w-[68px] shrink-0 rounded-[18px] bg-[#0c1524] shadow-[inset_0_0_0_1px_rgba(148,186,255,0.08)]" />;
  }
  return (
    <div
      title={tool.name}
      className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-[18px] bg-white text-[#10233f] shadow-[0_10px_30px_rgba(4,10,24,0.28)]"
    >
      <span className="font-mono text-[13px] font-semibold tracking-[-0.04em]">{tool.mark}</span>
    </div>
  );
}

function Row({
  items,
  duration,
  reverse,
}: {
  items: Array<{ name: string; mark: string } | null>;
  duration: number;
  reverse?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-3 py-1.5"
        style={{
          animation: `${reverse ? "bench-right" : "bench-left"} ${duration}s linear infinite`,
        }}
      >
        {loop.map((tool, index) => (
          <Tile key={`${tool?.name ?? "empty"}-${index}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export function ToolBench() {
  return (
    <div className="bench-mask flex flex-col gap-3" aria-hidden="true">
      <Row items={rows[0]} duration={46} />
      <Row items={rows[1]} duration={58} reverse />
      <Row items={rows[2]} duration={42} />
      <Row items={rows[3]} duration={64} reverse />
    </div>
  );
}
