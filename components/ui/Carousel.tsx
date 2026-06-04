"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Icon } from "./Icon";

interface CarouselProps {
  children: React.ReactNode;
  /** Label untuk tombol "sebelumnya" (aria-label) */
  prevLabel?: string;
  /** Label untuk tombol "berikutnya" (aria-label) */
  nextLabel?: string;
}

/**
 * Horizontal-scroll carousel with previous / next arrow buttons.
 * Buttons auto-hide when content is not scrollable (all cards visible).
 * Scroll amount = one card width + gap (22px), matching the .htrack gap.
 * Respects prefers-reduced-motion for smooth vs instant scroll.
 */
export function Carousel({
  children,
  prevLabel = "Sebelumnya",
  nextLabel = "Berikutnya",
}: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update, { passive: true });
    const id = setTimeout(update, 400);
    return () => {
      window.removeEventListener("resize", update);
      clearTimeout(id);
    };
  }, [update]);

  const slide = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    // Scroll by one card width + gap
    const card = el.querySelector<HTMLElement>(".htrack > *");
    const amt = card ? card.offsetWidth + 22 : el.clientWidth * 0.8;
    const max = el.scrollWidth - el.clientWidth;
    const to = Math.max(0, Math.min(max, el.scrollLeft + dir * amt));
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: to, behavior: prefersReduced ? "auto" : "smooth" });
    setTimeout(update, prefersReduced ? 0 : 480);
  };

  // Hide buttons when all content fits without scrolling
  const hidden = atStart && atEnd;

  return (
    <div className="carousel">
      <div className="hscroll" ref={ref} onScroll={update}>
        <div className="htrack">{children}</div>
      </div>

      {!hidden && (
        <div className="carousel-nav" aria-label="Kontrol carousel">
          <button
            className="carousel-btn"
            onClick={() => slide(-1)}
            disabled={atStart}
            aria-label={prevLabel}
          >
            <span className="carousel-arrow-left">
              <Icon name="arrow" size={20} />
            </span>
          </button>
          <button
            className="carousel-btn"
            onClick={() => slide(1)}
            disabled={atEnd}
            aria-label={nextLabel}
          >
            <Icon name="arrow" size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
