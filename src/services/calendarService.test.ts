import { describe, expect, it } from "vitest";
import type { CalendarEvent } from "../types/calendar";
import { parseISODate } from "../utils/date";
import { filterEvents, getCountdown, getEventsOnDate, getEventsOnParsedDate, getReminderGroups, getUpcomingEvents, parseEvents } from "./calendarService";

const EVENTS: CalendarEvent[] = [
  { id: "a", title: "活动A", type: "event_start", start: "2026-09-02", end: "2026-09-12", version: "3.6", description: "" },
  { id: "b", title: "直播", type: "livestream", start: "2026-08-21", time: "19:30", description: "" },
  { id: "c", title: "单日活动", type: "event_start", start: "2026-09-09", version: "3.6", description: "" },
  { id: "d", title: "未来活动", type: "event_start", start: "2026-09-04", version: "3.6", description: "" },
  { id: "e", title: "上一版本", type: "event_start", start: "2026-08-05", version: "3.5", description: "" },
];

describe("filterEvents", () => {
  it("按类型筛选", () => {
    const r = filterEvents(EVENTS, { types: ["livestream"] });
    expect(r.map((e) => e.id)).toEqual(["b"]);
  });
  it("按版本筛选", () => {
    const r = filterEvents(EVENTS, { version: "3.6" });
    expect(r.map((e) => e.id)).toEqual(["a", "c", "d"]);
  });
  it("空筛选返回全部", () => {
    expect(filterEvents(EVENTS, {})).toHaveLength(5);
  });
});

describe("getEventsOnDate", () => {
  it("跨天区间含首尾", () => {
    expect(getEventsOnDate(parseISODate("2026-09-02"), EVENTS).map((e) => e.id)).toContain("a");
    expect(getEventsOnDate(parseISODate("2026-09-12"), EVENTS).map((e) => e.id)).toContain("a");
    expect(getEventsOnDate(parseISODate("2026-09-13"), EVENTS).map((e) => e.id)).not.toContain("a");
  });
  it("跨月事件在下月仍可见", () => {
    const cross: CalendarEvent[] = [{ id: "x", title: "跨界", type: "event_start", start: "2026-08-28", end: "2026-09-02", description: "" }];
    expect(getEventsOnDate(parseISODate("2026-09-01"), cross)).toHaveLength(1);
  });
});

describe("parseEvents + getEventsOnParsedDate", () => {
  it("与 getEventsOnDate 结果一致", () => {
    const parsed = parseEvents(EVENTS);
    for (const day of ["2026-08-21", "2026-09-02", "2026-09-05", "2026-09-12", "2026-09-13"]) {
      const d = parseISODate(day);
      expect(getEventsOnParsedDate(d, parsed).map((e) => e.id)).toEqual(getEventsOnDate(d, EVENTS).map((e) => e.id));
    }
  });
});

describe("getUpcomingEvents", () => {
  it("仅含今天及之后开始的事件，按开始日期升序并截断", () => {
    const r = getUpcomingEvents(EVENTS, parseISODate("2026-09-01"), 2);
    expect(r.map((e) => e.id)).toEqual(["a", "d"]); // 09-02 与 09-04 最近
  });
  it("今天开始的保留，过去的排除", () => {
    const r = getUpcomingEvents(EVENTS, parseISODate("2026-09-02"), 10);
    expect(r.map((e) => e.id)).toEqual(["a", "d", "c"]);
    expect(r.map((e) => e.id)).not.toContain("b");
  });
  it("全部已结束时返回空数组", () => {
    expect(getUpcomingEvents(EVENTS, parseISODate("2027-01-01"), 6)).toEqual([]);
  });
});

describe("getReminderGroups", () => {
  it("进行中：start ≤ today ≤ end", () => {
    const g = getReminderGroups(EVENTS, parseISODate("2026-09-05"));
    expect(g.ongoing.map((e) => e.id)).toContain("a");
    expect(g.ongoing.map((e) => e.id)).not.toContain("d"); // d 为 09-04 单日活动，已结束
  });
  it("即将开始：仅未来 1–3 天（今天开始的事件归入进行中）", () => {
    const g = getReminderGroups(EVENTS, parseISODate("2026-09-01"));
    expect(g.startingSoon.map((e) => e.id)).toEqual(["a", "d"]); // a 差 1 天、d 差 3 天
    const today2 = parseISODate("2026-09-08");
    expect(getReminderGroups(EVENTS, today2).startingSoon.map((e) => e.id)).toEqual(["c"]); // 差 1 天
  });
  it("即将结束：进行中且 0–3 天内结束（含最后一天）", () => {
    const g = getReminderGroups(EVENTS, parseISODate("2026-09-10"));
    expect(g.endingSoon.map((e) => e.id)).toEqual(["a"]);
    expect(getReminderGroups(EVENTS, parseISODate("2026-09-12")).endingSoon.map((e) => e.id)).toEqual(["a"]);
  });
});

describe("getCountdown", () => {
  it("未开始：N 天后开始", () => {
    expect(getCountdown(EVENTS[3], parseISODate("2026-09-01"))).toBe("3 天后开始");
  });
  it("今天开始", () => {
    expect(getCountdown(EVENTS[2], parseISODate("2026-09-09"))).toBe("今天开始");
  });
  it("进行中：还剩 N 天 / 最后 1 天", () => {
    expect(getCountdown(EVENTS[0], parseISODate("2026-09-10"))).toBe("还剩 2 天");
    expect(getCountdown(EVENTS[0], parseISODate("2026-09-12"))).toBe("最后 1 天");
  });
  it("已结束", () => {
    expect(getCountdown(EVENTS[0], parseISODate("2026-09-13"))).toBe("已结束");
  });
});
