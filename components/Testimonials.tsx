"use client";

import { useI18n } from "@/components/LanguageProvider";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="section-divider py-24 sm:py-28 lg:py-[120px]">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label">{t.testimonials.label}</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            {t.testimonials.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 xl:grid-cols-3">
          {t.testimonials.items.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-white/78 p-8 shadow-[0_24px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[rgba(23,123,230,0.18)]"
              style={{
                animation: `fade-up 0.7s ease ${index * 0.12}s forwards`,
                opacity: 0,
              }}
            >
              <div className="font-mono text-sm tracking-[0.2em] text-[#177BE6]">★★★★★</div>
              <p className="mt-6 text-base leading-8 text-slate-950">{testimonial.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(23,123,230,0.12)] bg-[rgba(23,123,230,0.08)] font-mono text-sm font-medium text-[#177BE6]">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-medium text-slate-950">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
