import { motion } from "framer-motion";
import { Bot, Cpu, Layers } from "lucide-react";
import { moduleGridContainer, moduleGridItem } from "../../data/landing";
import { BentoCard } from "../BentoCard";

const MODULES = [
  {
    title: "AI Lead Generator",
    description: "Автоматический поиск и квалификация клиентов.",
    Icon: Cpu,
    accent: "blue" as const,
  },
  {
    title: "Customer Support Agent",
    description: "Умная поддержка 24/7 по базе знаний.",
    Icon: Layers,
    accent: "white" as const,
  },
  {
    title: "Sales Closer Agent",
    description: "ИИ-агент для дожима сделок в CRM.",
    Icon: Bot,
    accent: "blue" as const,
  },
];

/** Electric blue (#38bdf8) и нейтральный акцент; в dark — белый неон по designer.md. */
const accentStyles = {
  blue: "text-[#0ea5e9] shadow-[0_0_20px_rgba(14,165,233,0.18)] ring-1 ring-[#38bdf8]/45 bg-[#38bdf8]/12 dark:text-[#38bdf8] dark:shadow-[0_0_24px_rgba(56,189,248,0.2)] dark:ring-[#38bdf8]/50 dark:bg-[#38bdf8]/10",
  white:
    "text-[color:var(--color-ink-muted)] shadow-sm ring-1 ring-[color-mix(in_srgb,var(--color-ink-muted)_28%,transparent)] bg-[color-mix(in_srgb,var(--color-ink-muted)_08%,transparent)] dark:text-white dark:shadow-[0_0_24px_rgba(255,255,255,0.14)] dark:ring-white/40 dark:bg-white/[0.08]",
} as const;

export function AgentModules() {
  return (
    <motion.section
      id="modules"
      className="col-span-full mt-2 text-[color:var(--color-ink)] [scroll-margin-top:6rem] sm:mt-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -72px 0px" }}
      variants={moduleGridContainer}
      aria-label="Модули ИИ-агентов"
    >
      <h2 className="font-display text-center text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]">
        Модули
      </h2>
      <p className="font-display mx-auto mt-2 max-w-2xl text-balance text-center text-xl font-bold tracking-tight text-[color:var(--color-ink)] sm:text-2xl">
        ИИ-агенты для лидогенерации, поддержки и продаж
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
        {MODULES.map(({ title, description, Icon, accent }) => (
          <motion.div key={title} variants={moduleGridItem} whileHover={{ y: -1 }}>
            <BentoCard className="flex h-full flex-col">
              <span className={`inline-flex w-fit rounded-xl p-3 ${accentStyles[accent]}`}>
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="font-display mt-4 text-base font-bold tracking-tight text-[color:var(--color-ink)]">{title}</h3>
              <p className="font-display mt-2 flex-1 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">{description}</p>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
