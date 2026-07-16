import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "./components/language-switcher";
import { MobileMenu } from "./components/mobile-menu";
import { getDictionary, getLocale } from "../lib/i18n";

function Brand({ label }: { label: string }) {
  return (
    <Link className="brand" href="/" aria-label={label}>
      <Image
        className="brand-logo"
        src="/tsffr-logo.jpg"
        alt="TSFFR"
        width={250}
        height={100}
        preload
      />
    </Link>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href}>
        {label}
      </Link>
    );
  }

  return <a href={href}>{label}</a>;
}

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { home: t, common, nav } = dict;

  return (
    <main id="top">
      <header className="site-header">
        <Brand label={common.brandHome} />

        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <NavItem href={item.href} label={item.label} key={item.href} />
          ))}
        </nav>

        <div className="header-end">
          <LanguageSwitcher locale={locale} />
          <MobileMenu
            nav={nav}
            locale={locale}
            openMenuLabel={common.openMenu}
            closeMenuLabel={common.closeMenu}
          />
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-image-wrap" aria-hidden="true">
          <Image
            className="hero-image"
            src="/home-hero-rescue-boat-4k.jpg"
            alt={t.heroImageAlt}
            fill
            sizes="100vw"
            preload
          />
        </div>
        <div className="hero-wash" />
        <div className="hero-header-blend" aria-hidden="true" />
        <div className="hero-content">
          <h1 id="hero-heading">
            <span className="hero-heading-line">{t.heroLine1}</span>
            <span className="hero-heading-line">{t.heroLine2}</span>
          </h1>
          <p className="hero-description">{t.heroDescription}</p>
          <span className="hero-cta">
            {t.heroCta}
            <svg viewBox="0 0 52 18" aria-hidden="true">
              <path d="M1 9h47M42 2l7 7-7 7" />
              <circle cx="2" cy="9" r="1.5" />
            </svg>
          </span>
        </div>
        <div className="hero-transition" aria-hidden="true" />
      </section>

      <section className="about-section" id="about-us">
        <div className="about-stats" aria-label={t.companyFacts}>
          <div className="stat">
            <strong>80+</strong>
            <span>{t.stats[0]}</span>
          </div>
          <div className="stat stat-flag">
            <strong>
              <span className="stat-flag-badge" role="img" aria-label={common.netherlandsFlag}>
                <span className="stat-flag-stripe stat-flag-stripe--red" aria-hidden="true" />
                <span className="stat-flag-stripe stat-flag-stripe--white" aria-hidden="true">
                  <span className="stat-flag-logo-wrap">
                    <Image
                      className="stat-flag-logo"
                      src="/tsffr-logo.jpg"
                      alt=""
                      fill
                      sizes="144px"
                    />
                  </span>
                </span>
                <span className="stat-flag-stripe stat-flag-stripe--blue" aria-hidden="true" />
              </span>
            </strong>
            <span>{t.stats[1]}</span>
          </div>
          <div className="stat">
            <strong>100%</strong>
            <span>{t.stats[2]}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
