import type { Metadata } from "next";
import { LegalDocument } from "../components/legal-document";
import { getLocale } from "../../lib/i18n";
import { imprintCopy, legalMetadata } from "../../lib/legal-copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return legalMetadata[locale].imprint;
}

export default async function ImpressumPage() {
  const locale = await getLocale();
  return <LegalDocument copy={imprintCopy[locale]} />;
}
