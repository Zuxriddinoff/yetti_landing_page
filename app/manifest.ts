import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://ye77i-tech.vercel.app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YE77I TECH | Ye77i Tech | 7Tech | 7 tech",
    short_name: "YE77I TECH",
    description:
      "YE77I TECH, Ye77i Tech va 7Tech nomlari bilan websayt, mobil ilova, CRM, ERP va biznes avtomatlashtirish xizmatlarini taklif qiluvchi IT company.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#0b1220",
    orientation: "portrait",
    lang: "uz",
    categories: ["business", "technology", "productivity"],
    icons: [
      {
        src: "/branding/ye77i-tech-logo-dark.svg",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: `${siteUrl}/branding/ye77i-tech-logo-light.png`,
        sizes: "1536x1024",
        type: "image/png",
      },
    ],
  };
}
