// Icon paths — minimal geometric stroke icons
// Ported from: project/ui.jsx ICON_PATHS

export const ICON_PATHS: Record<string, string> = {
  baby:      "M9 12a3 3 0 0 0 6 0M9 8.5h.01M15 8.5h.01M12 2a7 7 0 0 0-7 7v2a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7Z",
  scan:      "M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2M8 12a4 4 0 0 1 8 0c0 2-2 3-2 5h-4c0-2-2-3-2-5Z",
  shield:    "M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z M9 11.5l2 2 4-4",
  heart:     "M12 20s-7-4.5-9.5-9C1 8 2.5 4.5 6 4.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3 3.5 0 5 3.5 3.5 6.5C19 15.5 12 20 12 20Z",
  stetho:    "M5 3v5a4 4 0 0 0 8 0V3M5 3H3M5 3h1.5M13 3h-1.5M13 3h2M9 16v1a5 5 0 0 0 10 0v-3M19 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
  flask:     "M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M7.5 15h9",
  image:     "M3 5h18v14H3zM3 15l5-5 4 4 3-3 6 6M8.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  phone:     "M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  clock:     "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
  pin:       "M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  mail:      "M3 6h18v12H3zM3 7l9 6 9-6",
  calendar:  "M4 6h16v15H4zM4 10h16M8 3v4M16 3v4",
  check:     "M5 13l4 4L19 7",
  arrow:     "M5 12h14M13 6l6 6-6 6",
  star:      "M12 3l2.6 5.6 6 .7-4.4 4 1.2 6-5.4-3-5.4 3 1.2-6-4.4-4 6-.7L12 3Z",
  whatsapp:  "M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z M8.5 8.5c-.3 0-.6.1-.8.4-.3.4-.9 1-.9 2.2 0 1.3.9 2.5 1.1 2.7.2.2 1.9 3 4.7 4 .7.3 1.2.5 1.7.3.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4-.3-.2-1.5-.8-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8.9-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.3-.7-.7-1.2-1.5-1.4-1.7-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.4-.4-.4-.6-.4h-.3Z",
  menu:      "M4 7h16M4 12h16M4 17h16",
  close:     "M6 6l12 12M18 6L6 18",
  quote:     "M9 7H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a3 3 0 0 1-3 3M20 7h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a3 3 0 0 1-3 3",
};

interface IconProps {
  name: string;
  size?: number;
  stroke?: string;
  fill?: string;
  className?: string;
}

export function Icon({ name, size = 24, stroke = "currentColor", fill = "none", className }: IconProps) {
  const d = ICON_PATHS[name] ?? "";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`icon${className ? " " + className : ""}`}
    >
      <path d={d} />
    </svg>
  );
}
