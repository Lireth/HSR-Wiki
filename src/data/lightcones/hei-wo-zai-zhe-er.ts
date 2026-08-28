import type { LightCone } from "../../types/lightcone";

export const heiWoZaiZheEr: LightCone = {
  id: "hei-wo-zai-zhe-er",
  name: "嘿，我在这儿",
  rarity: 4,
  path: "丰饶",
  baseStats: { hp: 952, atk: 423, def: 396 },
  skill: {
    name: "不怕不怕啦",
    description: "使装备者的生命上限提高 {0}%。当装备者施放战技时，治疗量提高 {1}%，持续2回合。",
    valuesBySuperimposition: [[8, 16], [9, 19], [10, 22], [11, 25], [12, 28]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "工造机杼", count: 15 },
    { name: "工造迴轮", count: 15 },
    { name: "工造浑心", count: 12 },
    { name: "丰饶之种", count: 3 },
    { name: "生命之芽", count: 9 },
    { name: "永恒之花", count: 12 },
  ],
  recommendedCharacters: [
    { id: "natasha", reason: "战技治疗频率高，生命上限提升生存与奶量。" },
    { id: "lynx", reason: "战技治疗型丰饶，治疗量加成直接生效。" },
  ],
  rating: 3,
  review: "4★ 丰饶过渡光锥，生命与治疗量加成简单直接，前期奶妈可用。",
  art: "/assets/lightcones/hei-wo-zai-zhe-er.png",
};
