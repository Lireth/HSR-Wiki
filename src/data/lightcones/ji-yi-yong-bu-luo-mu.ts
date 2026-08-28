import type { LightCone } from "../../types/lightcone";

export const jiYiYongBuLuoMu: LightCone = {
  id: "ji-yi-yong-bu-luo-mu",
  name: "记忆永不落幕",
  rarity: 5,
  path: "记忆",
  baseStats: { hp: 1058, atk: 529, def: 396 },
  skill: {
    name: "收取",
    description: "使装备者的速度提高 {0}%。装备者施放战技后，使我方全体造成的伤害提高 {1}%，持续3回合。",
    valuesBySuperimposition: [
      [6, 8],
      [7.5, 10],
      [9, 12],
      [10.5, 14],
      [12, 16],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "熄灭原核", count: 20 },
    { name: "微光原核", count: 20 },
    { name: "蠹动原核", count: 14 },
    { name: "思量的种", count: 4 },
    { name: "末那芽苗", count: 12 },
    { name: "阿赖耶华", count: 15 },
  ],
  recommendedCharacters: [
    { id: "aglaea", reason: "频繁战技保持全队增伤常驻。" },
    { id: "hyacine", reason: "速度加成强化治疗与循环节奏。" },
  ],
  rating: 4,
  review: "黑塔商店记忆通用装，速度与全队增伤均衡实用。",
  art: "/assets/lightcones/ji-yi-yong-bu-luo-mu.png",
};
