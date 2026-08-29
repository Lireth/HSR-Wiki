import { useMemo } from "react";
import { getEventsOnParsedDate, parseEvents } from "../../services/calendarService";
import type { CalendarEvent } from "../../types/calendar";
import { getMonthGrid, isSameDay } from "../../utils/date";
import { EventBadge } from "./EventBadge";

const WEEK_LABELS = ["日", "一", "二", "三", "四", "五", "六"];

export function CalendarGrid({ year, month, events, today, selectedId, onSelect }: {
  year: number;
  month: number;
  events: CalendarEvent[];
  today: Date;
  selectedId?: string;
  onSelect: (event: CalendarEvent) => void;
}) {
  // 预解析一次起止时间戳，42 格查询只做数值比较，避免每格重复解析全部事件
  const parsed = useMemo(() => parseEvents(events), [events]);
  const grid = useMemo(() => getMonthGrid(year, month), [year, month]);

  return (
    <div className="border-4 border-black bg-white shadow-neo-lg">
      <div className="grid grid-cols-7 border-b-4 border-black bg-neo-muted">
        {WEEK_LABELS.map((w) => (
          <div key={w} className="border-r-4 border-black py-2 text-center font-black uppercase last:border-r-0">{w}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {grid.map((d, i) => {
          const inMonth = d.getMonth() === month - 1;
          const isToday = isSameDay(d, today);
          const dayEvents = getEventsOnParsedDate(d, parsed);
          return (
            <div key={i} className={`min-h-24 border-b-4 border-r-4 border-black p-1.5 [&:nth-child(7n)]:border-r-0 ${inMonth ? "" : "opacity-40"}`}>
              <div className={`mb-1 inline-flex h-7 w-7 items-center justify-center border-2 border-black font-black text-sm ${isToday ? "bg-neo-secondary" : "bg-white"}`}>
                {d.getDate()}
              </div>
              <div className="flex flex-col gap-1">
                {dayEvents.slice(0, 3).map((e) => (
                  <EventBadge key={e.id} event={e} compact={!inMonth} onClick={() => onSelect(e)} />
                ))}
                {dayEvents.length > 3 && (
                  <span className="font-black text-[10px] uppercase">+{dayEvents.length - 3} 更多</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {selectedId && (
        <div className="border-t-4 border-black bg-neo-secondary px-4 py-2 font-black text-sm uppercase tracking-widest">
          已选中事件 · 点击右侧面板查看详情
        </div>
      )}
    </div>
  );
}
