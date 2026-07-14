import type { Metadata } from "next";
import Image from "next/image";
import { StandaloneHeader } from "../components/standalone-header";
import { getDictionary, getLocale } from "../../lib/i18n";

const processImages = [
  "/about-concept.png",
  "/about-engineering.png",
  "/about-welding.png",
  "/fire-rescue-fleet.jpeg",
  "/about-delivery.png",
] as const;

const industryCodes = ["FF", "RS", "MP", "GV", "CF", "CM"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { about: t } = getDictionary(locale);

  return {
    title: `${t.process.label} | Tinn Silver`,
    description: `${t.process.title} ${t.workshop.title} ${t.quality.title} ${t.industries.title}`,
  };
}

export default async function ProcessPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about: t, common, nav } = dict;

  return (
    <main className="about-page process-page">
      <StandaloneHeader
        locale={locale}
        common={common}
        nav={nav}
        headerHome={t.headerHome}
        currentHref="/process"
        currentOnly
      />

      <section className="standalone-hero" aria-labelledby="process-title">
        <div className="about-shell">
          <h1 id="process-title">{t.process.title}</h1>
        </div>
      </section>

      <section className="about-industries about-shell" aria-labelledby="industries-title">
        <div className="about-section-intro">
          <p><span>01</span>{t.industries.label}</p>
          <h2 id="industries-title">{t.industries.title}</h2>
        </div>
        <div className="industry-grid">
          {industryCodes.map((code, index) => (
            <div className="industry" key={code}>
              <span>{code}</span>
              <strong>{t.industryNames[index]}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="about-process about-shell standalone-content" aria-label={t.process.label}>
        <div className="about-section-intro">
          <p><span>02</span>{t.process.label}</p>
          <h2>{t.process.title}</h2>
        </div>
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
                <h2>{step.title}</h2>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-workshop" aria-labelledby="workshop-title">
        <div className="about-shell">
          <div className="about-section-intro">
            <p><span>03</span>{t.workshop.label}</p>
            <h2 id="workshop-title">{t.workshop.title}</h2>
          </div>
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

      <section className="about-quality about-shell" aria-labelledby="quality-title">
        <div className="about-section-intro">
          <p><span>04</span>{t.quality.label}</p>
          <h2 id="quality-title">{t.quality.title}</h2>
        </div>
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

    </main>
  );
}
