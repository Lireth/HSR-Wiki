import { describe, expect, it } from "vitest";
import type { Character } from "../types/character";
import { buildCharacterIndex, filterCharacters, getCharactersByIds } from "./characterService";

const c = (over: Partial<Character> & { id: string; name: string }): Character => ({
  rarity: 5,
  element: "量子",
  path: "巡猎",
  faction: "测试",
  description: "",
  stats: { hp: 1000, atk: 500, def: 400, speed: 100, critRate: 5, critDmg: 50, taunt: 100, energy: 120 },
  skills: [],
  ascensionMaterials: [],
  traceMaterials: [],
  recommendedLightCones: [],
  recommendedRelics: [],
  portrait: "",
  color: "#818CF8",
  tags: [],
  ...over,
});

const FIXTURES: Character[] = [
  c({ id: "a", name: "希儿", element: "量子", path: "巡猎", rarity: 5, faction: "贝洛伯格", tags: ["输出"] }),
  c({ id: "b", name: "停云", element: "物理", path: "和谐", rarity: 4, faction: "仙舟", tags: ["辅助"] }),
  c({ id: "d", name: "丹恒", element: "风", path: "巡猎", rarity: 4, faction: "仙舟", tags: ["输出"] }),
];

describe("filterCharacters", () => {
  it("按属性筛选", () => {
    expect(filterCharacters(FIXTURES, { elements: ["量子"] }).map((x) => x.id)).toEqual(["a"]);
  });
  it("多条件组合：命途+星级", () => {
    expect(filterCharacters(FIXTURES, { paths: ["巡猎"], rarities: [4] }).map((x) => x.id)).toEqual(["d"]);
  });
  it("关键词命中名称/阵营/标签", () => {
    expect(filterCharacters(FIXTURES, { keyword: "仙舟" }).map((x) => x.id)).toEqual(["d", "b"]);
    expect(filterCharacters(FIXTURES, { keyword: "辅助" }).map((x) => x.id)).toEqual(["b"]);
    expect(filterCharacters(FIXTURES, { keyword: "  希儿 " }).map((x) => x.id)).toEqual(["a"]);
  });
  it("默认按稀有度降序、同稀有度按中文名拼音升序", () => {
    // 4★ 同星级内：丹恒(dān) < 停云(tíng)
    expect(filterCharacters(FIXTURES, {}).map((x) => x.id)).toEqual(["a", "d", "b"]);
  });
  it("name-asc 使用中文 locale 拼音排序", () => {
    expect(filterCharacters(FIXTURES, { sort: "name-asc" }).map((x) => x.id)).toEqual(["d", "b", "a"]);
  });
});

describe("getCharactersByIds", () => {
  it("按入参顺序返回，忽略未知 id", () => {
    const r = getCharactersByIds(FIXTURES, ["b", "zzz", "a"]);
    expect(r.map((x) => x.id)).toEqual(["b", "a"]);
  });
});

describe("buildCharacterIndex", () => {
  it("按 id 索引，查找结果与线性查找一致", () => {
    const idx = buildCharacterIndex(FIXTURES);
    expect(idx.size).toBe(FIXTURES.length);
    expect(idx.get("b")?.name).toBe("停云");
    expect(idx.get("zzz")).toBeUndefined();
  });
});
