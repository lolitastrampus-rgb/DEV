import { useLocale } from "../../context/LocaleContext";

/** Лёгкая SVG-схема контура данных (semantic + aria-label). */
export function ArchitectureDiagram() {
  const { t } = useLocale();
  const { diagramAria, stages, ragLabel, outboundLabel } = t.architecture;
  const [crm, orch, llm, ch] = stages;

  const box = (cx: number, cy: number, w: number, h: number, label: string) => (
    <g>
      <rect
        x={cx}
        y={cy}
        width={w}
        height={h}
        rx={10}
        fill="rgba(148,163,184,0.06)"
        stroke="currentColor"
        strokeOpacity={0.35}
        strokeWidth={1}
      />
      <foreignObject x={cx + 6} y={cy + 10} width={w - 12} height={h - 14} className="pointer-events-none">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className="flex h-full items-center justify-center text-center font-display text-[9px] font-semibold uppercase leading-tight tracking-wide text-[color:var(--color-ink)] sm:text-[10px]"
        >
          {label}
        </div>
      </foreignObject>
    </g>
  );

  return (
    <figure className="mt-8 w-full text-[color:var(--color-ink-muted)]">
      <svg
        role="img"
        aria-label={diagramAria}
        viewBox="0 0 760 208"
        className="mx-auto h-auto w-full max-w-[760px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker id="arch-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" className="fill-[color:var(--color-ink-muted)] opacity-55" />
          </marker>
        </defs>

        {box(348, 10, 154, 42, ragLabel)}
        <line
          x1={425}
          y1={54}
          x2={425}
          y2={72}
          stroke="currentColor"
          strokeOpacity={0.4}
          strokeWidth={1.5}
          strokeDasharray="4 3"
        />

        {box(20, 72, 128, 46, crm)}
        {box(174, 72, 150, 46, orch)}
        {box(348, 72, 136, 46, llm)}
        {box(518, 72, 138, 46, ch)}

        <line
          x1={148}
          y1={95}
          x2={168}
          y2={95}
          stroke="currentColor"
          strokeOpacity={0.35}
          strokeWidth={1.5}
          markerEnd="url(#arch-arrow)"
        />
        <line
          x1={324}
          y1={95}
          x2={344}
          y2={95}
          stroke="currentColor"
          strokeOpacity={0.35}
          strokeWidth={1.5}
          markerEnd="url(#arch-arrow)"
        />
        <line
          x1={484}
          y1={95}
          x2={514}
          y2={95}
          stroke="currentColor"
          strokeOpacity={0.35}
          strokeWidth={1.5}
          markerEnd="url(#arch-arrow)"
        />

        <path
          d="M 350 52 Q 268 56 268 92"
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.3}
          strokeWidth={1.5}
          strokeDasharray="3 4"
          markerEnd="url(#arch-arrow)"
        />
        <line
          x1={425}
          y1={54}
          x2={418}
          y2={92}
          stroke="currentColor"
          strokeOpacity={0.32}
          strokeWidth={1.5}
          strokeDasharray="3 4"
          markerEnd="url(#arch-arrow)"
        />

        <text
          x={380}
          y={198}
          textAnchor="middle"
          className="fill-[color:var(--color-ink-muted)] text-[9px] font-medium sm:text-[10px]"
          style={{ fontFamily: "inherit" }}
        >
          {outboundLabel}
        </text>
      </svg>
      <figcaption className="sr-only">{diagramAria}</figcaption>
      <div className="mt-3 flex flex-wrap justify-center gap-x-2 gap-y-1 font-display text-[0.62rem] uppercase tracking-wide text-ink-muted sm:text-xs">
        {stages.map((s, i) => (
          <span key={s} className="inline-flex items-center gap-x-2">
            <span>{s}</span>
            {i < stages.length - 1 ? <span aria-hidden className="font-normal text-[color:var(--color-ultra)]">→</span> : null}
          </span>
        ))}
      </div>
    </figure>
  );
}
