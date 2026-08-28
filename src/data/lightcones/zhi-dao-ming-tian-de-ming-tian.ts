import type { LightCone } from "../../types/lightcone";

export const zhiDaoMingTianDeMingTian: LightCone = {
  id: "zhi-dao-ming-tian-de-ming-tian",
  name: "直到明天的明天",
  rarity: 4,
  path: "丰饶",
  baseStats: { hp: 1058, atk: 476, def: 396 },
  skill: {
    name: "离别",
    description: "使装备者的治疗量提高 {0}%。我方目标当前生命值百分比大于等于50%时，造成的伤害提高 {1}%。",
    valuesBySuperimposition: [
      [12, 12],
      [15, 14],
      [18, 16],
      [21, 18],
      [24, 20],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膛", count: 15 },
    { name: "荣耀洗礼身躯", count: 12 },
    { name: "异木种籽", count: 3 },
    { name: "滋长花蜜", count: 9 },
    { name: "万相果实", count: 12 },
  ],
  recommendedCharacters: [
    { id: "bailu", reason: "治疗量稳定提升，全队满血增伤易触发。" },
    { id: "huohuo", reason: "高频率治疗，兼顾全队生存与增伤。" },
  ],
  rating: 3,
  review: "治疗量提升稳定，满血增伤条件苛刻，奶妈过渡可用。",
  art: "/assets/lightcones/zhi-dao-ming-tian-de-ming-tian.png",
};
