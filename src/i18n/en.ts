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
    security: "Security & data handling",
    funnelAudit: "Funnel audit",
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
  economics: {
    kicker: "Benchmarks",
    title: "Typical upside after the pilot pays off",
    intro:
      "Figures grounded in front-line triage / lead workflows and a bounded scope — final outcome depends on volume and integrations.",
    stats: [
      {
        value: "15–35 hrs",
        label: "payroll-equivalent savings / mo",
        hint: "one lane of support handling or outbound triage — not fluff",
      },
      {
        value: "45–65%",
        label: "routine conversations solved without operators",
        hint: "the rest escalate to specialists",
      },
      {
        value: "< 2 min",
        label: "first-response SLA target",
        hint: "per channel SLAs — 24/7 when policy demands it",
      },
    ],
    compareCaption: "Same operating model, different lever",
    compareCols: ["Before", "After"] as const,
    compareRows: [
      {
        before: "Seasonal backlog — customers wait 45–120 minutes",
        after: "Response time under ~2 minutes for high-volume intents",
      },
      {
        before: "Reps burn 30–60% time qualifying messenger leads manually",
        after: "CRM sees pre-qualified ops with conversational context intact",
      },
      {
        before: "Staffing ramps linearly for support peaks",
        after: "Peaks absorbed by agents plus expert escalation paths",
      },
    ],
  },
  auditOffer: {
    kicker: "ROI audit",
    title: "What you ship after diagnostics",
    howToApply:
      "Kickoff: brief form below or mail tagged “audit” — we anchor funnel limits and channels live. Outputs are meant for CFO + ops sign-off, not a slide deck filler.",
    checklist: [
      "Process heatmap mapped to autonomy impact on LTV / CAC levers",
      "Integration backlog (CRM, messengers, knowledge base) and technical risk flags",
      "Pilot KPI set: SLA, auto-resolution rate, avoided labor hours, stage conversion",
      "Engineering-days estimate plus a narrowly scoped live traffic test before full rollout",
      "Human handoff playbook and stop conditions when autonomy must defer",
      "Timeline + phased commercial steps with uninterrupted reporting continuity",
    ],
    ctaHref: "/#cta",
    cta: "Request the audit briefing",
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
        title: "Retail & commerce",
        tag: "Sales",
        industry: "E-commerce fashion, electronics, storefronts",
        kpi: "Up to −40% time spent on outbound lead triage",
        description:
          "Consultations, order status, returns — without overloading the team at peak.",
        bullets: ["24/7 responses", "CRM and payments sync", "Human handoff for edge cases"],
      },
      {
        title: "Services & B2B SaaS",
        tag: "Support",
        industry: "IT services, logistics, subscription businesses",
        kpi: "First-response SLA < 2 min on repeatable tickets",
        description:
          "Tickets, SLAs, knowledge: the agent clears routine; operators handle expertise.",
        bullets: ["Policy search", "Rule-based escalation", "Unified ticket history"],
      },
      {
        title: "Social-led demand gen",
        tag: "Growth",
        industry: "B2B sales, CRE, regulated services",
        kpi: "Qualified handoffs before AE involvement",
        description:
          "Social and messengers: first-touch plus qualification upstream of sales reps.",
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
  architecture: {
    kicker: "Architecture",
    title: "CRM, queue orchestration, LLM, and retrieval in one bounded loop",
    intro:
      "Typical MVP wiring: conversational traffic enters a channel connector, lands in a queue/orchestrator, pulls CRM context + retrieved chunks, then runs the model with policies before writing back to CRM and the client surface.",
    diagramAria:
      "Diagram: CRM webhooks, message queue and orchestrator, vector RAG store feeding the LLM runtime, then outbound channels. Human operators sit outside the loop and join through escalation rules.",
    stages: ["CRM · webhooks", "Queue / orchestrator", "LLM + policies", "Channels"] as const,
    ragLabel: "RAG · vector store",
    outboundLabel: "Client reply + CRM state updates",
    human: {
      title: "Where humans stay in control",
      body: "Deal approvals, policy disputes, post-incident reviews, and toggling autonomy budgets. Agents hand off the same transcript + CRM tags so operators never cold-start a thread.",
    },
    escalation: {
      title: "Escalation triggers",
      body: "Defined in orchestration (intent classifiers, CRM tags, token ceilings, SLA timers). Hard stops include structured-output parse failures, policy violations, or an explicit “human please” signal from the customer.",
    },
  },
  engineering: {
    kicker: "Engineering defaults",
    title: "What we actually wire — no buzzword soup",
    intro:
      "Baseline building blocks for an industrial LLM stack in B2B. Cloud targets and vendor mix are contract artifacts; production secrets always live in environment variables or a secret manager — never in source control.",
    practices: [
      {
        name: "Structured output",
        detail:
          "JSON / tool schemas (Zod, JSON Schema, etc.) gate every assistant message before it reaches a customer. Bad generations recycle or fall back to human review instead of silent failure.",
      },
      {
        name: "Guardrails & data policy",
        detail:
          "Topic allow/deny lists, leakage checks for internal tool names, and selective redaction on the ingress path. Nothing crosses the egress boundary without an explicit policy decision.",
      },
      {
        name: "Conversation logging",
        detail:
          "Full-thread retention for QA and incident response plus latencies and RAG hit metadata. Retention windows are SLA-driven (see the Security page); defaults are tunable per industry.",
      },
      {
        name: "CRM integrations",
        detail:
          "Bitrix24, AmoCRM, and peers connect through OAuth apps or service tokens minted in the customer admin console. Values map to env vars such as CRM_CLIENT_ID / CRM_CLIENT_SECRET or vault references — never hardcoded in the repo.",
      },
      {
        name: "Observability",
        detail:
          "Queue depth, model time-to-first-token, auto-resolution ratio, and escalation spikes feed dashboards + paging before customers feel a silent regression.",
      },
    ],
    securityLink: "Read more: Security & data handling",
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
  legal: {
    privacy: {
      metaTitle: "Privacy Policy — AI Agent Labs",
      heading: "Privacy Policy",
      updated: "Effective: May 4, 2026",
      intro:
        "This policy explains how we treat information collected through our site and inbound requests. Separate agreements and NDAs govern delivery engagements.",
      sections: [
        {
          title: "Data we may collect",
          paragraphs: [
            "Information you voluntarily submit via forms or email — contact details, company context, request text.",
            "Technical signals such as access logs needed for security and availability (timestamp, IP, user-agent where applicable).",
          ],
        },
        {
          title: "Purposes",
          paragraphs: [
            "To respond to your inquiry, propose next steps or schedule workshops.",
            "To protect the infrastructure from misuse and troubleshoot incidents.",
          ],
        },
        {
          title: "Sharing & retention",
          paragraphs: [
            "We don’t sell personal data.",
            "Infrastructure and communication providers are chosen per engagement; access follows least-privilege and contractual safeguards.",
          ],
        },
        {
          title: "Your rights",
          paragraphs: [
            "You may request updates or deletion of contact records where statutory retention duties allow.",
            "Use the site footer contact channel or your existing thread with our team.",
          ],
        },
      ],
    },
    terms: {
      metaTitle: "Terms of Use — AI Agent Labs",
      heading: "Terms of Use",
      updated: "Effective: May 4, 2026",
      intro:
        "By browsing this site or sending us an inquiry, you acknowledge these baseline terms for marketing and informational collateral.",
      sections: [
        {
          title: "Informational scope",
          paragraphs: [
            "Site narrative is illustrative and isn’t binding unless reiterated in signed paperwork.",
            "Diagrams or benchmarks may drift from bespoke architecture produced under contract.",
          ],
        },
        {
          title: "No warranty",
          paragraphs: [
            "We aim for factual accuracy yet cannot guarantee error-free uptime of third-party systems (CRM, messengers, model providers).",
          ],
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "Copy and visual framing are proprietary. Attribution is required for excerpts beyond minimal fair quoting.",
          ],
        },
        {
          title: "Updates",
          paragraphs: [
            "We may revise this page periodically; substantive edits state a refreshed effective date.",
          ],
        },
      ],
    },
    security: {
      metaTitle: "Security & Data — AI Agent Labs",
      heading: "Security & data handling",
      updated: "Effective: May 4, 2026",
      intro:
        "Concise engineer-facing checklist. Dedicated residency addenda and DPAs supplement this page. Production credentials and vendor URLs only enter via environment variables — never literals committed to git.",
      sections: [
        {
          title: "Residency choices",
          paragraphs: [
            "Contract-driven deployments may keep processing/storage in Russia, the EU/EWR footprint, or other agreed regions—including vector stores and brokers. Regions and subprocessors land in paperwork, not assumptions.",
            "Developer sandboxes are isolated from production; anything used for fine-tuning ships only with your written approval.",
          ],
        },
        {
          title: "CRM access & secrets",
          paragraphs: [
            "We integrate through OAuth applications or service tokens generated inside your CRM admin. Those map to environment variables (or CI secret stores) — the same discipline as a locked-down .env file.",
            "Rotating a token never requires a UI redeploy; update the secret in the orchestration layer and roll workers.",
          ],
        },
        {
          title: "Dialogue logs & retention",
          paragraphs: [
            "Transcripts support QA, compliance, and incident review. Default post-close retention bands sit between 90–365 days depending on regulatory posture; the exact window is part of the SLA.",
            "Shorter retention, crypto-shredding, or customer-held keys are available when your risk team requires them.",
          ],
        },
        {
          title: "LLM egress",
          paragraphs: [
            "External model calls use TLS; ingress filters strip or tokenize PII before traffic leaves your policy perimeter.",
            "Need air-gapped inference? We scope private endpoints or on-prem GPU stacks as separate work packages.",
          ],
        },
      ],
    },
  },
  notFound: {
    metaTitle: "Page not found — AI Agent Labs",
    title: "404 · this path doesn’t exist",
    body: "The route may have moved or the URL has a typo. Head home or ping us through the audit request — we’ll point you toward the automation surface that fits.",
    homeCta: "Back home",
    auditCta: "Book an audit",
  },
  auditFunnel: {
    metaTitle: "Funnel Audit — AI Agent Labs",
    badge: "Focus",
    title: "Funnel & automation readiness audit",
    subtitle:
      "We align on SLA, staffing load, CRM signal quality before any autonomous rollout — grounded in KPIs rather than slideware.",
    bullets: [
      "Narrow-neck mapping from lead qualification or ticket backlog to ROI levers",
      "Pilot KPI contract: autopilot share of dialogues, payroll hours saved, response SLAs",
      "Integration backlog with messenger + CRM readiness flags",
      "Post-call decision pack: staffing estimate plus timeline checkpoints",
    ],
    primaryCta: "Audit form on homepage",
    secondaryCta: "Email hello@agentlab.dev",
    footnote:
      "You’ll be routed either to our homepage intake or your mail draft. Paid delivery always follows standalone agreements.",
    backHome: "Home",
  },
};
