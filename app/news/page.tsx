import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StandaloneHeader } from "../components/standalone-header";
import { getDictionary, getLocale, type Locale } from "../../lib/i18n";
import { formatNewsDate, getNewsArticle } from "../../lib/news";

const newsCopy = {
  en: {
    title: "News | Tinn Silver",
    description: "News and updates from Tinn Silver Fire Fighting & Rescue.",
    eyebrow: "Tinn Silver Journal",
    lead: "Updates from our shipyard, current projects and the people behind our vessels.",
    sectionLabel: "Latest updates",
  },
  de: {
    title: "News | Tinn Silver",
    description:
      "Neuigkeiten und Einblicke von Tinn Silver Fire Fighting & Rescue.",
    eyebrow: "Tinn Silver Journal",
    lead:
      "Neuigkeiten aus unserer Werft, aktuelle Projekte und die Menschen hinter unseren Booten.",
    sectionLabel: "Aktuelle Meldungen",
  },
  nl: {
    title: "Nieuws | Tinn Silver",
    description:
      "Nieuws en updates van Tinn Silver Fire Fighting & Rescue.",
    eyebrow: "Tinn Silver Journaal",
    lead:
      "Updates uit onze werf, actuele projecten en de mensen achter onze vaartuigen.",
    sectionLabel: "Laatste nieuws",
  },
  ar: {
    title: "الأخبار | Tinn Silver",
    description: "أخبار وتحديثات من Tinn Silver Fire Fighting & Rescue.",
    eyebrow: "مجلة Tinn Silver",
    lead: "مستجدات من حوض بناء السفن ومشاريعنا الحالية والأشخاص الذين يقفون خلف قواربنا.",
    sectionLabel: "آخر الأخبار",
  },
} satisfies Record<
  Locale,
  {
    title: string;
    description: string;
    eyebrow: string;
    lead: string;
    sectionLabel: string;
  }
>;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = newsCopy[locale];

  return {
    title: copy.title,
    description: copy.description,
  };
}

export default async function NewsPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const copy = newsCopy[locale];
  const article = getNewsArticle(locale);

  return (
    <main className="about-page news-page">
      <StandaloneHeader
        locale={locale}
        nav={dict.nav}
        headerHome={dict.common.brandHome}
        openMenuLabel={dict.common.openMenu}
        closeMenuLabel={dict.common.closeMenu}
        backLabel={dict.common.back}
      />

      <section className="standalone-hero news-hero" aria-labelledby="news-title">
        <div className="about-shell">
          <p>{copy.eyebrow}</p>
          <h1 id="news-title">News</h1>
          <p className="standalone-hero-lead">{copy.lead}</p>
        </div>
      </section>

      <section className="news-content" aria-labelledby="news-latest-title">
        <div className="about-shell news-content-grid">
          <h2 className="section-label" id="news-latest-title">
            <span aria-hidden="true">01</span>
            {copy.sectionLabel}
          </h2>
          <article className="news-card">
            <div className="news-card-image">
              <Image
                src={article.images.card}
                alt={article.imageAlts.onWater}
                width={1500}
                height={2000}
                sizes="(max-width: 800px) calc(100vw - 48px), 66vw"
                preload
              />
            </div>
            <div className="news-card-body">
              <time dateTime={article.date}>
                {formatNewsDate(locale, article.date)}
              </time>
              <div>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <Link className="news-card-link" href={article.href}>
                  {article.readMore}
                  <svg viewBox="0 0 42 14" aria-hidden="true">
                    <path d="M1 7h38M34 2l5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
