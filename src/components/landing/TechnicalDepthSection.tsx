import { Link } from "react-router-dom";
import { useLocale } from "../../context/LocaleContext";
import { BentoCard } from "../BentoCard";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function TechnicalDepthSection() {
  const { t } = useLocale();
  const arch = t.architecture;
  const eng = t.engineering;

  return (
    <>
      <section id="architecture" className="col-span-full" aria-labelledby="architecture-heading">
        <BentoCard className="col-span-full p-6 sm:p-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-ultra)]">{arch.kicker}</p>
          <h2 id="architecture-heading" className="font-display mt-3 text-xl font-bold tracking-tight text-ink sm:text-2xl">
            {arch.title}
          </h2>
          <p className="font-display mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-[0.9375rem]">{arch.intro}</p>
          <ArchitectureDiagram />
          <div className="mt-10 grid gap-6 border-t border-[color:var(--card-border)] pt-8 sm:grid-cols-2 sm:gap-8">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">{arch.human.title}</p>
              <p className="font-display mt-2 text-sm leading-relaxed text-ink-muted">{arch.human.body}</p>
            </div>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">{arch.escalation.title}</p>
              <p className="font-display mt-2 text-sm leading-relaxed text-ink-muted">{arch.escalation.body}</p>
            </div>
          </div>
        </BentoCard>
      </section>

      <BentoCard className="col-span-full p-6 sm:p-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-ultra)]">{eng.kicker}</p>
        <h2 className="font-display mt-3 text-xl font-bold tracking-tight text-ink sm:text-2xl">{eng.title}</h2>
        <p className="font-display mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-[0.9375rem]">{eng.intro}</p>
        <ul className="mt-8 divide-y divide-[color:var(--card-border)] font-display">
          {eng.practices.map((row) => (
            <li key={row.name} className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:gap-6">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ultra-deep)] dark:text-[color:var(--color-ultra)] sm:w-[10.5rem]">
                {row.name}
              </span>
              <span className="text-sm leading-relaxed text-ink-muted">{row.detail}</span>
            </li>
          ))}
        </ul>
        <p className="font-display mt-8 text-xs text-ink-muted">
          <Link to="/security" className="font-semibold text-[color:var(--color-ultra)] underline-offset-2 hover:underline">
            {eng.securityLink}
          </Link>
        </p>
      </BentoCard>
    </>
  );
}
