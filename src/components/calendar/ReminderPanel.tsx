import type { CalendarEvent } from "../../types/calendar";
import type { ReminderGroups } from "../../services/calendarService";
import { getCountdown } from "../../services/calendarService";
import { NeoPanel } from "../neo";

const SECTIONS: { key: keyof ReminderGroups; title: string; headColor: "accent" | "secondary" | "muted" }[] = [
  { key: "ongoing", title: "进行中", headColor: "accent" },
  { key: "startingSoon", title: "即将开始", headColor: "secondary" },
  { key: "endingSoon", title: "即将结束", headColor: "muted" },
];

export function ReminderPanel({ groups, onSelect }: { groups: ReminderGroups; onSelect: (e: CalendarEvent) => void }) {
  const empty = SECTIONS.every((s) => groups[s.key].length === 0);
  return (
    <NeoPanel title="关键日期提醒" headColor="black">
      {empty && <p className="font-bold">近期没有需要关注的事件。</p>}
      <div className="flex flex-col gap-4">
        {SECTIONS.map((s) =>
          groups[s.key].length > 0 && (
            <div key={s.key}>
              <p className="mb-2 font-black uppercase tracking-widest">{s.title}</p>
              <ul className="flex flex-col gap-2">
                {groups[s.key].map((e) => (
                  <li key={e.id}>
                    <button type="button" onClick={() => onSelect(e)} className="w-full cursor-pointer border-4 border-black bg-white p-2 text-left font-bold shadow-neo-sm transition-all duration-100 hover:-translate-y-0.5 hover:shadow-neo-md">
                      <span className="block truncate">{e.title}</span>
                      <span className="mt-0.5 inline-block border-2 border-black bg-neo-secondary px-1.5 font-black text-xs">{getCountdown(e, new Date())}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </NeoPanel>
  );
}
