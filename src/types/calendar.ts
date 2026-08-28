export type EventType =
  | "version_update"
  | "livestream"
  | "event_start"
  | "event_end"
  | "character_banner"
  | "lightcone_banner"
  | "other";

export interface CalendarEvent {
  id: string;
  title: string;
  type: EventType;
  /** ISO 日期 "2026-09-02" */
  start: string;
  /** 跨天事件结束日期（含当日） */
  end?: string;
  /** 具体时刻，如 "19:30" */
  time?: string;
  version?: string;
  relatedCharacters?: string[];
  relatedLightCones?: string[];
  description: string;
}
