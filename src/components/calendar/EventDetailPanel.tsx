import { X } from "lucide-react";
import { Link } from "react-router";
import { EVENT_TYPE_META, getCountdown } from "../../services/calendarService";
import { buildCharacterIndex } from "../../services/characterService";
import { buildLightConeIndex } from "../../services/lightconeService";
import type { CalendarEvent } from "../../types/calendar";
import { CHARACTERS } from "../../data/characters";
import { LIGHTCONES } from "../../data/lightcones";
import { NeoPanel } from "../neo";
import { cn } from "../../utils/cn";

const CHARACTER_INDEX = buildCharacterIndex(CHARACTERS);
const LIGHTCONE_INDEX = buildLightConeIndex(LIGHTCONES);

export function EventDetailPanel({ event, today, onClose }: { event: CalendarEvent; today: Date; onClose: () => void }) {
  const meta = EVENT_TYPE_META[event.type];
  const chars = (event.relatedCharacters ?? [])
    .map((id) => CHARACTER_INDEX.get(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const cones = (event.relatedLightCones ?? [])
    .map((id) => LIGHTCONE_INDEX.get(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <NeoPanel title="事件详情" headColor="black" className="relative">
      <button type="button" aria-label="关闭详情" onClick={onClose} className="absolute top-3 right-3 inline-flex h-10 w-10 cursor-pointer items-center justify-center border-4 border-black bg-white shadow-neo-sm btn-press">
        <X className="h-5 w-5" strokeWidth={3} />
      </button>
      <span className={cn("inline-flex items-center border-4 border-black px-2.5 py-0.5 font-black text-xs uppercase tracking-widest shadow-neo-sm", meta.badge)}>{meta.label}</span>
      <h3 className="mt-3 font-black text-2xl leading-snug">{event.title}</h3>
      <p className="mt-2 font-bold">
        {event.start}{event.end ? ` ~ ${event.end}` : ""}{event.time ? ` ${event.time}` : ""}
        {event.version ? ` · 版本 ${event.version}` : ""}
      </p>
      <p className="mt-2 border-2 border-black bg-neo-bg p-2 font-bold leading-relaxed">{event.description}</p>
      <p className="mt-3 inline-block -rotate-1 border-4 border-black bg-neo-accent px-3 py-1 font-black shadow-neo-sm">
        {getCountdown(event, today)}
      </p>
      {chars.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 font-black uppercase tracking-widest">UP 角色</p>
          <div className="flex flex-wrap gap-2">
            {chars.map((c) => (
              <Link key={c.id} to={`/characters/${c.id}`} className="border-4 border-black bg-white px-2 py-1 font-bold shadow-neo-sm hover:bg-neo-muted">{c.name} →</Link>
            ))}
          </div>
        </div>
      )}
      {cones.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 font-black uppercase tracking-widest">UP 光锥</p>
          <div className="flex flex-wrap gap-2">
            {cones.map((c) => (
              <Link key={c.id} to={`/lightcones/${c.id}`} className="border-4 border-black bg-white px-2 py-1 font-bold shadow-neo-sm hover:bg-neo-muted">{c.name} →</Link>
            ))}
          </div>
        </div>
      )}
    </NeoPanel>
  );
}
