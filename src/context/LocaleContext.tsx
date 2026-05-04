import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getMessages, type Locale } from "../i18n";

const STORAGE_KEY = "agentlab-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: ReturnType<typeof getMessages>;
};

const LocaleContext = createContext<Ctx | null>(null);

function readInitialLocale(): Locale {
  try {
    const stored =
      typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "ru" || stored === "en") return stored;
    const nav =
      typeof navigator !== "undefined" ? (navigator.language || "").toLowerCase() : "";
    if (nav.startsWith("en")) return "en";
  } catch {
    /* ignore */
  }
  return "ru";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readInitialLocale());

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "ru" ? "ru" : "en";
  }, [locale]);

  const t = useMemo(() => getMessages(locale), [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
