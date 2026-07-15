import type { Metadata } from "next";
import Image from "next/image";
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
  const { about: t, nav } = dict;

  return (
    <main className="about-page project-page">
      <StandaloneHeader
        locale={locale}
        nav={nav}
        headerHome={t.headerHome}
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
    </main>
  );
}
