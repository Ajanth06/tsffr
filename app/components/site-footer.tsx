import Link from "next/link";
import type { Locale } from "../../lib/i18n";

const footerCopy = {
  en: {
    imprint: "Imprint",
    privacy: "Privacy",
    rights: "All rights reserved.",
  },
  de: {
    imprint: "Impressum",
    privacy: "Datenschutz",
    rights: "Alle Rechte vorbehalten.",
  },
  nl: {
    imprint: "Colofon",
    privacy: "Privacy",
    rights: "Alle rechten voorbehouden.",
  },
  ar: {
    imprint: "بيانات النشر",
    privacy: "الخصوصية",
    rights: "جميع الحقوق محفوظة.",
  },
} satisfies Record<Locale, { imprint: string; privacy: string; rights: string }>;

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const copy = footerCopy[locale];

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>{`© ${year} Tinn Silver. ${copy.rights}`}</p>
        <nav aria-label="Legal">
          <Link href="/impressum">{copy.imprint}</Link>
          <Link href="/datenschutz">{copy.privacy}</Link>
        </nav>
      </div>
    </footer>
  );
}
