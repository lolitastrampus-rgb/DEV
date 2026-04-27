import { useLocale } from "../../context/LocaleContext";
import { NAV_HREF } from "../../data/siteNav";
import { mailtoHref } from "../../i18n";

export function LandingFooter() {
  const { t, locale } = useLocale();

  return (
    <footer className="site-footer relative z-10 mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between md:gap-12">
        <div>
          <a href="#" className="logo-brand text-sm font-bold text-ink">
            AgentLab
          </a>
          <p className="font-display mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
            {t.footer.tagline}
          </p>
        </div>

        <nav aria-label={t.footer.sections} className="flex flex-col gap-3">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-ink-muted">
            {t.footer.sections}
          </p>
          <a
            href={NAV_HREF.trainings}
            className="font-display text-sm font-medium text-ink transition-colors hover:text-[#ff5733]"
          >
            {t.footerNav.trainings}
          </a>
          <a
            href={NAV_HREF.nutrition}
            className="font-display text-sm font-medium text-ink transition-colors hover:text-[#ff5733]"
          >
            {t.footerNav.nutrition}
          </a>
          <a
            href={NAV_HREF.modules}
            className="font-display text-sm font-medium text-ink transition-colors hover:text-[#ff5733]"
          >
            {t.footerNav.aboutAgents}
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
            className="font-display text-sm font-medium text-[#ff5733] hover:underline"
          >
            {t.footer.contact}
          </a>
        </div>
      </div>
      <div className="border-t border-[color:var(--card-border)] py-4 text-center">
        <p className="font-display text-xs text-ink-muted">
          © {new Date().getFullYear()} AgentLab. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
