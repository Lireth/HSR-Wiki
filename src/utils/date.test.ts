import { describe, expect, it } from "vitest";
import { daysBetween, getMonthGrid, isSameDay, parseISODate, toISODate } from "./date";

describe("date utils", () => {
  it("parseISODate 解析为本地时区当日零点", () => {
    const d = parseISODate("2026-09-02");
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(8);
    expect(d.getDate()).toBe(2);
  });

  it("toISODate 与 parseISODate 往返一致", () => {
    expect(toISODate(parseISODate("2026-01-05"))).toBe("2026-01-05");
  });

  it("parseISODate 拒绝非法输入（格式错误 / 不存在的日期）", () => {
    for (const bad of ["", "2026-9-2", "2026/09/02", "2026-13-01", "2026-02-30", "abc"]) {
      expect(() => parseISODate(bad), bad).toThrow(RangeError);
    }
  });

  it("daysBetween 同日为 0，跨年正确", () => {
    const a = parseISODate("2026-09-02");
    expect(daysBetween(a, a)).toBe(0);
    expect(daysBetween(a, parseISODate("2026-09-09"))).toBe(7);
    expect(daysBetween(parseISODate("2026-12-31"), parseISODate("2027-01-01"))).toBe(1);
    expect(daysBetween(parseISODate("2026-09-09"), a)).toBe(-7);
  });

  it("getMonthGrid 返回 42 格、首列为周日且覆盖当月每一天", () => {
    const grid = getMonthGrid(2026, 9);
    expect(grid).toHaveLength(42);
    for (let w = 0; w < 6; w++) expect(grid[w * 7].getDay()).toBe(0);
    for (let day = 1; day <= 30; day++) {
      const target = parseISODate(`2026-09-${String(day).padStart(2, "0")}`);
      expect(grid.some((d) => isSameDay(d, target))).toBe(true);
    }
  });
});
