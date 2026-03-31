"use client";

import { useI18n } from "@/components/LanguageProvider";
import { useLeadModal } from "@/components/LeadModalProvider";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const { locale, locales, setLocale, t } = useI18n();
  const { openLeadModal } = useLeadModal();
  const navItems = [
    { label: t.navbar.services, href: "#services" },
    { label: t.navbar.portfolio, href: "#portfolio" },
    { label: t.navbar.process, href: "#process" },
    { label: t.navbar.contact, href: "#contact", isContact: true },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-[rgba(15,23,42,0.1)] bg-[#F4F8FC]/85 backdrop-blur-xl" : ""
      }`}
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="#" aria-label={t.navbar.homeAria} className="flex items-center">
            <Image
              src="/ye77i-tech-logo.png"
              alt="YE77I TECH logo"
              width={198}
              height={84}
              priority
              className="h-auto w-[146px] sm:w-[160px]"
            />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <nav aria-label="Primary" className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    if (item.isContact) {
                      openLeadModal("navbar-contact");
                      return;
                    }
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="nav-link relative text-sm text-slate-600 hover:text-slate-950 focus-visible:text-slate-950"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center rounded-full border border-[rgba(15,23,42,0.1)] bg-white/80 p-1">
              {(Object.keys(locales) as Array<keyof typeof locales>).map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-label={`${t.navbar.language}: ${locales[key]}`}
                  onClick={() => setLocale(key)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    locale === key
                      ? "bg-[#177BE6] text-white"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {locales[key]}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => openLeadModal("navbar-cta")}
              className="inline-flex items-center justify-center rounded-full bg-[#177BE6] px-5 py-3 text-sm font-medium text-white shadow-[0_16px_40px_rgba(23,123,230,0.18)] hover:bg-[#1169c9]"
            >
              {t.navbar.cta}
            </button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? t.navbar.closeMenu : t.navbar.openMenu}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(15,23,42,0.1)] bg-white/80 text-slate-900 backdrop-blur md:hidden"
          >
            <span className="inline-flex transition-transform duration-200">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-[rgba(15,23,42,0.1)] bg-[#F4F8FC]/95 px-4 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[32rem] pb-5 opacity-100" : "max-h-0 border-transparent pb-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="section-shell flex flex-col gap-3 rounded-3xl border border-[rgba(15,23,42,0.1)] bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
        >
          <div className="mb-1 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {t.navbar.language}
            </span>
            <div className="flex items-center gap-2">
              {(Object.keys(locales) as Array<keyof typeof locales>).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setLocale(key)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    locale === key
                      ? "bg-[#177BE6] text-white"
                      : "bg-white text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {locales[key]}
                </button>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                setIsOpen(false);
                if (item.isContact) {
                  openLeadModal("mobile-navbar-contact");
                  return;
                }
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-2xl px-4 py-3 text-left text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              openLeadModal("mobile-navbar-cta");
            }}
            className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#177BE6] px-4 py-3 text-sm font-medium text-white hover:bg-[#1169c9]"
          >
            {t.navbar.cta}
          </button>
        </nav>
      </div>
    </header>
  );
}
