import { en } from "./en";
import { ru } from "./ru";
import type { Locale, Messages } from "./types";

export type { Locale, Messages, NavId, ThemePreference } from "./types";

const byLocale: Record<Locale, Messages> = { ru, en };

export function getMessages(locale: Locale): Messages {
  return byLocale[locale];
}

export function mailtoHref(locale: Locale, audit?: boolean): string {
  const m = getMessages(locale);
  const subject = audit ? m.mailtoAuditSubject : m.mailtoSubject;
  const enc = encodeURIComponent(subject);
  return `mailto:hello@agentlab.dev?subject=${enc}`;
}
