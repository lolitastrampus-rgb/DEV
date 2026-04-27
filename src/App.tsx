import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Apple,
  ChefHat,
  Cpu,
  Dumbbell,
  Utensils,
  Watch,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ActivityRings } from "./components/ActivityRings";
import { MiniChart } from "./components/MiniChart";
import { cn } from "./lib/cn";

type Agent = "nutrition" | "workout";

const agentCopy: Record<
  Agent,
  { title: string; hint: string; lines: { k: string; v: string }[] }
> = {
  nutrition: {
    title: "Питание",
    hint: "Калории, макро и вода",
    lines: [
      { k: "Сегодня", v: "1 950 ккал к плану" },
      { k: "Белок", v: "112 г" },
      { k: "Вода", v: "1,8 л" },
    ],
  },
  workout: {
    title: "Тренировки",
    hint: "Нагрузка и восстановление",
    lines: [
      { k: "Неделя", v: "68% объёма" },
      { k: "Восстановление", v: "42%" },
      { k: "Сон", v: "7,2 ч" },
    ],
  },
};

const transitionContent = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
};

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#nutrition", label: "Nutrition" },
  { href: "#app-preview", label: "App Preview" },
] as const;

const featureCards: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Activity,
    title: "Spatial Biometrics",
    description:
      "Visualize your heart rate, pace, and VO2 Max in real-time augmented reality. Professional telemetry for Candidate Masters.",
  },
  {
    icon: Utensils,
    title: "Pro-Chef Nutrition",
    description:
      "Elite-level fueling. Optimized protocols: Zero sugar, zero red meat, high-performance poultry. Designed by professional chefs for maximum recovery.",
  },
  {
    icon: Watch,
    title: "Ultra Integration",
    description:
      "Perfectly synced with Apple Watch Ultra and iPhone 16 Pro. Your data flows between devices as fast as you move.",
  },
];

const featureGridContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
} as const;

const featureGridItem = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

const coreAgentCards: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Zap,
    title: "KMS Logic Engine",
    text: "Beyond Basic Scripts. Our agents operate on competitive-level logic. They don't just calculate; they optimize your performance based on professional track and field standards.",
  },
  {
    icon: ChefHat,
    title: "Culinary Intelligence",
    text: "The Chef's DNA. This agent understands kitchen workflow, ingredient scaling, and professional timing. Built by industry veterans to automate the back-of-house.",
  },
  {
    icon: Cpu,
    title: "Autonomous Decision Making",
    text: "Real-time Adaptation. Your agents react to data changes instantly, whether it's a shift in your training load or a supply change in the kitchen.",
  },
];

const coreAgentContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
} as const;

const coreAgentItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export default function App() {
  const [agent, setAgent] = useState<Agent>("nutrition");
  const a = agentCopy[agent];
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({
      x: (py - 0.5) * -10,
      y: (px - 0.5) * 10,
    });
  };

  const onCardLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="vision-mesh" aria-hidden>
        <div className="aurora-base" />
        <div className="aurora-blob aurora-blob--purple" />
        <div className="aurora-blob aurora-blob--blue" />
        <div className="aurora-blob aurora-blob--amber" />
        <div className="aurora-blob aurora-blob--violet" />
      </div>

      {/* Premium floating nav */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
        <nav
          className="flex w-full max-w-6xl items-center justify-between gap-2 rounded-2xl border border-white/10 bg-black/35 px-3 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:gap-3 sm:px-5"
          aria-label="Primary"
        >
          <a
            href="#"
            className="logo-brand font-display shrink-0 text-xs font-bold text-white sm:text-sm md:text-base"
          >
            AGENT SYNC
          </a>

          <div className="hidden items-center gap-5 sm:gap-7 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="vision-glass hidden rounded-full px-4 py-1.5 font-display text-xs font-semibold text-zinc-100 sm:inline sm:text-sm"
            >
              Sign In
            </button>
            <button
              type="button"
              className="vision-glass inline rounded-full px-3 py-1.5 font-display text-xs font-semibold text-zinc-100 sm:hidden"
              aria-label="Sign In"
            >
              In
            </button>
          </div>
        </nav>
      </header>

      <div className="app-chrome relative z-10 px-4 pb-20 pt-28 sm:px-6 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <section className="mx-auto max-w-3xl text-center [scroll-margin-top:6rem] sm:[scroll-margin-top:7rem]">
            <h1 className="font-display text-balance text-xl font-bold uppercase leading-[1.2] tracking-[0.06em] text-white sm:text-2xl sm:tracking-[0.08em] md:text-3xl md:leading-tight">
              ELITE PERFORMANCE
              <br className="sm:hidden" />
              <span className="sm:ml-1"> THROUGH SPATIAL INTELLIGENCE</span>
            </h1>
            <p className="font-display mx-auto mt-4 max-w-2xl text-balance text-sm font-normal leading-relaxed text-zinc-400 sm:mt-5 sm:text-base sm:leading-[1.65]">
              The first AR-powered athletic ecosystem designed for Candidate Masters and
              pro-chefs. Track every calorie, every step, and every heartbeat in immersive
              detail.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#nutrition"
                className="btn-ultra font-display inline-flex min-h-11 items-center justify-center rounded-full px-7 py-2.5 text-sm font-semibold"
              >
                Start Training
              </a>
              <a
                href="#app-preview"
                className="btn-glass-outline font-display inline-flex min-h-11 items-center justify-center rounded-full px-7 py-2.5 text-sm font-semibold"
              >
                Watch Vision Pro Demo
              </a>
            </div>
          </section>

          {/* Product demo (below hero) */}
          <div className="mx-auto mt-14 max-w-lg sm:mt-16">
            <p className="text-center font-display text-sm font-medium text-zinc-500">
              Agent Sync — live demo
            </p>
            <p className="font-display mx-auto mt-2 max-w-md text-balance text-center text-sm font-medium leading-relaxed text-zinc-400">
              <span className="text-vibrancy">One canvas.</span> Switch agents — metrics and
              chart stay in sync.
            </p>

            <div
              className="mt-8 flex justify-center [scroll-margin-top:6rem]"
              id="nutrition"
            >
              <div
                className="vision-glass-inset inline-flex gap-0.5 rounded-full p-1.5 shadow-[inset_0_2px_12px_rgba(0,0,0,0.45)]"
                role="group"
                aria-label="Agent mode"
              >
                {(
                  [
                    { id: "nutrition" as const, label: "Питание", Icon: Apple },
                    { id: "workout" as const, label: "Тренировки", Icon: Dumbbell },
                  ] as const
                ).map(({ id, label, Icon }) => {
                  const active = agent === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setAgent(id)}
                      className={cn(
                        "relative z-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-colors",
                        active ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="toggle-pill"
                          className="vision-glass absolute inset-0 rounded-full border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
                          transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                      )}
                      <Icon className="relative z-10 h-4 w-4" />
                      <span className="relative z-10">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className="mt-10 [perspective:1200px] [scroll-margin-top:6rem] sm:mt-10"
              id="app-preview"
            >
              <motion.div
                ref={cardRef}
                onMouseMove={onCardMove}
                onMouseLeave={onCardLeave}
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 28,
                  mass: 0.6,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="vision-glass rounded-3xl px-6 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:px-8 sm:py-9"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={agent}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={transitionContent}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="text-center sm:text-left">
                      <h2 className="font-display text-lg font-bold text-white">
                        {a.title}
                      </h2>
                      <p className="mt-1 font-display text-sm font-normal text-zinc-400">
                        {a.hint}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                      <div className="shrink-0 [transform:translateZ(12px)]">
                        <ActivityRings variant={agent} surface="dark" />
                      </div>
                      <ul className="w-full min-w-0 space-y-3 font-display text-sm sm:max-w-[15rem]">
                        {a.lines.map((row) => (
                          <li
                            key={row.k}
                            className="flex justify-between gap-4 border-b border-white/[0.08] pb-3 last:border-0 last:pb-0"
                          >
                            <span className="font-normal text-zinc-400">{row.k}</span>
                            <span className="tabular-nums font-medium text-zinc-100">
                              {row.v}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 border-t border-white/[0.08] pt-6">
                      <p className="font-display text-xs font-semibold tracking-wide text-zinc-500">
                        7 дней
                      </p>
                      <div className="mt-3 h-32 w-full min-w-0 [transform:translateZ(6px)]">
                        <MiniChart variant={agent} colorScheme="vision" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features grid (full width to max-w-6xl) */}
        <motion.section
          id="features"
          className="mx-auto mt-20 w-full max-w-6xl [scroll-margin-top:6rem] sm:mt-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
          variants={featureGridContainer}
          aria-label="Product features"
        >
          <h2 className="font-display text-center text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
            Features
          </h2>
          <p className="font-display mx-auto mt-2 max-w-xl text-balance text-center text-lg font-bold text-white sm:text-xl">
            Built for spatial performance
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  variants={featureGridItem}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 19,
                      mass: 0.55,
                    },
                  }}
                  whileTap={{
                    y: -4,
                    scale: 0.99,
                    transition: { type: "spring", stiffness: 400, damping: 28 },
                  }}
                  className={cn(
                    "group relative overflow-visible rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-[20px] will-change-transform",
                    "shadow-[0_4px_32px_rgba(0,0,0,0.35)]",
                    "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transition-property:box-shadow,border-color,background-color]",
                    "hover:border-white/15 hover:bg-white/[0.07]",
                    "hover:shadow-[0_22px_60px_rgba(0,0,0,0.55),0_0_48px_rgba(255,90,31,0.15),inset_0_1px_0_rgba(255,255,255,0.07)]"
                  )}
                  style={{ transformOrigin: "50% 100%" }}
                >
                  <div
                    className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(255,90,31,0.14), transparent 65%)",
                      filter: "blur(18px)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="mb-4 inline-flex rounded-xl bg-white/[0.04] p-3 text-[#ff5a1f] ring-1 ring-white/[0.08] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:ring-[color:rgba(255,90,31,0.45)]"
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-2 font-display text-sm font-normal leading-relaxed text-zinc-400">
                    {card.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        {/* Core Agent Capabilities */}
        <section
          className="relative mx-auto mt-24 w-full max-w-2xl [scroll-margin-top:6rem] sm:mt-32"
          id="core-agent-capabilities"
          aria-label="Core agent capabilities"
        >
          <div className="core-capabilities-ambient" aria-hidden>
            <div className="core-capabilities-ambient__layer core-capabilities-ambient__layer--orange" />
            <div className="core-capabilities-ambient__layer core-capabilities-ambient__layer--blue" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-center text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              Core Agent Capabilities
            </h2>
            <p className="font-display mx-auto mt-2 max-w-lg text-balance text-center text-lg font-bold text-white sm:text-xl">
              Intelligence that works with you, not for show
            </p>

            <motion.div
              className="mt-10 flex flex-col gap-5 sm:gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
              variants={coreAgentContainer}
            >
              {coreAgentCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    variants={coreAgentItem}
                    tabIndex={0}
                    whileHover={{
                      y: -8,
                      scale: 1.015,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        mass: 0.5,
                      },
                    }}
                    whileTap={{
                      y: -2,
                      scale: 0.995,
                      transition: { type: "spring", stiffness: 500, damping: 35 },
                    }}
                    className={cn(
                      "group relative cursor-default overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_4px_40px_rgba(0,0,0,0.4)] outline-none backdrop-blur-2xl will-change-transform sm:p-8",
                      "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transition-property:box-shadow,border-color,background-color,filter]",
                      "hover:border-white/16 hover:bg-white/[0.07] hover:shadow-[0_22px_56px_rgba(0,0,0,0.55),0_0_48px_rgba(255,90,31,0.12),inset_0_1px_0_rgba(255,255,255,0.06)]",
                      "focus-visible:ring-2 focus-visible:ring-[#ff5a1f]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
                      "focus-within:border-white/18"
                    )}
                    style={{ transformOrigin: "50% 50%" }}
                  >
                    <div
                      className="pointer-events-none absolute -inset-px -z-0 rounded-2xl opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-within:opacity-80"
                      style={{
                        background:
                          "radial-gradient(ellipse 100% 80% at 30% 0%, rgba(255,90,31,0.12), transparent 60%)",
                        filter: "blur(20px)",
                      }}
                      aria-hidden
                    />
                    <div className="core-card-scan" aria-hidden>
                      <div
                        className="core-card-scan__sheen"
                        style={{
                          animation: "core-sheen-pass 5.2s ease-in-out infinite",
                          animationDelay: `${index * 1.4}s`,
                        }}
                      />
                    </div>
                    <div className="relative z-10">
                      <div
                        className="mb-4 inline-flex rounded-xl p-2.5 text-[#ff5a1f] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-focus-within:scale-105"
                      >
                        <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden />
                      </div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-[1.35rem]">
                        {card.title}
                      </h3>
                      <p className="mt-3 font-display text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 sm:text-[0.95rem]">
                        {card.text}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
