import type { SiteContent } from "@/lib/content";

interface StatsProps {
  t: SiteContent;
}

export function Stats({ t }: StatsProps) {
  return (
    <section className="stats">
      <div className="container stats-inner">
        {t.stats.map((s, i) => (
          <div className="stat" key={i}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
