import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StandaloneHeader } from "../../components/standalone-header";
import { getDictionary, getLocale } from "../../../lib/i18n";
import { formatNewsDate, getNewsArticle } from "../../../lib/news";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const article = getNewsArticle(locale);

  return {
    title: `${article.detailTitle} | Tinn Silver`,
    description: `${article.detailIntroStart}${article.detailIntroProduct}${article.detailIntroMiddle}${article.detailIntroEngine}${article.detailIntroEnd}`,
  };
}

export default async function NewsArticlePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const article = getNewsArticle(locale);

  return (
    <main className="about-page news-article-page">
      <StandaloneHeader
        locale={locale}
        nav={dict.nav}
        headerHome={dict.common.brandHome}
        openMenuLabel={dict.common.openMenu}
        closeMenuLabel={dict.common.closeMenu}
        backLabel={dict.common.back}
      />

      <article>
        <header className="news-article-header">
          <div className="about-shell">
            <div className="news-article-topline">
              <Link className="news-article-back" href="/news">
                <svg viewBox="0 0 42 14" aria-hidden="true">
                  <path d="M41 7H3M8 2 3 7l5 5" />
                </svg>
                {article.backToNews}
              </Link>
              <div className="news-article-meta">
                <span>Tinn Silver Journal</span>
                <time dateTime={article.date}>
                  {article.publishedLabel} · {formatNewsDate(locale, article.date)}
                </time>
              </div>
            </div>
            <div className="news-article-heading">
              <div className="news-article-issue" aria-hidden="true">
                <span>No.</span>
                <strong>01</strong>
              </div>
              <h1>{article.detailTitle}</h1>
            </div>
          </div>
        </header>

        <figure className="news-article-lead">
          <Image
            src={article.images.withFireEngine}
            alt={article.imageAlts.withFireEngine}
            width={2000}
            height={1500}
            sizes="(max-width: 800px) calc(100vw - 48px), (max-width: 1360px) calc(100vw - 96px), 1200px"
            preload
          />
          <figcaption>
            <span aria-hidden="true">01</span>
            {article.imageAlts.withFireEngine}
          </figcaption>
        </figure>

        <section className="news-article-story about-shell">
          <aside className="news-article-story-mark" aria-hidden="true">
            <span>01</span>
          </aside>
          <div className="news-article-copy">
            <p>
              {article.detailIntroStart}
              <strong>{article.detailIntroProduct}</strong>
              {article.detailIntroMiddle}
              <strong>{article.detailIntroEngine}</strong>
              {article.detailIntroEnd}
            </p>
            <p>{article.detailBody}</p>
            <p className="news-article-tagline">
              <strong>{article.detailTagline}</strong>
            </p>
          </div>
        </section>

        <section
          className="news-article-gallery about-shell"
          aria-labelledby="news-gallery-title"
        >
          <h2 className="section-label" id="news-gallery-title">
            <span aria-hidden="true">02</span>
            {article.galleryLabel}
          </h2>
          <div className="news-article-gallery-grid">
            <figure className="news-article-gallery-wide">
              <Image
                src={article.images.launch}
                alt={article.imageAlts.launch}
                width={2000}
                height={1500}
                sizes="(max-width: 800px) calc(100vw - 48px), 60vw"
              />
              <figcaption aria-hidden="true">01</figcaption>
            </figure>
            <figure className="news-article-gallery-portrait">
              <Image
                src={article.images.bow}
                alt={article.imageAlts.bow}
                width={1500}
                height={2000}
                sizes="(max-width: 800px) calc(100vw - 48px), 31vw"
              />
              <figcaption aria-hidden="true">02</figcaption>
            </figure>
            <figure className="news-article-gallery-wide news-article-gallery-wide--full">
              <Image
                src={article.images.onWater}
                alt={article.imageAlts.onWater}
                width={2000}
                height={1500}
                sizes="(max-width: 800px) calc(100vw - 48px), 1200px"
              />
              <figcaption aria-hidden="true">03</figcaption>
            </figure>
          </div>
          <div className="news-article-footer-nav">
            <span aria-hidden="true">Tinn Silver / Journal</span>
            <Link className="news-article-back news-article-back--footer" href="/news">
              <svg viewBox="0 0 42 14" aria-hidden="true">
                <path d="M41 7H3M8 2 3 7l5 5" />
              </svg>
              {article.backToNews}
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
