import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://ye77i-tech.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YE77I TECH | Websayt, Ilova va CRM Yechimlar",
    template: "%s | YE77I TECH",
  },
  description:
    "YE77I TECH bizneslar uchun websayt, mobil ilova, CRM va avtomatlashtirish yechimlarini yaratadi. 7Tech, Ye77i Tech va YE77I TECH nomlari bilan tanilgan dasturiy hamkor.",
  keywords: [
    "YE77I TECH",
    "Ye77i Tech",
    "7Tech",
    "7 tech",
    "YE77I",
    "websayt yaratish",
    "mobil ilova",
    "crm tizim",
    "software development company",
    "business automation",
    "landing page",
    "web development uzbekistan",
  ],
  applicationName: "YE77I TECH",
  authors: [{ name: "YE77I TECH" }],
  creator: "YE77I TECH",
  publisher: "YE77I TECH",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "YE77I TECH | Websayt, Ilova va CRM Yechimlar",
    description:
      "Biznesingiz uchun chiroyli, tez va sotuvga ishlaydigan websayt, mobil ilova va CRM tizimlar yaratamiz.",
    url: siteUrl,
    siteName: "YE77I TECH",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/ye77i-tech-logo.png",
        width: 1200,
        height: 630,
        alt: "YE77I TECH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YE77I TECH | Websayt, Ilova va CRM Yechimlar",
    description:
      "Biznesingiz uchun websayt, mobil ilova va CRM tizimlarni bir joyda ishlab chiqamiz.",
    images: ["/ye77i-tech-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "YE77I TECH",
    alternateName: ["Ye77i Tech", "7Tech", "7 tech"],
    url: siteUrl,
    logo: `${siteUrl}/ye77i-tech-logo.png`,
    description:
      "YE77I TECH bizneslar uchun websayt, mobil ilova, CRM va avtomatlashtirish yechimlarini ishlab chiqadi.",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "YE77I TECH",
    alternateName: ["Ye77i Tech", "7Tech", "7 tech"],
    url: siteUrl,
    description:
      "Websayt, mobil ilova, CRM va biznes avtomatlashtirish xizmatlari.",
  };

  return (
    <html lang="en">
      <body className="bg-[#F4F8FC] text-slate-950 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
