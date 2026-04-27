import { useLocale } from "../../context/LocaleContext";
import { mailtoHref } from "../../i18n";
import { BentoCard } from "../BentoCard";

export function CtaSection() {
  const { t, locale } = useLocale();

  return (
    <section
      id="cta"
      className="col-span-full mt-2 [scroll-margin-top:6rem] sm:mt-4"
      aria-label={t.nav.cta}
    >
      <BentoCard emphasis className="text-center">
        <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{t.cta.title}</h2>
        <p className="font-display mx-auto mt-3 max-w-lg text-pretty text-sm text-ink-muted sm:text-base">
          {t.cta.body}
        </p>
        <a
          href={mailtoHref(locale, true)}
          className="btn-ultra font-display mx-auto mt-8 inline-flex min-h-11 items-center justify-center rounded-full px-10 py-2.5 text-sm font-semibold"
        >
          {t.cta.button}
        </a>
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--panel-bg)] p-6 text-left">
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-wider text-ink-muted">
            {t.cta.telegramKicker}
          </p>
          <p className="font-display mt-3 text-sm leading-relaxed text-ink">{t.cta.telegramLead}</p>
          <a
            href={t.cta.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass-outline font-display mt-5 inline-flex w-full min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            {t.cta.telegramCta}
          </a>
        </div>
        <p className="font-display mt-8 text-xs text-ink-muted">
          {t.cta.emailIntro}{" "}
          <a
            href="mailto:hello@agentlab.dev"
            className="font-medium text-[color:var(--color-ultra-deep)] underline decoration-[color-mix(in_srgb,var(--color-ultra)_40%,transparent)] underline-offset-2 hover:decoration-[color:var(--color-ultra)]"
          >
            hello@agentlab.dev
          </a>
          {" — "}
          {t.cta.emailLine}
        </p>
      </BentoCard>
    </section>
  );
}
