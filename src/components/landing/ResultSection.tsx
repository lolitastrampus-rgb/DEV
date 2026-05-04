import { useLocale } from "../../context/LocaleContext";
import { BentoCard } from "../BentoCard";

export function ResultSection() {
  const { t } = useLocale();

  return (
    <section id="result" className="col-span-full [scroll-margin-top:6rem]" aria-label={t.result.title}>
      <BentoCard className="relative">
        <div className="max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-ultra)]">
            {t.result.kicker}
          </p>
          <h2 className="font-display mt-4 text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2rem]">
            {t.result.title}
          </h2>
          <p className="font-display mt-5 text-pretty text-base font-medium leading-relaxed text-ink sm:text-lg">{t.result.p1}</p>
          <p className="font-display mt-4 text-pretty text-sm leading-relaxed text-ink-muted sm:text-base">{t.result.p2}</p>
          <ul className="font-display mt-8 grid gap-3 text-sm text-ink sm:grid-cols-2">
            {t.result.bullets.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-ultra)]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </BentoCard>
    </section>
  );
}
