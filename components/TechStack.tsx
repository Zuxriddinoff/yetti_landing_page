"use client";

import { useI18n } from "@/components/LanguageProvider";

const techItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "Figma",
  "TailwindCSS",
  "GraphQL",
  "Redis",
  "Prisma",
  "Vercel",
];

const symbols: Record<string, string> = {
  React: "⚛",
  "Next.js": "▲",
  TypeScript: "TS",
  "Node.js": "⬢",
  Python: "Py",
  PostgreSQL: "DB",
  MongoDB: "◐",
  AWS: "☁",
  Docker: "◫",
  Kubernetes: "⎈",
  Figma: "Fg",
  TailwindCSS: "Tw",
  GraphQL: "GQ",
  Redis: "Rd",
  Prisma: "Pr",
  Vercel: "Vl",
};

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...techItems, ...techItems];

  return (
    <div className="overflow-hidden py-3">
      <div
        className={`marquee-track flex gap-4 ${reverse ? "animate-[marquee-reverse_32s_linear_infinite]" : "animate-[marquee_28s_linear_infinite]"}`}
      >
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3 rounded-full border border-[rgba(15,23,42,0.08)] bg-slate-50 px-5 py-3 text-sm text-slate-700"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(23,123,230,0.08)] font-mono text-xs text-[#177BE6]">
              {symbols[item]}
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  const { t } = useI18n();

  return (
    <section className="section-divider py-24 sm:py-28">
      <div className="section-shell">
        <p className="section-label text-center">{t.tech.label}</p>
        <div className="fade-edge-mask relative mt-10 overflow-hidden rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-white/78 p-4 shadow-[0_24px_50px_rgba(15,23,42,0.05)] sm:p-6">
          <Row />
          <Row reverse />
        </div>
      </div>
    </section>
  );
}
