import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const seriesAData = [
  { d: "Пн", v: 184 },
  { d: "Вт", v: 210 },
  { d: "Ср", v: 192 },
  { d: "Чт", v: 201 },
  { d: "Пт", v: 178 },
  { d: "Сб", v: 220 },
  { d: "Вс", v: 195 },
];

const seriesBData = [
  { d: "Пн", v: 42 },
  { d: "Вт", v: 65 },
  { d: "Ср", v: 38 },
  { d: "Чт", v: 72 },
  { d: "Пт", v: 55 },
  { d: "Сб", v: 80 },
  { d: "Вс", v: 48 },
];

type Props = {
  variant: "seriesA" | "seriesB";
  colorScheme?: "light" | "dark" | "vision";
};

export function MiniChart({ variant, colorScheme = "vision" }: Props) {
  const isVision = colorScheme === "vision" || colorScheme === "dark";
  const data = variant === "seriesA" ? seriesAData : seriesBData;
  const color =
    variant === "seriesA" ? (isVision ? "#818cf8" : "#6366f1") : isVision ? "#a78bfa" : "#7c3aed";
  const label = variant === "seriesA" ? "обр." : "ед.";
  const idSuffix = `${variant}-${colorScheme}`;

  const tick = isVision ? "rgba(161, 161, 170, 0.7)" : "#a8a29e";
  const tipBg = isVision ? "rgba(10, 10, 12, 0.92)" : "rgba(255,255,255,0.98)";
  const tipBorder = isVision ? "rgba(255, 255, 255, 0.1)" : "rgba(231, 229, 228, 1)";
  const tipLabel = isVision ? "rgba(161, 161, 170, 0.9)" : "#78716c";
  const tipText = isVision ? "rgba(250, 250, 250, 0.95)" : undefined;

  return (
    <div className="h-full min-h-0 w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`g-${idSuffix}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={isVision ? 0.5 : 0.3} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
            {isVision && (
              <filter id={`glow-${idSuffix}`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            )}
          </defs>
          <XAxis
            dataKey="d"
            tick={{ fill: tick, fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: tipBg,
              border: `1px solid ${tipBorder}`,
              borderRadius: 10,
              fontSize: 12,
              backdropFilter: isVision ? "blur(20px)" : undefined,
            }}
            labelStyle={{ color: tipLabel }}
            itemStyle={{ color: tipText }}
            formatter={(v) => [
              `${v ?? "—"} ${label}`,
              variant === "seriesA" ? "Входящие" : "Обработано",
            ]}
          />
          <Area
            type="monotone"
            dataKey="v"
            stroke={color}
            strokeWidth={isVision ? 2.5 : 2}
            fill={`url(#g-${idSuffix})`}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }}
            filter={isVision ? `url(#glow-${idSuffix})` : undefined}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
