import type { ReactNode } from "react";
import { cn } from "../lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  emphasis?: boolean;
};

export function BentoCard({ children, className, id, emphasis }: Props) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-3xl border p-6 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset,0_8px_30px_rgba(0,0,0,0.05)]",
        "border-[color:var(--card-border)] bg-[color:var(--card-bg)]",
        "backdrop-blur-xl backdrop-saturate-150",
        "ring-1 ring-zinc-900/[0.03]",
        "transition-[box-shadow,transform,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-[color:var(--card-border)] hover:shadow-[0_1px_0_rgba(255,255,255,0.75)_inset,0_16px_44px_rgba(0,0,0,0.08)]",
        emphasis &&
          "border-orange-200/80 bg-gradient-to-br from-[color:var(--card-bg)] via-white/90 to-orange-50/45 ring-[#ff5733]/12",
        className
      )}
    >
      {children}
    </div>
  );
}
