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
  };
  common: {
    more: string;
    moreLinks: string;
    openMenu: string;
    brandHome: string;
    backHome: string;
    readMore: string;
    explore: string;
    scrollToStory: string;
    netherlandsFlag: string;
  };
  nav: NavItem[];
  aboutNav: NavItem[];
  home: {
    heroLine1: string;
    heroLine2: string;
    heroDescription: string;
    heroCta: string;
    heroImageAlt: string;
    aboutHeading: string;
    aboutParagraphs: [string, string, string];
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
    story: { label: string; title: string };
    storyLead: string;
    storyParagraphs: [string, string];
    quote: string;
    values: { label: string; title: string };
    valueCards: Array<{ title: string; text: string }>;
    process: { label: string; title: string };
    processSteps: Array<{ title: string; alt: string }>;
    workshop: { label: string; title: string };
    workshopCaptions: [string, string, string];
    numbersLabel: string;
    numbers: Array<{ value: string; label: string }>;
    industries: { label: string; title: string };
    industryNames: [string, string, string, string, string, string];
    team: { label: string; title: string };
    teamCards: Array<{ title: string; text: string }>;
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
    },
    common: {
      more: "More",
      moreLinks: "More links",
      openMenu: "Open menu",
      brandHome: "Tinn Silver Fire Fighting and Rescue home",
      backHome: "Back home",
      readMore: "Read more",
      explore: "Explore",
      scrollToStory: "Scroll to our story",
      netherlandsFlag: "Netherlands flag",
    },
    nav: [
      { label: "About Us", href: "#about-us" },
      { label: "Fire Fighting", href: "#fire-fighting" },
      { label: "Rescue", href: "#rescue" },
      { label: "Our Boats", href: "#our-boats" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    aboutNav: [
      { label: "Story", href: "#story" },
      { label: "Values", href: "#values" },
      { label: "Process", href: "#process" },
      { label: "Workshop", href: "#workshop" },
      { label: "Contact", href: "#contact" },
    ],
    home: {
      heroLine1: "Welcome to Tinn Silver",
      heroLine2: "Fire Fighting & Rescue Boats",
      heroDescription:
        "Explore our advanced firefighting and rescue boats designed for safety and efficiency in emergency situations.",
      heroCta: "Discover our boats",
      heroImageAlt: "Two crew members aboard a modern fishing and rescue boat at sea",
      aboutHeading: "More than 80 years of Dutch boatbuilding expertise",
      aboutParagraphs: [
        "For more than 80 years, Tinn Silver Fire Fighting & Rescue BV and Tinnemans Floating Solutions BV have developed and built high-quality aluminium boats in the Netherlands. Every vessel combines strength, versatility and reliability for demanding missions on the water.",
        "Our in-house design and engineering team works closely with each customer to translate operational requirements into a fully custom-built solution. From the first concept to precision welding and final finishing, every step is handled by experienced specialists under one roof.",
        "Fire brigades, marine police, rescue organizations and commercial operators trust our boats for their performance, clear communication and uncompromising build quality. We believe every vessel should be as unique as the mission it is built to serve.",
      ],
      aboutImageAlt: "Tinn Silver director beside an aluminium rescue boat in the workshop",
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
      story: { label: "Our story", title: "More than 80 years of Dutch craftsmanship" },
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
      process: { label: "How we build", title: "From first idea to open water." },
      processSteps: [
        { title: "Concept", alt: "Rescue boat concept drawings on an engineering table" },
        { title: "Engineering", alt: "Marine engineer working with CAD and CNC equipment" },
        { title: "Construction", alt: "Precision welding during aluminium hull construction" },
        { title: "Testing", alt: "Completed fire rescue boats being tested on the water" },
        { title: "Delivery", alt: "Customer receiving a completed aluminium workboat" },
      ],
      workshop: { label: "Our workshop", title: "Craftsmanship lives here." },
      workshopCaptions: ["Precision welding", "Engineering & CNC", "Final assembly"],
      numbersLabel: "Company facts",
      numbers: [
        { value: "80+", label: "Years of experience" },
        { value: "100%", label: "Custom built" },
        { value: "MADE IN", label: "THE NETHERLANDS" },
        { value: "PROFESSIONAL", label: "Marine solutions" },
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
      team: { label: "Our team", title: "One team. Every discipline." },
      teamCards: [
        {
          title: "Engineering",
          text: "From naval architecture and systems integration to production-ready detail.",
        },
        {
          title: "Project guidance",
          text: "A direct line from your operational brief to the people shaping the solution.",
        },
        {
          title: "Production",
          text: "Specialists in aluminium construction, precision welding and final assembly.",
        },
        {
          title: "Service",
          text: "Practical support that continues after your vessel has entered service.",
        },
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
    },
    common: {
      more: "Mehr",
      moreLinks: "Weitere Links",
      openMenu: "Menü öffnen",
      brandHome: "Tinn Silver Lösch- und Rettungsboote, Startseite",
      backHome: "Zurück zur Startseite",
      readMore: "Mehr erfahren",
      explore: "Entdecken",
      scrollToStory: "Zur Geschichte scrollen",
      netherlandsFlag: "Flagge der Niederlande",
    },
    nav: [
      { label: "Über uns", href: "#about-us" },
      { label: "Brandbekämpfung", href: "#fire-fighting" },
      { label: "Rettung", href: "#rescue" },
      { label: "Unsere Boote", href: "#our-boats" },
      { label: "Galerie", href: "#gallery" },
      { label: "Kontakt", href: "#contact" },
    ],
    aboutNav: [
      { label: "Geschichte", href: "#story" },
      { label: "Werte", href: "#values" },
      { label: "Prozess", href: "#process" },
      { label: "Werkstatt", href: "#workshop" },
      { label: "Kontakt", href: "#contact" },
    ],
    home: {
      heroLine1: "Willkommen bei Tinn Silver",
      heroLine2: "Lösch und Rettungsboote",
      heroDescription:
        "Entdecken Sie unsere fortschrittlichen Lösch und Rettungsboote, die für Sicherheit und Effizienz im Einsatz entwickelt wurden.",
      heroCta: "Unsere Boote entdecken",
      heroImageAlt: "Zwei Besatzungsmitglieder auf einem modernen Rettungsboot auf See",
      aboutHeading: "Mehr als 80 Jahre niederländische Bootsbau-Expertise",
      aboutParagraphs: [
        "Seit mehr als 80 Jahren entwickeln und bauen Tinn Silver Fire Fighting & Rescue BV und Tinnemans Floating Solutions BV hochwertige Aluminiumboote in den Niederlanden. Jedes Schiff vereint Stärke, Vielseitigkeit und Zuverlässigkeit für anspruchsvolle Einsätze auf dem Wasser.",
        "Unser hauseigenes Konstruktions- und Entwicklungsteam arbeitet eng mit jedem Kunden zusammen, um operative Anforderungen in eine vollständig maßgeschneiderte Lösung zu übersetzen. Vom ersten Konzept über präzises Schweißen bis zur Endmontage, jeder Schritt wird unter einem Dach von erfahrenen Spezialisten durchgeführt.",
        "Feuerwehren, Wasserschutzpolizei, Rettungsorganisationen und gewerbliche Betreiber vertrauen auf unsere Boote wegen ihrer Leistung, klaren Kommunikation und kompromisslosen Bauqualität. Jedes Schiff soll so einzigartig sein wie der Einsatz, für den es gebaut wird.",
      ],
      aboutImageAlt: "Geschäftsführer von Tinn Silver neben einem Aluminium-Rettungsboot in der Werkstatt",
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
      story: { label: "Unsere Geschichte", title: "Mehr als 80 Jahre niederländisches Handwerk" },
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
      process: { label: "Wie wir bauen", title: "Von der ersten Idee bis aufs Wasser." },
      processSteps: [
        { title: "Konzept", alt: "Konzeptzeichnungen eines Rettungsboots auf einem Konstruktionstisch" },
        { title: "Engineering", alt: "Schiffbauingenieur bei CAD- und CNC-Arbeiten" },
        { title: "Konstruktion", alt: "Präzisionsschweißen beim Aluminium-Rumpfbau" },
        { title: "Erprobung", alt: "Fertige Lösch- und Rettungsboote bei Tests auf dem Wasser" },
        { title: "Auslieferung", alt: "Kunde bei Übergabe eines fertigen Aluminium-Arbeitsboots" },
      ],
      workshop: { label: "Unsere Werkstatt", title: "Handwerk hat hier sein Zuhause." },
      workshopCaptions: ["Präzisionsschweißen", "Engineering & CNC", "Endmontage"],
      numbersLabel: "Unternehmensfakten",
      numbers: [
        { value: "80+", label: "Jahre Erfahrung" },
        { value: "100%", label: "Maßgeschneidert" },
        { value: "MADE IN", label: "DIE NIEDERLANDE" },
        { value: "PROFESSIONAL", label: "Marine-Lösungen" },
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
      team: { label: "Unser Team", title: "Ein Team. Jede Disziplin." },
      teamCards: [
        {
          title: "Engineering",
          text: "Vom Schiffsentwurf und Systemintegration bis zur produktionsreifen Ausführung.",
        },
        {
          title: "Projektleitung",
          text: "Ein direkter Draht von Ihrem Einsatzprofil zu den Menschen, die die Lösung gestalten.",
        },
        {
          title: "Produktion",
          text: "Spezialisten für Aluminiumbau, Präzisionsschweißen und Endmontage.",
        },
        {
          title: "Service",
          text: "Praktische Unterstützung auch nach der Inbetriebnahme Ihres Schiffes.",
        },
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
    },
    common: {
      more: "Meer",
      moreLinks: "Meer links",
      openMenu: "Menu openen",
      brandHome: "Tinn Silver blus en reddingsboten, startpagina",
      backHome: "Terug naar startpagina",
      readMore: "Lees meer",
      explore: "Ontdekken",
      scrollToStory: "Scroll naar ons verhaal",
      netherlandsFlag: "Nederlandse vlag",
    },
    nav: [
      { label: "Over ons", href: "#about-us" },
      { label: "Brandbestrijding", href: "#fire-fighting" },
      { label: "Redding", href: "#rescue" },
      { label: "Onze boten", href: "#our-boats" },
      { label: "Galerij", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    aboutNav: [
      { label: "Verhaal", href: "#story" },
      { label: "Waarden", href: "#values" },
      { label: "Proces", href: "#process" },
      { label: "Werkplaats", href: "#workshop" },
      { label: "Contact", href: "#contact" },
    ],
    home: {
      heroLine1: "Welkom bij Tinn Silver",
      heroLine2: "Blus en Reddingsboten",
      heroDescription:
        "Ontdek onze geavanceerde blus en reddingsboten, ontwikkeld voor veiligheid en efficiëntie tijdens inzet.",
      heroCta: "Ontdek onze boten",
      heroImageAlt: "Twee bemanningsleden aan boord van een modern reddingsboot op zee",
      aboutHeading: "Meer dan 80 jaar Nederlandse bootbouwervaring",
      aboutParagraphs: [
        "Al meer dan 80 jaar ontwikkelen en bouwen Tinn Silver Fire Fighting & Rescue BV en Tinnemans Floating Solutions BV hoogwaardige aluminium boten in Nederland. Elk vaartuig combineert kracht, veelzijdigheid en betrouwbaarheid voor veeleisende missies op het water.",
        "Ons interne ontwerp en engineeringteam werkt nauw samen met elke klant om operationele eisen om te zetten in een volledig maatwerkoplossing. Van het eerste concept tot precisielassen en afwerking, elke stap wordt onder één dak uitgevoerd door ervaren specialisten.",
        "Brandweerkorpsen, waterpolitie, reddingsorganisaties en commerciële operators vertrouwen op onze boten vanwege hun prestaties, heldere communicatie en compromisloze bouwkwaliteit. Elk vaartuig moet zo uniek zijn als de missie waarvoor het is gebouwd.",
      ],
      aboutImageAlt: "Directeur van Tinn Silver naast een aluminium reddingsboot in de werkplaats",
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
      story: { label: "Ons verhaal", title: "Meer dan 80 jaar Nederlands vakmanschap" },
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
      process: { label: "Hoe wij bouwen", title: "Van eerste idee tot open water." },
      processSteps: [
        { title: "Concept", alt: "Concepttekeningen van een reddingsboot op een tekentafel" },
        { title: "Engineering", alt: "Scheepsbouwkundige aan het werk met CAD en CNC apparatuur" },
        { title: "Constructie", alt: "Precisielassen tijdens de aluminium rompbouw" },
        { title: "Testen", alt: "Voltooide blus en reddingsboten worden op het water getest" },
        { title: "Oplevering", alt: "Klant ontvangt een voltooide aluminium werkboot" },
      ],
      workshop: { label: "Onze werkplaats", title: "Vakmanschap leeft hier." },
      workshopCaptions: ["Precisielassen", "Engineering en CNC", "Eindmontage"],
      numbersLabel: "Bedrijfsfeiten",
      numbers: [
        { value: "80+", label: "Jaar ervaring" },
        { value: "100%", label: "Maatwerk" },
        { value: "MADE IN", label: "NEDERLAND" },
        { value: "PROFESSIONAL", label: "Maritieme oplossingen" },
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
      team: { label: "Ons team", title: "Eén team. Elke discipline." },
      teamCards: [
        {
          title: "Engineering",
          text: "Van scheepsarchitectuur en systeemintegratie tot productieklaar detail.",
        },
        {
          title: "Projectbegeleiding",
          text: "Een directe lijn van uw operationele briefing naar de mensen die de oplossing vormgeven.",
        },
        {
          title: "Productie",
          text: "Specialisten in aluminiumbouw, precisielassen en eindmontage.",
        },
        {
          title: "Service",
          text: "Praktische ondersteuning die doorgaat nadat uw vaartuig in dienst is gesteld.",
        },
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
    },
    common: {
      more: "المزيد",
      moreLinks: "روابط إضافية",
      openMenu: "فتح القائمة",
      brandHome: "Tinn Silver قوارب الإطفاء والإنقاذ، الصفحة الرئيسية",
      backHome: "العودة إلى الصفحة الرئيسية",
      readMore: "اقرأ المزيد",
      explore: "استكشف",
      scrollToStory: "انتقل إلى قصتنا",
      netherlandsFlag: "علم هولندا",
    },
    nav: [
      { label: "من نحن", href: "#about-us" },
      { label: "مكافحة الحرائق", href: "#fire-fighting" },
      { label: "الإنقاذ", href: "#rescue" },
      { label: "قواربنا", href: "#our-boats" },
      { label: "المعرض", href: "#gallery" },
      { label: "اتصل بنا", href: "#contact" },
    ],
    aboutNav: [
      { label: "القصة", href: "#story" },
      { label: "القيم", href: "#values" },
      { label: "العملية", href: "#process" },
      { label: "الورشة", href: "#workshop" },
      { label: "اتصل بنا", href: "#contact" },
    ],
    home: {
      heroLine1: "مرحبًا بكم في Tinn Silver",
      heroLine2: "قوارب الإطفاء والإنقاذ",
      heroDescription:
        "اكتشفوا قوارب الإطفاء والإنقاذ المتطورة لدينا، المصممة للسلامة والكفاءة أثناء المهام.",
      heroCta: "اكتشف قواربنا",
      heroImageAlt: "عضوان في الطاقم على متن قارب إنقاذ حديث في البحر",
      aboutHeading: "أكثر من 80 عامًا من خبرة بناء السفن الهولندية",
      aboutParagraphs: [
        "لأكثر من 80 عامًا، طورت Tinn Silver Fire Fighting & Rescue BV وTinnemans Floating Solutions BV وصنعت قوارب ألمنيوم عالية الجودة في هولندا. يجمع كل قارب بين القوة والتنوع والموثوقية للمهام الصعبة على الماء.",
        "يعمل فريق التصميم والهندسة لدينا عن كثب مع كل عميل لتحويل المتطلبات التشغيلية إلى حل مصمم بالكامل حسب الطلب. من المفهوم الأول إلى اللحام الدقيق والتشطيب النهائي، تُنفَّذ كل خطوة تحت سقف واحد بواسطة متخصصين ذوي خبرة.",
        "تثق فرق الإطفاء والشرطة البحرية ومنظمات الإنقاذ والمشغلون التجاريون بقواربنا لأدائها وتواصلها الواضح وجودة بنائها التي لا تُساوم. نؤمن أن كل قارب يجب أن يكون فريدًا مثل المهمة التي بُني من أجلها.",
      ],
      aboutImageAlt: "مدير Tinn Silver بجانب قارب إنقاذ من الألمنيوم في الورشة",
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
      story: { label: "قصتنا", title: "أكثر من 80 عامًا من الحرفية الهولندية" },
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
      process: { label: "كيف نبني", title: "من الفكرة الأولى إلى الماء المفتوح." },
      processSteps: [
        { title: "المفهوم", alt: "رسومات مفهومية لقارب إنقاذ على طاولة هندسية" },
        { title: "الهندسة", alt: "مهندس بحري يعمل باستخدام CAD ومعدات CNC" },
        { title: "البناء", alt: "لحام دقيق أثناء بناء هيكل الألمنيوم" },
        { title: "الاختبار", alt: "قوارب إطفاء وإنقاذ مكتملة تُختبر على الماء" },
        { title: "التسليم", alt: "عميل يستلم قارب عمل من الألمنيوم مكتملًا" },
      ],
      workshop: { label: "ورشتنا", title: "الحرفة تعيش هنا." },
      workshopCaptions: ["لحام دقيق", "الهندسة وCNC", "التجميع النهائي"],
      numbersLabel: "حقائق عن الشركة",
      numbers: [
        { value: "80+", label: "سنوات الخبرة" },
        { value: "100%", label: "مصمم حسب الطلب" },
        { value: "MADE IN", label: "هولندا" },
        { value: "PROFESSIONAL", label: "حلول بحرية" },
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
      team: { label: "فريقنا", title: "فريق واحد. كل تخصص." },
      teamCards: [
        {
          title: "الهندسة",
          text: "من الهندسة البحرية وتكامل الأنظمة إلى التفاصيل الجاهزة للإنتاج.",
        },
        {
          title: "إدارة المشاريع",
          text: "خط مباشر من متطلباتكم التشغيلية إلى من يشكلون الحل.",
        },
        {
          title: "الإنتاج",
          text: "متخصصون في بناء الألمنيوم واللحام الدقيق والتجميع النهائي.",
        },
        {
          title: "الخدمة",
          text: "دعم عملي يستمر بعد دخول قاربكم الخدمة.",
        },
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
