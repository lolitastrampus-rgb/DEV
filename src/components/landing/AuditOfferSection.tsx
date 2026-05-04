import { Check } from "lucide-react";
import { useLocale } from "../../context/LocaleContext";
import { Button } from "../Button";
import { BentoCard } from "../BentoCard";

export function AuditOfferSection() {
  const { t } = useLocale();
  const { auditOffer: a } = t;

  return (
    <section
      id="audit-offer"
      className="col-span-full [scroll-margin-top:6rem]"
      aria-labelledby="audit-offer-heading"
    >
      <BentoCard emphasis className="p-6 sm:p-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">{a.kicker}</p>
        <h2 id="audit-offer-heading" className="font-display mt-3 text-xl font-bold tracking-tight text-ink sm:text-2xl">
          {a.title}
        </h2>
        <p className="font-display mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-[0.9375rem]">{a.howToApply}</p>
        <ul className="mt-6 space-y-3">
          {a.checklist.map((line) => (
            <li key={line} className="flex gap-3 text-sm leading-relaxed text-ink">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[color-mix(in_srgb,var(--color-ultra)_18%,transparent)] text-[color:var(--color-ultra-deep)] ring-1 ring-[color-mix(in_srgb,var(--color-ultra)_35%,transparent)] dark:text-[color:var(--color-ultra)]">
                <Check className="h-3 w-3" strokeWidth={2.25} aria-hidden />
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <Button variant="secondary" href={a.ctaHref} className="mt-8 min-h-11 px-8 py-2.5 text-sm">
          {a.cta}
        </Button>
      </BentoCard>
    </section>
  );
}
