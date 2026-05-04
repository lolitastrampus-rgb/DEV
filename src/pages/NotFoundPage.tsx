import { Link } from "react-router-dom";
import { useLocale } from "../context/LocaleContext";
import { mailtoHref } from "../i18n";
import { anchorButtonClass, Button } from "../components/Button";
import { BentoCard } from "../components/BentoCard";
import { cn } from "../lib/cn";
import { PageMeta } from "../components/PageMeta";
import { SiteChrome } from "../components/layout/SiteChrome";

export default function NotFoundPage() {
  const { t, locale } = useLocale();
  const n = t.notFound;

  return (
    <>
      <PageMeta title={n.metaTitle} />
      <SiteChrome>
        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-20 pt-28 sm:pt-32">
          <BentoCard className="mx-auto w-full max-w-md p-8 text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">{n.title}</p>
            <p className="font-display mt-4 text-sm leading-relaxed text-ink-muted">{n.body}</p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/"
                className={cn(anchorButtonClass("primary"), "min-h-11 justify-center px-6 text-sm")}
              >
                {n.homeCta}
              </Link>
              <Button variant="secondary" href={mailtoHref(locale, true)} className="min-h-11 justify-center px-6 text-sm">
                {n.auditCta}
              </Button>
            </div>
          </BentoCard>
        </main>
      </SiteChrome>
    </>
  );
}
