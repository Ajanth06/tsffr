import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "./components/language-switcher";
import { ScrollToReadMore } from "./components/home-scroll";
import { getDictionary, getLocale } from "../lib/i18n";

function Brand({ label }: { label: string }) {
  return (
    <a className="brand" href="#top" aria-label={label}>
      <Image
        className="brand-logo"
        src="/tsffr-logo.jpg"
        alt="TSFFR"
        width={250}
        height={100}
        preload
      />
    </a>
  );
}

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { home: t, common, nav } = dict;

  return (
    <main id="top">
      <ScrollToReadMore />
      <header className="site-header">
        <Brand label={common.brandHome} />

        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <button className="more-button" type="button" aria-label={common.moreLinks}>
            {common.more}
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="m4 6 4 4 4-4" />
            </svg>
          </button>
        </nav>

        <div className="header-end">
          <LanguageSwitcher locale={locale} />
          <button className="menu-button" type="button" aria-label={common.openMenu}>
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-image-wrap" aria-hidden="true">
          <Image
            className="hero-image"
            src="/tinn-silver-hero.png"
            alt={t.heroImageAlt}
            fill
            sizes="100vw"
            preload
          />
        </div>
        <div className="hero-wash" />
        <div className="hero-content">
          <h1 id="hero-heading">
            <span className="hero-heading-line">{t.heroLine1}</span>
            <span className="hero-heading-line">{t.heroLine2}</span>
          </h1>
          <p className="hero-description">{t.heroDescription}</p>
          <a className="hero-cta" href="#our-boats">
            <span>{t.heroCta}</span>
            <svg viewBox="0 0 52 18" aria-hidden="true">
              <path d="M1 9h47M42 2l7 7-7 7" />
              <circle cx="2" cy="9" r="1.5" />
            </svg>
          </a>
        </div>
        <div className="hero-transition" aria-hidden="true" />
      </section>

      <section className="about-section" id="about-us" aria-labelledby="about-heading">
        <div className="about-grid">
          <div className="about-image-wrap">
            <Image
              className="about-image"
              src="/about-workshop.png"
              alt={t.aboutImageAlt}
              fill
              sizes="(max-width: 800px) 100vw, 47vw"
            />
          </div>

          <div className="about-content">
            <h2 id="about-heading">{t.aboutHeading}</h2>

            <div className="about-copy">
              {t.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <Link className="about-link" id="read-more" href="/about">
              {common.readMore}
              <svg viewBox="0 0 42 14" aria-hidden="true">
                <path d="M1 7h38M34 2l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="about-stats" aria-label={t.companyFacts}>
          <div className="stat">
            <strong>80+</strong>
            <span>{t.stats[0]}</span>
          </div>
          <div className="stat stat-flag">
            <strong>
              <span className="dutch-flag-large" role="img" aria-label={common.netherlandsFlag} />
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
