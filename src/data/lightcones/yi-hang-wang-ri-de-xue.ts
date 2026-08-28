import type { LightCone } from "../../types/lightcone";

export const yiHangWangRiDeXue: LightCone = {
  id: "yi-hang-wang-ri-de-xue",
  name: "一行往日的血",
  rarity: 4,
  path: "毁灭",
  baseStats: { hp: 1058, atk: 529, def: 330 },
  skill: {
    name: "厮杀",
    description: "使装备者的暴击率提高 {0}%。装备者造成的战技和终结技伤害提高 {1}%。",
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
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膛", count: 15 },
    { name: "荣耀洗礼身躯", count: 12 },
    { name: "步离犬牙", count: 3 },
    { name: "狼毒锯牙", count: 9 },
    { name: "月狂獠牙", count: 12 },
  ],
  recommendedCharacters: [
    { id: "mydei", reason: "万敌适配，终结技伤害吃满40%增伤。" },
    { id: "phainon", reason: "战技终结技双输出，暴击暴伤双收。" },
  ],
  rating: 4,
  review: "暴击率与双技能增伤兼顾，毁灭C通用性极强。",
  art: "/assets/lightcones/yi-hang-wang-ri-de-xue.png",
};
