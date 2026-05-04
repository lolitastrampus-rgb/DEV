import { useLocale } from "../../context/LocaleContext";
import { mailtoHref } from "../../i18n";
import { Button } from "../Button";
import { BentoCard } from "../BentoCard";

export function ProcessBand() {
  const { t, locale } = useLocale();

  return (
    <>
      <BentoCard className="col-span-full md:col-span-5" id="process">
        <h2 className="font-display text-sm font-bold text-ink">{t.process.title}</h2>
        <p className="font-display mt-1 text-xs text-ink-muted">{t.process.subtitle}</p>
        <ol className="mt-6 flex flex-col gap-5">
          {t.process.steps.map((step, i) => (
            <li key={step.title} className="flex gap-3">
              <span
                className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-ultra)_22%,transparent)] text-xs font-bold text-[color:var(--color-ultra-deep)]"
                aria-hidden
              >
                {i + 1}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink">{step.title}</p>
                <p className="font-display mt-1 text-xs leading-relaxed text-ink-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </BentoCard>

      <BentoCard emphasis className="col-span-full flex flex-col justify-center md:col-span-7">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
          {t.process.nextKicker}
        </p>
        <p className="font-display mt-3 text-xl font-bold text-ink sm:text-2xl">{t.process.nextTitle}</p>
        <Button variant="primary" href={mailtoHref(locale, true)} className="mt-6 w-fit px-7 py-2.5 text-sm">
          {t.process.nextCta}
        </Button>
      </BentoCard>
    </>
  );
}
