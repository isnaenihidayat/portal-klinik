import { Icon, Carousel, SectionHead } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface DoctorsProps {
  t: SiteContent;
}

/** Map urutan index dokter ke file gambar di /public/images/ */
const DOCTOR_IMAGES = [
  "/images/doctor-01-nur-fajriani.jpg",
  "/images/doctor-02-novia-putri.jpg",
  "/images/doctor-03-retno-palupi.jpg",
  "/images/doctor-04-ernasari.jpg",
  "/images/doctor-05-shinta.jpg",
];

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
              <div className="doctor-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={DOCTOR_IMAGES[i] ?? "/images/doctor-01-nur-fajriani.jpg"}
                  alt={`Foto profil ${doc.name} — ${doc.role}`}
                  className="doctor-photo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
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
