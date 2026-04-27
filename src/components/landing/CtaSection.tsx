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
          href={mailtoHref(locale)}
          className="btn-ultra font-display mx-auto mt-8 inline-flex min-h-11 items-center justify-center rounded-full px-10 py-2.5 text-sm font-semibold"
        >
          {t.cta.button}
        </a>
        <p className="font-display mt-4 text-xs text-ink-muted">
          {locale === "ru" ? (
            <>
              Напишите на{" "}
              <a
                href="mailto:hello@agentlab.dev"
                className="font-medium text-[#c2410c] underline decoration-[#ff5733]/35 underline-offset-2 hover:decoration-[#ff5733]"
              >
                hello@agentlab.dev
              </a>
              {" — "}
              {t.cta.emailLine}
            </>
          ) : (
            <>
              Email{" "}
              <a
                href="mailto:hello@agentlab.dev"
                className="font-medium text-[#c2410c] underline decoration-[#ff5733]/35 underline-offset-2 hover:decoration-[#ff5733]"
              >
                hello@agentlab.dev
              </a>
              {" — "}
              {t.cta.emailLine}
            </>
          )}
        </p>
      </BentoCard>
    </section>
  );
}
