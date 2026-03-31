"use client";

import { useI18n } from "@/components/LanguageProvider";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

type LeadModalContextValue = {
  openLeadModal: (source?: string) => void;
  closeLeadModal: () => void;
};

type CountryOption = {
  code: string;
  flag: string;
  label: string;
  dialCode: string;
  groups: number[];
};

const LeadModalContext = createContext<LeadModalContextValue | null>(null);
const leadSubmitUrl = process.env.NEXT_PUBLIC_LEAD_BOT_URL?.trim();
const countryOptions: CountryOption[] = [
  { code: "UZ", flag: "🇺🇿", label: "Uzbekistan", dialCode: "+998", groups: [2, 3, 2, 2] },
  { code: "KZ", flag: "🇰🇿", label: "Kazakhstan", dialCode: "+7", groups: [3, 3, 2, 2] },
  { code: "KG", flag: "🇰🇬", label: "Kyrgyzstan", dialCode: "+996", groups: [3, 3, 3] },
  { code: "RU", flag: "🇷🇺", label: "Russia", dialCode: "+7", groups: [3, 3, 2, 2] },
  { code: "TR", flag: "🇹🇷", label: "Turkey", dialCode: "+90", groups: [3, 3, 2, 2] },
  { code: "AE", flag: "🇦🇪", label: "UAE", dialCode: "+971", groups: [2, 3, 4] },
  { code: "US", flag: "🇺🇸", label: "USA", dialCode: "+1", groups: [3, 3, 4] },
];

const defaultCountryByLocale: Record<string, string> = {
  uz: "UZ",
  ru: "UZ",
  en: "UZ",
};

function getCountryByCode(code: string) {
  return countryOptions.find((country) => country.code === code) ?? countryOptions[0];
}

function formatPhoneNumber(value: string, groups: number[]) {
  const digits = value.replace(/\D/g, "");
  const parts: string[] = [];
  let cursor = 0;

  for (const group of groups) {
    const chunk = digits.slice(cursor, cursor + group);
    if (!chunk) break;
    parts.push(chunk);
    cursor += group;
  }

  if (cursor < digits.length) {
    parts.push(digits.slice(cursor));
  }

  return parts.join(" ");
}

function getCursorPositionFromDigitIndex(value: string, digitIndex: number) {
  if (digitIndex <= 0) {
    return 0;
  }

  let digitsSeen = 0;

  for (let index = 0; index < value.length; index += 1) {
    if (/\d/.test(value[index])) {
      digitsSeen += 1;
    }

    if (digitsSeen >= digitIndex) {
      return index + 1;
    }
  }

  return value.length;
}

function getLeadFormCopy(locale: string) {
  if (locale === "ru") {
    return {
      countryLabel: "Страна",
      numberPreviewLabel: "Полный номер",
      nameError: "Введите имя не короче 2 символов.",
      phoneError: "Введите полный номер телефона.",
      invalidPhoneServerError: "Номер телефона введён неверно.",
      invalidNameServerError: "Имя введено неверно.",
      genericServerError: "Что-то пошло не так. Попробуйте ещё раз.",
    };
  }

  if (locale === "uz") {
    return {
      countryLabel: "Davlat",
      numberPreviewLabel: "To'liq raqam",
      nameError: "Kamida 2 harfdan iborat ism kiriting.",
      phoneError: "Telefon raqamini to'liq kiriting.",
      invalidPhoneServerError: "Telefon raqamingiz noto'g'ri.",
      invalidNameServerError: "Ismingiz noto'g'ri kiritilgan.",
      genericServerError: "Xatolik yuz berdi. Qayta urinib ko'ring.",
    };
  }

  return {
    countryLabel: "Country",
    numberPreviewLabel: "Full number",
    nameError: "Enter a name with at least 2 characters.",
    phoneError: "Enter the full phone number.",
    invalidPhoneServerError: "The phone number is invalid.",
    invalidNameServerError: "The name is invalid.",
    genericServerError: "Something went wrong. Please try again.",
  };
}

