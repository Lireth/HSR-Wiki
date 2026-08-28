import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type Color = "accent" | "secondary" | "muted" | "black" | "white";

const COLORS: Record<Color, string> = {
  accent: "bg-neo-accent text-black",
  secondary: "bg-neo-secondary text-black",
  muted: "bg-neo-muted text-black",
  black: "bg-black text-white",
  white: "bg-white text-black",
};

export function NeoBadge({ color = "white", className, children, ...rest }: HTMLAttributes<HTMLSpanElement> & { color?: Color }) {
  return (
    <span className={cn("inline-flex items-center gap-1 border-4 border-black px-2.5 py-0.5 font-black text-xs uppercase tracking-widest shadow-neo-sm", COLORS[color], className)} {...rest}>
      {children}
    </span>
  );
}
