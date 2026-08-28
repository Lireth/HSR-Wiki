import type { CalendarEvent } from "../../types/calendar";
import { EVENT_TYPE_META } from "../../services/calendarService";
import { cn } from "../../utils/cn";

export function EventBadge({ event, onClick, compact = false }: { event: CalendarEvent; onClick: () => void; compact?: boolean }) {
  const meta = EVENT_TYPE_META[event.type];
  return (
    <button
      type="button"
      onClick={onClick}
      title={event.title}
      className={cn("w-full cursor-pointer truncate border-4 border-black px-1.5 py-0.5 text-left font-black shadow-neo-sm transition-transform duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none", meta.badge, compact ? "text-[10px]" : "text-xs")}
    >
      {compact ? meta.label : event.title}
    </button>
  );
}
