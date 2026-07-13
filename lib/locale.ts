export type Locale = "en" | "de" | "nl" | "ar";

export const LOCALE_COOKIE = "locale";

export const LOCALES: Locale[] = ["en", "de", "nl", "ar"];

export function isRtlLocale(locale: Locale): boolean {
  return locale === "ar";
}
