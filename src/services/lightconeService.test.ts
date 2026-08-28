import { describe, expect, it } from "vitest";
import type { LightCone } from "../types/lightcone";
import { filterLightCones, superimpositionRows } from "./lightconeService";

const lc = (over: Partial<LightCone> & { id: string; name: string }): LightCone => ({
  rarity: 5,
  path: "巡猎",
  baseStats: { hp: 1000, atk: 500, def: 300 },
  skill: { name: "技能", description: "效果 {0}%。", valuesBySuperimposition: [1, 2, 3, 4, 5] },
  ascensionMaterials: [],
  recommendedCharacters: [],
  rating: 4,
  review: "",
  art: "",
  ...over,
});

const FIXTURES: LightCone[] = [
  lc({ id: "a", name: "于夜色中", rarity: 5, path: "巡猎", rating: 5 }),
  lc({ id: "b", name: "记忆中的模样", rarity: 4, path: "和谐", rating: 3 }),
  lc({ id: "d", name: "渊环", rarity: 3, path: "虚无", rating: 2 }),
];

describe("filterLightCones", () => {
  it("按命途筛选", () => {
    expect(filterLightCones(FIXTURES, { paths: ["巡猎"] }).map((x) => x.id)).toEqual(["a"]);
  });
  it("按星级+关键词", () => {
    expect(filterLightCones(FIXTURES, { rarities: [4, 5] }).map((x) => x.id)).toEqual(["a", "b"]);
    expect(filterLightCones(FIXTURES, { keyword: "渊环" }).map((x) => x.id)).toEqual(["d"]);
  });
  it("默认稀有度降序", () => {
    expect(filterLightCones(FIXTURES, {}).map((x) => x.id)).toEqual(["a", "b", "d"]);
  });
});

describe("superimpositionRows", () => {
  it("单参数归一化为 5 行", () => {
    const s = lc({ id: "x", name: "x" }).skill;
    expect(superimpositionRows(s)).toEqual([[1], [2], [3], [4], [5]]);
  });
  it("多参数保持 5 行", () => {
    const s = lc({ id: "x", name: "x", skill: { name: "x", description: "a {0}% b {1}%", valuesBySuperimposition: [[36, 18], [42, 21], [48, 24], [54, 27], [60, 30]] } }).skill;
    expect(superimpositionRows(s)).toEqual([[36, 18], [42, 21], [48, 24], [54, 27], [60, 30]]);
  });
});
