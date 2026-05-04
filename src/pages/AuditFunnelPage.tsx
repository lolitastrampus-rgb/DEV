import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderToolbar } from "../components/landing/HeaderToolbar";
import { useLocale } from "../context/LocaleContext";
import { mailtoHref } from "../i18n";

export default function AuditFunnelPage() {
  const { t, locale } = useLocale();
  const a = t.auditFunnel;

  useEffect(() => {
    document.title = a.metaTitle;
  }, [a.metaTitle]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050507] text-zinc-100 antialiased">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-8%,rgba(56,189,248,0.16),transparent_58%),radial-gradient(ellipse_50%_42%_at_100%_100%,rgba(99,102,241,0.1),transparent_55%)]"
      />
      <header className="relative z-20 flex justify-center px-4 pt-6 sm:px-6">
        <div className="flex w-full max-w-6xl items-center justify-between gap-3 rounded-2xl border border-white/[0.09] bg-black/40 px-4 py-3 backdrop-blur-xl sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              to="/"
              className="logo-brand shrink-0 text-xs font-bold tracking-[0.12em] text-white sm:text-sm"
            >
              AI Agent Labs
            </Link>
            <span className="hidden h-5 w-px bg-white/15 sm:block" aria-hidden />
            <Link
              to="/"
              className="font-display hidden text-xs font-medium text-zinc-400 transition-colors hover:text-white sm:inline sm:text-sm"
            >
              {a.backHome}
            </Link>
          </div>
          <HeaderToolbar />
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-lg px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20">
        <p className="font-display inline-flex w-fit rounded-full border border-sky-400/35 bg-sky-400/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-sky-300">
          {a.badge}
        </p>
        <h1 className="font-display mt-6 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-[2rem]">
          {a.title}
        </h1>
        <p className="font-display mt-5 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-[0.9375rem]">
          {a.subtitle}
        </p>
        <ul className="font-display mt-10 space-y-3.5 text-sm leading-relaxed text-zinc-300">
          {a.bullets.map((line) => (
            <li key={line} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-400" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            to="/#cta"
            className="font-display inline-flex min-h-11 items-center justify-center rounded-full bg-sky-500 px-7 text-center text-sm font-semibold text-white ring-1 ring-sky-400/50 transition-colors hover:bg-sky-400 sm:min-h-12"
          >
            {a.primaryCta}
          </Link>
          <a
            href={mailtoHref(locale, true)}
            className="font-display inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 text-center text-sm font-semibold text-zinc-100 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-white/[0.09] sm:min-h-12"
          >
            {a.secondaryCta}
          </a>
        </div>
        <p className="font-display mt-10 text-xs leading-relaxed text-zinc-500">{a.footnote}</p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.07] pt-6 text-xs text-zinc-500">
          <Link to="/privacy" className="font-display transition-colors hover:text-zinc-300">
            {t.footer.privacy}
          </Link>
          <Link to="/terms" className="font-display transition-colors hover:text-zinc-300">
            {t.footer.terms}
          </Link>
          <Link to="/security" className="font-display transition-colors hover:text-zinc-300">
            {t.footer.security}
          </Link>
        </div>
      </main>
    </div>
  );
}
