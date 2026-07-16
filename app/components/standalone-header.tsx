import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "../../lib/i18n";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";

type StandaloneHeaderProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  headerHome: string;
  openMenuLabel: string;
  closeMenuLabel: string;
};

export function StandaloneHeader({
  locale,
  nav,
  headerHome,
  openMenuLabel,
  closeMenuLabel,
}: StandaloneHeaderProps) {
  return (
    <header className="about-page-header">
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="about-header-end">
        <LanguageSwitcher locale={locale} variant="light" />
        <MobileMenu
          nav={nav}
          locale={locale}
          openMenuLabel={openMenuLabel}
          closeMenuLabel={closeMenuLabel}
          variant="light"
        />
        <Link href="/" className="about-header-logo" aria-label={headerHome}>
          <Image
            src="/tsffr-logo-white.png"
            alt="TSFFR"
            width={250}
            height={100}
          />
        </Link>
      </div>
    </header>
  );
}
