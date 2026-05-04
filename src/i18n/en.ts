import type { Messages } from "./types";

export const en: Messages = {
  meta: {
    title: "AI Agent Labs — autonomous AI agents for business",
  },
  nav: {
    modules: "Agents",
    process: "How it works",
    reviews: "Clients",
    cases: "Industries",
    cta: "Contact",
  },
  footer: {
    tagline:
      "Enterprise AI agents for sales, support, and lead generation — integrated with your CRM and messengers.",
    sections: "Sections",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    contact: "Contact",
    copyright: "AI Agent Labs 2026",
    auditCta: "Book an audit",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
  },
  footerNav: {
    modules: "AI agents",
    process: "Process",
    reviews: "Reviews",
    cases: "Cases",
  },
  header: { cta: "Audit" },
  theme: {
    light: "Light",
    dark: "Dark",
    label: "Theme",
  },
  lang: { ru: "Ru", en: "En", label: "Language" },
  hero: {
    badge: "Autonomous LLM agents",
    title: "Autonomous AI agents for your business.",
    subtitle: "Scale processes without hiring more staff",
    body: "We deploy agents that run conversations, qualify leads, and clear CRM and messenger routine 24/7 — with quality gates and load-aware scaling.",
    ctaPrimary: "Book an audit",
    ctaDemo: "View cases",
    sideKicker: "B2B",
    sideTitle: "From pilot to production",
    sideBody:
      "Start with a bounded scope and metrics, then roll out across funnel and support without breaking reporting.",
    demoLabel: "Channels",
    demoTitle: "CRM · Telegram · social",
    demoHint: "Below: AI solutions, delivery process, and industries.",
  },
  result: {
    kicker: "Impact",
    title: "Lower operating cost without sacrificing service quality",
    p1: "Sales and support front lines inflate payroll and break at peak load. AI agents handle repetitive dialogue around the clock; specialists step in for complex cases only.",
    p2: "Clear playbooks, CRM and messenger integrations, measurable KPIs — no black box or extra bureaucracy.",
    bullets: [
      "Controlled autonomy with human escalation",
      "Single data loop with your systems",
      "Scale load without linear headcount growth",
      "Iterate logic on business metrics",
    ],
  },
  reviews: {
    kicker: "Cases",
    title: "Companies that already shipped agents",
    items: [
      {
        name: "Ekaterina",
        role: "Head of Sales, e-commerce",
        quote:
          "Leads from forms and messengers no longer stall: the agent nurtures and pushes to CRM with context. Managers only work warm opportunities.",
        metric: "−40% triage time",
      },
      {
        name: "Igor",
        role: "COO, services",
        quote:
          "First line resolves most tickets without an operator. Knowledge base is wired to RAG — on-brand answers with policy links.",
        metric: "First response SLA < 2 min",
      },
      {
        name: "Olga",
        role: "CFO, distribution",
        quote:
          "Reporting and invoices for partners were manual. The agent builds packs from CRM templates — finance only checks exceptions.",
        metric: "−25 manual hours / month",
      },
    ],
  },
  directions: {
    kicker: "Industries",
    title: "Where AI agents deliver the most leverage",
    items: [
      {
        title: "E-commerce & retail",
        tag: "Sales",
        description:
          "Consultations, order status, returns — without overloading the team at peak.",
        bullets: ["24/7 responses", "CRM and payments sync", "Human handoff for edge cases"],
      },
      {
        title: "Services & B2B",
        tag: "Support",
        description:
          "Tickets, SLAs, knowledge: the agent clears routine; operators handle expertise.",
        bullets: ["Policy search", "Rule-based escalation", "Unified ticket history"],
      },
      {
        title: "Lead generation",
        tag: "Growth",
        description:
          "Social and messengers: audience touch, first contact, and qualification before sales.",
        bullets: ["Channel-specific scripts", "CRM tags and segments", "Dialogue QA"],
      },
    ],
  },
  process: {
    title: "How it works",
    subtitle: "Four stages — from analysis to scale",
    steps: [
      { title: "Process analysis", text: "Map funnel, channels, policies, and integrations; align KPIs and constraints." },
      { title: "Agent build & training", text: "Playbooks, CRM and messenger wiring, training on your data and voice." },
      { title: "Test drive", text: "Limited live traffic: answer quality, conversion, team load." },
      { title: "Scaling", text: "Roll out channels, monitoring, SLA, and roadmap." },
    ],
    nextKicker: "Next",
    nextTitle: "Book an audit — one call to show the highest-ROI automation for your stack.",
    nextCta: "Book an audit",
  },
  cta: {
    title: "Ready to delegate the grind to AI agents? Save 100+ hours a week on the pilot",
    subtitle:
      "Autonomous agents and LLM integrations replace repetitive work at scale: funnel efficiency, LTV and CAC signals. Describe your stack — we reply with a timeline and ROI band.",
    inputLabel: "What should we automate first?",
    inputPlaceholder: "e.g. sales pod, CRM, lead volume, first use case to ship…",
    submit: "Run agent audit",
    loadingLabel: "Preparing your request…",
    successTitle: "You’re set",
    successHint:
      "Your mail app should open with a draft. If it doesn’t, email hello@agentlab.dev",
    telegramUrl: "https://t.me/aiagentlabs",
  },
  mailtoSubject: "Commercial inquiry — AI Agent Labs",
  mailtoAuditSubject: "Automation audit booking",
};
