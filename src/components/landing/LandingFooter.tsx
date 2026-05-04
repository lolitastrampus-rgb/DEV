import { useLocale } from "../../context/LocaleContext";
import { NAV_HREF } from "../../data/siteNav";
import { mailtoHref } from "../../i18n";
import { Button } from "../Button";

const WHATSAPP_URL = "https://wa.me/79001234567";

export function LandingFooter() {
  const { t, locale } = useLocale();

  return (
    <footer className="site-footer relative z-10 mt-auto border-t border-[color:var(--card-border)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between md:gap-12">
        <div>
          <a href="#top" className="logo-brand text-sm font-bold text-ink">
            AI Agent Labs
          </a>
          <p className="font-display mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            {t.footer.tagline}
          </p>
          <Button
            variant="primary"
            href={mailtoHref(locale, true)}
            className="mt-6 min-h-11 px-8 py-2.5 text-sm"
          >
            {t.footer.auditCta}
          </Button>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <a
              href={t.cta.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm font-medium text-[color:var(--color-ultra)] underline-offset-2 hover:underline"
            >
              {t.footer.telegram}
            </a>
            <span className="text-ink-muted" aria-hidden>
              ·
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm font-medium text-[color:var(--color-ultra)] underline-offset-2 hover:underline"
            >
              {t.footer.whatsapp}
            </a>
          </div>
        </div>

        <nav aria-label={t.footer.sections} className="flex flex-col gap-3">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-ink-muted">
            {t.footer.sections}
          </p>
          <a
            href={NAV_HREF.modules}
            className="font-display text-sm font-medium text-ink transition-colors hover:text-[color:var(--color-ultra)]"
          >
            {t.footerNav.modules}
          </a>
          <a
            href={NAV_HREF.process}
            className="font-display text-sm font-medium text-ink transition-colors hover:text-[color:var(--color-ultra)]"
          >
            {t.footerNav.process}
          </a>
          <a
            href={NAV_HREF.reviews}
            className="font-display text-sm font-medium text-ink transition-colors hover:text-[color:var(--color-ultra)]"
          >
            {t.footerNav.reviews}
          </a>
          <a
            href={NAV_HREF.cases}
            className="font-display text-sm font-medium text-ink transition-colors hover:text-[color:var(--color-ultra)]"
          >
            {t.footerNav.cases}
          </a>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-ink-muted">
            {t.footer.legal}
          </p>
          <a href="#" className="font-display text-sm text-ink-muted transition-colors hover:text-ink">
            {t.footer.privacy}
          </a>
          <a href="#" className="font-display text-sm text-ink-muted transition-colors hover:text-ink">
            {t.footer.terms}
          </a>
          <a
            href={mailtoHref(locale)}
            className="font-display text-sm font-medium text-[color:var(--color-ultra)] hover:underline"
          >
            {t.footer.contact}
          </a>
        </div>
      </div>
      <div className="border-t border-[color:var(--card-border)] py-4 text-center">
        <p className="font-display text-xs text-ink-muted">© {t.footer.copyright}</p>
      </div>
    </footer>
  );
}
