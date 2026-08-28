import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-neo-accent text-black",
  secondary: "bg-neo-secondary text-black",
  outline: "bg-white text-black",
  ghost: "bg-transparent text-black border-2 hover:border-black hover:px-2",
};

export function NeoButton({ variant = "primary", className, type = "button", children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 border-4 border-black px-5 font-bold text-sm uppercase tracking-wide shadow-neo-sm btn-press hover:shadow-neo-md focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none cursor-pointer",
        variant === "ghost" ? "shadow-none" : VARIANTS[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
