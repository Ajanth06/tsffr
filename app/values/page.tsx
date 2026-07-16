import type { Metadata } from "next";
import Image from "next/image";
import { StandaloneHeader } from "../components/standalone-header";
import { GalleryImage } from "../components/gallery-image";
import { getDictionary, getLocale, type Locale } from "../../lib/i18n";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  layout: "full" | "half" | "tall-left" | "tall-right" | "wide-left" | "wide-right" | "center";
};

const galleryCopy: Record<Locale, {
  title: string;
  lead: string;
  intro: string;
  sections: Array<{ label: string; title: string; text: string }>;
}> = {
  en: {
    title: "Inside the workshop.",
    lead: "A closer look at the craft, systems and vessels taking shape under one roof.",
    intro: "From raw aluminium to mission-ready vessels",
    sections: [
      { label: "01 — Construction", title: "Form takes shape.", text: "Every vessel begins with structure: carefully formed aluminium, practical layouts and details engineered for the work ahead." },
      { label: "02 — Integration", title: "Systems come together.", text: "Propulsion, firefighting equipment, navigation and controls are integrated around the crew and its mission." },
      { label: "03 — The fleet", title: "Ready for real work.", text: "Rescue craft, firefighting vessels and custom aluminium boats built for professional use." },
    ],
  },
  de: {
    title: "Einblick in die Werkstatt.",
    lead: "Handwerk, Systeme und Schiffe, die unter einem Dach Gestalt annehmen.",
    intro: "Vom rohen Aluminium zum einsatzbereiten Schiff",
    sections: [
      { label: "01 — Konstruktion", title: "Die Form entsteht.", text: "Jedes Schiff beginnt mit seiner Struktur: präzise geformtes Aluminium, durchdachte Layouts und Details für den späteren Einsatz." },
      { label: "02 — Integration", title: "Systeme werden zu einer Einheit.", text: "Antrieb, Löschtechnik, Navigation und Steuerung werden konsequent auf Besatzung und Mission abgestimmt." },
      { label: "03 — Die Flotte", title: "Bereit für den Einsatz.", text: "Rettungsboote, Löschschiffe und individuelle Aluminiumboote für den professionellen Einsatz." },
    ],
  },
  nl: {
    title: "Binnen in de werkplaats.",
    lead: "Een blik op het vakmanschap, de systemen en de vaartuigen die onder één dak ontstaan.",
    intro: "Van ruw aluminium tot inzetklaar vaartuig",
    sections: [
      { label: "01 — Constructie", title: "De vorm ontstaat.", text: "Elk vaartuig begint met de structuur: zorgvuldig gevormd aluminium, praktische indelingen en details voor het werk dat volgt." },
      { label: "02 — Integratie", title: "Systemen komen samen.", text: "Aandrijving, blustechniek, navigatie en bediening worden geïntegreerd rond bemanning en missie." },
      { label: "03 — De vloot", title: "Klaar voor het echte werk.", text: "Reddingsboten, blusvaartuigen en aluminium maatwerkboten voor professioneel gebruik." },
    ],
  },
  ar: {
    title: "من داخل ورشة العمل.",
    lead: "نظرة أقرب على الحرفية والأنظمة والسفن التي تتشكل تحت سقف واحد.",
    intro: "من الألمنيوم الخام إلى سفينة جاهزة للمهمة",
    sections: [
      { label: "01 — البناء", title: "تبدأ الملامح بالظهور.", text: "تبدأ كل سفينة بهيكل دقيق من الألمنيوم وتصميم عملي وتفاصيل مصممة للمهمة القادمة." },
      { label: "02 — التكامل", title: "تجتمع الأنظمة معًا.", text: "يتم دمج الدفع ومعدات الإطفاء والملاحة والتحكم بما يناسب الطاقم والمهمة." },
      { label: "03 — الأسطول", title: "جاهزة للعمل الحقيقي.", text: "قوارب إنقاذ وسفن إطفاء وقوارب ألمنيوم مخصصة للاستخدام المهني." },
    ],
  },
};

