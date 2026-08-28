import type { SelectHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export function NeoSelect({ className, children, ...rest }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-14 cursor-pointer border-4 border-black bg-white px-3 font-bold text-base focus-visible:bg-neo-secondary focus-visible:outline-none",
        className
      )}
      {...rest}
    >
      {children}
    </select>
  );
}
