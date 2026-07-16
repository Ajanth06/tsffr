"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LOCALE_COOKIE, LOCALES, type Locale } from "../../lib/locale";

type LanguageSwitcherProps = {
  locale: Locale;
  variant?: "light" | "dark";
};

const LABELS: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  nl: "NL",
  ar: "عرب",
};

const ARIA_LABELS: Record<Locale, string> = {
  en: "Show website in English",
  de: "Website auf Deutsch anzeigen",
  nl: "Website in het Nederlands tonen",
  ar: "عرض الموقع باللغة العربية",
};

export function LanguageSwitcher({ locale, variant = "dark" }: LanguageSwitcherProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    startTransition(() => {
      document.cookie = `${LOCALE_COOKIE}=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
      router.refresh();
    });
  }

  return (
    <div className={`lang-switcher lang-switcher--${variant}`} role="group" aria-label="Language">
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-switch lang-switch--${variant}${code === locale ? " is-active" : ""}${code === "ar" ? " lang-switch--arabic" : ""}`}
          onClick={() => switchLocale(code)}
          aria-label={ARIA_LABELS[code]}
          aria-current={code === locale ? "true" : undefined}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  );
}
