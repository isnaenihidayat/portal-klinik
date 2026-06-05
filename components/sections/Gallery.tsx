import { SectionHead } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface GalleryProps {
  t: SiteContent;
}

/**
 * Source list of gallery images — update src when real photos are ready.
 * Using native <img> (not next/image) so CSS object-fit:cover + absolute
 * positioning fills each mosaic cell correctly.
 */
const GALLERY_IMAGES = [
  { src: "/images/gallery-01-birthing.jpg",    alt: "Ruang persalinan Klinik Nur Fajar"  },
  { src: "/images/gallery-02-inpatient.jpg",   alt: "Kamar rawat inap Klinik Nur Fajar"  },
  { src: "/images/gallery-03-usg.jpg",         alt: "Ruang USG Klinik Nur Fajar"         },
  { src: "/images/gallery-04-waiting.jpg",     alt: "Ruang tunggu Klinik Nur Fajar"      },
  { src: "/images/gallery-05-examination.jpg", alt: "Ruang periksa Klinik Nur Fajar"     },
  { src: "/images/gallery-06-kids.jpg",        alt: "Area bermain anak Klinik Nur Fajar" },
];

/**
 * Gallery mosaic grid — 4 columns, 2 explicit rows (240px each).
 *
 * Mosaic layout:
 *   item-0 → span 2 cols × 2 rows  (large feature — birthing room)
 *   item-3 → span 2 cols × 1 row   (wide landscape — waiting area)
 *   others → 1 col × 1 row
 *
 * Responsive (≤760px): 2-column grid, item-0 & item-3 span full width.
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
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              key={i}
              className={`gallery-item gallery-item-${i}`}
              data-reveal
            >
              {/* native img so CSS absolute + object-fit:cover fills mosaic cell */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_IMAGES[i].src}
                alt={GALLERY_IMAGES[i].alt}
                className="gallery-photo"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <span className="gallery-label">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
