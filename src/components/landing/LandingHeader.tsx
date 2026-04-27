import { navLinks } from "../../data/landing";

export function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className="vision-glass flex w-full max-w-6xl items-center justify-between gap-2 rounded-2xl px-3 py-3 sm:gap-3 sm:px-5"
        aria-label="Основная навигация"
      >
        <a
          href="#"
          className="logo-brand shrink-0 text-xs font-bold text-zinc-900 sm:text-sm md:text-base"
        >
          AgentLab
        </a>

        <div className="hidden items-center gap-5 sm:gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="btn-ultra font-display inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2 text-xs font-semibold sm:px-5 sm:text-sm"
        >
          Заказать внедрение
        </a>
      </nav>
    </header>
  );
}
