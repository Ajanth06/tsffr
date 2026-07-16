import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StandaloneHeader } from "../components/standalone-header";
import { getDictionary, getLocale } from "../../lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const project = dict.nav.find((item) => item.href === "/project");

  return {
    title: `${project?.label ?? "Project"} | Tinn Silver`,
    description: `${dict.project.title} ${dict.project.lead}`,
  };
}

export default async function ProjectPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about: t, nav, common } = dict;

  return (
    <main className="about-page project-page">
      <StandaloneHeader
        locale={locale}
        nav={nav}
        headerHome={t.headerHome}
        openMenuLabel={common.openMenu}
        closeMenuLabel={common.closeMenu}
        backLabel={common.back}
      />

      <section className="standalone-hero" aria-labelledby="project-title">
        <Image
          src="/project-shipyard-hero.png"
          alt={t.processSteps[2].alt}
          fill
          sizes="100vw"
          preload
        />
        <div className="about-shell">
          <h1 id="project-title">{dict.project.title}</h1>
          <p className="standalone-hero-lead">{dict.project.lead}</p>
        </div>
      </section>

      <section className="project-concept" aria-labelledby="project-concept-title">
        <div className="about-shell">
          <header className="project-concept-heading">
            <p className="section-label">{t.values.label}</p>
            <h2 id="project-concept-title">{t.values.title}</h2>
          </header>

          <div className="project-matrix">
            {t.valueCards.map((value, index) => (
              <article
                className={`project-principle project-principle--${index + 1}`}
                key={value.title}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}

            <div className="project-core" aria-hidden="true">
              <div className="project-core-ring project-core-ring--outer" />
              <div className="project-core-ring project-core-ring--inner" />
              <i /><i />
              <span>TSFFR</span>
            </div>
          </div>

          <footer className="project-concept-footer">
            <p>{t.quote}</p>
            <Link href="/contact#quote-form">{t.ctaQuote}</Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
