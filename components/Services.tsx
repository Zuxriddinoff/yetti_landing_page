"use client";

import { useI18n } from "@/components/LanguageProvider";
import { Cloud, Code2, Cpu, Layers, Server, Smartphone } from "lucide-react";

const icons = [Code2, Smartphone, Server, Layers, Cloud, Cpu];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 sm:py-28 lg:py-[120px]">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label">{t.services.label}</p>
          <h2 className="mt-4 max-w-[640px] text-4xl font-bold text-slate-950 sm:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            {t.services.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-white/78 p-8 shadow-[0_24px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[rgba(23,123,230,0.18)]"
                style={{
                  animation: `fade-up 0.7s ease ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(23,123,230,0.12)] bg-[rgba(23,123,230,0.08)] text-[#177BE6]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(15,23,42,0.08)] bg-slate-50 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
