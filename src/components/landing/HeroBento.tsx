import { Sparkles } from "lucide-react";
import { useLocale } from "../../context/LocaleContext";
import { NAV_HREF } from "../../data/siteNav";
import { BentoCard } from "../BentoCard";

export function HeroMainCard() {
  const { t } = useLocale();

  return (
    <BentoCard
      emphasis
      className="md:col-span-8 md:col-start-1 md:row-start-1 [scroll-margin-top:6rem] sm:[scroll-margin-top:7rem]"
    >
      <p className="font-display flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        <Sparkles className="h-3.5 w-3.5 text-[#ff5733]" aria-hidden />
        {t.hero.badge}
      </p>
      <h1 className="font-display mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.25rem]">
        {t.hero.line1}
        <br />
        <span className="text-vibrancy">{t.hero.line2Gradient}</span>
      </h1>
      <p className="font-display mt-5 max-w-2xl text-pretty text-lg font-semibold leading-snug text-ink sm:text-xl">
        {t.hero.lead}
      </p>
      <p className="font-display mt-4 max-w-xl text-pretty text-sm leading-relaxed text-ink-muted sm:text-base">
        {t.hero.body}
      </p>
      <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <a
          href={NAV_HREF.cta}
          className="btn-ultra font-display inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3 text-sm font-semibold"
        >
          {t.hero.ctaPrimary}
        </a>
        <a
          href="#demo"
          className="btn-glass-outline font-display inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3 text-sm font-semibold"
        >
          {t.hero.ctaDemo}
        </a>
      </div>
    </BentoCard>
  );
}

export function HeroSideCard() {
  const { t } = useLocale();

  return (
    <BentoCard className="flex flex-col justify-between md:col-span-4 md:col-start-9 md:row-start-1">
      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          {t.hero.sideKicker}
        </p>
        <p className="font-display mt-3 text-2xl font-bold tracking-tight text-ink">{t.hero.sideTitle}</p>
        <p className="font-display mt-2 text-sm leading-relaxed text-ink-muted">{t.hero.sideBody}</p>
      </div>
      <div
        id="demo"
        className="mt-8 scroll-mt-28 rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] p-4 shadow-sm backdrop-blur-md"
      >
        <p className="font-display text-[0.65rem] font-bold uppercase tracking-wider text-ink-muted">
          {t.hero.demoLabel}
        </p>
        <p className="font-display mt-2 text-sm font-semibold text-ink">{t.hero.demoTitle}</p>
        <p className="font-display mt-1 text-xs text-ink-muted">{t.hero.demoHint}</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[color:var(--card-border)]">
          <div className="h-full w-3/4 rounded-full bg-[#ff5733]" aria-hidden />
        </div>
      </div>
    </BentoCard>
  );
}
