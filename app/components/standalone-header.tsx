import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "../../lib/i18n";
import { LanguageSwitcher } from "./language-switcher";

type StandaloneHeaderProps = {
  locale: Locale;
  common: Dictionary["common"];
  nav: Dictionary["nav"];
  headerHome: string;
  currentHref: string;
  currentOnly?: boolean;
};

export function StandaloneHeader({
  locale,
  common,
  nav,
  headerHome,
  currentHref,
  currentOnly = false,
}: StandaloneHeaderProps) {
  const headerNav = nav.filter((item) =>
    currentOnly
      ? item.href === currentHref
      : item.href === "/" || item.href === "/about" || item.href === currentHref,
  );

  return (
    <header className="about-page-header">
      <Link href="/" className="about-back" aria-label={common.backHome}>
        {common.backHome}
      </Link>
      <nav aria-label={`${headerNav.at(-1)?.label ?? "Page"} navigation`}>
        {headerNav.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="about-header-end">
        <LanguageSwitcher locale={locale} variant="light" />
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
