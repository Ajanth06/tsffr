import { legalContact } from "./legal";

export const SITE_URL = legalContact.website.replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
