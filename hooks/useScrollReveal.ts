"use client";

import { useEffect } from "react";

/**
 * Attaches IntersectionObserver to:
 *   1. All `.section` and `.stats` elements (legacy scroll sections)
 *   2. All elements that already have the `data-reveal` attribute set
 *      in JSX (hero-media, about-media, gallery-item, etc.)
 * Adds the `in` class when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Phase 1: mark .section and .stats with data-reveal (existing behaviour)
      const sections = document.querySelectorAll<HTMLElement>(".section, .stats");
      sections.forEach((el) => el.setAttribute("data-reveal", ""));

      // Phase 2: observe ALL [data-reveal] elements (includes JSX-hardcoded ones)
      const all = document.querySelectorAll<HTMLElement>("[data-reveal]");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08 }
      );
      all.forEach((el) => io.observe(el));

      return () => io.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
}
