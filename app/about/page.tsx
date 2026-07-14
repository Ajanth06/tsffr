import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackHomeLink } from "../components/home-scroll";
import { LanguageSwitcher } from "../components/language-switcher";
import { getDictionary, getLocale } from "../../lib/i18n";

function splitLines(text: string) {
  return text.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < text.split("\n").length - 1 ? <br /> : null}
    </span>
  ));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = getDictionary(locale);

  return {
    title: meta.aboutTitle,
    description: meta.aboutDescription,
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about: t, common, nav } = dict;
  const mainNav = nav.slice(1, 2);

  return (
    <main className="about-page">
      <header className="about-page-header">
        <BackHomeLink label={common.backHome} />
        <nav aria-label="About page navigation">
          {mainNav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="about-header-end">
          <LanguageSwitcher locale={locale} variant="light" />
          <Link href="/" className="about-header-logo" aria-label={t.headerHome}>
            <Image
              src="/tsffr-logo-white.png"
              alt="TSFFR"
              width={250}
              height={100}
            />
          </Link>
        </div>
      </header>

      <section className="about-page-hero" aria-labelledby="about-title">
        <Image
          src="/about-shipyard-hero.png"
          alt={t.heroImageAlt}
          fill
          sizes="100vw"
          preload
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p>{t.heroEyebrow}</p>
          <h1 id="about-title">{splitLines(t.heroTitle)}</h1>
          <p className="about-hero-lead">{t.heroLead}</p>
        </div>
        <a className="about-scroll" href="#story" aria-label={common.scrollToStory}>
          {common.explore}
        </a>
      </section>

      <section className="about-section about-story-mission" id="story">
        <div className="about-grid about-story-mission-grid">
          <div className="about-story-portrait">
            <Image
              className="about-story-portrait-image"
              src="/about-director-headshot.png"
              alt={t.storyImageAlt}
              fill
              sizes="(max-width: 800px) 100vw, 620px"
            />
          </div>

          <div className="about-content">
            <h2>{dict.home.aboutHeading}</h2>

            <div className="about-copy">
              {dict.home.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-numbers" aria-label={t.numbersLabel}>
        <div className="about-shell number-grid">
          {t.numbers.map((item) => (
            <div key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
