import { Moon, Sun } from "lucide-react";
import { useLocale } from "../../context/LocaleContext";
import { useTheme } from "../../context/ThemeContext";

export function HeaderToolbar() {
  const { locale, setLocale, t } = useLocale();
  const { preference, cyclePreference } = useTheme();

  const themeIcon =
    preference === "light" ? (
      <Sun className="h-4 w-4" aria-hidden />
    ) : (
      <Moon className="h-4 w-4" aria-hidden />
    );

  const themeLabel = preference === "light" ? t.theme.light : t.theme.dark;

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <div
        role="group"
        aria-label={t.lang.label}
        className="vision-glass flex h-9 items-center rounded-full p-1 sm:h-10"
      >
        {(["ru", "en"] as const).map((code) => {
          const active = locale === code;
          const title = active ? `${t.lang.label}: ${code.toUpperCase()}` : code.toUpperCase();
          return (
            <button
              key={code}
              type="button"
              aria-pressed={active}
              onClick={() => setLocale(code)}
              className={`inline-flex min-w-[2.25rem] items-center justify-center rounded-full px-2 text-[11px] font-semibold uppercase tracking-wide transition-colors sm:min-w-10 sm:text-xs ${
                active
                  ? "bg-[color-mix(in_srgb,var(--color-ultra)_18%,transparent)] text-ink shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-ultra)_35%,transparent)]"
                  : "text-ink/55 hover:bg-white/10 hover:text-ink"
              }`}
              title={title}
            >
              {code === "ru" ? t.lang.ru : t.lang.en}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={cyclePreference}
        className="vision-glass inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:text-[color:var(--color-ultra)] sm:h-10 sm:w-10"
        title={`${t.theme.label}: ${themeLabel}`}
        aria-label={`${t.theme.label}: ${themeLabel}`}
      >
        {themeIcon}
      </button>
    </div>
  );
}
