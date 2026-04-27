import { Sparkles } from "lucide-react";
import { BentoCard } from "../BentoCard";

export function HeroMainCard() {
  return (
    <BentoCard
      emphasis
      className="md:col-span-8 md:col-start-1 md:row-start-1 [scroll-margin-top:6rem] sm:[scroll-margin-top:7rem]"
    >
      <p className="font-display flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        <Sparkles className="h-3.5 w-3.5 text-[#ff5733]" aria-hidden />
        ИИ-агенты премиум-класса
      </p>
      <h1 className="font-display mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-950 sm:text-5xl lg:text-[3.25rem]">
        Система,
        <br />
        <span className="text-vibrancy">которая ведёт к цели.</span>
      </h1>
      <p className="font-display mt-5 max-w-2xl text-pretty text-lg font-semibold leading-snug text-zinc-800 sm:text-xl">
        Без шума. Без случайности. Модульная архитектура — как у продуктов, за которыми вы
        гонитесь.
      </p>
      <p className="font-display mt-4 max-w-xl text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
        Проектируем и внедряем агентов с интерфейсом уровня Apple и дисциплиной уровня Linear:
        ясные контуры, предсказуемые решения, аккуратная интеграция в ваши процессы.
      </p>
      <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <a
          href="#cta"
          className="btn-ultra font-display inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3 text-sm font-semibold"
        >
          Заказать разработку
        </a>
        <a
          href="#modules"
          className="btn-glass-outline font-display inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3 text-sm font-semibold"
        >
          Смотреть модули
        </a>
      </div>
    </BentoCard>
  );
}

export function HeroSideCard() {
  return (
    <BentoCard className="flex flex-col justify-between md:col-span-4 md:col-start-9 md:row-start-1">
      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Модульность
        </p>
        <p className="font-display mt-3 text-2xl font-bold tracking-tight text-zinc-950">
          Соберите систему под задачу
        </p>
        <p className="font-display mt-2 text-sm leading-relaxed text-zinc-600">
          Каждый блок — сменный модуль. Масштаб без боли: от пилота до продакшена.
        </p>
      </div>
      <div className="mt-8 rounded-2xl border border-white/60 bg-white/35 p-4 backdrop-blur-md">
        <p className="font-display text-[0.65rem] font-bold uppercase tracking-wider text-zinc-500">
          Статус
        </p>
        <p className="font-display mt-2 text-sm font-semibold text-zinc-900">
          Готовы к диагностике внедрения
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-200/80">
          <div className="h-full w-3/4 rounded-full bg-[#ff5733]" aria-hidden />
        </div>
      </div>
    </BentoCard>
  );
}
