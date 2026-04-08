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
            className="flex items-center gap-3 rounded-full border border-[rgba(15,23,42,0.08)] bg-slate-50 px-5 py-3 text-base font-medium text-[var(--text-primary)] shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-glow)] font-mono text-sm font-semibold text-[var(--accent-cyan)]">
              {symbols[item]}
            </span>
            <span className="leading-none text-[var(--text-primary)]">{item}</span>
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
        <div className="flex justify-center">
          <p className="font-brand inline-flex rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.82)] px-6 py-3 text-center text-lg font-black uppercase tracking-[0.18em] text-[var(--text-primary)] shadow-[0_12px_28px_rgba(15,23,42,0.05)] sm:text-xl lg:text-2xl">
            {t.tech.label}
          </p>
        </div>
        <div className="fade-edge-mask relative mt-10 overflow-hidden rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-white/78 p-4 shadow-[0_24px_50px_rgba(15,23,42,0.05)] sm:p-6">
          <Row />
          <Row reverse />
        </div>
      </div>
    </section>
  );
}
