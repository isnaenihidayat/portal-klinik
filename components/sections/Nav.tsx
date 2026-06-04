"use client";

import { useState, useEffect } from "react";
import { Icon, Btn } from "@/components/ui";
import type { SiteContent, Locale } from "@/lib/content";

interface NavProps {
  t: SiteContent;
  lang: Locale;
  onToggleLang: () => void;
  onBook: () => void;
}

export function Nav({ t, lang, onToggleLang, onBook }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 980) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
  };

  return (
    <header className={`nav${scrolled ? " nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        {/* Brand */}
        <a
          className="brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="brand-mark">
            <Icon name="heart" size={20} fill="currentColor" stroke="none" />
          </span>
          <span className="brand-text">
            <span className="brand-name">{t.nav.brandName}</span>
            <span className="brand-sub">{t.nav.brandSub}</span>
          </span>
        </a>

        {/* Desktop + mobile nav links */}
        <nav
          className={`nav-links${open ? " open" : ""}`}
          aria-label="Navigasi utama"
        >
          {t.nav.links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(l.id);
              }}
            >
              {l.label}
            </a>
          ))}

          {/* Mobile-only actions (inside drawer) */}
          <div className="nav-mobile-actions">
            <button className="lang-toggle" onClick={onToggleLang}>
              <Icon name="arrow" size={15} />
              {t.nav.langLabel}
            </button>
            <Btn
              variant="primary"
              icon="calendar"
              onClick={() => { setOpen(false); onBook(); }}
            >
              {t.nav.cta}
            </Btn>
          </div>
        </nav>

        {/* Desktop actions */}
        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={onToggleLang}
            aria-label="Switch language"
          >
            <span className="lang-globe">{lang === "id" ? "ID" : "EN"}</span>
            <span className="lang-sep">/</span>
            <span>{t.nav.langLabel}</span>
          </button>

          <Btn variant="primary" icon="calendar" onClick={onBook}>
            {t.nav.cta}
          </Btn>

          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
