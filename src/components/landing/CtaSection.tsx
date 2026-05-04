import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { useLocale } from "../../context/LocaleContext";
import { getMessages, mailtoHref } from "../../i18n";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] },
  },
};

type CtaStatus = "idle" | "loading" | "success";

export function CtaSection() {
  const { t, locale } = useLocale();
  const baseId = useId();
  const messages = getMessages(locale);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState<CtaStatus>("idle");

  const headingId = `${baseId}-cta-heading`;
  const inputId = `${baseId}-task`;

  function buildMailto(): string {
    const subject = encodeURIComponent(messages.mailtoAuditSubject);
    const body = encodeURIComponent(`${t.cta.inputLabel}:\n${task.trim()}\n`);
    return `mailto:hello@agentlab.dev?subject=${subject}&body=${body}`;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!task.trim() || status !== "idle") return;

    setStatus("loading");
    const mailto = buildMailto();

    window.setTimeout(() => {
      setStatus("success");
      window.setTimeout(() => {
        window.location.href = mailto;
      }, 450);
    }, 950);
  }

  return (
    <section
      id="cta"
      className="col-span-full relative -mx-4 [scroll-margin-top:6rem] sm:-mx-6"
      aria-labelledby={headingId}
    >
      {/* Светлая тема: читаемый контраст. Тёмная: Focus Mode #000. */}
      <div className="bg-zinc-100 px-4 py-20 dark:bg-[#000000] sm:px-6 sm:py-28">
        <motion.div
          className="mx-auto max-w-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          <h2
            id={headingId}
            className="font-display text-balance text-center text-2xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl"
          >
            {t.cta.title}
          </h2>
          <p className="font-display mx-auto mt-4 max-w-md text-pretty text-center text-sm font-normal leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-[0.9375rem]">
            {t.cta.subtitle}
          </p>
          <p className="font-display mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-zinc-500 dark:text-zinc-400">
            <a
              href={t.cta.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-600 underline-offset-2 hover:text-sky-500 hover:underline dark:text-sky-400"
            >
              {t.footer.telegram}
            </a>
            <span className="text-zinc-300 dark:text-zinc-600" aria-hidden>
              ·
            </span>
            <a
              href={mailtoHref(locale)}
              className="font-medium text-sky-600 underline-offset-2 hover:text-sky-500 hover:underline dark:text-sky-400"
            >
              {t.footer.contact}
            </a>
            <span className="text-zinc-300 dark:text-zinc-600" aria-hidden>
              ·
            </span>
            <a
              href={mailtoHref(locale, true)}
              className="font-medium text-sky-600 underline-offset-2 hover:text-sky-500 hover:underline dark:text-sky-400"
            >
              {t.footer.auditCta}
            </a>
          </p>

          {status === "success" ? (
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20 text-sky-600 dark:text-sky-400">
                <Check className="h-6 w-6" strokeWidth={2} aria-hidden />
              </div>
              <p className="font-display mt-4 text-base font-medium text-zinc-900 dark:text-zinc-200">
                {t.cta.successTitle}
              </p>
              <p className="font-display mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                {(() => {
                  const email = "hello@agentlab.dev";
                  const at = t.cta.successHint.indexOf(email);
                  if (at < 0) return t.cta.successHint;
                  return (
                    <>
                      {t.cta.successHint.slice(0, at)}
                      <a
                        href={`mailto:${email}`}
                        className="font-medium text-sky-600 underline hover:text-sky-500 dark:text-sky-400"
                      >
                        {email}
                      </a>
                      {t.cta.successHint.slice(at + email.length)}
                    </>
                  );
                })()}
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 rounded-2xl border border-zinc-200/90 bg-white/95 p-5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] sm:p-6"
            >
              <label
                htmlFor={inputId}
                className="block font-display text-sm font-medium text-zinc-800 dark:text-zinc-300"
              >
                {t.cta.inputLabel}
              </label>
              <textarea
                id={inputId}
                name="task"
                rows={4}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
                disabled={status === "loading"}
                placeholder={t.cta.inputPlaceholder}
                className="font-display mt-2 w-full resize-y rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm font-light leading-relaxed text-zinc-900 placeholder:font-extralight placeholder:text-zinc-500 outline-none transition-colors focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 disabled:opacity-50 dark:border-transparent dark:bg-white/[0.06] dark:text-zinc-200 dark:placeholder:text-zinc-500"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={status === "loading" || !task.trim()}
                className="font-display mt-5 flex w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white ring-1 ring-sky-500/25 transition-opacity duration-200 hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-55 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                {status === "loading" ? t.cta.loadingLabel : t.cta.submit}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
