import type { Metadata } from "next";
import { LegalDocument } from "../components/legal-document";
import { getLocale } from "../../lib/i18n";
import { legalMetadata, privacyCopy } from "../../lib/legal-copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return legalMetadata[locale].privacy;
}

export default async function DatenschutzPage() {
  const locale = await getLocale();
  return <LegalDocument copy={privacyCopy[locale]} />;
}
