import { motion } from "framer-motion";
import { useLocale } from "../../context/LocaleContext";
import { moduleGridContainer, moduleGridItem } from "../../data/landing";
import { BentoCard } from "../BentoCard";

export function TrainingProgramsSection() {
  const { t } = useLocale();

  return (
    <motion.section
      id="trainings"
      className="col-span-full [scroll-margin-top:6rem]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -64px 0px" }}
      variants={moduleGridContainer}
      aria-label={t.trainings.title}
    >
      <h2 className="font-display text-center text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">
        {t.trainings.kicker}
      </h2>
      <p className="font-display mx-auto mt-2 max-w-2xl text-balance text-center text-xl font-bold tracking-tight text-ink sm:text-2xl">
        {t.trainings.title}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
        {t.trainings.programs.map((p) => (
          <motion.div key={p.title} variants={moduleGridItem} whileHover={{ y: -3 }}>
            <BentoCard className="flex h-full flex-col">
              <p className="font-display text-xs font-semibold uppercase tracking-wide text-[#ff5733]">
                {p.subtitle}
              </p>
              <h3 className="font-display mt-3 text-lg font-bold text-ink">{p.title}</h3>
              <p className="font-display mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                {p.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-[color:var(--card-border)] pt-5 font-display text-xs text-ink-muted">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#ff5733]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
