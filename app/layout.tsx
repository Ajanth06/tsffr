import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { getDictionary, getLocale } from "../lib/i18n";
import { isRtlLocale } from "../lib/locale";
import { SITE_URL } from "../lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: "Tinn Silver",
    title: meta.homeTitle,
    description: meta.homeDescription,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: SITE_URL,
      siteName: "Tinn Silver",
      title: meta.homeTitle,
      description: meta.homeDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.homeTitle,
      description: meta.homeDescription,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const rtl = isRtlLocale(locale);
  const fontClass = locale === "ar" ? notoArabic.className : inter.className;

  return (
    <html
      lang={locale}
      dir={rtl ? "rtl" : "ltr"}
      className={`${fontClass} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="site-content">{children}</div>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
