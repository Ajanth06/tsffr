import type { Metadata } from "next";
import Image from "next/image";
import { StandaloneHeader } from "../components/standalone-header";
import { getDictionary, getLocale } from "../../lib/i18n";

function Arrow() {
  return (
    <svg viewBox="0 0 42 14" aria-hidden="true">
      <path d="M1 7h38M34 2l5 5-5 5" />
    </svg>
  );
}

function splitLines(text: string) {
  const lines = text.split("\n");

  return lines.map((line, index) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { about: t } = getDictionary(locale);

  return {
    title: `${t.ctaContact} | Tinn Silver`,
    description: t.ctaLead,
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about: t, nav, common } = dict;

  return (
    <main className="about-page contact-page">
      <StandaloneHeader
        locale={locale}
        nav={nav}
        headerHome={t.headerHome}
        openMenuLabel={common.openMenu}
        closeMenuLabel={common.closeMenu}
      />

      <section className="about-cta standalone-contact" aria-labelledby="contact-title">
        <Image src="/fire-rescue-fleet.jpeg" alt={t.ctaImageAlt} fill sizes="100vw" preload />
        <div className="about-cta-overlay" />
        <div className="about-cta-content">
          <p>{t.ctaEyebrow}</p>
          <h1 id="contact-title">{splitLines(t.ctaTitle)}</h1>
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
