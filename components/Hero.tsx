"use client";

import { useI18n } from "@/components/LanguageProvider";
import { useLeadModal } from "@/components/LeadModalProvider";

function getHeroTitleSegments(locale: "en" | "ru" | "uz") {
  if (locale === "uz") {
    return {
      lead: "Birinchi qarashdayoq",
      accent: "ishonch",
      tailStart: "uyg'otadigan",
      highlightedWords: ["sayt", "ilova", "CRM"],
      joinWord: "va",
      tailEnd: "yechimlari.",
    };
  }

  if (locale === "ru") {
    return {
      lead: "С первого взгляда",
      accent: "доверие",
      tailStart: "к бренду через",
      highlightedWords: ["сайт", "приложение", "CRM"],
      joinWord: "и",
      tailEnd: "решение.",
    };
  }

  return {
    lead: "Make your brand feel",
    accent: "trusted",
    tailStart: "through a",
    highlightedWords: ["website", "app", "CRM"],
    joinWord: "and",
    tailEnd: "experience.",
  };
}

export function Hero() {
  const { locale, t } = useI18n();
  const { openLeadModal } = useLeadModal();
  const titleSegments = getHeroTitleSegments(locale);

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-32 lg:pt-36">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.18),transparent)]" />
        <div className="absolute left-[-12%] top-[2%] h-[30rem] w-[30rem] rounded-full bg-[rgba(23,123,230,0.12)] blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-[rgba(102,146,209,0.14)] blur-3xl" />
        <div className="absolute left-[18%] top-[18%] h-[28rem] w-[28rem] rounded-full border border-white/50 bg-white/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(23,42,73,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,42,73,0.08)_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.035]" />
      </div>

      <div className="section-shell relative z-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:gap-10">
          <div className="max-w-3xl">
            <div className="font-brand inline-flex animate-[fade-up_0.8s_ease_forwards] items-center gap-3 rounded-full border border-[rgba(23,123,230,0.12)] bg-white/86 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#177BE6] shadow-[0_12px_28px_rgba(23,123,230,0.08)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#177BE6]" />
              {t.hero.badge}
            </div>

            <div className="mt-8 animate-[fade-up_0.8s_ease_0.08s_forwards] opacity-0">
              <h1 className="font-brand flex max-w-[11.8ch] flex-col gap-2 text-[2.7rem] font-black leading-[0.98] tracking-[-0.06em] text-[var(--text-primary)] sm:gap-3 sm:text-[4rem] lg:gap-3.5 lg:text-[5.1rem]">
                <span className="block">{titleSegments.lead}</span>
                <span className="hero-title-accent block">{titleSegments.accent}</span>
                <span className="block">
                  {titleSegments.tailStart}{" "}
                  <span className="hero-title-accent">{titleSegments.highlightedWords[0]}</span>,{" "}
                  <span className="hero-title-accent">{titleSegments.highlightedWords[1]}</span>{" "}
                  {titleSegments.joinWord}{" "}
                  <span className="hero-title-accent">{titleSegments.highlightedWords[2]}</span>{" "}
                  {titleSegments.tailEnd}
                </span>
              </h1>
            </div>

            <div className="mt-8 animate-[fade-up_0.8s_ease_0.16s_forwards] opacity-0">
              <p className="hero-lead max-w-2xl text-base leading-8 sm:text-lg">
                {t.hero.description}
              </p>
            </div>

            <div className="mt-10 flex animate-[fade-up_0.8s_ease_0.24s_forwards] flex-col gap-4 opacity-0 sm:flex-row">
              <button
                type="button"
                onClick={() => openLeadModal("hero-primary")}
                className="hero-button-shimmer relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#177BE6] px-7 py-4 text-sm font-medium text-white shadow-[0_22px_48px_rgba(23,123,230,0.22)] hover:bg-[#1169c9]"
              >
                <span className="relative z-10">{t.hero.primaryCta}</span>
              </button>
            </div>
          </div>

          <div className="animate-[fade-up_0.8s_ease_0.18s_forwards] opacity-0">
            <div className="relative mx-auto max-w-[620px] pt-16">
              <div className="absolute left-[-6%] top-8 hidden h-[78%] w-[78%] rounded-[34px] border border-white/70 bg-white/46 shadow-[0_24px_56px_rgba(23,123,230,0.08)] lg:block" />
              <div className="font-brand absolute right-4 top-0 z-20 hidden rounded-full border border-white/70 bg-white/92 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#177BE6] shadow-[0_16px_28px_rgba(23,123,230,0.08)] lg:block">
                design + system thinking
              </div>

              <div className="relative overflow-hidden rounded-[42px] border border-[rgba(23,123,230,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(237,244,251,0.98))] p-5 shadow-[0_32px_90px_rgba(23,123,230,0.12)]">
                <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(23,123,230,0.18),transparent_58%)]" />

                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-[30px] border border-[rgba(15,23,42,0.08)] bg-white/92 p-5 shadow-[0_16px_36px_rgba(15,23,42,0.05)]">
                      <div className="font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        {t.hero.confidenceLabel}
                      </div>
                      <div className="mt-3 text-4xl font-bold text-slate-950">98%</div>
                      <div className="mt-4 h-2 rounded-full bg-slate-100">
                        <div className="h-2 w-[86%] rounded-full bg-[linear-gradient(90deg,#177BE6,#86B6EE)]" />
                      </div>
                      <div className="mt-4 text-sm text-slate-500">{t.hero.scoreText}</div>
                    </div>

                    <div className="overflow-hidden rounded-[30px] border border-[rgba(15,23,42,0.08)] bg-[#0C1730] text-white shadow-[0_22px_46px_rgba(15,23,42,0.12)]">
                      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                        </div>
                        <div className="font-brand rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300">
                          {t.hero.panelStatus}
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          {t.hero.performanceLabel}
                        </div>
                        <div className="mt-3 max-w-[15ch] text-2xl font-semibold leading-tight text-white">
                          {t.hero.performanceValue}
                        </div>

                        <div className="mt-6 grid grid-cols-6 items-end gap-2">
                          {[22, 34, 30, 54, 66, 84].map((height, index) => (
                            <div key={height} className="flex h-28 items-end">
                              <div
                                className={`w-full rounded-t-[18px] ${
                                  index === 5
                                    ? "bg-white"
                                    : "bg-[linear-gradient(180deg,#177BE6,#8FBCEF)]"
                                }`}
                                style={{ height: `${height}%` }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[30px] border border-[rgba(15,23,42,0.08)] bg-white/92 p-5 shadow-[0_16px_36px_rgba(15,23,42,0.05)]">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                            {t.hero.scoreLabel}
                          </div>
                          <div className="mt-3 text-5xl font-bold text-slate-950">96</div>
                        </div>
                        <div className="font-brand rounded-full bg-[#E8F1FF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#177BE6]">
                          {t.hero.uptimeLabel}
                        </div>
                      </div>

                      <div className="mt-5 rounded-[24px] bg-[linear-gradient(135deg,#EAF2FF,#D8E7FA)] p-4">
                        <div className="text-sm font-medium text-slate-700">{t.hero.scalabilityLabel}</div>
                        <div className="mt-2 text-2xl font-semibold text-slate-950">
                          {t.hero.scalabilityValue}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[30px] border border-[rgba(15,23,42,0.08)] bg-[linear-gradient(135deg,#1A5FD4,#8CB6EA)] p-5 text-white shadow-[0_22px_46px_rgba(23,123,230,0.14)]">
                      <div className="font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100">
                        {t.hero.panelEyebrow}
                      </div>
                      <div className="mt-3 text-2xl font-semibold leading-tight">
                        {t.hero.panelTitle}
                      </div>
                      <div className="mt-6 flex items-center gap-3">
                        <span className="h-3 w-3 rounded-full bg-white" />
                        <span className="text-sm text-blue-50">Premium-first product systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
