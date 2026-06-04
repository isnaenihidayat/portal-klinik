import { Icon } from "@/components/ui";
import { waLink } from "@/lib/content";
import type { SiteContent } from "@/lib/content";

interface FooterProps {
  t: SiteContent;
}

const YEAR = new Date().getFullYear();

export function Footer({ t }: FooterProps) {
  const f = t.footer;
  const c = t.contact;
  const nav = t.nav;

  const go = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-brand-mark">
            <Icon name="heart" size={18} fill="currentColor" stroke="none" />
          </span>
          <span>
            <span className="footer-brand-name">{nav.brandName}</span>
            <span className="footer-brand-sub">{nav.brandSub}</span>
          </span>
          <p className="footer-tagline">{f.tagline}</p>
        </div>

        {/* Navigasi */}
        <nav className="footer-nav" aria-label="Footer navigasi">
          <span className="footer-col-title">{f.explore}</span>
          <ul>
            {nav.links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.id);
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kontak */}
        <div className="footer-contact">
          <span className="footer-col-title">{f.contactTitle}</span>
          <ul>
            <li>
              <Icon name="pin" size={15} />
              <span>{c.address}</span>
            </li>
            <li>
              <Icon name="phone" size={15} />
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.phone}
              </a>
            </li>
            <li>
              <Icon name="mail" size={15} />
              <a href={`mailto:${c.email}`}>{c.email}</a>
            </li>
            <li>
              <Icon name="clock" size={15} />
              <span>{c.hoursVal}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {YEAR} {f.made}. {f.rights}
          </span>
          <a
            className="footer-wa"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp"
          >
            <Icon name="whatsapp" size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
