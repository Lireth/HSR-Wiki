import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export function NeoInput({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-14 w-full border-4 border-black bg-white px-4 font-bold text-lg placeholder:text-black/40 focus-visible:bg-neo-secondary focus-visible:shadow-neo-sm focus-visible:outline-none",
        className
      )}
      {...rest}
    />
  );
}
