import { useLocale } from "../../context/LocaleContext";
import { NAV_HREF, NAV_ORDER } from "../../data/siteNav";
import { HeaderToolbar } from "./HeaderToolbar";

export function LandingHeader() {
  const { t } = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className="vision-glass flex w-full max-w-6xl items-center justify-between gap-2 rounded-2xl px-3 py-3 sm:gap-3 sm:px-5"
        aria-label="Основная навигация"
      >
        <a href="#" className="logo-brand shrink-0 text-xs font-bold text-ink sm:text-sm md:text-base">
          AgentLab
        </a>

        <div className="hidden items-center gap-3 lg:gap-4 xl:flex">
          {NAV_ORDER.map((id) => (
            <a
              key={id}
              href={NAV_HREF[id]}
              className="font-display text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {t.nav[id]}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <HeaderToolbar />
          <a
            href={NAV_HREF.cta}
            className="btn-ultra font-display inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold sm:px-5 sm:text-sm"
          >
            {t.header.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
