import { motion } from "framer-motion";
import { useLocale } from "../../context/LocaleContext";
import { caseGridContainer, caseGridItem, directionIcons } from "../../data/landing";
import { BentoCard } from "../BentoCard";

export function CasesSection() {
  const { t } = useLocale();

  return (
    <motion.section
      id="cases"
      className="col-span-full mt-2 [scroll-margin-top:6rem] sm:mt-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -80px 0px" }}
      variants={caseGridContainer}
      aria-label={t.directions.title}
    >
      <h2 className="font-display text-center text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
        {t.directions.kicker}
      </h2>
      <p className="font-display mx-auto mt-2 max-w-xl text-balance text-center text-lg font-bold text-ink sm:text-xl">
        {t.directions.title}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-4">
        {t.directions.items.map((item, index) => {
          const Icon = directionIcons[index];
          return (
            <motion.div
              key={item.title}
              variants={caseGridItem}
              className="md:col-span-4"
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
            >
              <BentoCard className="flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="inline-flex rounded-xl bg-[#ff5733]/10 p-3 text-[#ff5733] ring-1 ring-[#ff5733]/15">
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="font-display rounded-full bg-[color:var(--panel-bg)] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-ink-muted ring-1 ring-[color:var(--card-border)]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="font-display mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-[color:var(--card-border)] pt-5 font-display text-xs text-ink-muted">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#ff5733]/90" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
