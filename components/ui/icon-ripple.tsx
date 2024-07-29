"use client";

import { cn } from "@/lib/utils";

interface IconRippleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon we want to have.
   */
  icon?: React.ElementType;
  /**
   * Size of Icon
   */
  iconSize?: number;
  /**
   * Color of the Icon
   */
  iconColor?: string;
  /**
   * Border color that will have ripple animation
   */
  borderColor?: string;
  /**
   * Padding around the icon
   */
  inset?: string;
}

export default function IconRipple({
  iconSize = 24,
  iconColor = "#ddd",
  borderColor = "#ddd",
  inset = "10px",
}: IconRippleProps) {
  const customBorderStyle = {
    borderColor,
  };
  const insetStyle = {
    top: `-${inset}`,
    bottom: `-${inset}`,
    left: `-${inset}`,
    right: `-${inset}`,
  };

  return (
    <div className={cn("group relative flex items-center justify-center")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="w-8 h-8 fill-neutral-500 dark:fill-slate-300"
      >
        <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
      </svg>
      <div
        className={cn("absolute -inset-4 animate-ping rounded-full border-2 border-neutral-300 dark:border-slate-300")}
        style={{ ...insetStyle }}
      />
    </div>
  );
}
