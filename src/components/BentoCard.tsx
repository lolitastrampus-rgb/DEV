import type { ReactNode } from "react";
import { cn } from "../lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Акцентная плитка: лёгкий оранжевый градиент поверх стекла */
  emphasis?: boolean;
};

export function BentoCard({ children, className, id, emphasis }: Props) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-3xl border border-white/75 bg-white/45 p-6 shadow-[0_1px_0_rgba(255,255,255,0.88)_inset,0_12px_40px_rgba(0,0,0,0.07)]",
        "backdrop-blur-2xl backdrop-saturate-150",
        "ring-1 ring-black/[0.04]",
        "transition-[box-shadow,transform,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-white/90 hover:shadow-[0_1px_0_rgba(255,255,255,0.92)_inset,0_20px_50px_rgba(0,0,0,0.09)]",
        emphasis &&
          "border-orange-200/55 bg-gradient-to-br from-white/55 via-white/40 to-orange-50/35 ring-orange-500/10",
        className
      )}
    >
      {children}
    </div>
  );
}
