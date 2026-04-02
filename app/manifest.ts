import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://ye77i-tech.vercel.app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YE77I TECH",
    short_name: "YE77I TECH",
    description:
      "Websayt, mobil ilova, CRM va biznes avtomatlashtirish xizmatlarini taklif qiluvchi dasturiy hamkor.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#0b1220",
    orientation: "portrait",
    lang: "uz",
    categories: ["business", "technology", "productivity"],
    icons: [
      {
        src: "/ye77i-tech-tab-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: `${siteUrl}/ye77i-tech-logo.png`,
        sizes: "1536x1024",
        type: "image/png",
      },
    ],
  };
}
