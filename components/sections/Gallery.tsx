import { Placeholder, SectionHead } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface GalleryProps {
  t: SiteContent;
}

/**
 * Gallery mosaic grid — 4 columns, 6 items.
 *
 * Mosaic layout (from CSS):
 *   item-0 → span 2 cols × 2 rows  (large feature image)
 *   item-3 → span 2 cols × 1 row   (wide landscape)
 *   others → 1 col × 1 row
 *
 * On mobile (≤760px) items 0 and 3 span 2 of 2 cols (full width).
 */
export function Gallery({ t }: GalleryProps) {
  const g = t.gallery;

  return (
    <section className="section gallery" id="fasilitas">
      <div className="container">
        <SectionHead
          eyebrow={g.eyebrow}
          title={g.title}
          desc={g.desc}
          center
        />
        <div className="gallery-grid">
          {g.items.map((it, i) => (
            <Placeholder
              key={i}
              label={it.label}
              ratio={i === 0 ? "16 / 10" : "4 / 3"}
              className={`gallery-item gallery-item-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
