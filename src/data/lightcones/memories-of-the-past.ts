import type { LightCone } from "../../types/lightcone";

export const memoriesOfThePast: LightCone = {
  id: "memories-of-the-past",
  name: "记忆中的模样",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 952, atk: 476, def: 396 },
  skill: {
    name: "岁月回响",
    description: "使装备者的击破特攻提高 {0}%，装备者对敌方目标造成击破伤害后，额外恢复 3 点能量。",
    valuesBySuperimposition: [20, 24, 28, 32, 36],
  },
  ascensionMaterials: [
    { name: "信用点", count: 118000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [{ id: "tingyun", reason: "高频攻击稳定触发击破回能，终结技循环大幅提速。" }],
  rating: 4,
  review: "4★ 和谐回能神器。击破特攻加持下，停云等高频辅助的终结技循环显著提速，平民首选。",
  art: "/assets/lightcones/memories-of-the-past.svg",
};
