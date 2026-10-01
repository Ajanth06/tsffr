import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StandaloneHeader } from "../../components/standalone-header";
import { getDictionary, getLocale } from "../../../lib/i18n";
import { getTrustNews } from "../../../lib/trust-news";
import { formatNewsDate } from "../../../lib/news";
import styles from "./story.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const trustNews = getTrustNews(await getLocale());
  return {
  title: `${trustNews.title} | Tinn Silver`,
  description: trustNews.intro,
  openGraph: { title: trustNews.title, description: trustNews.intro, images: [trustNews.image] },
  };
}

export default async function TrustNewsPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const trustNews = getTrustNews(locale);
  return (
    <main className="about-page">
      <StandaloneHeader locale={locale} nav={dict.nav} headerHome={dict.common.brandHome} openMenuLabel={dict.common.openMenu} closeMenuLabel={dict.common.closeMenu} backLabel={dict.common.back} />
      <article className={styles.story} lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <header className={styles.header}>
          <div className={styles.topline}><Link href="/news">{locale === "ar" ? "→" : "←"} {trustNews.back}</Link><span>{trustNews.journal} / 02</span></div>
          <p className={styles.eyebrow}>{trustNews.location}</p>
          <p className={styles.eyebrow}><time dateTime={trustNews.date}>{formatNewsDate(locale, trustNews.date)}</time></p>
          <h1>{trustNews.titleFirst}<br /><span>{trustNews.titleSecond}</span></h1>
          <p className={styles.subtitle}>{trustNews.subtitle}</p>
        </header>
        <figure className={styles.hero}>
          <Image src={trustNews.image} alt={trustNews.heroAlt} width={2048} height={1536} sizes="(max-width: 800px) 100vw, 1200px" preload />
          <figcaption>{trustNews.heroCaption}</figcaption>
        </figure>
        <section className={styles.copy} aria-label={trustNews.storyLabel}>
          <div className={styles.fact}><strong>11<span> {trustNews.metres}</span></strong><p>{trustNews.recipient}</p></div>
          <div><p className={styles.intro}>{trustNews.intro}</p><p className={styles.thanks}>{trustNews.thanks}</p></div>
        </section>
        <section className={styles.gallery} aria-labelledby="gallery-title">
          <div className={styles.galleryHeading}><p className={styles.eyebrow}>{trustNews.galleryLabel}</p><h2 id="gallery-title">{trustNews.galleryFirst}<br />{trustNews.gallerySecond}</h2></div>
          <div className={styles.photos}>
            <figure><Image src="/news/vertrauen-das-bleibt/1.jpeg" alt={trustNews.signingAlt} width={2048} height={1536} sizes="(max-width: 760px) 100vw, 720px" /><figcaption>01 / {trustNews.signingCaption}</figcaption></figure>
            <figure><Image src="/news/vertrauen-das-bleibt/2.jpeg" alt={trustNews.personAlt} width={1536} height={2048} sizes="(max-width: 760px) 100vw, 480px" /><figcaption><span className={styles.personName}>Jan Tinnemans</span><span className={styles.personRole}>{trustNews.role}<br />TINN SILVER GROUP</span></figcaption></figure>
          </div>
          <figure className={styles.boat}><Image src="/news/vertrauen-das-bleibt/4.jpeg" alt={trustNews.boatAlt} width={1125} height={633} sizes="(max-width: 1200px) 100vw, 1200px" /><figcaption>03 / {trustNews.boatCaption}</figcaption></figure>
        </section>
        <footer className={styles.footer}><span>Tinn Silver / Fire Fighting &amp; Rescue</span><Link href="/news">{trustNews.allNews} {locale === "ar" ? "←" : "→"}</Link></footer>
      </article>
    </main>
  );
}
