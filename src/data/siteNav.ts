import type { NavId } from "../i18n/types";

export const NAV_HREF: Record<NavId, string> = {
  modules: "#modules",
  trainings: "#trainings",
  nutrition: "#smart-menu",
  reviews: "#reviews",
  cta: "#cta",
};

export const NAV_ORDER: NavId[] = ["modules", "trainings", "nutrition", "reviews", "cta"];
