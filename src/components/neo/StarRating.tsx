import { Star } from "lucide-react";
import { cn } from "../../utils/cn";

export function StarRating({ value, className, size = 16 }: { value: number; className?: string; size?: number }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${value} 星`}>
      {Array.from({ length: value }, (_, i) => (
        <Star key={i} style={{ width: size, height: size }} className="fill-black" strokeWidth={2} />
      ))}
    </span>
  );
}
