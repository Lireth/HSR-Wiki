import type { LightCone } from "../../types/lightcone";

export const duoLiuHanShaoLiuLei: LightCone = {
  id: "duo-liu-han-shao-liu-lei",
  name: "多流汗，少流泪",
  rarity: 4,
  path: "记忆",
  baseStats: { hp: 1058, atk: 529, def: 198 },
  skill: {
    name: "来练！",
    description: "使装备者的暴击率提高 {0}%，装备者的忆灵在场时，装备者与忆灵造成的伤害提高 {1}%。",
    valuesBySuperimposition: [
      [12, 24],
      [14, 27],
      [16, 30],
      [18, 33],
      [20, 36],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膜", count: 15 },
    { name: "荣耀洗礼身躯", count: 12 },
    { name: "思量的种", count: 3 },
    { name: "末那芽苗", count: 9 },
    { name: "阿赖耶华", count: 12 },
  ],
  recommendedCharacters: [
    { id: "aglaea", reason: "忆灵常驻全程吃满增伤，暴击实用。" },
    { id: "hyacine", reason: "暴击率与忆灵增伤双重收益。" },
  ],
  rating: 4,
  review: "无名勋礼记忆装，忆灵在场增伤显著，暴击率实用。",
  art: "/assets/lightcones/duo-liu-han-shao-liu-lei.png",
};
