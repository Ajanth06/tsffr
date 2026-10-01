import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StandaloneHeader } from "../../components/standalone-header";
import { getDictionary, getLocale } from "../../../lib/i18n";
import { trustNews } from "../../../lib/trust-news";
import { formatNewsDate } from "../../../lib/news";
import styles from "./story.module.css";

export const metadata: Metadata = {
  title: `${trustNews.title} | Tinn Silver`,
  description: trustNews.intro,
  openGraph: { title: trustNews.title, description: trustNews.intro, images: [trustNews.image] },
};

export default async function TrustNewsPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return (
    <main className="about-page">
      <StandaloneHeader locale={locale} nav={dict.nav} headerHome={dict.common.brandHome} openMenuLabel={dict.common.openMenu} closeMenuLabel={dict.common.closeMenu} backLabel={dict.common.back} />
      <article className={styles.story} lang="de" dir="ltr">
        <header className={styles.header}>
          <div className={styles.topline}><Link href="/news">← Zurück zu News</Link><span>Tinn Silver Journal / 02</span></div>
          <p className={styles.eyebrow}>Interboot · Friedrichshafen</p>
          <p className={styles.eyebrow}><time dateTime={trustNews.date}>{formatNewsDate("de", trustNews.date)}</time></p>
          <h1>Vertrauen,<br /><span>das bleibt.</span></h1>
          <p className={styles.subtitle}>Gemeinsam mit der DLRG. Für den Bodensee.</p>
        </header>
        <figure className={styles.hero}>
          <Image src={trustNews.image} alt="Gruppenfoto mit Handschlag am Tinn-Silver-Messestand auf der Interboot" width={2048} height={1536} sizes="(max-width: 800px) 100vw, 1200px" preload />
          <figcaption>Ein gemeinsamer Schritt für die Wasserrettung am Bodensee.</figcaption>
        </figure>
        <section className={styles.copy} aria-label="Eine zweite Tinn-Silver am Bodensee">
          <div className={styles.fact}><strong>11<span> Meter</span></strong><p>Für die DLRG<br />Ortsgruppe Konstanz</p></div>
          <div><p className={styles.intro}>{trustNews.intro}</p><p className={styles.thanks}>{trustNews.thanks}</p></div>
        </section>
        <section className={styles.gallery} aria-labelledby="gallery-title">
          <div className={styles.galleryHeading}><p className={styles.eyebrow}>Die Partnerschaft in Bildern</p><h2 id="gallery-title">Ein Handschlag.<br />Ein gemeinsamer Kurs.</h2></div>
          <div className={styles.photos}>
            <figure><Image src="/news/vertrauen-das-bleibt/1.jpeg" alt="Gemeinsame Vertragsunterzeichnung am Tisch auf der Interboot" width={2048} height={1536} sizes="(max-width: 760px) 100vw, 720px" /><figcaption>01 / Vertrauen wird zur Zusammenarbeit.</figcaption></figure>
            <figure><Image src="/news/vertrauen-das-bleibt/2.jpeg" alt="Jan Tinnemans bei der Unterzeichnung des Vertrags" width={1536} height={2048} sizes="(max-width: 760px) 100vw, 480px" /><figcaption><span className={styles.personName}>Jan Tinnemans</span><span className={styles.personRole}>CHIEF EXECUTIVE OFFICER,<br />TINN SILVER GROUP</span></figcaption></figure>
          </div>
          <figure className={styles.boat}><Image src="/news/vertrauen-das-bleibt/4.jpeg" alt="Rotes DLRG-Wasserrettungsboot auf einem Transportwagen an der Werft" width={1125} height={633} sizes="(max-width: 1200px) 100vw, 1200px" /><figcaption>03 / Tinn-Silver für die Wasserrettung.</figcaption></figure>
        </section>
        <footer className={styles.footer}><span>Tinn Silver / Fire Fighting &amp; Rescue</span><Link href="/news">Alle News ansehen →</Link></footer>
      </article>
    </main>
  );
}
