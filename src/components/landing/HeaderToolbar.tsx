import { Monitor, Moon, Sun } from "lucide-react";
import { useLocale } from "../../context/LocaleContext";
import { useTheme } from "../../context/ThemeContext";
import type { Locale } from "../../i18n/types";
import { cn } from "../../lib/cn";

export function HeaderToolbar() {
  const { locale, setLocale, t } = useLocale();
  const { preference, cyclePreference } = useTheme();

  const themeIcon =
    preference === "light" ? (
      <Sun className="h-4 w-4" aria-hidden />
    ) : preference === "dark" ? (
      <Moon className="h-4 w-4" aria-hidden />
    ) : (
      <Monitor className="h-4 w-4" aria-hidden />
    );

  const themeLabel =
    preference === "light" ? t.theme.light : preference === "dark" ? t.theme.dark : t.theme.system;

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <div
        className="vision-glass flex items-center rounded-full p-0.5"
        role="group"
        aria-label={t.lang.label}
      >
        {(["ru", "en"] as Locale[]).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={cn(
              "font-display rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide transition-colors sm:px-3 sm:text-xs",
              locale === code
                ? "bg-[#ff5733] text-white shadow-sm"
                : "text-ink-muted hover:text-ink"
            )}
          >
            {code === "ru" ? t.lang.ru : t.lang.en}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={cyclePreference}
        className="vision-glass inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:text-[#ff5733] sm:h-10 sm:w-10"
        title={`${t.theme.label}: ${themeLabel}`}
        aria-label={`${t.theme.label}: ${themeLabel}`}
      >
        {themeIcon}
      </button>
    </div>
  );
}
