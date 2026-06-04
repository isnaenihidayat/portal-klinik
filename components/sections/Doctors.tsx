import { Icon, Carousel, SectionHead, Placeholder } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface DoctorsProps {
  t: SiteContent;
}

export function Doctors({ t }: DoctorsProps) {
  const d = t.doctors;

  return (
    <section className="section doctors" id="dokter">
      <div className="container">
        <SectionHead
          eyebrow={d.eyebrow}
          title={d.title}
          desc={d.desc}
          center
        />
        <Carousel prevLabel="Dokter sebelumnya" nextLabel="Dokter berikutnya">
          {d.items.map((doc, i) => (
            <article key={i} className="doctor-card">
              <Placeholder
                label={doc.imgLabel}
                ratio="1 / 1"
                className="doctor-img"
              />
              <div className="doctor-body">
                <h3 className="doctor-name">{doc.name}</h3>
                <span className="doctor-role">{doc.role}</span>
                <span className="doctor-days">
                  <Icon name="clock" size={15} />
                  {doc.days}
                </span>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
