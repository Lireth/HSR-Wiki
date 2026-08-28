import type { LightCone } from "../../types/lightcone";

export const haiYangWeiHeErGe: LightCone = {
  id: "hai-yang-wei-he-er-ge",
  name: "海洋为何而歌",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 952, atk: 635, def: 463 },
  skill: {
    name: "独奏",
    description: "使装备者的效果命中提高 {0}%，当有敌方目标陷入装备者施加的负面效果时，有80%的基础概率使其陷入【魂迷】状态，持续3回合，同类效果无法叠加。【魂迷】状态下，每有1个装备者施加的负面效果，受到的持续伤害提高 {1}%，该效果最多叠加6层，受到我方目标攻击时，使攻击者速度提高 {2}%，持续3回合。当装备者陷入无法战斗状态时，移除所有【魂迷】。",
    valuesBySuperimposition: [
      [40, 5, 10],
      [45, 6.2, 12.5],
      [50, 7.5, 15],
      [55, 8.7, 17.5],
      [60, 10, 20],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "恐惧踏碎血肉", count: 20 },
    { name: "勇气撕裂胸膛", count: 20 },
    { name: "荣耀洗礼身躯", count: 14 },
    { name: "灼情之灵", count: 4 },
    { name: "星火之精", count: 12 },
    { name: "焚天之魔", count: 15 },
  ],
  recommendedCharacters: [
    { id: "hysilens", reason: "海瑟音专属，魂迷全面强化持续伤害。" },
    { id: "kafka", reason: "持续伤害核心，命中与速度增益适配。" },
  ],
  rating: 5,
  review: "海瑟音专属，魂迷机制大幅强化持续伤害体系。",
  art: "/assets/lightcones/hai-yang-wei-he-er-ge.png",
};
