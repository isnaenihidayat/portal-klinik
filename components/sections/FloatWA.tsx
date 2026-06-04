import { Icon } from "@/components/ui";
import { waLink } from "@/lib/content";
import type { SiteContent } from "@/lib/content";

interface FloatWAProps {
  t: SiteContent;
}

export function FloatWA({ t }: FloatWAProps) {
  return (
    <a
      className="float-wa"
      href={waLink(t.hero.ctaSecondary)}
      aria-label="Chat WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="whatsapp" size={28} fill="none" />
      <span className="float-wa-pulse" aria-hidden="true" />
    </a>
  );
}
