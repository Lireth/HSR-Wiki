import { Check } from "lucide-react";
import { cn } from "../../utils/cn";

export function NeoCheckbox({ checked, onChange, label, color }: { checked: boolean; onChange: () => void; label: string; color?: string }) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={checked}
      className={cn(
        "inline-flex min-h-12 cursor-pointer items-center gap-2 border-4 border-black px-3 py-1.5 font-bold text-sm uppercase tracking-wide transition-transform duration-100",
        checked ? "bg-white text-black shadow-neo-sm" : "bg-white text-black/60"
      )}
    >
      <span className={cn("flex h-5 w-5 items-center justify-center border-2 border-black", checked ? "bg-neo-secondary" : "bg-white")}>
        {checked && <Check className="h-4 w-4" strokeWidth={4} />}
      </span>
      {color && <span className="h-3 w-3 border border-black" style={{ backgroundColor: color }} />}
      {label}
    </button>
  );
}