function resolveLeadSubmitError(rawError: unknown, locale: string) {
  const formCopy = getLeadFormCopy(locale);

  if (!rawError || typeof rawError !== "object") {
    return formCopy.genericServerError;
  }

  const errorRecord = rawError as {
    message?: unknown;
    error?: unknown;
  };

  const normalizedMessage = Array.isArray(errorRecord.message)
    ? errorRecord.message.join(" ").toLowerCase()
    : typeof errorRecord.message === "string"
      ? errorRecord.message.toLowerCase()
      : "";

  if (normalizedMessage.includes("phone") && normalizedMessage.includes("valid")) {
    return formCopy.invalidPhoneServerError;
  }

  if (normalizedMessage.includes("name")) {
    return formCopy.invalidNameServerError;
  }

  return formCopy.genericServerError;
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const { locale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState(defaultCountryByLocale[locale] || "UZ");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const countryMenuRef = useRef<HTMLDivElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const pendingPhoneCursorRef = useRef<number | null>(null);
  const selectedCountry = useMemo(
    () => getCountryByCode(selectedCountryCode),
    [selectedCountryCode],
  );
  const formCopy = useMemo(() => getLeadFormCopy(locale), [locale]);
  const formattedPhone = useMemo(
    () => formatPhoneNumber(phoneDigits, selectedCountry.groups),
    [phoneDigits, selectedCountry],
  );
  const phoneMaxLength = useMemo(
    () => selectedCountry.groups.reduce((total, group) => total + group, 0),
    [selectedCountry],
  );
  const normalizedName = name.trim();
  const fullPhoneNumber = `${selectedCountry.dialCode}${phoneDigits}`;
  const isNameValid = normalizedName.length >= 2;
  const isPhoneValid = phoneDigits.length === phoneMaxLength;
  const showNameError = (hasTriedSubmit || nameTouched) && !isNameValid;
  const showPhoneError = (hasTriedSubmit || phoneTouched) && !isPhoneValid;
  const isFormValid = isNameValid && isPhoneValid;

  const closeLeadModal = () => {
    setIsOpen(false);
    setIsSubmitting(false);
    setStatus("idle");
    setSubmitErrorMessage("");
    setIsCountryMenuOpen(false);
  };

  const openLeadModal = (_leadSource = "website") => {
    setStatus("idle");
    setSubmitErrorMessage("");
    setHasTriedSubmit(false);
    setIsOpen(true);
  };

  useEffect(() => {
    setSelectedCountryCode(defaultCountryByLocale[locale] || "UZ");
  }, [locale]);

  useEffect(() => {
    if (!isCountryMenuOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!countryMenuRef.current?.contains(event.target as Node)) {
        setIsCountryMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [isCountryMenuOpen]);

  useLayoutEffect(() => {
    if (pendingPhoneCursorRef.current === null || !phoneInputRef.current) return;

    const nextCursorPosition = getCursorPositionFromDigitIndex(
      formattedPhone,
      pendingPhoneCursorRef.current,
    );

    phoneInputRef.current.setSelectionRange(nextCursorPosition, nextCursorPosition);
    pendingPhoneCursorRef.current = null;
  }, [formattedPhone]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLeadModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({
      openLeadModal,
      closeLeadModal,
    }),
    [],
  );

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneTouched(true);
    setSubmitErrorMessage("");
    const nextDigits = event.target.value.replace(/\D/g, "").slice(0, phoneMaxLength);
    const digitsBeforeCursor = event.target.value
      .slice(0, event.target.selectionStart ?? event.target.value.length)
      .replace(/\D/g, "").length;

    pendingPhoneCursorRef.current = digitsBeforeCursor;
    setPhoneDigits(nextDigits);
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasTriedSubmit(true);
    setNameTouched(true);
    setPhoneTouched(true);
    setIsSubmitting(true);
    setStatus("idle");
    setSubmitErrorMessage("");

    try {
      if (!leadSubmitUrl) {
        throw new Error("NEXT_PUBLIC_LEAD_BOT_URL is not configured");
      }

      if (!isFormValid) {
        throw new Error("Lead form is invalid");
      }

      const response = await fetch(leadSubmitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: normalizedName,
          phone: fullPhoneNumber,
        }),
      });

      if (!response.ok) {
        const errorPayload = (await response.json().catch(() => null)) as unknown;
        throw errorPayload;
      }

      setStatus("success");
      setName("");
      setPhoneDigits("");
      setHasTriedSubmit(false);
      setNameTouched(false);
      setPhoneTouched(false);
      setSubmitErrorMessage("");
      setIsOpen(false);
    } catch (error) {
      setSubmitErrorMessage(resolveLeadSubmitError(error, locale));
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LeadModalContext.Provider value={value}>
      {children}

      {isOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label={t.leadModal.close}
            onClick={closeLeadModal}
            className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]"
          />

          <div className="relative z-10 w-full max-w-md rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-[#177BE6]">
                  {t.leadModal.badge}
                </div>
                <h2 className="mt-3 text-3xl font-bold text-slate-950">{t.leadModal.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{t.leadModal.description}</p>
              </div>
              <button
                type="button"
                aria-label={t.leadModal.close}
                onClick={closeLeadModal}
                className="rounded-full border border-[rgba(15,23,42,0.08)] px-3 py-2 text-sm text-slate-500 hover:text-slate-950"
              >
                ✕
              </button>
            </div>

            <form onSubmit={submitLead} className="mt-8 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  {t.leadModal.nameLabel}
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setSubmitErrorMessage("");
                  }}
                  onBlur={() => setNameTouched(true)}
                  required
                  minLength={2}
                  placeholder={t.leadModal.namePlaceholder}
                  className={`w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:bg-white ${
                    showNameError
                      ? "border-rose-300 focus:border-rose-500"
                      : "border-[rgba(15,23,42,0.1)] focus:border-[#177BE6]"
                  }`}
                />
                {showNameError ? (
                  <span className="mt-2 block text-sm text-rose-600">{formCopy.nameError}</span>
                ) : null}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  {t.leadModal.phoneLabel}
                </span>
                <div>
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                    {formCopy.numberPreviewLabel}
                  </span>
                  <div
                    className={`relative rounded-[26px] border bg-slate-50 transition focus-within:bg-white ${
                      showPhoneError
                        ? "border-rose-300 focus-within:border-rose-500"
                        : "border-[rgba(15,23,42,0.1)] focus-within:border-[#177BE6]"
                    }`}
                  >
                    <div className="flex items-stretch">
                      <div ref={countryMenuRef} className="relative shrink-0">
                        <button
                          type="button"
                          onClick={() => setIsCountryMenuOpen((open) => !open)}
                          className="flex h-full min-w-[132px] items-center gap-3 rounded-l-[26px] border-r border-[rgba(15,23,42,0.08)] px-4 py-3 text-left outline-none transition hover:bg-white"
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-xl leading-none">{selectedCountry.flag}</span>
                            <span className="block text-sm font-semibold text-slate-950">
                              {selectedCountry.dialCode}
                            </span>
                          </span>
                          <span className="ml-auto text-xs text-slate-400">
                            {isCountryMenuOpen ? "▲" : "▼"}
                          </span>
                        </button>

                        {isCountryMenuOpen ? (
                          <div className="absolute left-0 top-[calc(100%+8px)] z-20 w-[280px] overflow-hidden rounded-2xl border border-[rgba(15,23,42,0.08)] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
                            <div className="border-b border-[rgba(15,23,42,0.06)] px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                              {formCopy.countryLabel}
                            </div>
                            <div className="max-h-64 overflow-y-auto p-2">
                              {countryOptions.map((country) => {
                                const isActive = country.code === selectedCountry.code;

                                return (
                                  <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountryCode(country.code);
                                      setPhoneDigits("");
                                      setPhoneTouched(false);
                                      setHasTriedSubmit(false);
                                      setIsCountryMenuOpen(false);
                                    }}
                                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition ${
                                      isActive ? "bg-[#177BE6] text-white" : "hover:bg-slate-50"
                                    }`}
                                  >
                                    <span className="flex items-center gap-3">
                                      <span className="text-lg leading-none">{country.flag}</span>
                                      <span>
                                        <span className="block text-sm font-medium">{country.label}</span>
                                        <span
                                          className={`block text-xs ${
                                            isActive ? "text-blue-100" : "text-slate-500"
                                          }`}
                                        >
                                          {country.dialCode}
                                        </span>
                                      </span>
                                    </span>
                                    {isActive ? <span className="text-xs font-semibold">Selected</span> : null}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      <div className="min-w-0 flex-1">
                        <input
                          ref={phoneInputRef}
                          type="tel"
                          inputMode="numeric"
                          value={formattedPhone}
                          onChange={handlePhoneChange}
                          onBlur={() => setPhoneTouched(true)}
                          required
                          minLength={phoneMaxLength}
                          maxLength={phoneMaxLength + selectedCountry.groups.length - 1}
                          placeholder={t.leadModal.phonePlaceholder}
                          className="h-full w-full rounded-r-[26px] bg-transparent px-4 py-3 font-medium tracking-[0.12em] text-slate-950 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 text-xs">
                    <span className={showPhoneError ? "text-rose-600" : "text-slate-400"}>
                      {showPhoneError ? formCopy.phoneError : fullPhoneNumber}
                    </span>
                    <span className={showPhoneError ? "text-rose-500" : "text-slate-300"}>
                      {phoneDigits.length}/{phoneMaxLength}
                    </span>
                  </div>
                </div>
              </label>

              {status === "success" ? (
                <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  {t.leadModal.success}
                </div>
              ) : null}

              {status === "error" ? (
                <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {submitErrorMessage || formCopy.genericServerError}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#177BE6] px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_44px_rgba(23,123,230,0.18)] transition hover:bg-[#1169c9] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? t.leadModal.submitting : t.leadModal.submit}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within LeadModalProvider");
  }
  return context;
}
