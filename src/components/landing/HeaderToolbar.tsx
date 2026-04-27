import { Monitor, Moon, Sun } from "lucide-react";
import { useLocale } from "../../context/LocaleContext";
import { useTheme } from "../../context/ThemeContext";

export function HeaderToolbar() {
  const { t } = useLocale();
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
