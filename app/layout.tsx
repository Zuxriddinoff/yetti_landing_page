import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://ye77i-tech.vercel.app";
const siteName = "YE77I TECH";
const defaultTitle = "Ye77i Tech IT company";
const defaultDescription =
  "YE77I TECH bizneslar uchun websayt, mobil ilova, CRM, avtomatlashtirish va ichki tizimlarni ishlab chiqadigan dasturiy hamkor.";
const tabIcon = "/ye77i-tech-tab-icon.png";
const ogImage = "/ye77i-tech-logo.png";
const keywords = [
  "YE77I TECH",
  "Ye77i Tech",
  "7Tech",
  "7 tech",
  "YE77I",
  "websayt yaratish",
  "mobil ilova yaratish",
  "crm tizim",
  "crm ishlab chiqish",
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
    icon: [{ url: tabIcon, sizes: "512x512", type: "image/png" }],
    shortcut: [tabIcon],
    apple: [{ url: tabIcon, sizes: "180x180", type: "image/png" }],
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
    title: defaultTitle,
    description:
      "Biznesingiz uchun chiroyli, tez va sotuvga ishlaydigan websayt, mobil ilova, CRM va avtomatlashtirish yechimlarini yaratamiz.",
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
    title: defaultTitle,
    description:
      "Biznesingiz uchun websayt, mobil ilova, CRM va avtomatlashtirish yechimlarini bir joyda ishlab chiqamiz.",
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
    alternateName: ["Ye77i Tech", "7Tech", "7 tech"],
    url: siteUrl,
    logo: `${siteUrl}${ogImage}`,
    image: `${siteUrl}${ogImage}`,
    description: defaultDescription,
    email: "ye77itech@gmail.com",
    areaServed: ["Uzbekistan", "Central Asia", "Remote"],
    sameAs: [siteUrl],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: ["Ye77i Tech", "7Tech", "7 tech"],
    url: siteUrl,
    description: "Websayt, mobil ilova, CRM va biznes avtomatlashtirish xizmatlari.",
    inLanguage: ["uz", "en", "ru"],
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
  };

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
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
        {children}
      </body>
    </html>
  );
}
