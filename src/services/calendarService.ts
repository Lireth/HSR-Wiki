import type { CalendarEvent, EventType } from "../types/calendar";
import { daysBetween, parseISODate } from "../utils/date";

/** 事件类型 → 展示元数据（固定颜色映射，避免歧义；见设计文档 §6.3） */
export const EVENT_TYPE_META: Record<EventType, { label: string; badge: string; dot: string }> = {
  version_update: { label: "版本更新", badge: "bg-neo-accent text-black", dot: "bg-neo-accent" },
  livestream: { label: "前瞻直播", badge: "bg-neo-secondary text-black", dot: "bg-neo-secondary" },
  event_start: { label: "活动开始", badge: "bg-neo-muted text-black", dot: "bg-neo-muted" },
  event_end: { label: "活动结束", badge: "bg-neo-muted text-black", dot: "bg-neo-muted" },
  character_banner: { label: "角色UP", badge: "bg-white text-black border-neo-accent", dot: "bg-neo-accent" },
  lightcone_banner: { label: "光锥UP", badge: "bg-white text-black border-neo-muted", dot: "bg-neo-muted" },
  other: { label: "其他", badge: "bg-black text-white", dot: "bg-black" },
};

export interface CalendarFilters {
  types?: EventType[];
  version?: string;
}

export function filterEvents(events: CalendarEvent[], filters: CalendarFilters): CalendarEvent[] {
  return events.filter((e) => {
    if (filters.types && filters.types.length > 0 && !filters.types.includes(e.type)) return false;
    if (filters.version && e.version !== filters.version) return false;
    return true;
  });
}

export function eventEndDate(e: CalendarEvent): Date {
  return parseISODate(e.end ?? e.start);
}

/** 返回 date 当天正在进行（含首尾）的事件 */
export function getEventsOnDate(date: Date, events: CalendarEvent[]): CalendarEvent[] {
  const t = date.getTime();
  return events.filter((e) => parseISODate(e.start).getTime() <= t && t <= eventEndDate(e).getTime());
}

/** 预解析起止时间戳的事件，供月历 42 格高频查询复用（避免每格重复解析全部事件） */
export interface ParsedEvent {
  event: CalendarEvent;
  startTs: number;
  endTs: number;
}

export function parseEvents(events: CalendarEvent[]): ParsedEvent[] {
  return events.map((event) => ({
    event,
    startTs: parseISODate(event.start).getTime(),
    endTs: eventEndDate(event).getTime(),
  }));
}

/** getEventsOnDate 的预解析版本：events 须先经 parseEvents 处理 */
export function getEventsOnParsedDate(date: Date, parsed: ParsedEvent[]): CalendarEvent[] {
  const t = date.getTime();
  return parsed.filter((p) => p.startTs <= t && t <= p.endTs).map((p) => p.event);
}

/** 今天及之后开始的事件，按开始日期升序取前 limit 条（首页跑马灯用） */
export function getUpcomingEvents(events: CalendarEvent[], today: Date, limit: number): CalendarEvent[] {
  const t = today.getTime();
  return events
    .filter((e) => parseISODate(e.start).getTime() >= t)
    .sort((a, b) => a.start.localeCompare(b.start))
    .slice(0, limit);
}

export interface ReminderGroups {
  ongoing: CalendarEvent[];
  startingSoon: CalendarEvent[];
  endingSoon: CalendarEvent[];
}

const SOON_DAYS = 3;

/** 即将开始 = 未来 1–3 天；今天开始的归入进行中（徽章显示"今天开始"）；即将结束含最后一天 */
export function getReminderGroups(events: CalendarEvent[], today: Date): ReminderGroups {
  const ongoing: CalendarEvent[] = [];
  const startingSoon: CalendarEvent[] = [];
  const endingSoon: CalendarEvent[] = [];
  for (const e of events) {
    const start = parseISODate(e.start);
    const end = eventEndDate(e);
    if (start.getTime() <= today.getTime() && today.getTime() <= end.getTime()) ongoing.push(e);
    const toStart = daysBetween(today, start);
    if (toStart > 0 && toStart <= SOON_DAYS) startingSoon.push(e);
    const toEnd = daysBetween(today, end);
    if (toEnd >= 0 && toEnd <= SOON_DAYS && start.getTime() <= today.getTime()) endingSoon.push(e);
  }
  return { ongoing, startingSoon, endingSoon };
}

export function getCountdown(e: CalendarEvent, today: Date): string {
  const toStart = daysBetween(today, parseISODate(e.start));
  if (toStart > 0) return `${toStart} 天后开始`;
  if (toStart === 0) return "今天开始";
  const toEnd = daysBetween(today, eventEndDate(e));
  if (toEnd === 0) return "最后 1 天";
  if (toEnd > 0) return `还剩 ${toEnd} 天`;
  return "已结束";
}
