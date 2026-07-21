export const legalContact = {
  companyName: "Tinn Silver Fire Fighting and Rescue B.V.",
  legalForm: "Besloten Vennootschap (B.V.)",
  director:
    "Nimaso Group GmbH (als im Handelsregister eingetragene Geschäftsführerin)",
  street: "Industrieweg 18",
  postalCode: "6051 AE",
  city: "Maasbracht",
  country: "Niederlande",
  phone: "+31 475 46 19 59",
  email: "info@tsffr.com",
  website: "https://www.tsffr.com",
  registrationAuthority: "Kamer van Koophandel (KvK), Niederlande",
  registrationNumber: "42103961",
} as const;

export const legalServices = {
  hosting: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
    website: "https://vercel.com",
    privacyUrl: "https://vercel.com/legal/privacy-policy",
    dpaUrl: "https://vercel.com/legal/dpa",
  },
  framework: "Next.js",
  fonts: {
    provider: "Google Fonts",
    delivery: "next/font (lokal gehostet)",
    families: ["Inter", "Noto Sans Arabic"],
  },
  contactForm: true,
  analytics: false,
  marketing: false,
} as const;

export const legalMeta = {
  updatedAt: "21. Juli 2026",
} as const;

export function formatLegalAddress() {
  return `${legalContact.street}, ${legalContact.postalCode} ${legalContact.city}, ${legalContact.country}`;
}
