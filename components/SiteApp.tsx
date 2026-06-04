"use client";

import { useState, useEffect } from "react";
import { CONTENT, type Locale } from "@/lib/content";
import {
  TopBar,
  Nav,
  Hero,
  Stats,
  About,
  FloatWA,
  BookingModal,
  // Sprint 3
  Services,
  Doctors,
  Schedule,
  Gallery,
} from "@/components/sections";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Root client component for the entire site.
 * Manages:
 *  - Language state (ID / EN) persisted to localStorage
 *  - Booking modal open/close state
 *  - Scroll reveal via IntersectionObserver
 *
 * All sections receive the translated content `t` as a prop,
 * keeping individual sections as simple as possible.
 */
export function SiteApp() {
  const [lang, setLang] = useState<Locale>("id");
  const [booking, setBooking] = useState(false);

  // Hydrate lang from localStorage on first mount
  useEffect(() => {
    const saved = localStorage.getItem("nf-lang") as Locale | null;
    if (saved === "id" || saved === "en") setLang(saved);
  }, []);

  // Persist lang + sync html[lang] attribute
  useEffect(() => {
    localStorage.setItem("nf-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Scroll reveal for all .section and .stats elements
  useScrollReveal();

  const t = CONTENT[lang];
  const toggleLang = () => setLang((l) => (l === "id" ? "en" : "id"));
  const openBook = () => setBooking(true);
  const closeBook = () => setBooking(false);

  return (
    <>
      <TopBar t={t} />
      <Nav t={t} lang={lang} onToggleLang={toggleLang} onBook={openBook} />

      <main>
        <Hero t={t} onBook={openBook} />
        <Stats t={t} />
        <About t={t} />
        {/* Sprint 3 */}
        <Services t={t} onBook={openBook} />
        <Doctors t={t} />
        <Schedule t={t} onBook={openBook} />
        <Gallery t={t} />
        {/* Sprint 4 sections will be added here */}
      </main>

      <FloatWA t={t} />
      <BookingModal t={t} open={booking} onClose={closeBook} />
    </>
  );
}
