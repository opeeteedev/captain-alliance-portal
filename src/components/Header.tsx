"use client";

import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";

type Lang = "en" | "ar";

const NAV_LINKS = [
  { key: "services", label: "Services", href: "#services" },
  { key: "tracking", label: "Tracking", href: "#tracking" },
  { key: "careers", label: "Careers", href: "#careers" },
] as const;

export default function Header() {
  const [lang, setLang] = useState<Lang>("en");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const doc = document.documentElement;
    if (lang === "ar") {
      doc.setAttribute("dir", "rtl");
      doc.setAttribute("lang", "ar");
      doc.classList.add("font-arabic");
    } else {
      doc.removeAttribute("dir");
      doc.setAttribute("lang", "en");
      doc.classList.remove("font-arabic");
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
              <span className="text-[#0B0410] font-bold text-lg tracking-tight">C</span>
            </div>
            <span className="hidden sm:block text-sm font-semibold tracking-wide text-white/90">
              Captain Alliance
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white border border-white/15 rounded-full px-3 py-1.5 transition-all duration-200 hover:border-[#D4AF37]/60 hover:bg-white/5"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>

            <button
              className="md:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/10">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 px-3">
              <button
                onClick={() => {
                  toggleLang();
                  setMobileOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white border border-white/15 rounded-full px-3 py-2 transition-all hover:border-[#D4AF37]/60"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === "en" ? "العربية" : "English"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}