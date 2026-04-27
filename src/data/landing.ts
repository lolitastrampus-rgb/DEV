import {
  LineChart,
  Link2,
  ShieldCheck,
  ShoppingBag,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { href: "#modules", label: "Модули" },
  { href: "#result", label: "Результат" },
  { href: "#nutrition", label: "Питание" },
  { href: "#cta", label: "Связаться" },
] as const;

export const systemModules: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Workflow,
    title: "Оркестрация",
    description:
      "Цепочки агентов с чёткими триггерами и откатами. Каждый шаг прозрачен — как пайплайн в Linear.",
  },
  {
    icon: LineChart,
    title: "Сигналы",
    description:
      "Потоковые данные и сводки без «потерянных» метрик. Решения строятся на том, что реально измеряется.",
  },
  {
    icon: Link2,
    title: "Интеграции",
    description:
      "CRM, склад, аналитика, мессенджеры — единый контур. Агент не изолирован от вашего стека.",
  },
  {
    icon: ShieldCheck,
    title: "Политики",
    description:
      "Доступы, аудит, границы автономности. Премиум-уровень — когда система предсказуема и безопасна.",
  },
];

export const legacyCases: {
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
  bullets: string[];
}[] = [
  {
    icon: ShoppingBag,
    title: "E-commerce ИИ",
    tag: "Retail",
    description:
      "Каталог, остатки, поддержка покупателя: ответы и действия без перегруза команды.",
    bullets: ["Консультации 24/7", "Статусы и возвраты", "Связка с CRM"],
  },
  {
    icon: LineChart,
    title: "Аналитика",
    tag: "Insights",
    description:
      "Дайджесты для руководства: что сдвинулось, почему важно, что делать дальше.",
    bullets: ["Алерты и аномалии", "Единый язык KPI", "Расписание отчётов"],
  },
  {
    icon: Users,
    title: "CRM-агенты",
    tag: "Revenue",
    description:
      "Лиды, задачи, постпродажа — черновики и напоминания с контролем до отправки.",
    bullets: ["Квалификация", "История касаний", "Подтверждение действий"],
  },
];

export const processSteps = [
  { title: "Спека", text: "Цели, данные, ограничения — зафиксированы до кода." },
  { title: "Пилот", text: "Сквозной сценарий в прод-подобной среде." },
  { title: "Масштаб", text: "SLA, мониторинг, эволюция по метрикам." },
] as const;

export const resultBullets = [
  "Коридоры питания вместо жёстких диет",
  "Ранние сигналы до срыва",
  "Связка нагрузки, сна и восстановления",
  "Прозрачность: почему агент предложил именно это",
] as const;

export const nutritionBullets = [
  "Макро- и микроориентиры под ваш профиль",
  "Меню и пересчёт порций без ручного табеля",
  "Контур закупки и кухни в одном контуре",
  "Объяснимость каждого решения агента",
] as const;

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

export const MAILTO_ORDER =
  "mailto:hello@agentlab.dev?subject=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%98%D0%98-%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%B0";
