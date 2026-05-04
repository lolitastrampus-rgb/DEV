import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/cn";

export type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};

/**
 * Сайт переключает тему через `data-theme` и класс `dark` на <html> — варианты `dark:` в Tailwind работают.
 * Primary: контраст в светлой и тёмной теме. Secondary: явная граница, «Смотреть кейсы».
 */
export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { className, variant = "primary", ...props },
  ref
) {
  return (
    <a
      ref={ref}
      className={cn(
        "font-display inline-flex items-center justify-center rounded-full font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500/60",
        variant === "primary" && [
          "bg-slate-900 text-white shadow-sm",
          "hover:bg-slate-800 active:scale-[0.99]",
          "dark:bg-slate-100 dark:text-slate-900",
          "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]",
          "dark:hover:bg-white dark:hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
        ],
        variant === "secondary" && [
          "border border-black/10 bg-white/50 text-slate-900 backdrop-blur-sm",
          "hover:bg-white/90 active:scale-[0.99]",
          "dark:border-white/10 dark:bg-white/[0.06] dark:text-white",
          "dark:hover:bg-white/10",
        ],
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";
