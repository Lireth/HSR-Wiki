import type { LightCone } from "../../types/lightcone";

export const shengMingDangFuZhiYiJu: LightCone = {
  id: "sheng-ming-dang-fu-zhi-yi-ju",
  name: "生命当付之一炬",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 952, atk: 582, def: 529 },
  skill: {
    name: "熔炼",
    description: "装备者回合开始时恢复10点能量。若敌方目标拥有装备者添加的弱点，装备者对其造成的伤害提高 {0}%。当敌方目标受到装备者攻击时，装备者使其防御力降低 {1}%，持续2回合。同类效果无法叠加。",
    valuesBySuperimposition: [
      [60, 12],
      [70, 15],
      [80, 18],
      [90, 21],
      [100, 24],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "预兆似有若无", count: 20 },
    { name: "悲鸣由远及近", count: 20 },
    { name: "叹息漫无止息", count: 14 },
    { name: "凌乱草图", count: 4 },
    { name: "动态线稿", count: 12 },
    { name: "精致色稿", count: 15 },
  ],
  recommendedCharacters: [
    { id: "anaxa", reason: "那刻夏专属，自带弱点机制完美触发。" },
    { id: "the-herta", reason: "减防与增伤辅助终结技爆发输出。" },
  ],
  rating: 5,
  review: "那刻夏专属，自带弱点的目标承受全额增伤与减防。",
  art: "/assets/lightcones/sheng-ming-dang-fu-zhi-yi-ju.png",
};
