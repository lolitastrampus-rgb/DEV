export type Locale = "ru" | "en";

export type ThemePreference = "light" | "dark" | "system";

export type NavId = "modules" | "process" | "reviews" | "cases" | "cta";

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
    auditCta: string;
    telegram: string;
    whatsapp: string;
  };
  footerNav: {
    modules: string;
    process: string;
    reviews: string;
    cases: string;
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
    title: string;
    subtitle: string;
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
  result: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    bullets: string[];
  };
  reviews: {
    kicker: string;
    title: string;
    items: { name: string; role: string; quote: string; metric?: string }[];
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
    emailIntro: string;
    emailLine: string;
    telegramKicker: string;
    telegramLead: string;
    telegramCta: string;
    telegramUrl: string;
  };
  mailtoSubject: string;
  mailtoAuditSubject: string;
};
