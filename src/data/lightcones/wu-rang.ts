import type { LightCone } from "../../types/lightcone";

export const wuRang: LightCone = {
  id: "wu-rang",
  name: "物穰",
  rarity: 3,
  path: "丰饶",
  baseStats: { hp: 952, atk: 264, def: 264 },
  skill: {
    name: "繁盛",
    description: "装备者施放战技和终结技时，治疗量提高 {0}%。",
    valuesBySuperimposition: [12, 15, 18, 21, 24],
  },
  ascensionMaterials: [
  { name: "信用点", count: 231000 },
  { name: "铁卫扣饰", count: 12 },
  { name: "铁卫军徽", count: 10 },
  { name: "铁卫勋章", count: 8 },
  { name: "丰饶之种", count: 2 },
  { name: "生命之芽", count: 6 },
  { name: "永恒之花", count: 9 },
  ],
  recommendedCharacters: [
    { id: "natasha", reason: "战技终结技奶量提升，奶妈过渡首选。" },
    { id: "lynx", reason: "治疗量提升直接，前期过渡实用。" },
  ],
  rating: 2,
  review: "3★ 丰饶光锥。战技与终结技治疗量提升，奶妈前期实用过渡件。",
  art: "/assets/lightcones/wu-rang.png",
};
