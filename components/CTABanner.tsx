"use client";

import { useI18n } from "@/components/LanguageProvider";
import { useLeadModal } from "@/components/LeadModalProvider";

export function CTABanner() {
  const { t } = useI18n();
  const { openLeadModal } = useLeadModal();

  return (
    <section id="contact" className="py-24 sm:py-28 lg:py-[100px]">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[36px] border border-[rgba(23,123,230,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,245,251,0.96))] px-6 py-16 text-center shadow-[0_30px_70px_rgba(23,123,230,0.08)] sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(23,123,230,0.14),transparent_42%)]" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold text-slate-950 sm:text-5xl lg:text-[56px]">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {t.cta.description}
            </p>
            <button
              type="button"
              onClick={() => openLeadModal("cta-banner")}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#177BE6] px-8 py-4 text-base font-medium text-white shadow-[0_16px_40px_rgba(23,123,230,0.18)] hover:bg-[#1169c9]"
            >
              {t.cta.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
