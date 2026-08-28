import type { LightCone } from "../../types/lightcone";

export const jiaRiYuChangDaMaoXian: LightCone = {
  id: "jia-ri-yu-chang-da-mao-xian",
  name: "假日浴场大冒险",
  rarity: 4,
  path: "虚无",
  baseStats: { hp: 1058, atk: 529, def: 330 },
  skill: {
    name: "冷静一下",
    description: "使装备者造成的伤害提高 {0}%。装备者攻击后，有100%基础概率使受到攻击的目标陷入易伤状态，受到的伤害提高 {1}%，持续2回合。同类效果无法叠加。",
    valuesBySuperimposition: [
      [16, 10],
      [20, 11],
      [24, 13],
      [28, 14],
      [32, 16],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膛", count: 15 },
    { name: "荣耀洗礼身躯", count: 12 },
    { name: "炽情之灵", count: 3 },
    { name: "星火之精", count: 9 },
    { name: "焚天之魔", count: 12 },
  ],
  recommendedCharacters: [
    { id: "guinaifen", reason: "高频灼烧攻击稳定挂易伤，增伤收益拉满。" },
    { id: "sampo", reason: "多段扩散攻击覆盖率广，易伤增伤全队受益。" },
  ],
  rating: 4,
  review: "常驻增伤加攻击挂易伤，虚无四星通用性极佳。",
  art: "/assets/lightcones/jia-ri-yu-chang-da-mao-xian.png",
};
