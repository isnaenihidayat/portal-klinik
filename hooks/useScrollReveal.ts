"use client";

import { useEffect } from "react";

/**
 * Attaches IntersectionObserver to all `.section` and `.stats` elements,
 * adding the `in` class when they enter the viewport.
 * Matches the scroll-reveal script from the prototype's index.html.
 */
export function useScrollReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".section, .stats");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      els.forEach((el) => {
        el.setAttribute("data-reveal", "");
        io.observe(el);
      });
      return () => io.disconnect();
    }, 300);

    return () => clearTimeout(timer);
  }, []);
}
