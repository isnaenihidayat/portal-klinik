import Image from "next/image";
import { SectionHead } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface GalleryProps {
  t: SiteContent;
}

const GALLERY_IMAGES = [
  { src: "/images/gallery-01-birthing.jpg",    alt: "Ruang persalinan Klinik Nur Fajar"  },
  { src: "/images/gallery-02-inpatient.jpg",   alt: "Kamar rawat inap Klinik Nur Fajar"  },
  { src: "/images/gallery-03-usg.jpg",         alt: "Ruang USG Klinik Nur Fajar"         },
  { src: "/images/gallery-04-waiting.jpg",     alt: "Ruang tunggu Klinik Nur Fajar"      },
  { src: "/images/gallery-05-examination.jpg", alt: "Ruang periksa Klinik Nur Fajar"     },
  { src: "/images/gallery-06-kids.jpg",        alt: "Area bermain anak Klinik Nur Fajar" },
];

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
            <div
              key={i}
              className={`gallery-item gallery-item-${i}`}
              style={{ position: "relative" }}
              data-reveal
            >
              <Image
                src={GALLERY_IMAGES[i].src}
                alt={GALLERY_IMAGES[i].alt}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1000px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <span className="gallery-label">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
