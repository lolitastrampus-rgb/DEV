import { processSteps } from "../../data/landing";
import { BentoCard } from "../BentoCard";

export function ProcessBand() {
  return (
    <>
      <BentoCard className="col-span-full md:col-span-5" id="process">
        <h2 className="font-display text-sm font-bold text-zinc-950">Как внедряем</h2>
        <p className="font-display mt-1 text-xs text-zinc-500">Три шага — от ясности до масштаба</p>
        <ol className="mt-6 flex flex-col gap-5">
          {processSteps.map((step, i) => (
            <li key={step.title} className="flex gap-3">
              <span
                className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff5733]/12 text-xs font-bold text-[#c2410c]"
                aria-hidden
              >
                {i + 1}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-zinc-950">{step.title}</p>
                <p className="font-display mt-1 text-xs leading-relaxed text-zinc-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </BentoCard>

      <BentoCard emphasis className="col-span-full flex flex-col justify-center md:col-span-7">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
          Следующий шаг
        </p>
        <p className="font-display mt-3 text-xl font-bold text-zinc-950 sm:text-2xl">
          Короткий созвон — и вы понимаете, какой модуль даст эффект первым.
        </p>
        <a
          href="#cta"
          className="btn-ultra font-display mt-6 inline-flex w-fit items-center justify-center rounded-full px-7 py-2.5 text-sm font-semibold"
        >
          Заказать разработку
        </a>
      </BentoCard>
    </>
  );
}
