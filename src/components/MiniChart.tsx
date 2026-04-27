import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const nutritionData = [
  { d: "Пн", v: 1840 },
  { d: "Вт", v: 2100 },
  { d: "Ср", v: 1920 },
  { d: "Чт", v: 2010 },
  { d: "Пт", v: 1780 },
  { d: "Сб", v: 2200 },
  { d: "Вс", v: 1950 },
];

const workoutData = [
  { d: "Пн", v: 42 },
  { d: "Вт", v: 65 },
  { d: "Ср", v: 38 },
  { d: "Чт", v: 72 },
  { d: "Пт", v: 55 },
  { d: "Сб", v: 80 },
  { d: "Вс", v: 48 },
];

type Props = {
  variant: "nutrition" | "workout";
  /** light: карточка; vision: тёмный glass / visionOS */
  colorScheme?: "light" | "dark" | "vision";
};

export function MiniChart({ variant, colorScheme = "vision" }: Props) {
  const isVision = colorScheme === "vision" || colorScheme === "dark";
  const data = variant === "nutrition" ? nutritionData : workoutData;
  const color =
    variant === "nutrition" ? (isVision ? "#34d399" : "#16a34a") : isVision ? "#22d3ee" : "#0284c7";
  const label = variant === "nutrition" ? "ккал" : "нагрузка";
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
              variant === "nutrition" ? "План" : "Сессия",
            ]}
          />
          <Area
            type="monotone"
            dataKey="v"
            stroke={color}
            strokeWidth={isVision ? 2.5 : 2}
            fill={`url(#g-${idSuffix})`}
            dot={false}
            activeDot={
              isVision
                ? { r: 4, fill: color, stroke: "rgba(255,255,255,0.4)", strokeWidth: 1 }
                : { r: 3, fill: color }
            }
            filter={isVision ? `url(#glow-${idSuffix})` : undefined}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
