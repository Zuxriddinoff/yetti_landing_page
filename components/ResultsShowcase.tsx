"use client";

import { useI18n } from "@/components/LanguageProvider";

export function ResultsShowcase() {
  const { t } = useI18n();

  return (
    <section className="py-24 sm:py-28 lg:py-[120px]">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">{t.results.label}</p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
            {t.results.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {t.results.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <article className="relative overflow-hidden rounded-[34px] bg-[var(--text-primary)] p-8 text-[var(--bg-primary)] shadow-[0_28px_70px_var(--accent-glow)] sm:p-10">
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(23,123,230,0.26),transparent_60%)]" />
            <div className="relative">
              <div className="font-brand text-[11px] font-bold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.62)]">
                {t.results.summaryEyebrow}
              </div>
              <h3 className="mt-5 max-w-[14ch] text-3xl font-semibold leading-tight text-white sm:text-[2.5rem]">
                {t.results.summaryTitle}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-[rgba(255,255,255,0.72)]">
                {t.results.summaryDescription}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {t.results.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] p-4 backdrop-blur"
                  >
                    <div className="font-brand text-[10px] font-bold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.54)]">
                      {item.label}
                    </div>
                    <div className="mt-3 text-2xl font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.results.items.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[30px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] backdrop-blur ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="font-brand text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-violet)]">
                  {t.results.cardLabel}
                </div>
                <h3 className="mt-4 text-[1.75rem] font-semibold leading-tight text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