const gallerySections: GalleryItem[][] = [
  [
    { src: "/gallery/shipyard-exterior.jpg", alt: "Tinnemans Shipbuilding workshop on the waterfront", caption: "The shipyard", layout: "tall-left" },
    { src: "/gallery/hull-assembly-wide.jpg", alt: "Welded aluminium boat hull under construction", caption: "Hull construction", layout: "wide-right" },
    { src: "/gallery/raw-hull-bow.jpg", alt: "Unfinished aluminium workboat bow inside the workshop", caption: "Formed aluminium", layout: "wide-left" },
    { src: "/gallery/hatch-detail.jpg", alt: "Aluminium deck hatch and checker plate detail", caption: "Built-in access", layout: "tall-right" },
  ],
  [
    { src: "/gallery/fire-pump-system.jpg", alt: "Portable Rosenbauer firefighting pump installed aboard a rescue boat", caption: "Firefighting system", layout: "tall-left" },
    { src: "/gallery/deck-outfitting.jpg", alt: "Firefighting vessel deck being outfitted in the workshop", caption: "Deck outfitting", layout: "wide-right" },
    { src: "/gallery/helm-console.jpg", alt: "Professional workboat helm with navigation screens and controls", caption: "Mission control", layout: "center" },
  ],
  [
    { src: "/gallery/fireboat-konigswinter.jpg", alt: "Feuerwehr Königswinter fire rescue boat in the workshop", caption: "Feuerwehr Königswinter", layout: "full" },
    { src: "/gallery/fireboat-meerbusch.jpg", alt: "Feuerwehr Meerbusch fireboat viewed from the side", caption: "Feuerwehr Meerbusch", layout: "half" },
    { src: "/gallery/fireboat-stern.jpg", alt: "Twin Honda outboards on a completed fire rescue boat", caption: "Twin-engine response", layout: "half" },
    { src: "/gallery/rescue-dlrg.jpg", alt: "DLRG water rescue boat with Yamaha outboard", caption: "Water rescue", layout: "wide-left" },
    { src: "/gallery/alysson-detail.jpg", alt: "Blue Tinn Silver cabin boat detail", caption: "Custom cabin", layout: "tall-right" },
    { src: "/gallery/alysson-profile.jpg", alt: "Blue Tinn Silver 695 cabin boat on its trailer", caption: "L’Alysson II", layout: "half" },
    { src: "/gallery/workshop-workboats.jpg", alt: "Aluminium workboats lined up inside the workshop", caption: "Built for work", layout: "half" },
    { src: "/gallery/custom-motor-yacht.jpg", alt: "Large custom aluminium motor yacht inside the shipyard", caption: "Custom aluminium", layout: "full" },
  ],
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = galleryCopy[locale];

  return {
    title: `Gallery | Tinn Silver`,
    description: copy.lead,
  };
}

export default async function ValuesPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about: t, nav, common } = dict;
  const copy = galleryCopy[locale];

  return (
    <main className="about-page gallery-page">
      <StandaloneHeader
        locale={locale}
        nav={nav}
        headerHome={t.headerHome}
        openMenuLabel={common.openMenu}
        closeMenuLabel={common.closeMenu}
        backLabel={common.back}
      />

      <section className="standalone-hero gallery-hero" aria-labelledby="gallery-title">
        <Image
          src="/gallery/workshop-fleet.jpg"
          alt="Firefighting and rescue boats together inside the Tinn Silver workshop"
          fill
          sizes="100vw"
          preload
        />
        <div className="gallery-hero-overlay" />
        <div className="about-shell">
          <p>Gallery</p>
          <h1 id="gallery-title">{copy.title}</h1>
          <p className="standalone-hero-lead">{copy.lead}</p>
        </div>
        <span className="gallery-hero-index" aria-hidden="true">01 — 16</span>
      </section>

      <section className="gallery-intro" aria-label={copy.intro}>
        <div className="about-shell">
          <p className="section-label">Gallery — 2026</p>
          <h2>{copy.intro}</h2>
        </div>
      </section>

      {gallerySections.map((items, sectionIndex) => {
        const section = copy.sections[sectionIndex];

        return (
          <section className={`gallery-chapter gallery-chapter--${sectionIndex + 1}`} key={section.label}>
            <div className="about-shell gallery-chapter-heading">
              <p className="section-label">{section.label}</p>
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </div>
            <div className="gallery-grid">
              {items.map((item, itemIndex) => (
                <figure className={`gallery-item gallery-item--${item.layout}`} key={item.src}>
                  <GalleryImage
                    src={item.src}
                    alt={item.alt}
                    caption={item.caption}
                    index={`${String(sectionIndex + 1).padStart(2, "0")}.${String(itemIndex + 1).padStart(2, "0")}`}
                  />
                  <figcaption>
                    <span>{String(sectionIndex + 1).padStart(2, "0")}.{String(itemIndex + 1).padStart(2, "0")}</span>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
