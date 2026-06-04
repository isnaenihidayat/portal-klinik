import Image from "next/image";
import { Icon, SectionHead } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface AboutProps {
  t: SiteContent;
}

export function About({ t }: AboutProps) {
  const a = t.about;

  return (
    <section className="section about" id="tentang">
      <div className="container about-grid">
        {/* Image side */}
        <div className="about-media" data-reveal>
          <div className="about-img-wrap" style={{ position: "relative" }}>
            <Image
              src="/images/about-clinic.jpg"
              alt="Suasana klinik Nur Fajar — bidan berjalan di koridor"
              fill
              sizes="(max-width: 1000px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="about-badge">
            <Icon name="star" size={18} fill="currentColor" stroke="none" />
            <span>
              <strong>4,9</strong> / 5
            </span>
          </div>
        </div>

        {/* Copy side */}
        <div className="about-copy" data-reveal>
          <SectionHead eyebrow={a.eyebrow} title={a.title} desc={a.desc} />

          <ul className="about-points">
            {a.points.map((p, i) => (
              <li key={i}>
                <span className="about-point-icon">
                  <Icon name="check" size={18} />
                </span>
                <span>
                  <strong>{p.title}</strong>
                  {p.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
