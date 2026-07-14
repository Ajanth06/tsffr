import type { Metadata } from "next";
import { StandaloneHeader } from "../components/standalone-header";
import { getDictionary, getLocale } from "../../lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const project = dict.nav.find((item) => item.href === "/project");

  return {
    title: `${project?.label ?? "Project"} | Tinn Silver`,
  };
}

export default async function ProjectPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about: t, common, nav } = dict;
  const project = nav.find((item) => item.href === "/project");
  const title = project?.label ?? "Project";

  return (
    <main className="about-page project-page">
      <StandaloneHeader
        locale={locale}
        common={common}
        nav={nav}
        headerHome={t.headerHome}
        currentHref="/project"
        currentOnly
      />

      <section className="standalone-hero" aria-labelledby="project-title">
        <div className="about-shell">
          <h1 id="project-title">{title}</h1>
        </div>
      </section>
    </main>
  );
}
