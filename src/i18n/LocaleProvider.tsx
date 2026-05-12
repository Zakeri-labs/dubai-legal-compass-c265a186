import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Locale } from "./dict";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (typeof dict)["en"]; dir: "ltr" | "rtl" };
const LocaleCtx = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("locale") as Locale | null)) || null;
    if (stored && (stored === "en" || stored === "fa")) setLocaleState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = dict[locale].dir;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("locale", l);
  };

  return (
    <LocaleCtx.Provider value={{ locale, setLocale, t: dict[locale], dir: dict[locale].dir }}>
      {children}
    </LocaleCtx.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
