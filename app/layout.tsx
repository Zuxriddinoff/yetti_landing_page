import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://ye77i-tech.vercel.app";
const siteName = "YE77I TECH";
const defaultTitle = "YE77I TECH | Ye77i Tech | 7Tech | 7 tech IT company";
const defaultDescription =
  "YE77I TECH, Ye77i Tech, 7Tech va 7 tech nomlari bilan tanilgan IT company. Bizneslar uchun websayt, mobil ilova, CRM, ERP, avtomatlashtirish va ichki tizimlarni ishlab chiqadigan dasturiy hamkor.";
const tabIcon = "/branding/ye77i-tech-logo-dark.svg";
const ogImage = "/branding/ye77i-tech-logo-light.png";
const keywords = [
  "YE77I TECH",
  "Ye77i Tech",
  "ye77i tech",
  "7Tech",
  "7 tech",
  "YE77I",
  "ye77i",
  "7no",
  "7 no",
  "7 number tech",
  "7 raqam tech",
  "yetti tech",
  "yettii tech",
  "ye77i uz",
  "ye77i.uz",
  "ye77itech",
  "ye77i tech uzbekistan",
  "7 tech uzbekistan",
  "7tech uzbekistan",
  "uzbekistan it company",
  "tashkent it company",
  "websayt yaratish",
  "mobil ilova yaratish",
  "crm tizim",
  "crm ishlab chiqish",
  "erp tizim",
  "telegram bot yasash",
  "business automation",
  "landing page",
  "korporativ sayt",
  "uzbekistan software company",
  "web development uzbekistan",
  "app development uzbekistan",
  "custom software development",
  "startup MVP development",
  "UI UX design",
  "backend api development",
  "sales automation",
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b1220" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | YE77I TECH",
  },
  description: defaultDescription,
  keywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Business, Software Development, Technology",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: tabIcon, type: "image/svg+xml" }],
    shortcut: [tabIcon],
    apple: [{ url: "/branding/ye77i-tech-logo-dark.png", sizes: "1536x1024", type: "image/png" }],
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteName,
  },
  openGraph: {
    title: "YE77I TECH | Ye77i Tech | 7Tech",
    description:
      "YE77I TECH, Ye77i Tech va 7Tech brendi ostida biznesingiz uchun websayt, mobil ilova, CRM, ERP va avtomatlashtirish yechimlarini yaratamiz.",
    url: siteUrl,
    siteName,
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "YE77I TECH logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YE77I TECH | Ye77i Tech | 7Tech",
    description:
      "Ye77i Tech, 7Tech va YE77I TECH nomlari bilan biznesingiz uchun websayt, mobil ilova, CRM va avtomatlashtirish yechimlarini ishlab chiqamiz.",
    images: [ogImage],
  },
  appLinks: {
    web: {
      url: siteUrl,
      should_fallback: true,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": siteName,
    "msapplication-TileColor": "#0b1220",
    "msapplication-tooltip": defaultTitle,
    "msapplication-starturl": "/",
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
    name: siteName,
    alternateName: [
      "Ye77i Tech",
      "ye77i tech",
      "7Tech",
      "7 tech",
      "YE77I",
      "ye77i",
      "7no",
      "7 no",
      "yetti tech",
      "ye77itech",
    ],
    url: siteUrl,
    logo: `${siteUrl}${ogImage}`,
    image: `${siteUrl}${ogImage}`,
    description: defaultDescription,
    email: "ye77itech@gmail.com",
    areaServed: ["Uzbekistan", "Central Asia", "Remote"],
    keywords: keywords.join(", "),
    sameAs: [siteUrl],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: ["Ye77I Tech", "ye77i tech", "7Tech", "7 tech", "7no", "7 no"],
    url: siteUrl,
    description: "Websayt, mobil ilova, CRM va biznes avtomatlashtirish xizmatlari.",
    inLanguage: ["uz", "en", "ru"],
    keywords,
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
  };

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    alternateName: ["Ye77i Tech", "ye77i tech", "7Tech", "7 tech", "7no", "7 no"],
    url: siteUrl,
    image: `${siteUrl}${ogImage}`,
    logo: `${siteUrl}${ogImage}`,
    description: defaultDescription,
    brand: siteName,
    areaServed: "UZ",
    serviceType: [
      "Website development",
      "Mobile app development",
      "CRM development",
      "Business automation",
      "UI/UX design",
      "API integration",
    ],
    keywords,
  };

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: defaultTitle,
    url: siteUrl,
    description: defaultDescription,
    about: [
      { "@type": "Thing", name: "YE77I TECH" },
      { "@type": "Thing", name: "Ye77i Tech" },
      { "@type": "Thing", name: "ye77i tech" },
      { "@type": "Thing", name: "7Tech" },
      { "@type": "Thing", name: "7 tech" },
      { "@type": "Thing", name: "7no" },
      { "@type": "Thing", name: "7 no" },
    ],
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  };

  return (
    <html lang="uz">
      <body className="bg-[#F4F8FC] text-slate-950 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
