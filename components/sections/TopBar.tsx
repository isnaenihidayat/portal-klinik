import { Icon } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface TopBarProps {
  t: SiteContent;
}

export function TopBar({ t }: TopBarProps) {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span className="topbar-item">
          <Icon name="clock" size={15} />
          {t.topbar.hours}
        </span>
        <a
          className="topbar-item topbar-call"
          href={`tel:${t.topbar.phone.replace(/[^0-9+]/g, "")}`}
        >
          <Icon name="phone" size={15} />
          {t.topbar.call}:{" "}
          <strong>{t.topbar.phone}</strong>
        </a>
      </div>
    </div>
  );
}
