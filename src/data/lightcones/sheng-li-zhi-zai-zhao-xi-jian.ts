import type { LightCone } from "../../types/lightcone";

export const shengLiZhiZaiZhaoXiJian: LightCone = {
  id: "sheng-li-zhi-zai-zhao-xi-jian",
  name: "胜利只在朝夕间",
  rarity: 4,
  path: "记忆",
  baseStats: { hp: 846, atk: 476, def: 396 },
  skill: {
    name: "最后一击",
    description: "使装备者的暴击伤害提高 {0}%，当装备者的忆灵对我方目标施放战技时，使我方全体目标造成的伤害提高 {1}%，持续3回合。",
    valuesBySuperimposition: [
      [12, 8],
      [15, 10],
      [18, 12],
      [21, 14],
      [24, 16],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 12 },
    { name: "思量的种", count: 3 },
    { name: "末那芽苗", count: 9 },
    { name: "阿赖耶华", count: 12 },
  ],
  recommendedCharacters: [
    { id: "aglaea", reason: "忆灵战技频繁触发，全队增伤覆盖高。" },
    { id: "castorice", reason: "暴伤提升忆灵输出，整体收益稳定。" },
  ],
  rating: 3,
  review: "记忆四星暴伤过渡装，忆灵战技触发全队增伤，可用。",
  art: "/assets/lightcones/sheng-li-zhi-zai-zhao-xi-jian.png",
};
