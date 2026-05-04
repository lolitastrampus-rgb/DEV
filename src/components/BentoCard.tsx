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
        "rounded-3xl border p-6",
        "border-[color:var(--card-border)] bg-[color:var(--card-bg)]",
        "backdrop-blur-2xl backdrop-saturate-150",
        "shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.28)]",
        "ring-1 ring-[color-mix(in_srgb,var(--card-border)_80%,transparent)]",
        "transition-[box-shadow,transform,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-[color:var(--card-border)] hover:shadow-[0_1px_0_rgba(0,0,0,0.05),0_16px_48px_rgba(0,0,0,0.07)] hover:dark:shadow-[0_12px_40px_rgba(0,0,0,0.36)]",
        emphasis &&
          "border-[color-mix(in_srgb,var(--color-ultra)_45%,var(--card-border))] bg-gradient-to-br from-[color:var(--card-bg)] via-[color:var(--card-bg)] to-[color-mix(in_srgb,var(--color-ultra)_12%,transparent)] ring-[color-mix(in_srgb,var(--color-ultra)_35%,transparent)]",
        className
      )}
    >
      {children}
    </div>
  );
}
