import { cookies } from "next/headers";
import { LOCALE_COOKIE, type Locale } from "./locale";

export type { Locale } from "./locale";
export { LOCALE_COOKIE } from "./locale";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  if (value === "de" || value === "nl" || value === "ar") return value;
  return "en";
}

export type NavItem = { label: string; href: string };

export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    valuesTitle: string;
    valuesDescription: string;
  };
  common: {
    openMenu: string;
    closeMenu: string;
    back: string;
    brandHome: string;
    readMore: string;
    explore: string;
    scrollToStory: string;
    netherlandsFlag: string;
  };
  nav: NavItem[];
  aboutNav: NavItem[];
  project: {
    title: string;
    lead: string;
  };
  home: {
    heroLine1: string;
    heroLine2: string;
    heroDescription: string;
    heroCta: string;
    heroImageAlt: string;
    aboutHeading: string;
    aboutParagraphs: string[];
    aboutImageAlt: string;
    statsLabel: string;
    stats: [string, string, string];
    companyFacts: string;
  };
  about: {
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    heroImageAlt: string;
    storyImageAlt: string;
    storyCaption: string;
    heritageGalleryLabel: string;
    heritageImages: [
      { alt: string; caption: string },
      { alt: string; caption: string },
      { alt: string; caption: string },
    ];
    story: { label: string; title: string };
    storyLead: string;
    storyParagraphs: [string, string];
    quote: string;
    values: { label: string; title: string };
    valueCards: Array<{ title: string; text: string }>;
    process: { label: string; title: string; lead: string };
    processSteps: Array<{ title: string; alt: string; text: string }>;
    workshop: { label: string; title: string };
    workshopCaptions: [string, string, string];
    numbersLabel: string;
    numbers: Array<{ value: string; label: string }>;
    industries: { label: string; title: string };
    industryNames: [string, string, string, string, string, string];
    quality: { label: string; title: string };
    qualityLead: string;
    qualityItems: Array<{ title: string; text: string }>;
    qualityCapabilitiesLabel: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaLead: string;
    ctaQuote: string;
    ctaContact: string;
    ctaImageAlt: string;
    headerHome: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      homeTitle: "Tinn Silver | Fire Fighting & Rescue Boats",
      homeDescription:
        "Custom aluminium firefighting and rescue boats built in the Netherlands. More than 80 years of Dutch boatbuilding expertise.",
      aboutTitle: "About us | Tinn Silver",
      aboutDescription:
        "More than 80 years of Dutch craftsmanship in custom aluminium workboats, rescue boats and firefighting vessels.",
      valuesTitle: "Our values | Tinn Silver",
      valuesDescription:
        "Engineering, in-house craftsmanship, custom solutions and dependable performance are at the heart of every Tinn Silver vessel.",
    },
    common: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      back: "Back",
      brandHome: "Tinn Silver Fire Fighting and Rescue home",
      readMore: "Read more",
      explore: "Explore our story",
      scrollToStory: "Scroll to our story",
      netherlandsFlag: "Netherlands flag",
    },
    nav: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Gallery", href: "/values" },
      { label: "Process", href: "/process" },
      { label: "Project", href: "/project" },
      { label: "Contact", href: "/contact" },
    ],
    aboutNav: [
      { label: "Story", href: "#story" },
    ],
    project: {
      title: "Custom aluminium vessels, from concept to delivery.",
      lead: "Designed to perform in the toughest marine environments with uncompromising quality.",
    },
    home: {
      heroLine1: "Welcome to Tinn Silver",
      heroLine2: "Fire Fighting & Rescue Boats",
      heroDescription:
        "Explore our advanced firefighting and rescue boats designed for safety and efficiency in emergency situations.",
      heroCta: "Discover our boats",
      heroImageAlt: "Two crew members aboard a modern fishing and rescue boat at sea",
      aboutHeading: "Since 1941, delivering Dutch boatbuilding expertise.",
      aboutParagraphs: [
        "Some legacies are inherited. Others are built.",
        "Ours began more than 85 years ago on the waterways of the Netherlands, where our grandfather, Senior Tinnemans, earned his reputation as a master craftsman building wooden inland cargo vessels. Every beam he shaped and every vessel he completed reflected values that cannot be manufactured. Dedication, integrity, precision, and pride in one's work.",
        "These values became the foundation of our family.",
        "As one generation passed its knowledge to the next, the workshop evolved into a renowned maritime engineering company. From traditional wooden vessels to advanced constructions in steel, aluminium, and stainless steel, our family never pursued growth for its own sake. We pursued perfection. Every innovation was embraced without ever compromising the craftsmanship that defined our name.",
        "Three decades ago, that same spirit inspired something new.",
        "The first Tinn-Silver aluminium boats were never intended for the market. They were built for ourselves. Designed exactly as we believed a professional aluminium boat should be. Their uncompromising quality soon attracted attention, and what began as a family's passion grew into one of Europe's most respected builders of premium aluminium vessels, trusted by professionals across the world.",
        "From this heritage, Tinn Silver Firefighting & Rescue BV was born.",
        "Today, we design and build bespoke aluminium firefighting and rescue vessels for those who carry the greatest responsibility. Protecting lives. Fire brigades, rescue services, marine police, port authorities, and government agencies depend on our vessels because failure is never an option.",
        "Every boat is individually designed, engineered, built, and tested entirely in-house. There are no standard solutions, because no two missions are ever the same. Every weld, every detail, and every decision reflects generations of experience and an uncompromising pursuit of excellence.",
        "For our family, boatbuilding has never been simply a profession. It is our heritage.",
        "More than eight decades after our grandfather first began shaping timber by hand, we continue to build with the same philosophy that guided him from the very beginning. Create vessels of exceptional quality, built to endure, trusted when it matters most, and worthy of carrying our family name.",
      ],
      aboutImageAlt: "Aluminium rescue boat under construction in the Tinn Silver workshop",
      statsLabel: "Company facts",
      stats: ["Years experience", "Engineering", "Custom built"],
      companyFacts: "Company facts",
    },
    about: {
      heroEyebrow: "About Tinn Silver",
      heroTitle: "Built around\nyour mission.",
      heroLead:
        "For more than 80 years, we have designed and built custom aluminium boats trusted by emergency services, government agencies and commercial operators across Europe.",
      heroImageAlt: "Aluminium rescue vessel under construction in a modern shipyard",
      storyImageAlt: "Director of Tinn Silver in the aluminium boat workshop",
      storyCaption: "Chief Executive Officer,",
      heritageGalleryLabel: "Tinn Silver heritage",
      heritageImages: [
        {
          alt: "Historic S. Tinnemans shipyard crew building a wooden vessel in Maasbracht, with an inland cargo vessel below",
          caption: "From wooden inland cargo vessels to generations of maritime craftsmanship",
        },
        {
          alt: "Historic Tinnemans vessel moored in front of the S. Tinnemans shipyard in Maasbracht",
          caption: "The family shipyard in Maasbracht",
        },
        {
          alt: "Historic Tinnemans workboat outside the family shipyard in Maasbracht, founded in 1941",
          caption: "Built by the family shipyard, established in 1941",
        },
      ],
      story: { label: "Our Heritage", title: "More than 80 years of Dutch craftsmanship" },
      storyLead:
        "What began as Dutch boatbuilding expertise has grown into a specialist operation for professional aluminium vessels.",
      storyParagraphs: [
        "Tinn Silver Fire Fighting & Rescue BV designs and builds boats for crews whose work places exceptional demands on strength, safety and control. Together with Tinnemans Floating Solutions BV, we combine decades of practical knowledge with modern design and engineering.",
        "Today, our focus is on fully custom firefighting, rescue and commercial craft. Customers work directly with the people who engineer and build their vessel, creating short lines of communication from the first drawing to final delivery.",
      ],
      quote: "Every vessel should be as unique as the mission it is built to serve.",
      values: { label: "What makes us different", title: "Purpose in every detail." },
      valueCards: [
        {
          title: "Engineering first",
          text: "Every project begins with your operational requirements, translated into a clear technical solution.",
        },
        {
          title: "Built in-house",
          text: "Design, aluminium construction, welding and finishing are coordinated under one roof.",
        },
        {
          title: "Fully custom",
          text: "Every vessel is configured and engineered specifically for the mission it needs to perform.",
        },
        {
          title: "Trusted reliability",
          text: "Built for professional crews who depend on predictable performance in demanding conditions.",
        },
      ],
      process: {
        label: "How we build",
        title: "From first idea\nto open water.",
        lead: "Every stage, from planning and engineering to construction and delivery, under one roof.",
      },
      processSteps: [
        { title: "Concept", alt: "Rescue boat concept drawings on an engineering table", text: "Your mission, crew and operating environment are translated into a clear vessel concept and technical brief." },
        { title: "Engineering", alt: "Marine engineer working with CAD and CNC equipment", text: "Hull, systems and equipment are engineered as one integrated solution before production begins." },
        { title: "Construction", alt: "Precision welding during aluminium hull construction", text: "Certified materials and precision aluminium workmanship bring every engineered detail to life in our workshop." },
        { title: "Testing", alt: "Completed fire rescue boats being tested on the water", text: "Systems, handling and performance are verified against the demands of the vessel's intended operation." },
        { title: "Delivery", alt: "Customer receiving a completed aluminium workboat", text: "The finished vessel is handed over mission ready, with direct support from the people who built it." },
      ],
      workshop: { label: "Our workshop", title: "Craftsmanship lives here." },
      workshopCaptions: ["Precision welding", "Engineering & CNC", "Final assembly"],
      numbersLabel: "Company facts",
      numbers: [
        { value: "1941", label: "Dutch boatbuilding heritage" },
        { value: "30+", label: "Years of aluminium boatbuilding" },
        { value: "ONE ROOF", label: "Design, engineering, build and testing" },
        { value: "TAILORED", label: "Every vessel built for its mission" },
      ],
      industries: { label: "Industries we serve", title: "Built for work that matters." },
      industryNames: [
        "Fire fighting",
        "Rescue",
        "Marine police",
        "Government",
        "Commercial fishing",
        "Commercial marine",
      ],
      quality: { label: "Quality", title: "Confidence is built, not claimed." },
      qualityLead:
        "Materials, production methods, testing and documentation are selected around each vessel's intended operation. Applicable certification and classification requirements are confirmed and documented individually for every project.",
      qualityItems: [
        { title: "Marine-grade aluminium", text: "Material selection matched to structure and operating profile." },
        { title: "TIG / MIG welding", text: "Controlled aluminium fabrication by experienced specialists." },
        { title: "CAD engineering", text: "Detailed design and production-ready technical development." },
        { title: "Sea trials", text: "On-water testing before final handover." },
        { title: "Project documentation", text: "A clear technical record tailored to the delivered vessel." },
      ],
      qualityCapabilitiesLabel: "Quality capabilities",
      ctaEyebrow: "Start a project",
      ctaTitle: "Let's build your\nnext vessel.",
      ctaLead: "Tell us about your mission and we'll design the right solution for you.",
      ctaQuote: "Request a quote",
      ctaContact: "Contact us",
      ctaImageAlt: "Two Tinn Silver fire rescue boats on the water",
      headerHome: "Tinn Silver home page",
    },
  },
  de: {
    meta: {
      homeTitle: "Tinn Silver | Lösch- & Rettungsboote",
      homeDescription:
        "Maßgeschneiderte Aluminium-Lösch- und Rettungsboote aus den Niederlanden. Mehr als 80 Jahre niederländische Bootsbau-Expertise.",
      aboutTitle: "Über uns | Tinn Silver",
      aboutDescription:
        "Mehr als 80 Jahre niederländisches Handwerk für individuelle Aluminium-Arbeits-, Rettungs- und Löschboote.",
      valuesTitle: "Unsere Werte | Tinn Silver",
      valuesDescription:
        "Engineering, Handwerk aus eigener Fertigung, individuelle Lösungen und zuverlässige Leistung prägen jedes Schiff von Tinn Silver.",
    },
    common: {
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      back: "Zurück",
      brandHome: "Tinn Silver Lösch- und Rettungsboote, Startseite",
      readMore: "Mehr erfahren",
      explore: "Unsere Geschichte entdecken",
      scrollToStory: "Zur Geschichte scrollen",
      netherlandsFlag: "Flagge der Niederlande",
    },
    nav: [
      { label: "Startseite", href: "/" },
      { label: "Über uns", href: "/about" },
      { label: "Galerie", href: "/values" },
      { label: "Prozess", href: "/process" },
      { label: "Projekt", href: "/project" },
      { label: "Kontakt", href: "/contact" },
    ],
    aboutNav: [
      { label: "Geschichte", href: "#story" },
    ],
    project: {
      title: "Individuelle Aluminiumschiffe, vom Konzept bis zur Lieferung.",
      lead: "Entwickelt für härteste maritime Einsätze mit kompromissloser Qualität.",
    },
    home: {
      heroLine1: "Willkommen bei Tinn Silver",
      heroLine2: "Lösch und Rettungsboote",
      heroDescription:
        "Entdecken Sie unsere fortschrittlichen Lösch und Rettungsboote, die für Sicherheit und Effizienz im Einsatz entwickelt wurden.",
      heroCta: "Unsere Boote entdecken",
      heroImageAlt: "Zwei Besatzungsmitglieder auf einem modernen Rettungsboot auf See",
      aboutHeading: "Seit 1941 liefern wir niederländische Bootsbau-Expertise.",
      aboutParagraphs: [
        "Manche Vermächtnisse erbt man. Andere baut man.",
        "Unseres begann vor mehr als 85 Jahren auf den Wasserwegen der Niederlande, wo unser Großvater, Senior Tinnemans, seinen Ruf als Meisterhandwerker beim Bau hölzerner Binnenschiffe erwarb. Jeder Balken, den er formte, und jedes Schiff, das er vollendete, spiegelte Werte wider, die man nicht herstellen kann. Hingabe, Integrität, Präzision und Stolz auf die eigene Arbeit.",
        "Diese Werte wurden das Fundament unserer Familie.",
        "Als eine Generation ihr Wissen an die nächste weitergab, entwickelte sich die Werkstatt zu einem renommierten maritimen Engineering-Unternehmen. Von traditionellen Holzschiffen bis zu modernen Konstruktionen aus Stahl, Aluminium und Edelstahl verfolgte unsere Familie niemals Wachstum um seiner selbst willen. Wir verfolgten Perfektion. Jede Innovation wurde angenommen, ohne jemals das Handwerk zu kompromittieren, das unseren Namen definierte.",
        "Vor drei Jahrzehnten inspirierte derselbe Geist etwas Neues.",
        "Die ersten Tinn-Silver-Aluminiumboote waren nie für den Markt gedacht. Sie wurden für uns selbst gebaut. Genau so, wie wir glaubten, dass ein professionelles Aluminiumboot sein sollte. Ihre kompromisslose Qualität zog bald Aufmerksamkeit auf sich, und was als Leidenschaft einer Familie begann, wuchs zu einem der angesehensten Hersteller premium Aluminiumfahrzeuge in Europa heran, dem Fachleute weltweit vertrauen.",
        "Aus diesem Erbe entstand Tinn Silver Firefighting & Rescue BV.",
        "Heute entwerfen und bauen wir maßgeschneiderte Aluminium-Lösch- und Rettungsfahrzeuge für diejenigen, die die größte Verantwortung tragen. Leben zu schützen. Feuerwehren, Rettungsdienste, Wasserschutzpolizei, Hafenbehörden und Regierungsstellen verlassen sich auf unsere Schiffe, weil Ausfall keine Option ist.",
        "Jedes Boot wird individuell entworfen, konstruiert, gebaut und vollständig im eigenen Haus getestet. Es gibt keine Standardlösungen, denn keine zwei Einsätze sind jemals gleich. Jede Schweißnaht, jedes Detail und jede Entscheidung spiegelt Generationen von Erfahrung und ein kompromissloses Streben nach Exzellenz wider.",
        "Für unsere Familie war Bootsbau nie nur ein Beruf. Es ist unser Erbe.",
        "Mehr als acht Jahrzehnte, nachdem unser Großvater begann, Holz von Hand zu formen, bauen wir weiter nach derselben Philosophie, die ihn von Anfang an leitete. Schiffe von außergewöhnlicher Qualität schaffen, die Bestand haben, denen man vertraut, wenn es am wichtigsten ist, und die es wert sind, unseren Familiennamen zu tragen.",
      ],
      aboutImageAlt: "Aluminium-Rettungsboot im Bau in der Tinn Silver Werkstatt",
      statsLabel: "Unternehmensfakten",
      stats: ["Jahre Erfahrung", "Ingenieurskunst", "Maßgeschneidert"],
      companyFacts: "Unternehmensfakten",
    },
    about: {
      heroEyebrow: "Über Tinn Silver",
      heroTitle: "Gebaut für\nIhren Einsatz.",
      heroLead:
        "Seit mehr als 80 Jahren konstruieren und bauen wir individuelle Aluminiumboote für Einsatzkräfte, Behörden und gewerbliche Betreiber in ganz Europa.",
      heroImageAlt: "Aluminium-Rettungsboot im Bau in einer modernen Werft",
      storyImageAlt: "Geschäftsführer von Tinn Silver in der Aluminium-Bootswerkstatt",
      storyCaption: "Geschäftsführer,",
      heritageGalleryLabel: "Das Erbe von Tinn Silver",
      heritageImages: [
        {
          alt: "Historische Belegschaft der Werft S. Tinnemans beim Bau eines Holzschiffs in Maasbracht, darunter ein Binnenschiff",
          caption: "Von hölzernen Binnenschiffen zu Generationen maritimer Handwerkskunst",
        },
        {
          alt: "Historisches Tinnemans Schiff vor der Werft S. Tinnemans in Maasbracht",
          caption: "Die Familienwerft in Maasbracht",
        },
        {
          alt: "Historisches Tinnemans Arbeitsboot vor der 1941 gegründeten Familienwerft in Maasbracht",
          caption: "Gebaut von der 1941 gegründeten Familienwerft",
        },
      ],
      story: { label: "Unser Erbe", title: "Mehr als 80 Jahre niederländisches Handwerk" },
      storyLead:
        "Was als niederländische Bootsbau-Expertise begann, ist heute ein Spezialbetrieb für professionelle Aluminiumfahrzeuge.",
      storyParagraphs: [
        "Tinn Silver Fire Fighting & Rescue BV konstruiert und baut Boote für Besatzungen, deren Arbeit höchste Anforderungen an Stärke, Sicherheit und Kontrolle stellt. Gemeinsam mit Tinnemans Floating Solutions BV verbinden wir jahrzehntelange Praxiserfahrung mit modernem Design und Engineering.",
        "Heute konzentrieren wir uns auf vollständig individuelle Lösch-, Rettungs- und gewerbliche Boote. Kunden arbeiten direkt mit den Menschen zusammen, die ihr Schiff konstruieren und bauen, mit kurzen Wegen vom ersten Entwurf bis zur Auslieferung.",
      ],
      quote: "Jedes Schiff soll so einzigartig sein wie der Einsatz, für den es gebaut wird.",
      values: { label: "Was uns auszeichnet", title: "Sinn in jedem Detail." },
      valueCards: [
        {
          title: "Engineering zuerst",
          text: "Jedes Projekt beginnt mit Ihren operativen Anforderungen, übersetzt in eine klare technische Lösung.",
        },
        {
          title: "Alles in-house",
          text: "Design, Aluminiumbau, Schweißen und Endmontage werden unter einem Dach koordiniert.",
        },
        {
          title: "Vollständig individuell",
          text: "Jedes Schiff wird speziell für den Einsatz konfiguriert und konstruiert, für den es gebaut wird.",
        },
        {
          title: "Verlässliche Qualität",
          text: "Gebaut für professionelle Besatzungen, die in anspruchsvollen Bedingungen auf planbare Leistung angewiesen sind.",
        },
      ],
      process: {
        label: "Wie wir bauen",
        title: "Von der ersten Idee\nbis aufs Wasser.",
        lead: "Jede Phase, von Planung und Engineering bis Bau und Auslieferung, unter einem Dach.",
      },
      processSteps: [
        { title: "Konzept", alt: "Konzeptzeichnungen eines Rettungsboots auf einem Konstruktionstisch", text: "Ihr Einsatz, Ihre Besatzung und das Einsatzgebiet werden in ein klares Schiffskonzept und technisches Lastenheft übersetzt." },
        { title: "Engineering", alt: "Schiffbauingenieur bei CAD- und CNC-Arbeiten", text: "Rumpf, Systeme und Ausrüstung werden vor Produktionsbeginn als eine integrierte Lösung konstruiert." },
        { title: "Konstruktion", alt: "Präzisionsschweißen beim Aluminium-Rumpfbau", text: "Zertifizierte Materialien und präzise Aluminiumverarbeitung setzen jedes technische Detail in unserer Werkstatt um." },
        { title: "Erprobung", alt: "Fertige Lösch- und Rettungsboote bei Tests auf dem Wasser", text: "Systeme, Fahrverhalten und Leistung werden anhand der Anforderungen des vorgesehenen Einsatzes geprüft." },
        { title: "Auslieferung", alt: "Kunde bei Übergabe eines fertigen Aluminium-Arbeitsboots", text: "Das fertige Schiff wird einsatzbereit übergeben, mit direkter Unterstützung durch die Menschen, die es gebaut haben." },
      ],
      workshop: { label: "Unsere Werkstatt", title: "Handwerk hat hier sein Zuhause." },
      workshopCaptions: ["Präzisionsschweißen", "Engineering & CNC", "Endmontage"],
      numbersLabel: "Unternehmensfakten",
      numbers: [
        { value: "1941", label: "Niederländisches Bootsbauerbe" },
        { value: "30+", label: "Jahre Aluminiumbootbau" },
        { value: "EIN DACH", label: "Design, Engineering, Bau und Erprobung" },
        { value: "EIN UNIKAT", label: "Jedes Schiff für seinen Einsatz gebaut" },
      ],
      industries: { label: "Branchen", title: "Gebaut für Arbeit, die zählt." },
      industryNames: [
        "Brandbekämpfung",
        "Rettung",
        "Wasserschutzpolizei",
        "Behörden",
        "Gewerbliche Fischerei",
        "Gewerbliche Schifffahrt",
      ],
      quality: { label: "Qualität", title: "Vertrauen entsteht durch Bau, nicht durch Behauptung." },
      qualityLead:
        "Materialien, Fertigungsmethoden, Tests und Dokumentation werden auf den geplanten Einsatz jedes Schiffes abgestimmt. Geltende Zertifizierungs- und Klassifikationsanforderungen werden für jedes Projekt individuell bestätigt und dokumentiert.",
      qualityItems: [
        { title: "Marine-Aluminium", text: "Materialauswahl abgestimmt auf Struktur und Einsatzprofil." },
        { title: "WIG / MIG-Schweißen", text: "Kontrollierter Aluminiumbau durch erfahrene Spezialisten." },
        { title: "CAD-Engineering", text: "Detailliertes Design und produktionsreife technische Ausarbeitung." },
        { title: "Probefahrten", text: "Tests auf dem Wasser vor der finalen Übergabe." },
        { title: "Projektdokumentation", text: "Eine klare technische Dokumentation für das gelieferte Schiff." },
      ],
      qualityCapabilitiesLabel: "Qualitätsmerkmale",
      ctaEyebrow: "Projekt starten",
      ctaTitle: "Lassen Sie uns Ihr\nnächstes Schiff bauen.",
      ctaLead: "Erzählen Sie uns von Ihrem Einsatz, wir entwickeln die passende Lösung für Sie.",
      ctaQuote: "Angebot anfordern",
      ctaContact: "Kontakt aufnehmen",
      ctaImageAlt: "Zwei Tinn Silver Lösch- und Rettungsboote auf dem Wasser",
      headerHome: "Tinn Silver Startseite",
    },
  },
  nl: {
    meta: {
      homeTitle: "Tinn Silver | Blus en Reddingsboten",
      homeDescription:
        "Maatwerk aluminium blus en reddingsboten uit Nederland. Meer dan 80 jaar Nederlandse bootbouwervaring.",
      aboutTitle: "Over ons | Tinn Silver",
      aboutDescription:
        "Meer dan 80 jaar Nederlands vakmanschap in maatwerk aluminium werkboten, reddingsboten en blusvaartuigen.",
      valuesTitle: "Onze waarden | Tinn Silver",
      valuesDescription:
        "Engineering, vakmanschap in eigen huis, oplossingen op maat en betrouwbare prestaties staan centraal in elk schip van Tinn Silver.",
    },
    common: {
      openMenu: "Menu openen",
      closeMenu: "Menu sluiten",
      back: "Terug",
      brandHome: "Tinn Silver blus en reddingsboten, startpagina",
      readMore: "Lees meer",
      explore: "Ontdek ons verhaal",
      scrollToStory: "Scroll naar ons verhaal",
      netherlandsFlag: "Nederlandse vlag",
    },
    nav: [
      { label: "Home", href: "/" },
      { label: "Over ons", href: "/about" },
      { label: "Galerij", href: "/values" },
      { label: "Proces", href: "/process" },
      { label: "Project", href: "/project" },
      { label: "Contact", href: "/contact" },
    ],
    aboutNav: [
      { label: "Verhaal", href: "#story" },
    ],
    project: {
      title: "Aluminium vaartuigen op maat, van concept tot oplevering.",
      lead: "Ontworpen om te presteren in de zwaarste maritieme omgevingen met compromisloze kwaliteit.",
    },
    home: {
      heroLine1: "Welkom bij Tinn Silver",
      heroLine2: "Blus en Reddingsboten",
      heroDescription:
        "Ontdek onze geavanceerde blus en reddingsboten, ontwikkeld voor veiligheid en efficiëntie tijdens inzet.",
      heroCta: "Ontdek onze boten",
      heroImageAlt: "Twee bemanningsleden aan boord van een modern reddingsboot op zee",
      aboutHeading: "Sinds 1941 leveren wij Nederlandse bootbouwexpertise.",
      aboutParagraphs: [
        "Sommige erfenissen worden geërfd. Andere worden gebouwd.",
        "Het onze begon meer dan 85 jaar geleden op de Nederlandse waterwegen, waar onze grootvader, Senior Tinnemans, zijn reputatie verdiende als meesterbouwer van houten binnenvaartschepen. Elke balk die hij vormde en elk schip dat hij voltooide, weerspiegelde waarden die niet te vervaardigen zijn. Toewijding, integriteit, precisie en trots op het eigen werk.",
        "Deze waarden werden het fundament van onze familie.",
        "Toen de ene generatie haar kennis doorgaf aan de volgende, groeide de werkplaats uit tot een gerenommeerd maritiem engineeringbedrijf. Van traditionele houten schepen tot geavanceerde constructies in staal, aluminium en roestvrij staal, onze familie zocht nooit groei omwille van groei. Wij zochten perfectie. Elke innovatie werd omarmd zonder ooit het vakmanschap te compromitteren dat onze naam definieerde.",
        "Drie decennia geleden inspireerde diezelfde geest iets nieuws.",
        "De eerste Tinn-Silver aluminiumboten waren nooit bedoeld voor de markt. Ze werden voor onszelf gebouwd. Precies zoals wij geloofden dat een professionele aluminiumboot moest zijn. Hun compromisloze kwaliteit trok al snel aandacht, en wat begon als passie van een familie, groeide uit tot een van Europa's meest gerespecteerde bouwers van premium aluminium vaartuigen, vertrouwd door professionals over de hele wereld.",
        "Uit dit erfgoed ontstond Tinn Silver Firefighting & Rescue BV.",
        "Vandaag ontwerpen en bouwen wij aluminium blus- en reddingsvaartuigen op maat voor degenen die de grootste verantwoordelijkheid dragen. Levens beschermen. Brandweerkorpsen, reddingsdiensten, waterpolitie, havenautoriteiten en overheidsinstanties vertrouwen op onze vaartuigen, omdat falen nooit een optie is.",
        "Elke boot wordt individueel ontworpen, ontwikkeld, gebouwd en volledig in eigen huis getest. Er zijn geen standaardoplossingen, omdat geen twee missies ooit hetzelfde zijn. Elke las, elk detail en elke beslissing weerspiegelt generaties ervaring en een compromisloos streven naar excellentie.",
        "Voor onze familie is bootbouw nooit slechts een beroep geweest. Het is ons erfgoed.",
        "Meer dan acht decennia nadat onze grootvader begon met het met de hand vormen van hout, bouwen wij voort met dezelfde filosofie die hem vanaf het begin leidde. Vaartuigen van uitzonderlijke kwaliteit creëren, gebouwd om stand te houden, vertrouwd wanneer het er het meest toe doet, en waardig om onze familienaam te dragen.",
      ],
      aboutImageAlt: "Aluminium reddingsboot in aanbouw in de Tinn Silver werkplaats",
      statsLabel: "Bedrijfsfeiten",
      stats: ["Jaar ervaring", "Engineering", "Maatwerk"],
      companyFacts: "Bedrijfsfeiten",
    },
    about: {
      heroEyebrow: "Over Tinn Silver",
      heroTitle: "Gebouwd rond\nuw missie.",
      heroLead:
        "Al meer dan 80 jaar ontwerpen en bouwen wij maatwerk aluminium boten voor hulpdiensten, overheidsinstanties en commerciële operators in heel Europa.",
      heroImageAlt: "Aluminium reddingsvaartuig in aanbouw in een moderne scheepswerf",
      storyImageAlt: "Directeur van Tinn Silver in de aluminium bootwerkplaats",
      storyCaption: "Algemeen directeur,",
      heritageGalleryLabel: "Het erfgoed van Tinn Silver",
      heritageImages: [
        {
          alt: "Historische medewerkers van scheepswerf S. Tinnemans bouwen een houten schip in Maasbracht, met daaronder een binnenvaartschip",
          caption: "Van houten binnenvaartschepen tot generaties maritiem vakmanschap",
        },
        {
          alt: "Historisch schip van Tinnemans voor scheepswerf S. Tinnemans in Maasbracht",
          caption: "De familiewerf in Maasbracht",
        },
        {
          alt: "Historische Tinnemans werkboot voor de in 1941 opgerichte familiewerf in Maasbracht",
          caption: "Gebouwd door de familiewerf, opgericht in 1941",
        },
      ],
      story: { label: "Ons erfgoed", title: "Meer dan 80 jaar Nederlands vakmanschap" },
      storyLead:
        "Wat begon als Nederlandse bootbouwexpertise is uitgegroeid tot een specialist in professionele aluminium vaartuigen.",
      storyParagraphs: [
        "Tinn Silver Fire Fighting & Rescue BV ontwerpt en bouwt boten voor bemanningen wier werk uitzonderlijke eisen stelt aan kracht, veiligheid en controle. Samen met Tinnemans Floating Solutions BV combineren we decennialange praktijkkennis met modern design en engineering.",
        "Vandaag richten wij ons op volledig maatwerk blus, reddings en commerciële vaartuigen. Klanten werken rechtstreeks samen met de mensen die hun schip ontwerpen en bouwen, met korte lijnen van de eerste tekening tot de uiteindelijke oplevering.",
      ],
      quote: "Elk vaartuig moet zo uniek zijn als de missie waarvoor het is gebouwd.",
      values: { label: "Wat ons onderscheidt", title: "Doel in elk detail." },
      valueCards: [
        {
          title: "Engineering eerst",
          text: "Elk project begint met uw operationele eisen, vertaald naar een heldere technische oplossing.",
        },
        {
          title: "Alles in house",
          text: "Ontwerp, aluminiumbouw, lassen en afwerking worden onder één dak gecoördineerd.",
        },
        {
          title: "Volledig maatwerk",
          text: "Elk vaartuig wordt specifiek geconfigureerd en ontworpen voor de missie die het moet uitvoeren.",
        },
        {
          title: "Betrouwbare kwaliteit",
          text: "Gebouwd voor professionele bemanningen die in veeleisende omstandigheden vertrouwen op voorspelbare prestaties.",
        },
      ],
      process: {
        label: "Hoe wij bouwen",
        title: "Van eerste idee\ntot open water.",
        lead: "Elke fase, van planning en engineering tot bouw en oplevering, onder één dak.",
      },
      processSteps: [
        { title: "Concept", alt: "Concepttekeningen van een reddingsboot op een tekentafel", text: "Uw missie, bemanning en vaargebied worden vertaald naar een helder scheepsconcept en technisch programma." },
        { title: "Engineering", alt: "Scheepsbouwkundige aan het werk met CAD en CNC apparatuur", text: "Romp, systemen en uitrusting worden voor de productiestart als één geïntegreerde oplossing ontworpen." },
        { title: "Constructie", alt: "Precisielassen tijdens de aluminium rompbouw", text: "Gecertificeerde materialen en nauwkeurig aluminium vakmanschap brengen elk technisch detail tot leven." },
        { title: "Testen", alt: "Voltooide blus en reddingsboten worden op het water getest", text: "Systemen, vaargedrag en prestaties worden getoetst aan de eisen van de beoogde inzet." },
        { title: "Oplevering", alt: "Klant ontvangt een voltooide aluminium werkboot", text: "Het voltooide vaartuig wordt inzetklaar overgedragen, met directe ondersteuning van de bouwers." },
      ],
      workshop: { label: "Onze werkplaats", title: "Vakmanschap leeft hier." },
      workshopCaptions: ["Precisielassen", "Engineering en CNC", "Eindmontage"],
      numbersLabel: "Bedrijfsfeiten",
      numbers: [
        { value: "1941", label: "Nederlands scheepsbouwerfgoed" },
        { value: "30+", label: "Jaar aluminium scheepsbouw" },
        { value: "EEN DAK", label: "Ontwerp, engineering, bouw en testen" },
        { value: "UNIEK", label: "Elk vaartuig gebouwd voor zijn missie" },
      ],
      industries: { label: "Sectoren", title: "Gebouwd voor werk dat ertoe doet." },
      industryNames: [
        "Brandbestrijding",
        "Redding",
        "Waterpolitie",
        "Overheid",
        "Commerciële visserij",
        "Commerciële scheepvaart",
      ],
      quality: { label: "Kwaliteit", title: "Vertrouwen wordt gebouwd, niet beweerd." },
      qualityLead:
        "Materialen, productiemethoden, testen en documentatie worden afgestemd op de beoogde inzet van elk vaartuig. Toepasselijke certificering en classificatie-eisen worden voor elk project individueel bevestigd en gedocumenteerd.",
      qualityItems: [
        { title: "Maritiem aluminium", text: "Materiaalkeuze afgestemd op constructie en operationeel profiel." },
        { title: "TIG en MIG lassen", text: "Gecontroleerde aluminiumfabricage door ervaren specialisten." },
        { title: "CAD engineering", text: "Gedetailleerd ontwerp en productieklaar technisch ontwerp." },
        { title: "Zeeproeven", text: "Testen op het water voor de definitieve oplevering." },
        { title: "Projectdocumentatie", text: "Een helder technisch dossier voor het geleverde vaartuig." },
      ],
      qualityCapabilitiesLabel: "Kwaliteitskenmerken",
      ctaEyebrow: "Start een project",
      ctaTitle: "Laten we uw\nvolgende vaartuig bouwen.",
      ctaLead: "Vertel ons over uw missie, wij ontwerpen de juiste oplossing voor u.",
      ctaQuote: "Offerte aanvragen",
      ctaContact: "Neem contact op",
      ctaImageAlt: "Twee Tinn Silver blus en reddingsboten op het water",
      headerHome: "Tinn Silver startpagina",
    },
  },
  ar: {
    meta: {
      homeTitle: "Tinn Silver | قوارب الإطفاء والإنقاذ",
      homeDescription:
        "قوارب إطفاء وإنقاذ من الألمنيوم مصممة حسب الطلب في هولندا. أكثر من 80 عامًا من خبرة بناء السفن الهولندية.",
      aboutTitle: "من نحن | Tinn Silver",
      aboutDescription:
        "أكثر من 80 عامًا من الحرفية الهولندية في قوارب العمل والإنقاذ والإطفاء من الألمنيوم المصممة حسب الطلب.",
      valuesTitle: "قيمنا | Tinn Silver",
      valuesDescription:
        "الهندسة والحرفية الداخلية والحلول المخصصة والأداء الموثوق هي جوهر كل قارب من Tinn Silver.",
    },
    common: {
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      back: "عودة",
      brandHome: "Tinn Silver قوارب الإطفاء والإنقاذ، الصفحة الرئيسية",
      readMore: "اقرأ المزيد",
      explore: "استكشف قصتنا",
      scrollToStory: "انتقل إلى قصتنا",
      netherlandsFlag: "علم هولندا",
    },
    nav: [
      { label: "الرئيسية", href: "/" },
      { label: "من نحن", href: "/about" },
      { label: "المعرض", href: "/values" },
      { label: "العملية", href: "/process" },
      { label: "المشروع", href: "/project" },
      { label: "اتصل بنا", href: "/contact" },
    ],
    aboutNav: [
      { label: "القصة", href: "#story" },
    ],
    project: {
      title: "سفن ألمنيوم مخصصة، من الفكرة إلى التسليم.",
      lead: "مصممة للأداء في أقسى البيئات البحرية بجودة لا تُساوم عليها.",
    },
    home: {
      heroLine1: "مرحبًا بكم في Tinn Silver",
      heroLine2: "قوارب الإطفاء والإنقاذ",
      heroDescription:
        "اكتشفوا قوارب الإطفاء والإنقاذ المتطورة لدينا، المصممة للسلامة والكفاءة أثناء المهام.",
      heroCta: "اكتشف قواربنا",
      heroImageAlt: "عضوان في الطاقم على متن قارب إنقاذ حديث في البحر",
      aboutHeading: "منذ 1941، نقدم خبرة بناء السفن الهولندية.",
      aboutParagraphs: [
        "بعض الإرث يُورَث. وبعضه يُبنى.",
        "بدأ إرثنا قبل أكثر من 85 عامًا على ممرات المياه في هولندا، حيث اكتسب جدّنا، السيد تينمانس الأكبر، سمعته كحرفي ماهر في بناء سفن الشحن الداخلية الخشبية. كل عارضة شكّلها وكل سفينة أتمّها عكست قيمًا لا يمكن تصنيعها. التفاني والنزاهة والدقة والفخر بالعمل.",
        "أصبحت هذه القيم أساس عائلتنا.",
        "مع انتقال المعرفة من جيل إلى جيل، تطورت الورشة إلى شركة هندسة بحرية مرموقة. من السفن الخشبية التقليدية إلى الإنشاءات المتقدمة من الفولاذ والألمنيوم والفولاذ المقاوم للصدأ، لم تسع عائلتنا أبدًا إلى النمو لذاته. سعينا إلى الكمال. تُبنى كل ابتكار دون المساومة على الحرفية التي عرّفت اسمنا.",
        "منذ ثلاثة عقود، ألهمت تلك الروح ذاتها شيئًا جديدًا.",
        "لم تُصمَّم أولى قوارب تين-سيلفر الألمنيوم للسوق قط. بُنيت لأنفسنا. بالضبط كما اعتقدنا أن القارب الألمنيومي الاحترافي يجب أن يكون. سرعان ما لفتت جودتها التي لا تُساوم عليها الأنظار، وما بدأ كشغف عائلي نما ليصبح أحد أكثر بناة السفن الألمنيومية المتميزة احترامًا في أوروبا، موثوقًا به من قبل المحترفين حول العالم.",
        "من هذا الإرث وُلدت Tinn Silver Firefighting & Rescue BV.",
        "اليوم، نصمم ونبني سفن إطفاء وإنقاذ ألمنيومية حسب الطلب لمن يحملون أعظم مسؤولية. حماية الأرواح. تعتمد فرق الإطفاء وخدمات الإنقاذ والشرطة البحرية وسلطات الموانئ والوكالات الحكومية على سفننا لأن الفشل ليس خيارًا.",
        "يُصمَّم كل قارب ويُهندَس ويُبنى ويُختبَر بشكل فردي بالكامل داخل الشركة. لا توجد حلول قياسية، لأن لا مهمتين تتشابهان أبدًا. تعكس كل لحامة وكل تفصيل وكل قرار أجيالًا من الخبرة وسعيًا لا يُساوم عليه نحو التميز.",
        "بالنسبة لعائلتنا، لم يكن بناء القوارب مجرد مهنة. إنه إرثنا.",
        "بعد أكثر من ثمانية عقود منذ أن بدأ جدّنا بتشكيل الخشب يدويًا، نواصل البناء بنفس الفلسفة التي وجّهته منذ البداية. إنشاء سفن بجودة استثنائية، مبنية لتدوم، موثوقة عندما يكون الأمر في غاية الأهمية، وتستحق حمل اسم عائلتنا.",
      ],
      aboutImageAlt: "قارب إنقاذ من الألمنيوم قيد الإنشاء في ورشة Tinn Silver",
      statsLabel: "حقائق عن الشركة",
      stats: ["سنوات الخبرة", "الهندسة", "مصمم حسب الطلب"],
      companyFacts: "حقائق عن الشركة",
    },
    about: {
      heroEyebrow: "عن Tinn Silver",
      heroTitle: "مبني حول\nمهمتكم.",
      heroLead:
        "لأكثر من 80 عامًا، صممنا وبنينا قوارب ألمنيوم مخصصة تثق بها خدمات الطوارئ والجهات الحكومية والمشغلون التجاريون في أنحاء أوروبا.",
      heroImageAlt: "قارب إنقاذ من الألمنيوم قيد الإنشاء في حوض سفن حديث",
      storyImageAlt: "مدير Tinn Silver في ورشة قوارب الألمنيوم",
      storyCaption: "الرئيس التنفيذي،",
      heritageGalleryLabel: "تراث Tinn Silver",
      heritageImages: [
        {
          alt: "عمال حوض بناء السفن التاريخي S. Tinnemans يبنون سفينة خشبية في ماسبراخت، وأسفلها سفينة شحن داخلية",
          caption: "من سفن الشحن الداخلية الخشبية إلى أجيال من الحرفية البحرية",
        },
        {
          alt: "سفينة Tinnemans تاريخية أمام حوض بناء السفن S. Tinnemans في ماسبراخت",
          caption: "حوض بناء السفن العائلي في ماسبراخت",
        },
        {
          alt: "قارب عمل تاريخي من Tinnemans أمام حوض بناء السفن العائلي الذي تأسس عام 1941 في ماسبراخت",
          caption: "بناه حوض بناء السفن العائلي الذي تأسس عام 1941",
        },
      ],
      story: { label: "تراثنا", title: "أكثر من 80 عامًا من الحرفية الهولندية" },
      storyLead:
        "ما بدأ كخبرة هولندية في بناء السفن أصبح اليوم عملًا متخصصًا في قوارب الألمنيوم المهنية.",
      storyParagraphs: [
        "تصمم Tinn Silver Fire Fighting & Rescue BV وتبني قوارب للطواقم التي تفرض أعمالها متطلبات استثنائية من حيث القوة والسلامة والتحكم. مع Tinnemans Floating Solutions BV، نجمع عقودًا من المعرفة العملية مع التصميم والهندسة الحديثة.",
        "اليوم، يركز عملنا على قوارب الإطفاء والإنقاذ والتجارية المصممة بالكامل حسب الطلب. يعمل العملاء مباشرة مع من يصممون ويبنون قاربهم، بخطوط تواصل قصيرة من الرسم الأول حتى التسليم النهائي.",
      ],
      quote: "يجب أن يكون كل قارب فريدًا مثل المهمة التي بُني من أجلها.",
      values: { label: "ما يميزنا", title: "هدف في كل تفصيل." },
      valueCards: [
        {
          title: "الهندسة أولًا",
          text: "يبدأ كل مشروع بمتطلباتكم التشغيلية، مترجمة إلى حل تقني واضح.",
        },
        {
          title: "البناء داخليًا",
          text: "يُنسَّق التصميم وبناء الألمنيوم واللحام والتشطيب تحت سقف واحد.",
        },
        {
          title: "مصمم بالكامل حسب الطلب",
          text: "يُهندَس كل قارب ويُهيَّأ خصيصًا للمهمة التي يجب أن يؤديها.",
        },
        {
          title: "موثوقية يُعتمد عليها",
          text: "مبني لطواقم محترفة تعتمد على أداء متوقع في ظروف صعبة.",
        },
      ],
      process: {
        label: "كيف نبني",
        title: "من الفكرة الأولى\nإلى الماء المفتوح.",
        lead: "كل مرحلة، من التخطيط والهندسة إلى البناء والتسليم، تحت سقف واحد.",
      },
      processSteps: [
        { title: "المفهوم", alt: "رسومات مفهومية لقارب إنقاذ على طاولة هندسية", text: "نحوّل مهمتكم وطاقمكم وبيئة التشغيل إلى مفهوم واضح للسفينة وموجز تقني دقيق." },
        { title: "الهندسة", alt: "مهندس بحري يعمل باستخدام CAD ومعدات CNC", text: "يتم تصميم الهيكل والأنظمة والمعدات كحل متكامل واحد قبل بدء الإنتاج." },
        { title: "البناء", alt: "لحام دقيق أثناء بناء هيكل الألمنيوم", text: "تحول المواد المعتمدة والحرفية الدقيقة في الألمنيوم كل تفصيل هندسي إلى واقع داخل ورشتنا." },
        { title: "الاختبار", alt: "قوارب إطفاء وإنقاذ مكتملة تُختبر على الماء", text: "يتم التحقق من الأنظمة والتحكم والأداء وفق متطلبات التشغيل المقصود للسفينة." },
        { title: "التسليم", alt: "عميل يستلم قارب عمل من الألمنيوم مكتملًا", text: "تُسلّم السفينة جاهزة للمهمة مع دعم مباشر من الفريق الذي قام ببنائها." },
      ],
      workshop: { label: "ورشتنا", title: "الحرفة تعيش هنا." },
      workshopCaptions: ["لحام دقيق", "الهندسة وCNC", "التجميع النهائي"],
      numbersLabel: "حقائق عن الشركة",
      numbers: [
        { value: "1941", label: "إرث هولندي في بناء السفن" },
        { value: "30+", label: "عامًا في بناء قوارب الألمنيوم" },
        { value: "سقف واحد", label: "التصميم والهندسة والبناء والاختبار" },
        { value: "فريد", label: "كل سفينة مبنية لمهمتها" },
      ],
      industries: { label: "القطاعات", title: "مبني لعمل يهم." },
      industryNames: [
        "مكافحة الحرائق",
        "الإنقاذ",
        "الشرطة البحرية",
        "الحكومة",
        "الصيد التجاري",
        "القطاع البحري التجاري",
      ],
      quality: { label: "الجودة", title: "الثقة تُبنى، لا تُدعى." },
      qualityLead:
        "تُختار المواد وطرق الإنتاج والاختبار والتوثيق وفق التشغيل المقصود لكل قارب. تُؤكَّد متطلبات الشهادات والتصنيف المعمول بها وتوثَّق بشكل فردي لكل مشروع.",
      qualityItems: [
        { title: "ألمنيوم بحري", text: "اختيار المواد بما يتناسب مع الهيكل وملف التشغيل." },
        { title: "لحام TIG وMIG", text: "تصنيع ألمنيوم مُراقَب بواسطة متخصصين ذوي خبرة." },
        { title: "هندسة CAD", text: "تصميم مفصل وتطوير تقني جاهز للإنتاج." },
        { title: "تجارب بحرية", text: "اختبار على الماء قبل التسليم النهائي." },
        { title: "توثيق المشروع", text: "سجل تقني واضح مخصص للقارب المُسلَّم." },
      ],
      qualityCapabilitiesLabel: "قدرات الجودة",
      ctaEyebrow: "ابدأ مشروعًا",
      ctaTitle: "لنبنِ\nقاربكم القادم.",
      ctaLead: "أخبرونا عن مهمتكم، وسنصمم الحل المناسب لكم.",
      ctaQuote: "اطلب عرض سعر",
      ctaContact: "اتصل بنا",
      ctaImageAlt: "قاربا إطفاء وإنقاذ من Tinn Silver على الماء",
      headerHome: "الصفحة الرئيسية لـ Tinn Silver",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
