/** Full-bleed empty square grid — fills the black void edge to edge. */
const columns = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const floors = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];

export function BlueprintField() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 z-0 h-full min-h-full w-screen -translate-x-1/2 overflow-hidden"
      aria-hidden="true"
    >
      <div className="blueprint-grid absolute inset-0" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        shapeRendering="geometricPrecision"
      >
        {/* Verticals — empty square columns across the full field */}
        {columns.map((x, index) => (
          <line
            key={`col-${x}`}
            className="raise"
            style={{ animationDelay: `${0.05 + index * 0.05}s` }}
            x1={x}
            y1="0"
            x2={x}
            y2="100"
          />
        ))}

        {/* Horizontals — empty square floors across the full field */}
        {floors.map((y, index) => (
          <line
            key={`floor-${y}`}
            className="raise"
            style={{ animationDelay: `${0.4 + index * 0.06}s` }}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
          />
        ))}

        {/* Soft braces only on the lower bays — keeps construction feel without crossing the middle */}
        {columns.slice(0, -1).map((x, index) => (
          <line
            key={`brace-${x}`}
            className="raise raise-soft"
            style={{ animationDelay: `${1.05 + index * 0.04}s` }}
            x1={x}
            y1="87.5"
            x2={x + 10}
            y2="75"
          />
        ))}

        {/* Joints at every square corner */}
        {columns.flatMap((x) =>
          floors.map((y, index) => (
            <circle
              key={`${x}-${y}`}
              className="raise-joint"
              style={{ animationDelay: `${0.85 + index * 0.04}s` }}
              cx={x}
              cy={y}
              r="0.28"
            />
          )),
        )}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/35 via-transparent to-[#070b14]/75" />
    </div>
  );
}
