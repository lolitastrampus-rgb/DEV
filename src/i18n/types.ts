export type Locale = "ru" | "en";

export type ThemePreference = "light" | "dark" | "system";

export type NavId = "modules" | "trainings" | "nutrition" | "reviews" | "cta";

export type Messages = {
  meta: { title: string };
  nav: Record<NavId, string>;
  footer: {
    tagline: string;
    sections: string;
    legal: string;
    privacy: string;
    terms: string;
    contact: string;
    copyright: string;
  };
  footerNav: {
    trainings: string;
    nutrition: string;
    aboutAgents: string;
  };
  header: { cta: string };
  theme: {
    light: string;
    dark: string;
    system: string;
    label: string;
  };
  lang: { ru: string; en: string; label: string };
  hero: {
    badge: string;
    line1: string;
    line2Gradient: string;
    lead: string;
    body: string;
    ctaPrimary: string;
    ctaDemo: string;
    sideKicker: string;
    sideTitle: string;
    sideBody: string;
    demoLabel: string;
    demoTitle: string;
    demoHint: string;
  };
  modules: { kicker: string; title: string; cards: { title: string; description: string }[] };
  result: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    bullets: string[];
  };
  trainings: {
    kicker: string;
    title: string;
    programs: {
      title: string;
      subtitle: string;
      description: string;
      bullets: string[];
    }[];
  };
  reviews: {
    kicker: string;
    title: string;
    items: { name: string; role: string; quote: string; metric?: string }[];
  };
  menu: {
    aria: string;
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    bullets: string[];
    rationTitle: string;
    rationHint: string;
    rationRows: { meal: string; dish: string; kcal: string; note: string }[];
  };
  directions: {
    kicker: string;
    title: string;
    items: {
      title: string;
      tag: string;
      description: string;
      bullets: string[];
    }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; text: string }[];
    nextKicker: string;
    nextTitle: string;
    nextCta: string;
  };
  cta: {
    title: string;
    body: string;
    button: string;
    emailLine: string;
  };
  mailtoSubject: string;
};
