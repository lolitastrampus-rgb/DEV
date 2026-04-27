import { motion } from "framer-motion";
import { useLocale } from "../../context/LocaleContext";
import { moduleGridContainer, moduleGridItem, moduleIcons } from "../../data/landing";
import { BentoCard } from "../BentoCard";

export function ModulesSection() {
  const { t } = useLocale();

  return (
    <motion.section
      id="modules"
      className="col-span-full mt-2 [scroll-margin-top:6rem] sm:mt-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -72px 0px" }}
      variants={moduleGridContainer}
      aria-label={t.modules.title}
    >
      <h2 className="font-display text-center text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">
        {t.modules.kicker}
      </h2>
      <p className="font-display mx-auto mt-2 max-w-2xl text-balance text-center text-xl font-bold tracking-tight text-ink sm:text-2xl">
        {t.modules.title}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {t.modules.cards.map((m, i) => {
          const Icon = moduleIcons[i];
          return (
            <motion.div key={m.title} variants={moduleGridItem} whileHover={{ y: -3 }}>
              <BentoCard className="flex h-full flex-col">
                <span className="inline-flex w-fit rounded-xl bg-[#ff5733]/10 p-3 text-[#ff5733] ring-1 ring-[#ff5733]/15">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="font-display mt-4 text-base font-bold text-ink">{m.title}</h3>
                <p className="font-display mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {m.description}
                </p>
              </BentoCard>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
