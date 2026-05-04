export type Locale = "ru" | "en";

export type ThemePreference = "light" | "dark";

export type NavId = "modules" | "process" | "reviews" | "cases" | "cta";

export type LegalStaticDocument = {
  metaTitle: string;
  heading: string;
  updated: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
};

export type Messages = {
  meta: { title: string };
  nav: Record<NavId, string>;
  footer: {
    tagline: string;
    sections: string;
    legal: string;
    privacy: string;
    terms: string;
    security: string;
    funnelAudit: string;
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
  economics: {
    kicker: string;
    title: string;
    intro: string;
    stats: { value: string; label: string; hint: string }[];
    compareCaption: string;
    compareCols: readonly [string, string];
    compareRows: { before: string; after: string }[];
  };
  auditOffer: {
    kicker: string;
    title: string;
    howToApply: string;
    checklist: string[];
    ctaHref: string;
    cta: string;
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
      industry: string;
      kpi: string;
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
  architecture: {
    kicker: string;
    title: string;
    intro: string;
    diagramAria: string;
    stages: readonly [string, string, string, string];
    ragLabel: string;
    outboundLabel: string;
    human: { title: string; body: string };
    escalation: { title: string; body: string };
  };
  engineering: {
    kicker: string;
    title: string;
    intro: string;
    practices: { name: string; detail: string }[];
    securityLink: string;
  };
  cta: {
    title: string;
    subtitle: string;
    inputLabel: string;
    inputPlaceholder: string;
    submit: string;
    loadingLabel: string;
    successTitle: string;
    successHint: string;
    telegramUrl: string;
  };
  mailtoSubject: string;
  mailtoAuditSubject: string;
  legal: {
    privacy: LegalStaticDocument;
    terms: LegalStaticDocument;
    security: LegalStaticDocument;
  };
  notFound: {
    metaTitle: string;
    title: string;
    body: string;
    homeCta: string;
    auditCta: string;
  };
  auditFunnel: {
    metaTitle: string;
    badge: string;
    title: string;
    subtitle: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
    footnote: string;
    backHome: string;
  };
};
