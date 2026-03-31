"use client";

import { useI18n } from "@/components/LanguageProvider";
import { useLeadModal } from "@/components/LeadModalProvider";
import { Github, Linkedin, Send } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { t } = useI18n();
  const { openLeadModal } = useLeadModal();

  return (
    <footer className="border-t border-[rgba(15,23,42,0.08)] bg-[#EEF4FA] pb-8 pt-10">
      <div className="section-shell pt-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <a href="#" className="inline-flex items-center">
              <Image
                src="/ye77i-tech-logo.png"
                alt="YE77I TECH logo"
                width={164}
                height={70}
                className="h-auto w-[128px] sm:w-[144px]"
              />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-600">{t.footer.tagline}</p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label={t.footer.github}
                className="text-slate-500 hover:scale-110 hover:text-[#177BE6]"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label={t.footer.linkedin}
                className="text-slate-500 hover:scale-110 hover:text-[#177BE6]"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                aria-label={t.footer.telegram}
                className="text-slate-500 hover:scale-110 hover:text-[#177BE6]"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-950">{t.footer.servicesTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {t.footer.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-950">{t.footer.companyTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {t.footer.company.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-950">{t.footer.contactTitle}</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p>
                <a href="mailto:ye77itech@gmail.com" className="hover:text-[#177BE6]">
                  {t.footer.email}
                </a>
              </p>
              <p>{t.footer.location}</p>
            </div>
            <button
              type="button"
              onClick={() => openLeadModal("footer-cta")}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#177BE6] px-5 py-3 text-sm font-medium text-white shadow-[0_16px_36px_rgba(23,123,230,0.14)] hover:bg-[#1169c9]"
            >
              {t.footer.cta}
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[rgba(15,23,42,0.08)] pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
