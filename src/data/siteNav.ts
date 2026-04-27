import type { NavId } from "../i18n/types";

export const NAV_HREF: Record<NavId, string> = {
  modules: "#modules",
  process: "#process",
  reviews: "#reviews",
  cases: "#cases",
  cta: "#cta",
};

export const NAV_ORDER: NavId[] = ["modules", "process", "reviews", "cases", "cta"];
