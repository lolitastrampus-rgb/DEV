import { motion } from "framer-motion";
import { cn } from "../lib/cn";

type Ring = {
  progress: number;
  color: string;
  size: number;
  stroke: number;
  glow: string;
};

function RingCircle({
  progress,
  color,
  size,
  stroke,
  glow,
  trackClass,
}: Ring & { trackClass: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * progress;

  return (
    <svg
      width={size}
      height={size}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
      style={{
        filter: `drop-shadow(0 0 2px ${glow}) drop-shadow(0 0 10px ${glow}) drop-shadow(0 0 22px rgba(255,255,255,0.06))`,
      }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        className={cn("fill-none", trackClass)}
        strokeWidth={stroke}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        initial={{ strokeDasharray: `0 ${c}` }}
        animate={{ strokeDasharray: `${dash} ${c}` }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

type Props = {
  variant: "nutrition" | "workout";
  className?: string;
  surface?: "light" | "dark";
};

const presets: Record<Props["variant"], Ring[]> = {
  nutrition: [
    { progress: 0.78, color: "#34d399", glow: "rgba(52, 211, 153, 0.95)", size: 180, stroke: 14 },
    { progress: 0.62, color: "#fb923c", glow: "rgba(251, 146, 60, 0.95)", size: 144, stroke: 12 },
    { progress: 0.45, color: "#f87171", glow: "rgba(248, 113, 113, 0.95)", size: 108, stroke: 10 },
  ],
  workout: [
    { progress: 0.92, color: "#22d3ee", glow: "rgba(34, 211, 238, 0.95)", size: 180, stroke: 14 },
    { progress: 0.71, color: "#c084fc", glow: "rgba(192, 132, 252, 0.95)", size: 144, stroke: 12 },
    { progress: 0.55, color: "#4ade80", glow: "rgba(74, 222, 128, 0.9)", size: 108, stroke: 10 },
  ],
};

export function ActivityRings({ variant, className, surface = "dark" }: Props) {
  const rings = presets[variant];
  const center = variant === "nutrition" ? "78%" : "92%";
  const trackClass = surface === "light" ? "stroke-stone-200" : "stroke-white/[0.12]";

  return (
    <div className={cn("relative h-[200px] w-[200px] shrink-0", className)}>
      {rings.map((ring, i) => (
        <RingCircle key={`${variant}-${i}`} {...ring} trackClass={trackClass} />
      ))}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center text-center",
          surface === "light" ? "text-stone-800" : "text-white"
        )}
      >
        <span
          className="text-3xl font-bold tabular-nums tracking-tight"
          style={{
            textShadow: "0 0 24px rgba(255,255,255,0.2), 0 0 2px rgba(255,255,255,0.4)",
          }}
        >
          {center}
        </span>
      </div>
    </div>
  );
}
