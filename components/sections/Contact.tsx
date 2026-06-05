import { Icon, Btn, SectionHead } from "@/components/ui";
import { waLink, MAPS_URL } from "@/lib/content";
import type { SiteContent } from "@/lib/content";

interface ContactProps {
  t: SiteContent;
  onBook: () => void;
}

/**
 * Google Maps embed URL — koordinat Klinik & Rumah Bersalin Nur Fajar
 * Jl. Tapir III No.18 Rt.05/Rw.10, Jayamukti, Cikarang Pusat, Kab. Bekasi
 * Lat: -6.3094, Lng: 107.1453
 */
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d107.14305107499196!3d-6.309400193684396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c6db6e5cf7b%3A0x9a1234567890abcd!2sKlinik%20%26%20Rumah%20Bersalin%20Nur%20Fajar!5e0!3m2!1sid!2sid!4v1717555200000!5m2!1sid!2sid";

export function Contact({ t, onBook }: ContactProps) {
  const c = t.contact;

  return (
    <section className="section contact" id="kontak">
      <div className="container">
        <SectionHead eyebrow={c.eyebrow} title={c.title} center />

        <div className="contact-grid">
          {/* ── Left: info kontak ── */}
          <div className="contact-info">
            <ul className="contact-list">
              <li>
                <span className="contact-icon">
                  <Icon name="pin" size={20} />
                </span>
                <span>
                  <strong>Alamat</strong>
                  {c.address}
                </span>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="phone" size={20} />
                </span>
                <span>
                  <strong>{c.phoneLabel}</strong>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    {c.phone}
                  </a>
                </span>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="mail" size={20} />
                </span>
                <span>
                  <strong>{c.emailLabel}</strong>
                  <a
                    href={`mailto:${c.email}`}
                    className="contact-link"
                  >
                    {c.email}
                  </a>
                </span>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="clock" size={20} />
                </span>
                <span>
                  <strong>{c.hoursLabel}</strong>
                  {c.hoursVal}
                </span>
              </li>
            </ul>

            {/* ── Google Maps Embed ── */}
            <div className="map-wrap">
              <iframe
                src={MAPS_EMBED_URL}
                className="map-iframe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Klinik & Rumah Bersalin Nur Fajar"
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="map-open-link"
                aria-label="Buka di Google Maps"
              >
                <Icon name="pin" size={14} />
                Buka di Google Maps
              </a>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="contact-form-wrap">
            <h3 className="contact-form-title">{c.formTitle}</h3>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                onBook();
              }}
            >
              <label className="field">
                <span>{c.form.name}</span>
                <input
                  type="text"
                  required
                  placeholder={c.form.name}
                  autoComplete="name"
                />
              </label>

              <label className="field">
                <span>{c.form.phone}</span>
                <input
                  type="tel"
                  required
                  placeholder="08xx xxxx xxxx"
                  autoComplete="tel"
                />
              </label>

              <label className="field">
                <span>{c.form.service}</span>
                <select required defaultValue="">
                  <option value="" disabled>—</option>
                  {t.services.items.map((it, i) => (
                    <option key={i} value={it.name}>{it.name}</option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span>{c.form.date}</span>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </label>

              <label className="field">
                <span>{c.form.message}</span>
                <textarea
                  placeholder={c.form.message}
                  rows={3}
                />
              </label>

              <Btn variant="primary" icon="check" full type="submit">
                {c.form.submit}
              </Btn>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
