import type { LightCone } from "../../types/lightcone";

export const renFaTieLiaoLuanPoMo: LightCone = {
  id: "ren-fa-tie-liao-luan-po-mo",
  name: "忍法帖•缭乱破魔",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 952, atk: 582, def: 529 },
  skill: {
    name: "除邪",
    description: "使装备者的击破特攻提高 {0}%。进入战斗时立即恢复 {1} 点能量，且装备者施放终结技后获得【雷遁】，施放2次普攻后，装备者行动提前 {2}%，并移除【雷遁】。装备者施放终结技后会重置【雷遁】。",
    valuesBySuperimposition: [
      [60, 30, 50],
      [70, 32.5, 55],
      [80, 35, 60],
      [90, 37.5, 65],
      [100, 40, 70],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "蓄梦元件", count: 20 },
    { name: "流梦阀门", count: 20 },
    { name: "造梦马达", count: 14 },
    { name: "凌乱草图", count: 4 },
    { name: "动态线稿", count: 12 },
    { name: "精致色稿", count: 15 },
  ],
  recommendedCharacters: [
    { id: "rappa", reason: "击破智识核心，专属增伤与回能完美契合。" },
    { id: "himeko", reason: "击破特攻强化追击与终结技输出。" },
  ],
  rating: 4,
  review: "乱破专属，击破特攻与自回能完美契合击破智识体系。",
  art: "/assets/lightcones/ren-fa-tie-liao-luan-po-mo.png",
};
