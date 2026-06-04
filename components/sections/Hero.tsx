import Image from "next/image";
import { Icon, Btn } from "@/components/ui";
import { waLink } from "@/lib/content";
import type { SiteContent } from "@/lib/content";

interface HeroProps {
  t: SiteContent;
  onBook: () => void;
}

export function Hero({ t, onBook }: HeroProps) {
  const h = t.hero;

  return (
    <section className="hero" id="top">
      {/* Decorative blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="container hero-inner">
        {/* Copy */}
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {h.eyebrow}
          </span>

          <h1 className="hero-title">
            {h.title.split("\n").map((line, i) => (
              <span key={i} className="hero-title-line">
                {line}
              </span>
            ))}
          </h1>

          <p className="hero-desc">{h.desc}</p>

          <div className="hero-ctas">
            <Btn variant="primary" icon="calendar" onClick={onBook}>
              {h.ctaPrimary}
            </Btn>
            <Btn
              variant="ghost"
              icon="whatsapp"
              href={waLink(h.ctaSecondary)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {h.ctaSecondary}
            </Btn>
          </div>

          <ul className="hero-chips">
            {h.chips.map((chip, i) => (
              <li key={i}>
                <Icon name="check" size={16} />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Media */}
        <div className="hero-media" data-reveal>
          <div className="hero-img-wrap" style={{ position: "relative" }}>
            <Image
              src="/images/hero-clinic.jpg"
              alt="Resepsi Klinik & Rumah Bersalin Nur Fajar"
              fill
              priority
              sizes="(max-width: 1000px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="hero-card">
            <span className="hero-card-label">{h.cardTitle}</span>
            <span className="hero-card-big">{h.cardBig}</span>
            <span className="hero-card-desc">{h.cardDesc}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
