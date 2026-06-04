import { Icon, Btn, SectionHead } from "@/components/ui";
import { waLink } from "@/lib/content";
import type { SiteContent } from "@/lib/content";

interface ContactProps {
  t: SiteContent;
  onBook: () => void;
}

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

            {/* Maps placeholder */}
            <div className="map-wrap" aria-label={c.mapLabel}>
              <div className="map-placeholder">
                <Icon name="pin" size={32} />
                <span>{c.mapLabel}</span>
              </div>
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
