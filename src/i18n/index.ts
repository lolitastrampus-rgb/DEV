import { en } from "./en";
import { ru } from "./ru";
import type { Locale, Messages } from "./types";

export type { Locale, Messages, NavId, ThemePreference } from "./types";

const byLocale: Record<Locale, Messages> = { ru, en };

export function getMessages(locale: Locale): Messages {
  return byLocale[locale];
}

export function mailtoHref(locale: Locale): string {
  const subject = getMessages(locale).mailtoSubject;
  const enc = encodeURIComponent(subject);
  return `mailto:hello@agentlab.dev?subject=${enc}`;
}
