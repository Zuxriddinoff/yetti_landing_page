"use client";

import { useI18n } from "@/components/LanguageProvider";

export function Process() {
  const { t } = useI18n();

  return (
    <section id="process" className="section-divider py-24 sm:py-28 lg:py-[120px]">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label">{t.process.label}</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
            {t.process.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            {t.process.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <article
              key={step.number}
              className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-white/78 p-8 shadow-[0_24px_50px_rgba(15,23,42,0.05)]"
              style={{
                animation: `fade-up 0.7s ease ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="font-mono text-sm tracking-[0.2em] text-slate-500">{step.number}</div>
              <div className="mt-6 text-3xl font-bold text-slate-950">{step.title}</div>
              <p className="mt-4 max-w-xs text-sm leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
