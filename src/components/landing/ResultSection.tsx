import { resultBullets } from "../../data/landing";
import { BentoCard } from "../BentoCard";

export function ResultSection() {
  return (
    <section
      id="result"
      className="col-span-full [scroll-margin-top:6rem]"
      aria-label="Результат для атлета"
    >
      <BentoCard className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ff5733]/12 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff5733]">
            Результат
          </p>
          <h2 className="font-display mt-4 text-balance text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-[2rem]">
            Доводим до цели без сахара и срывов
          </h2>
          <p className="font-display mt-5 text-pretty text-base font-medium leading-relaxed text-zinc-800 sm:text-lg">
            Ночные срывы, скрытый сахар и пропущенные тренировки — это не «слабая воля». Это сбой
            системы между намерением и действием. Наш ИИ-агент закрывает этот разрыв: заранее
            убирает триггеры, подсказывает замены без глюкозных качелей и удерживает белок,
            клетчатку и калорийность в рабочем коридоре — без насилия над расписанием.
          </p>
          <p className="font-display mt-4 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
            Вы движетесь к форме и показателям так же предсказуемо, как к релизу продукта: спринт
            за спринтом, с понятными метриками и без отката в хаос. Дисциплина становится
            инфраструктурой — не харизмой.
          </p>
          <ul className="font-display mt-8 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
            {resultBullets.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ff5733]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </BentoCard>
    </section>
  );
}
