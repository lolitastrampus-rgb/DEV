import { nutritionBullets } from "../../data/landing";
import { BentoCard } from "../BentoCard";

export function NutritionSection() {
  return (
    <section
      id="nutrition"
      className="col-span-full [scroll-margin-top:6rem]"
      aria-label="Премиум-питание"
    >
      <BentoCard emphasis className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Нутрициология
          </p>
          <h2 className="font-display mt-4 text-balance text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-[2rem]">
            Питание премиум-уровня на автопилоте
          </h2>
          <p className="font-display mt-5 text-pretty text-base font-medium leading-relaxed text-zinc-800 sm:text-lg">
            Агент работает как цифровой нутрициолог частной клиники: собирает суточные ориентиры по
            макронутриентам, гидратации и восстановлению, учитывает ваши ограничения и биоритм, а не
            «среднюю норму из интернета».
          </p>
          <p className="font-display mt-4 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
            Он автоматически собирает сменные рационы из проверенных источников, пересчитывает порции
            под фактический вес, активность и сон, синхронизирует закупку и кухонный цикл — от списка
            продуктов до тарелки. Это не чат-советчик: это конвейер решений с прозрачной логикой,
            биодоступностью и сезонностью там, где вы задаёте стандарт.
          </p>
          <ul className="font-display mt-8 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
            {nutritionBullets.map((line) => (
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
