import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StandaloneHeader } from "../../components/standalone-header";
import { getDictionary, getLocale } from "../../../lib/i18n";
import { getVesselProject, vesselProjects } from "../../../lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return vesselProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getVesselProject(slug);

  if (!project) {
    return { title: "Project not found | Tinn Silver" };
  }

  const locale = await getLocale();
  const dict = getDictionary(locale);
  const projectIndex = vesselProjects.findIndex(
    (item) => item.slug === project.slug,
  );

  return {
    title: `${dict.project.projectNames[projectIndex] ?? project.name} | Tinn Silver`,
    description:
      dict.project.projectOverviews[projectIndex] ?? project.overview,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getVesselProject(slug);

  if (!project) notFound();

  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about: t, nav, common } = dict;
  const projectIndex = vesselProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const projectNumber = projectIndex + 1;
  const projectName =
    dict.project.projectNames[projectIndex] ?? project.name;
  const projectOverview =
    dict.project.projectOverviews[projectIndex] ?? project.overview;
  const specificationValues = [
    dict.project.vesselTypes[projectIndex],
    dict.project.onRequest,
    dict.project.onRequest,
    dict.project.onRequest,
    dict.project.aluminium,
    dict.project.onRequest,
    dict.project.onRequest,
    dict.project.onRequest,
    dict.project.onRequest,
    dict.project.operationalPurposes[projectIndex],
  ];

  return (
    <main className="about-page project-detail-page">
      <StandaloneHeader
        locale={locale}
        nav={nav}
        headerHome={t.headerHome}
        openMenuLabel={common.openMenu}
        closeMenuLabel={common.closeMenu}
        backLabel={common.back}
      />

      <section
        className="project-detail-hero"
        aria-labelledby="project-detail-title"
      >
        <div className="about-shell">
          <Link href="/project" className="project-back-link">
            <span aria-hidden="true">←</span> {dict.project.backToProjects}
          </Link>
          <p className="section-label">
            {dict.project.projectLabel}{" "}
            {String(projectNumber).padStart(2, "0")} —{" "}
            {String(vesselProjects.length).padStart(2, "0")}
          </p>
          <h1 id="project-detail-title">{projectName}</h1>
        </div>
      </section>

      <section
        className="project-detail-gallery"
        aria-labelledby="project-gallery-title"
      >
        <div className="about-shell">
          <header className="project-detail-section-heading">
            <p className="section-label">
              01 — {dict.project.galleryLabel}
            </p>
            <h2 id="project-gallery-title">
              {dict.project.galleryTitle}
            </h2>
          </header>
          <figure className="project-detail-image">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={project.width}
              height={project.height}
              sizes="(max-width: 700px) 100vw, 88vw"
            />
          </figure>
        </div>
      </section>

      <section
        className="project-detail-information"
        aria-labelledby="project-overview-title"
      >
        <div className="about-shell project-detail-information-grid">
          <article className="project-overview">
            <p className="section-label">
              02 — {dict.project.overviewLabel}
            </p>
            <h2 id="project-overview-title">
              {dict.project.overviewTitle}
            </h2>
            <p>{projectOverview}</p>
          </article>

          <div className="project-specifications">
            <p className="section-label">
              03 — {dict.project.dataLabel}
            </p>
            <h2>{dict.project.specificationsTitle}</h2>
            <div className="project-specifications-table-wrap">
              <table>
                <tbody>
                  {dict.project.specificationLabels.map((label, index) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{specificationValues[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="project-detail-return about-shell">
        <Link href="/project">
          <span aria-hidden="true">←</span> {dict.project.backToProjects}
        </Link>
      </div>
    </main>
  );
}
