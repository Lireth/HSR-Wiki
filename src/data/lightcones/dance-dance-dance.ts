import type { LightCone } from "../../types/lightcone";

export const danceDanceDance: LightCone = {
  id: "dance-dance-dance",
  name: "舞！舞！舞！",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 952, atk: 423, def: 396 },
  skill: {
    name: "停不下来啦！",
    description: "当装备者施放终结技后，我方全体行动提前 {0}%。",
    valuesBySuperimposition: [16, 18, 20, 22, 24],
  },
  ascensionMaterials: [
    { name: "信用点", count: 118000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "bronya", reason: "再动体系核心，行动提前进一步放大轮次经济。" },
    { id: "asta", reason: "终结技全队提速，双重行动增益叠加。" },
    { id: "tingyun", reason: "高频终结技触发全队行动提前，循环价值极高。" },
  ],
  rating: 4,
  review: "4★ 和谐体系神卡。终结技后全队行动提前，轮次经济价值极高，几乎适配所有辅助。",
  art: "/assets/lightcones/dance-dance-dance.svg",
};
