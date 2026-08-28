import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export function NeoCard({ hover = false, className, children, ...rest }: HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div className={cn("border-4 border-black bg-white shadow-neo-md", hover && "card-lift", className)} {...rest}>
      {children}
    </div>
  );
}
