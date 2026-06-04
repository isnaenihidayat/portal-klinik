import { Icon, Btn, SectionHead } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface ScheduleProps {
  t: SiteContent;
  onBook: () => void;
}

/**
 * Detects whether a time string means "24 hours" in either language.
 * Used to apply the rose-deep highlight on the IGD row.
 */
function is24h(time: string) {
  return time === "24 Jam" || time === "24 Hours";
}

export function Schedule({ t, onBook }: ScheduleProps) {
  const s = t.schedule;

  return (
    <section className="section schedule" id="jadwal">
      <div className="container schedule-grid">
        {/* Left: section heading (light text on sage-deep bg) */}
        <div className="schedule-copy">
          <SectionHead
            eyebrow={s.eyebrow}
            title={s.title}
            desc={s.desc}
            light
          />
        </div>

        {/* Right: white panel card */}
        <div className="schedule-panel">
          <h3 className="schedule-panel-title">
            <Icon name="clock" size={20} />
            {s.hoursTitle}
          </h3>

          <ul className="hours-list">
            {s.hours.map((h, i) => (
              <li key={i} className={is24h(h.time) ? "hours-24" : ""}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>

          {/* CTA strip */}
          <div className="schedule-cta">
            <div>
              <strong>{s.ctaTitle}</strong>
              <p>{s.ctaDesc}</p>
            </div>
            <Btn variant="primary" icon="calendar" onClick={onBook}>
              {s.cta}
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
