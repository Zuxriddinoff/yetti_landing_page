"use client";

import { useI18n } from "@/components/LanguageProvider";
import Image from "next/image";

const projectImages = [
  "/portfolio-ecommerce.svg",
  "/portfolio-banking.svg",
  "/portfolio-analytics.svg",
];

export function Portfolio() {
  const { t } = useI18n();

  return (
    <section id="portfolio" className="section-divider py-24 sm:py-28 lg:py-[120px]">
      <div className="section-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">{t.portfolio.label}</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
              {t.portfolio.title}
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-medium text-[#177BE6] underline-offset-4 hover:underline"
          >
            {t.portfolio.cta}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 xl:grid-cols-3">
          {t.portfolio.items.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-white/78 shadow-[0_24px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[rgba(23,123,230,0.18)]"
              style={{
                animation: `fade-up 0.7s ease ${index * 0.12}s forwards`,
                opacity: 0,
              }}
            >
              <div className="relative h-[240px] overflow-hidden border-b border-[rgba(15,23,42,0.08)] bg-[linear-gradient(180deg,rgba(232,240,251,0.78),rgba(213,226,243,0.5))]">
                <Image
                  src={projectImages[index]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 33vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,21,40,0.08),rgba(9,21,40,0.36))]" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="relative block max-w-[220px] text-3xl font-bold leading-tight text-white drop-shadow-[0_10px_30px_rgba(15,23,42,0.35)]">
                    {project.title}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(15,23,42,0.08)] bg-slate-50 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
