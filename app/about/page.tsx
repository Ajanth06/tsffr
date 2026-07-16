import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "../components/language-switcher";
import { MobileMenu } from "../components/mobile-menu";
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

  return (
    <main className="about-page">
      <header className="about-page-header">
        <nav className="desktop-nav" aria-label="About page navigation">
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
            openMenuLabel={common.openMenu}
            closeMenuLabel={common.closeMenu}
            variant="light"
          />
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
          <aside className="about-story-aside">
            <div className="about-story-portrait">
              <Image
                className="about-story-portrait-image"
                src="/about-director-headshot.png"
                alt={t.storyImageAlt}
                fill
                sizes="(max-width: 800px) 78vw, (max-width: 1200px) 34vw, 430px"
              />
            </div>
            <div className="about-story-caption">
              <p>
                {t.storyCaption}
                <br />
                <b>Tinn Silver Group</b>
              </p>
            </div>
          </aside>

          <article className="about-content about-story-content">
            <p className="section-label">{t.story.label}</p>
            <h2>{dict.home.aboutHeading}</h2>

            <div className="about-copy">
              {dict.home.aboutParagraphs.map((paragraph, index) => {
                const isStatement = [2, 4, 6, 9].includes(index);

                return (
                  <p
                    className={index === 0 ? "story-opening" : isStatement ? "story-statement" : undefined}
                    key={paragraph.slice(0, 32)}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <section className="about-heritage" aria-labelledby="heritage-title">
        <div className="about-shell">
          <div className="about-heritage-heading">
            <p className="section-label">{t.story.label}</p>
            <h2 id="heritage-title">{t.story.title}</h2>
          </div>

          <div className="about-heritage-gallery" aria-label={t.heritageGalleryLabel}>
            <figure className="about-heritage-figure about-heritage-figure-primary">
              <div className="about-heritage-image">
                <Image
                  src="/about-heritage-shipyard.png"
                  alt={t.heritageImages[0].alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 87vw"
                />
              </div>
              <figcaption>
                <span aria-hidden="true">01</span>
                {t.heritageImages[0].caption}
              </figcaption>
            </figure>

            <figure className="about-heritage-figure about-heritage-figure-secondary">
              <div className="about-heritage-image">
                <Image
                  src="/about-heritage-tinnemans.png"
                  alt={t.heritageImages[1].alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 66vw"
                />
              </div>
              <figcaption>
                <span aria-hidden="true">02</span>
                {t.heritageImages[1].caption}
              </figcaption>
            </figure>

            <figure className="about-heritage-figure about-heritage-figure-tertiary">
              <div className="about-heritage-image">
                <Image
                  src="/about-heritage-anno-1941.png"
                  alt={t.heritageImages[2].alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 74vw"
                />
              </div>
              <figcaption>
                <span aria-hidden="true">03</span>
                {t.heritageImages[2].caption}
              </figcaption>
            </figure>
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
