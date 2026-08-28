import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { PageHeader } from "../components/layout/PageHeader";
import { CalendarFilterBar } from "../components/calendar/CalendarFilterBar";
import { CalendarGrid } from "../components/calendar/CalendarGrid";
import { EventDetailPanel } from "../components/calendar/EventDetailPanel";
import { ReminderPanel } from "../components/calendar/ReminderPanel";
import { EVENT_TYPE_META, filterEvents, getReminderGroups } from "../services/calendarService";
import { CALENDAR_EVENTS } from "../data/calendar-events";
import type { CalendarEvent, EventType } from "../types/calendar";
import { isSameDay } from "../utils/date";

export default function CalendarPage() {
  const today = new Date();
  const [params] = useSearchParams();
  const [cursor, setCursor] = useState({ year: today.getFullYear(), month: today.getMonth() + 1 });
  const [selected, setSelected] = useState<CalendarEvent | null>(null);

  const types = (params.get("types")?.split(",").filter(Boolean) ?? []) as EventType[];
  const version = params.get("version") ?? "";
  const filtered = useMemo(() => filterEvents(CALENDAR_EVENTS, { types, version }), [params]);
  const groups = getReminderGroups(CALENDAR_EVENTS, today);
  const versions = [...new Set(CALENDAR_EVENTS.map((e) => e.version).filter((v): v is string => Boolean(v)))];

  const shift = (delta: number) => {
    const m = cursor.month - 1 + delta;
    setCursor({ year: cursor.year + Math.floor(m / 12), month: (((m % 12) + 12) % 12) + 1 });
  };

  const jumpTo = (e: CalendarEvent) => {
    const d = new Date(e.start);
    setCursor({ year: d.getFullYear(), month: d.getMonth() + 1 });
    setSelected(e);
  };

  return (
    <>
      <PageHeader title="游戏日历" badge="CALENDAR" description="标注版本更新、前瞻直播、限时活动与 UP 池日期，点击事件查看详情。" />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => shift(-1)} aria-label="上一月" className="inline-flex h-12 w-12 cursor-pointer items-center justify-center border-4 border-black bg-white font-black shadow-neo-sm btn-press">←</button>
          <span className="border-4 border-black bg-neo-secondary px-4 py-2 font-black text-2xl shadow-neo-sm">{cursor.year} 年 {cursor.month} 月</span>
          <button type="button" onClick={() => shift(1)} aria-label="下一月" className="inline-flex h-12 w-12 cursor-pointer items-center justify-center border-4 border-black bg-white font-black shadow-neo-sm btn-press">→</button>
          {!isSameDay(new Date(cursor.year, cursor.month - 1, 1), new Date(today.getFullYear(), today.getMonth(), 1)) && (
            <button type="button" onClick={() => setCursor({ year: today.getFullYear(), month: today.getMonth() + 1 })} className="cursor-pointer border-4 border-black bg-white px-3 py-2 font-black shadow-neo-sm btn-press">回到本月</button>
          )}
        </div>
        <div className="hidden flex-wrap items-center gap-3 md:flex">
          {Object.entries(EVENT_TYPE_META).map(([t, meta]) => (
            <span key={t} className="inline-flex items-center gap-1.5 font-black text-xs uppercase">
              <span className={`h-3.5 w-3.5 border-2 border-black ${meta.dot}`} /> {meta.label}
            </span>
          ))}
        </div>
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <CalendarFilterBar versions={versions} />
          <CalendarGrid year={cursor.year} month={cursor.month} events={filtered} today={today} selectedId={selected?.id} onSelect={setSelected} />
        </div>
        <div className="flex flex-col gap-8">
          {selected && <EventDetailPanel event={selected} today={today} onClose={() => setSelected(null)} />}
          <ReminderPanel groups={groups} onSelect={jumpTo} />
        </div>
      </div>
    </>
  );
}
