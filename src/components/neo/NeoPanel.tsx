import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type HeadColor = "accent" | "secondary" | "muted" | "black";

const HEAD: Record<HeadColor, string> = {
  accent: "bg-neo-accent",
  secondary: "bg-neo-secondary",
  muted: "bg-neo-muted",
  black: "bg-black text-white",
};

export function NeoPanel({ title, headColor = "secondary", className, children, ...rest }: HTMLAttributes<HTMLDivElement> & { title: string; headColor?: HeadColor }) {
  return (
    <section className={cn("border-4 border-black bg-white shadow-neo-md", className)} {...rest}>
      <header className={cn("border-b-4 border-black px-4 py-2.5 font-black uppercase tracking-widest", HEAD[headColor])}>{title}</header>
      <div className="p-4">{children}</div>
    </section>
  );
}
