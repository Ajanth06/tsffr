import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackHomeLink } from "../components/home-scroll";
import { LanguageSwitcher } from "../components/language-switcher";
import { getDictionary, getLocale } from "../../lib/i18n";

const industryCodes = ["FF", "RS", "MP", "GV", "CF", "CM"] as const;

const processImages = [
  "/about-concept.png",
  "/about-engineering.png",
  "/about-welding.png",
  "/fire-rescue-fleet.jpeg",
  "/about-delivery.png",
] as const;

function Arrow() {
  return (
    <svg viewBox="0 0 42 14" aria-hidden="true">
      <path d="M1 7h38M34 2l5 5-5 5" />
    </svg>
  );
}

function SectionIntro({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className="about-section-intro">
      <p><span>{index}</span>{label}</p>
      <h2>{title}</h2>
    </div>
  );
}

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
  const { about: t, common, aboutNav, nav } = dict;
  const mainNav = nav.slice(0, 2);

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
          {aboutNav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
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

      <section className="about-values" id="values">
        <div className="about-shell">
          <SectionIntro index="02" label={t.values.label} title={t.values.title} />
          <div className="value-grid">
            {t.valueCards.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="value-icon" aria-hidden="true"><i /><i /></div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-process about-shell" id="process">
        <SectionIntro index="03" label={t.process.label} title={t.process.title} />
        <ol className="process-story">
          {t.processSteps.map((step, index) => (
            <li key={step.title}>
              <figure>
                <Image
                  src={processImages[index]}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 820px) 100vw, 20vw"
                />
              </figure>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-workshop" id="workshop">
        <div className="about-shell">
          <SectionIntro index="04" label={t.workshop.label} title={t.workshop.title} />
          <div className="workshop-gallery">
            <figure className="workshop-wide">
              <Image src="/about-welding.png" alt={t.processSteps[2].alt} fill sizes="(max-width: 820px) 100vw, 58vw" />
              <figcaption><span>01</span> {t.workshopCaptions[0]}</figcaption>
            </figure>
            <figure>
              <Image src="/about-engineering.png" alt={t.processSteps[1].alt} fill sizes="(max-width: 820px) 100vw, 34vw" />
              <figcaption><span>02</span> {t.workshopCaptions[1]}</figcaption>
            </figure>
            <figure>
              <Image src="/about-final-assembly.png" alt={dict.home.aboutImageAlt} fill sizes="(max-width: 820px) 100vw, 34vw" />
              <figcaption><span>03</span> {t.workshopCaptions[2]}</figcaption>
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

      <section className="about-industries about-shell" id="industries">
        <SectionIntro index="05" label={t.industries.label} title={t.industries.title} />
        <div className="industry-grid">
          {industryCodes.map((code, index) => (
            <div className="industry" key={code}>
              <span>{code}</span>
              <strong>{t.industryNames[index]}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="about-team" id="team">
        <div className="about-shell">
          <SectionIntro index="06" label={t.team.label} title={t.team.title} />
          <div className="team-departments">
            {t.teamCards.map((card, index) => (
              <article key={card.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-quality about-shell" id="quality">
        <SectionIntro index="07" label={t.quality.label} title={t.quality.title} />
        <div className="quality-grid">
          <p>{t.qualityLead}</p>
          <div className="quality-capabilities" aria-label={t.qualityCapabilitiesLabel}>
            {t.qualityItems.map((item, index) => (
              <div key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta" id="contact">
        <Image src="/fire-rescue-fleet.jpeg" alt={t.ctaImageAlt} fill sizes="100vw" />
        <div className="about-cta-overlay" />
        <div className="about-cta-content">
          <p>{t.ctaEyebrow}</p>
          <h2>{splitLines(t.ctaTitle)}</h2>
          <span>{t.ctaLead}</span>
          <div>
            <a href="mailto:info@tinn-silver.com">{t.ctaQuote} <Arrow /></a>
            <a href="mailto:info@tinn-silver.com">{t.ctaContact}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
