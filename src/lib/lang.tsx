import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "he";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, he: string) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang === "he" ? "he" : "en";
    root.dir = lang === "he" ? "rtl" : "ltr";
    return () => {
      root.lang = "en";
      root.dir = "ltr";
    };
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (en: string, he: string) => (lang === "he" ? he : en),
    }),
    [lang],
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
