import type { LightCone } from "../../types/lightcone";

export const guShiDeXiaYiYe: LightCone = {
  id: "gu-shi-de-xia-yi-ye",
  name: "故事的下一页",
  rarity: 4,
  path: "记忆",
  baseStats: { hp: 1058, atk: 370, def: 396 },
  skill: {
    name: "书写",
    description: "使装备者的生命上限提高 {0}%。装备者的忆灵攻击后，使装备者与忆灵的治疗量提高 {1}%，持续1回合。",
    valuesBySuperimposition: [
      [16, 12],
      [20, 15],
      [24, 18],
      [28, 21],
      [32, 24],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "预兆似有若无", count: 15 },
    { name: "悲鸣由远及近", count: 15 },
    { name: "哀叹漫无止息", count: 12 },
    { name: "思量的种", count: 3 },
    { name: "末那芽苗", count: 9 },
    { name: "阿赖耶华", count: 12 },
  ],
  recommendedCharacters: [
    { id: "robin-summeretto", reason: "昔涟适配，生命上限与忆灵治疗双提升。" },
    { id: "hyacine", reason: "忆灵频繁攻击，治疗量加成常驻生效。" },
  ],
  rating: 3,
  review: "生命上限与忆灵治疗兼顾，生存向记忆光锥。",
  art: "/assets/lightcones/gu-shi-de-xia-yi-ye.png",
};
