import { Icon, Carousel, SectionHead } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface ServicesProps {
  t: SiteContent;
  onBook: () => void;
}

export function Services({ t, onBook }: ServicesProps) {
  const s = t.services;

  return (
    <section className="section services" id="layanan">
      <div className="container">
        <SectionHead
          eyebrow={s.eyebrow}
          title={s.title}
          desc={s.desc}
          center
        />
        <Carousel prevLabel="Layanan sebelumnya" nextLabel="Layanan berikutnya">
          {s.items.map((it, i) => (
            <article
              key={i}
              className="service-card"
              onClick={onBook}
              onKeyDown={(e) => e.key === "Enter" && onBook()}
              tabIndex={0}
              role="button"
              aria-label={`${it.name} — ${s.detailCta}`}
            >
              <span className="service-icon">
                <Icon name={it.icon} size={26} />
              </span>

              <h3 className="service-name">{it.name}</h3>
              <p className="service-desc">{it.desc}</p>

              {/* Price */}
              <p className="service-price">
                <span className="service-price-note">{s.priceNote}</span>
                <strong>{it.price}</strong>
              </p>

              <span className="service-link">
                {s.detailCta}
                <Icon name="arrow" size={17} />
              </span>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
