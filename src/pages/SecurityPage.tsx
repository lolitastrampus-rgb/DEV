import { useLocale } from "../context/LocaleContext";
import { BentoCard } from "../components/BentoCard";
import { PageMeta } from "../components/PageMeta";
import { SiteChrome } from "../components/layout/SiteChrome";

export default function SecurityPage() {
  const { t } = useLocale();
  const d = t.legal.security;

  return (
    <>
      <PageMeta title={d.metaTitle} />
      <SiteChrome>
        <main className="relative z-10 flex-1 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
          <article className="mx-auto max-w-3xl">
            <BentoCard className="p-6 sm:p-10">
              <h1 className="font-display text-2xl font-bold tracking-tight text-ink">{d.heading}</h1>
              <p className="font-display mt-2 text-xs text-ink-muted">{d.updated}</p>
              <p className="font-display mt-6 text-sm leading-relaxed text-ink-muted">{d.intro}</p>
              <div className="font-display mt-10 space-y-8 border-t border-[color:var(--card-border)] pt-10">
                {d.sections.map((s) => (
                  <section key={s.title}>
                    <h2 className="font-display text-lg font-semibold text-ink">{s.title}</h2>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className="font-display mt-3 text-sm leading-relaxed text-ink-muted">
                        {p}
                      </p>
                    ))}
                  </section>
                ))}
              </div>
            </BentoCard>
          </article>
        </main>
      </SiteChrome>
    </>
  );
}
