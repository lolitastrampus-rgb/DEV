import { useLocale } from "../../context/LocaleContext";
import { BentoCard } from "../BentoCard";

export function EconomicsSection() {
  const { t } = useLocale();
  const { economics: e } = t;

  return (
    <section
      id="economics"
      className="col-span-full space-y-4 [scroll-margin-top:6rem]"
      aria-labelledby="economics-heading"
    >
      <BentoCard className="p-6 sm:p-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-ultra)]">
          {e.kicker}
        </p>
        <h2 id="economics-heading" className="font-display mt-3 text-xl font-bold tracking-tight text-ink sm:text-2xl">
          {e.title}
        </h2>
        <p className="font-display mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-[0.9375rem]">{e.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {e.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] px-4 py-4 backdrop-blur-sm"
            >
              <p className="font-display text-2xl font-bold tracking-tight text-[color:var(--color-ultra-deep)] dark:text-[color:var(--color-ultra)] sm:text-[1.65rem]">
                {s.value}
              </p>
              <p className="font-display mt-1 text-sm font-semibold text-ink">{s.label}</p>
              <p className="font-display mt-2 text-xs leading-relaxed text-ink-muted">{s.hint}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-[color:var(--card-border)]">
          <table className="w-full min-w-[520px] border-collapse font-display text-left text-sm">
            <caption className="caption-top mb-3 px-1 text-left font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              {e.compareCaption}
            </caption>
            <thead>
              <tr className="border-b border-[color:var(--card-border)] bg-[color-mix(in_srgb,var(--color-ultra)_10%,transparent)]">
                <th className="max-w-[45%] px-4 py-3 font-semibold text-ink">{e.compareCols[0]}</th>
                <th className="max-w-[45%] px-4 py-3 font-semibold text-ink">{e.compareCols[1]}</th>
              </tr>
            </thead>
            <tbody>
              {e.compareRows.map((row, i) => (
                <tr key={i} className="border-b border-[color:var(--card-border)] last:border-b-0">
                  <td className="align-top px-4 py-3 text-ink-muted">{row.before}</td>
                  <td className="align-top px-4 py-3 text-ink">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </BentoCard>
    </section>
  );
}
