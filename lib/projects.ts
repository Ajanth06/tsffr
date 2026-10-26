export type ProjectSpecification = {
  label: string;
  value: string;
};

export type VesselProject = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  overview: string;
  specifications: ProjectSpecification[];
};

const onRequest = "On request";

function specifications(
  vesselType: string,
  operationalPurpose: string,
): ProjectSpecification[] {
  return [
    { label: "Vessel Type", value: vesselType },
    { label: "Length Overall (LOA)", value: onRequest },
    { label: "Beam", value: onRequest },
    { label: "Draft", value: onRequest },
    { label: "Hull Material", value: "Aluminium" },
    { label: "Propulsion", value: onRequest },
    { label: "Engine Power", value: onRequest },
    { label: "Maximum Speed", value: onRequest },
    { label: "Passenger / Crew Capacity", value: onRequest },
    { label: "Operational Purpose", value: operationalPurpose },
  ];
}

export const vesselProjects: VesselProject[] = [
  {
    slug: "crew-cargo-transport",
    name: "Crew & Cargo Transport",
    image: "/projects/crew-cargo-transport.jpg",
    imageAlt: "Crew and cargo transport vessel shown underway with passenger seating and an open working deck",
    width: 1024,
    height: 501,
    overview:
      "A crew and cargo transport concept combining protected passenger accommodation with practical deck space for personnel and equipment.",
    specifications: specifications(
      "Crew and cargo transport vessel",
      "Personnel and cargo transport",
    ),
  },
  {
    slug: "fire-rescue-vessel",
    name: "Fire & Rescue Vessel",
    image: "/projects/fire-rescue-vessel.jpg",
    imageAlt: "Fire and rescue vessel concept shown from multiple exterior angles",
    width: 1024,
    height: 501,
    overview:
      "A fire and rescue vessel concept centred on rapid response, clear deck access and dedicated space for operational equipment.",
    specifications: specifications(
      "Fire and rescue vessel",
      "Firefighting and emergency response",
    ),
  },
  {
    slug: "dive-express",
    name: "Dive Express",
    image: "/projects/dive-express.jpg",
    imageAlt: "Dive Express support vessel shown from side, aerial, bow and stern perspectives",
    width: 1024,
    height: 442,
    overview:
      "A dive support vessel concept with an open equipment deck, sheltered helm and practical water access for professional dive operations.",
    specifications: specifications(
      "Dive support vessel",
      "Professional dive support",
    ),
  },
  {
    slug: "police-interceptor-rib",
    name: "Police Interceptor RIB",
    image: "/projects/police-interceptor-rib.jpg",
    imageAlt: "Police interceptor vessel with exterior, helm and working-deck detail views",
    width: 1024,
    height: 682,
    overview:
      "A police interceptor concept combining an enclosed wheelhouse, protected perimeter and a working deck arranged for operational duties.",
    specifications: specifications(
      "Police interceptor vessel",
      "Patrol and law-enforcement operations",
    ),
  },
  {
    slug: "ldmr-workboat",
    name: "LDMR Workboat",
    image: "/projects/ldmr-workboat.jpg",
    imageAlt: "LDMR workboat with landing bow, enclosed wheelhouse and open cargo deck",
    width: 1024,
    height: 768,
    overview:
      "A versatile workboat concept with a landing-style bow, open cargo area and enclosed wheelhouse for professional marine operations.",
    specifications: specifications(
      "Professional workboat",
      "Marine support and cargo operations",
    ),
  },
  {
    slug: "offshore-patrol-vessel",
    name: "Offshore Patrol Vessel",
    image: "/projects/offshore-patrol-vessel.jpg",
    imageAlt: "Offshore patrol vessel underway with an enclosed wheelhouse",
    width: 1024,
    height: 576,
    overview:
      "An enclosed offshore patrol concept offering protected navigation, clear deck access and a practical arrangement for demanding duties.",
    specifications: specifications(
      "Offshore patrol vessel",
      "Offshore patrol and surveillance",
    ),
  },
  {
    slug: "patrol-vessel-detail-views",
    name: "Patrol Vessel — Detail Views",
    image: "/projects/patrol-vessel-detail-views.jpg",
    imageAlt: "Patrol vessel study with exterior, aerial, helm and deck detail views",
    width: 1024,
    height: 682,
    overview:
      "A detailed patrol vessel study presenting the exterior, deck, helm and equipment arrangement from multiple viewpoints.",
    specifications: specifications(
      "Patrol vessel",
      "Patrol and surveillance",
    ),
  },
  {
    slug: "high-speed-crew-tender",
    name: "High-Speed Crew Tender",
    image: "/projects/high-speed-crew-tender.jpg",
    imageAlt: "High-speed crew tender shown underway from four exterior perspectives",
    width: 1024,
    height: 768,
    overview:
      "A high-speed crew tender concept with protected passenger accommodation and a robust arrangement for professional personnel transfer.",
    specifications: specifications(
      "High-speed crew tender",
      "Personnel transfer",
    ),
  },
  {
    slug: "geo-survey-vessel",
    name: "GEO Survey Vessel",
    image: "/projects/geo-survey-vessel.jpg",
    imageAlt: "GEO survey vessel shown underway from side, bow and stern perspectives",
    width: 1024,
    height: 682,
    overview:
      "A survey vessel concept with an enclosed wheelhouse and clear working-deck space for marine survey and support tasks.",
    specifications: specifications(
      "Survey vessel",
      "Marine survey and support",
    ),
  },
];

export function getVesselProject(slug: string) {
  return vesselProjects.find((project) => project.slug === slug);
}
