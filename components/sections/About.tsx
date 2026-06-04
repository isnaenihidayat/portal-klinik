import { Icon, Placeholder, SectionHead } from "@/components/ui";
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
        <div className="about-media">
          <Placeholder label={a.imgLabel} ratio="3 / 4" />
          <div className="about-badge">
            <Icon name="star" size={18} fill="currentColor" stroke="none" />
            <span>
              <strong>4,9</strong> / 5
            </span>
          </div>
        </div>

        {/* Copy side */}
        <div className="about-copy">
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
