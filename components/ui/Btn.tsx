import { Icon } from "./Icon";

interface BtnProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "ghost-light";
  href?: string;
  onClick?: () => void;
  icon?: string;
  full?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

export function Btn({
  children,
  variant = "primary",
  href,
  onClick,
  icon,
  full,
  type = "button",
  target,
  rel,
}: BtnProps) {
  const cls = `btn btn-${variant}${full ? " btn-full" : ""}`;

  const content = (
    <>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} type={type}>
      {content}
    </button>
  );
}
