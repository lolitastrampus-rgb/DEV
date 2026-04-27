import { useLocale } from "../../context/LocaleContext";
import { BentoCard } from "../BentoCard";

export function SmartMenuSection() {
  const { t } = useLocale();

  return (
    <section
      id="smart-menu"
      className="col-span-full [scroll-margin-top:6rem]"
      aria-label={t.menu.aria}
    >
      <BentoCard emphasis className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#ff5733]/08 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
              {t.menu.kicker}
            </p>
            <h2 className="font-display mt-4 text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {t.menu.title}
            </h2>
            <p className="font-display mt-5 text-pretty text-base font-medium leading-relaxed text-ink sm:text-lg">
              {t.menu.p1}
            </p>
            <p className="font-display mt-4 text-pretty text-sm leading-relaxed text-ink-muted sm:text-base">
              {t.menu.p2}
            </p>
            <ul className="font-display mt-8 grid gap-3 text-sm text-ink sm:grid-cols-1">
              {t.menu.bullets.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ff5733]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink-muted">
              {t.menu.rationTitle}
            </h3>
            <p className="font-display mt-2 text-xs text-ink-muted">{t.menu.rationHint}</p>
            <ul className="mt-6 space-y-4">
              {t.menu.rationRows.map((row) => (
                <li
                  key={row.meal}
                  className="rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--panel-bg)] p-4 shadow-sm"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-display text-sm font-bold text-ink">{row.meal}</span>
                    <span className="font-display text-xs tabular-nums text-ink-muted">{row.kcal}</span>
                  </div>
                  <p className="font-display mt-2 text-sm leading-snug text-ink">{row.dish}</p>
                  <p className="font-display mt-2 text-xs text-ink-muted">{row.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BentoCard>
    </section>
  );
}
