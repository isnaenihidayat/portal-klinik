interface SectionHeadProps {
  eyebrow?: string;
  title?: string;
  desc?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHead({ eyebrow, title, desc, center, light }: SectionHeadProps) {
  const cls = [
    "section-head",
    center ? "center" : "",
    light  ? "light"  : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {desc  && <p  className="section-desc">{desc}</p>}
    </div>
  );
}
