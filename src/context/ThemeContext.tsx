import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ThemePreference } from "../i18n/types";

const STORAGE_KEY = "agentlab-theme";

type Resolved = "light" | "dark";

function systemPrefersDark(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function readInitialPreference(): ThemePreference {
  if (typeof window === "undefined") return "light";
  const s = window.localStorage.getItem(STORAGE_KEY);
  if (s === "light" || s === "dark" || s === "system") return s;
  return "light";
}

function applyResolved(resolved: Resolved) {
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
}

function useSystemDarkFlag() {
  const [dark, setDark] = useState(systemPrefersDark);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setDark(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return dark;
}

type Ctx = {
  preference: ThemePreference;
  resolved: Resolved;
  setPreference: (p: ThemePreference) => void;
  cyclePreference: () => void;
};

const ThemeContext = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => readInitialPreference());
  const systemDark = useSystemDarkFlag();

  const resolved: Resolved = useMemo(() => {
    if (preference === "dark") return "dark";
    if (preference === "light") return "light";
    return systemDark ? "dark" : "light";
  }, [preference, systemDark]);

  useEffect(() => {
    applyResolved(resolved);
  }, [resolved]);

  const setPreference = useCallback((p: ThemePreference) => {
    setPreferenceState(p);
    try {
      window.localStorage.setItem(STORAGE_KEY, p);
    } catch {
      /* ignore */
    }
  }, []);

  const cyclePreference = useCallback(() => {
    const order: ThemePreference[] = ["light", "dark", "system"];
    const i = order.indexOf(preference);
    setPreference(order[(i + 1) % order.length]);
  }, [preference, setPreference]);

  const value = useMemo(
    () => ({ preference, resolved, setPreference, cyclePreference }),
    [preference, resolved, setPreference, cyclePreference]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
