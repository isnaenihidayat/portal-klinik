"use client";

import { useId } from "react";
import { Icon } from "./Icon";

interface PlaceholderProps {
  label: string;
  ratio?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Placeholder({ label, ratio = "4 / 3", className, style }: PlaceholderProps) {
  const id = useId();
  const patternId = `ph-${id.replace(/:/g, "")}`;

  return (
    <div
      className={`placeholder${className ? " " + className : ""}`}
      style={{ aspectRatio: ratio, ...style }}
    >
      <svg
        className="placeholder-stripes"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={patternId}
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0" y1="0" x2="0" y2="16"
              stroke="currentColor"
              strokeWidth="8"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <span className="placeholder-label">
        <Icon name="image" size={15} />
        {label}
      </span>
    </div>
  );
}
