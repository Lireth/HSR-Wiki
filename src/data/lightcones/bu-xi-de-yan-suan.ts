import type { LightCone } from "../../types/lightcone";

export const buXiDeYanSuan: LightCone = {
  id: "bu-xi-de-yan-suan",
  name: "不息的演算",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 1058, atk: 529, def: 396 },
  skill: {
    name: "无界之思",
    description: "使装备者的攻击力提高{0}%。施放攻击后，每击中一名敌方目标，使攻击力额外提高{1}%，该效果最多叠加5次，持续至下次攻击后，若击中大于等于3名敌方目标，使自身速度提高{2}%，持续1回合。",
    valuesBySuperimposition: [
      [8, 4, 8],
      [9, 5, 10],
      [10, 6, 12],
      [11, 7, 14],
      [12, 8, 16],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "熄灭原核", count: 20 },
    { name: "微光原核", count: 20 },
    { name: "蠕动原核", count: 14 },
    { name: "凌乱草图", count: 4 },
    { name: "动态线稿", count: 12 },
    { name: "精致色稿", count: 15 },
  ],
  recommendedCharacters: [
    { id: "jade", reason: "群攻计数叠加，攻击增益吃满五层。" },
    { id: "the-herta", reason: "多目标环境稳定触发加速与增攻。" },
  ],
  rating: 4,
  review: "群攻智识专属，攻击叠加与加速兼顾。",
  art: "/assets/lightcones/bu-xi-de-yan-suan.png",
};
