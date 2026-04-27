import { LineChart, ShoppingBag, Users, type LucideIcon } from "lucide-react";

/** Иконки отраслевых кейсов — порядок совпадает с `messages.directions.items` */
export const directionIcons: LucideIcon[] = [ShoppingBag, LineChart, Users];

export const moduleGridContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
} as const;

export const moduleGridItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export const caseGridContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
} as const;

export const caseGridItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;
