import { Icon, SectionHead } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface TestimonialsProps {
  t: SiteContent;
}

export function Testimonials({ t }: TestimonialsProps) {
  const tm = t.testimonials;

  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHead eyebrow={tm.eyebrow} title={tm.title} center />
        <div className="testi-grid">
          {tm.items.map((item, i) => (
            <blockquote key={i} className="testi-card">
              <span className="testi-quote-icon" aria-hidden="true">
                <Icon name="quote" size={28} />
              </span>
              <p className="testi-text">&ldquo;{item.quote}&rdquo;</p>
              <footer className="testi-footer">
                {/* Avatar initial */}
                <span className="testi-avatar" aria-hidden="true">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <cite className="testi-name">{item.name}</cite>
                  <span className="testi-role">{item.role}</span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
