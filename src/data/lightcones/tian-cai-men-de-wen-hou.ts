import type { LightCone } from "../../types/lightcone";

export const tianCaiMenDeWenHou: LightCone = {
  id: "tian-cai-men-de-wen-hou",
  name: "天才们的问候",
  rarity: 4,
  path: "记忆",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "恭喜",
    description: "使装备者的攻击力提高 {0}%，装备者施放终结技后，使装备者与忆灵造成的普攻伤害提高 {1}%，持续3回合。",
    valuesBySuperimposition: [
      [16, 20],
      [20, 25],
      [24, 30],
      [28, 35],
      [32, 40],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膜", count: 15 },
    { name: "荣耀洗礼身躯", count: 12 },
    { name: "思量的种", count: 3 },
    { name: "末那芽苗", count: 9 },
    { name: "阿赖耶华", count: 12 },
  ],
  recommendedCharacters: [
    { id: "aglaea", reason: "终结技后忆灵普攻强化，联动契合。" },
    { id: "trailblazer-remembrance", reason: "攻击与普攻增益全面，过渡稳定。" },
  ],
  rating: 3,
  review: "记忆四星攻击装，终结技后忆灵普攻增伤，中规中矩。",
  art: "/assets/lightcones/tian-cai-men-de-wen-hou.png",
};
