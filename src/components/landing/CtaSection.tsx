import { MAILTO_ORDER } from "../../data/landing";
import { BentoCard } from "../BentoCard";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="col-span-full mt-2 [scroll-margin-top:6rem] sm:mt-4"
      aria-label="Связаться"
    >
      <BentoCard emphasis className="text-center">
        <h2 className="font-display text-xl font-bold text-zinc-950 sm:text-2xl">
          Готовы собрать систему под ваш стандарт?
        </h2>
        <p className="font-display mx-auto mt-3 max-w-lg text-pretty text-sm text-zinc-600 sm:text-base">
          Опишите процесс — предложим архитектуру агентов, оценку и пилот без лишней бюрократии.
        </p>
        <a
          href={MAILTO_ORDER}
          className="btn-ultra font-display mx-auto mt-8 inline-flex min-h-11 items-center justify-center rounded-full px-10 py-2.5 text-sm font-semibold"
        >
          Заказать разработку
        </a>
        <p className="font-display mt-4 text-xs text-zinc-500">
          Напишите на{" "}
          <a
            href="mailto:hello@agentlab.dev"
            className="font-medium text-[#c2410c] underline decoration-[#ff5733]/35 underline-offset-2 hover:decoration-[#ff5733]"
          >
            hello@agentlab.dev
          </a>
          {" —"} ответим с вилкой сроков и составом работ.
        </p>
      </BentoCard>
    </section>
  );
}
