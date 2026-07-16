import type { Metadata } from "next";
import { StandaloneHeader } from "../components/standalone-header";
import { getDictionary, getLocale } from "../../lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = getDictionary(locale);

  return {
    title: meta.valuesTitle,
    description: meta.valuesDescription,
  };
}

export default async function ValuesPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about: t, nav, common } = dict;

  return (
    <main className="about-page values-page">
      <StandaloneHeader
        locale={locale}
        nav={nav}
        headerHome={t.headerHome}
        openMenuLabel={common.openMenu}
        closeMenuLabel={common.closeMenu}
        backLabel={common.back}
      />

      <section className="standalone-hero" aria-labelledby="values-title">
        <div className="about-shell">
          <h1 id="values-title">{t.values.title}</h1>
        </div>
      </section>

      <section className="about-values values-content" aria-label={t.values.label}>
        <div className="about-shell">
          <div className="value-grid">
            {t.valueCards.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="value-icon" aria-hidden="true"><i /><i /></div>
                <h2>{value.title}</h2>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
