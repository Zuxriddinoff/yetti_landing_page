"use client";

import { localeLabels, translations, type Locale, type Translation } from "@/lib/i18n";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
  locales: typeof localeLabels;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "ye77i-tech-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("uz");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && saved in translations) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
      locales: localeLabels,
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
