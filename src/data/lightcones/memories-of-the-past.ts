import type { LightCone } from "../../types/lightcone";

export const memoriesOfThePast: LightCone = {
  id: "memories-of-the-past",
  name: "记忆中的模样",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 952, atk: 423, def: 396 },
  skill: {
    name: "老相片",
    description: "使装备者的击破特攻提高 {0}%。当装备者施放攻击后，额外恢复 {1} 点能量。",
    valuesBySuperimposition: [[28, 4], [35, 5], [42, 6], [49, 7], [56, 8]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "铁卫扣饰", count: 15 },
  { name: "铁卫军徽", count: 15 },
  { name: "铁卫勋章", count: 12 },
  { name: "谐乐小调", count: 3 },
  { name: "家族颂歌", count: 9 },
  { name: "群星乐章", count: 12 },
  ],
  recommendedCharacters: [{ id: "tingyun", reason: "高频攻击稳定触发击破回能，终结技循环大幅提速。" }],
  rating: 4,
  review: "4★ 和谐回能神器。击破特攻加持下，停云等高频辅助的终结技循环显著提速，平民首选。",
  art: "/assets/lightcones/memories-of-the-past.png",
};
