import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StandaloneHeader } from "../components/standalone-header";
import { getDictionary, getLocale } from "../../lib/i18n";
import { vesselProjects } from "../../lib/projects";

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

      <section className="project-index" aria-labelledby="project-index-title">
        <div className="about-shell">
          <header className="project-index-heading">
            <p className="section-label">{dict.project.listLabel}</p>
            <div>
              <h2 id="project-index-title">{dict.project.listTitle}</h2>
              <p>{dict.project.listLead}</p>
            </div>
          </header>

          <ol className="project-index-list">
            {vesselProjects.map((project, index) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`${dict.project.viewProject}: ${dict.project.projectNames[index]}`}
                  prefetch={false}
                >
                  <span className="project-index-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-index-name">
                    {dict.project.projectNames[index]}
                  </span>
                  <span className="project-index-action" aria-hidden="true">
                    {dict.project.viewProject} <i>↗</i>
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <footer className="project-index-footer">
            <p>{t.quote}</p>
            <Link href="/contact#quote-form">{t.ctaQuote}</Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
