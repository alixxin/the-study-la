import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { useLang } from "@/lib/lang";

export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="mark">{children}</span>;
}

export function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <p className="kicker">
      {n} — {children}
    </p>
  );
}

export function LangSwitch({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLang();
  const idle = light ? "text-cream/55 hover:text-cream" : "text-mute hover:text-ink";
  const on = light ? "text-cream" : "text-ink";
  return (
    <div className="flex items-center gap-1 font-sans text-[0.72rem] font-medium uppercase tracking-[0.16em]">
      <button type="button" onClick={() => setLang("en")} className={`px-1.5 py-2 ${lang === "en" ? on : idle}`}>
        EN
      </button>
      <span aria-hidden className={light ? "text-cream/35" : "text-mute"}>
        /
      </span>
      <button type="button" onClick={() => setLang("he")} className={`px-1.5 py-2 ${lang === "he" ? on : idle}`}>
        עב
      </button>
    </div>
  );
}

export function StudyNav() {
  const { t, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#position", en: "Position", he: "עמדה" },
    { href: "#practice", en: "Practice", he: "עבודה" },
    { href: "#table", en: "Table", he: "שולחן" },
    { href: "#arrival", en: "Arrival", he: "הגעה" },
    { href: "#letter", en: "Letter", he: "מכתב" },
    { href: "#inquire", en: "Write", he: "כתבו" },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,color,box-shadow] duration-300 ${
        solid ? "bg-limestone/95 text-ink shadow-[0_1px_0_var(--color-line)]" : "bg-transparent text-cream"
      }`}
    >
      <div className="wrap flex h-[4.25rem] items-center justify-between gap-4">
        <a href="#top" className="group flex flex-col leading-none no-underline">
          <span className="font-display text-[1.05rem] font-medium tracking-[-0.03em]">
            {t("The Study", "בית המדרש")}
          </span>
          <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-current/70">
            Los Angeles
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] font-medium uppercase tracking-[0.16em] no-underline opacity-80 transition-opacity hover:opacity-100"
            >
              {t(l.en, l.he)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LangSwitch light={!solid} />
          <a href="#inquire" className={solid ? "cta cta-ink" : "cta cta-fill"}>
            {t("Begin", "התחלה")}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center lg:hidden"
          aria-label={open ? "Close" : "Menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute inset-x-0 top-0 h-px bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 top-1.5 h-px bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute inset-x-0 top-3 h-px bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-limestone text-ink lg:hidden">
          <nav className="wrap flex flex-col py-4" dir={lang === "he" ? "rtl" : "ltr"}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em]"
              >
                {t(l.en, l.he)}
              </a>
            ))}
            <div className="flex items-center justify-between py-4">
              <LangSwitch />
              <a href="#inquire" onClick={() => setOpen(false)} className="cta cta-ink">
                {t("Begin", "התחלה")}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function StudioLink({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`text-[0.72rem] font-medium uppercase tracking-[0.16em] no-underline opacity-70 hover:opacity-100 ${
        light ? "text-cream" : "text-ink"
      }`}
    >
      Studio
    </Link>
  );
}
