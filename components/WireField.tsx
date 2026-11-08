const nodes = [
  [12, 22],
  [28, 48],
  [46, 18],
  [63, 62],
  [78, 30],
  [90, 70],
  [18, 78],
  [54, 84],
  [84, 48],
];

const links: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
  [2, 4],
  [3, 5],
  [3, 7],
  [4, 8],
  [1, 6],
  [6, 7],
  [5, 8],
  [4, 3],
];

export function WireField() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {links.map(([from, to], index) => {
          const [x1, y1] = nodes[from];
          const [x2, y2] = nodes[to];
          return (
            <line
              key={`${from}-${to}`}
              className="wire"
              style={{ animationDelay: `${index * 0.18}s` }}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
            />
          );
        })}
        {nodes.map(([x, y], index) => (
          <g key={`${x}-${y}`}>
            <circle className="wire-node" cx={x} cy={y} r="1.15" />
            <circle
              className="wire-ring"
              style={{ animationDelay: `${index * 0.25}s` }}
              cx={x}
              cy={y}
              r="2.4"
            />
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14] via-transparent to-[#070b14]" />
    </div>
  );
}
