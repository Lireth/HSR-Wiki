import type { LightCone } from "../../types/lightcone";

export const yinYunMaiXiangDeMeng: LightCone = {
  id: "yin-yun-mai-xiang-de-meng",
  name: "氤氲麦香的梦",
  rarity: 4,
  path: "智识",
  baseStats: { hp: 952, atk: 529, def: 396 },
  skill: {
    name: "憧憬",
    description: "使装备者的暴击率提高 {0}%。装备者造成的终结技和追加攻击伤害提高 {1}%。",
    valuesBySuperimposition: [
      [12, 24],
      [14, 28],
      [16, 32],
      [18, 36],
      [20, 40],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "预兆似有若无", count: 15 },
    { name: "悲鸣由远及近", count: 15 },
    { name: "哀叹漫无止息", count: 12 },
    { name: "凌乱草图", count: 3 },
    { name: "动态线稿", count: 9 },
    { name: "精致色稿", count: 12 },
  ],
  recommendedCharacters: [
    { id: "himeko", reason: "追击流智识，终结技与追加攻击双增伤。" },
    { id: "the-herta", reason: "终结技高频输出，暴击率加成收益直接。" },
  ],
  rating: 4,
  review: "终结技与追加攻击增伤40%，智识输出通用装。",
  art: "/assets/lightcones/yin-yun-mai-xiang-de-meng.png",
};
