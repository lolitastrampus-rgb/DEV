import { motion } from "framer-motion";
import { useLocale } from "../../context/LocaleContext";
import { moduleGridContainer, moduleGridItem } from "../../data/landing";
import { BentoCard } from "../BentoCard";

export function TestimonialsSection() {
  const { t } = useLocale();

  return (
    <motion.section
      id="reviews"
      className="col-span-full [scroll-margin-top:6rem]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -64px 0px" }}
      variants={moduleGridContainer}
      aria-label={t.reviews.title}
    >
      <h2 className="font-display text-center text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">
        {t.reviews.kicker}
      </h2>
      <p className="font-display mx-auto mt-2 max-w-xl text-balance text-center text-lg font-bold text-ink sm:text-xl">
        {t.reviews.title}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
        {t.reviews.items.map((item) => (
          <motion.div key={item.name} variants={moduleGridItem} whileHover={{ y: -3 }}>
            <BentoCard className="flex h-full flex-col">
              {item.metric ? (
                <p className="font-display w-fit rounded-full bg-[color-mix(in_srgb,var(--color-ultra)_18%,transparent)] px-3 py-1 text-xs font-semibold text-[color:var(--color-ultra-deep)]">
                  {item.metric}
                </p>
              ) : null}
              <blockquote className="font-display mt-4 flex-1 text-sm leading-relaxed text-ink">
                «{item.quote}»
              </blockquote>
              <footer className="mt-6 border-t border-[color:var(--card-border)] pt-4">
                <p className="font-display text-sm font-semibold text-ink">{item.name}</p>
                <p className="font-display text-xs text-ink-muted">{item.role}</p>
              </footer>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
