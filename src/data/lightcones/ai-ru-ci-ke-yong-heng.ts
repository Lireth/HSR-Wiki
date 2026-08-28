import type { LightCone } from "../../types/lightcone";

export const aiRuCiKeYongHeng: LightCone = {
  id: "ai-ru-ci-ke-yong-heng",
  name: "爱如此刻永恒",
  rarity: 5,
  path: "记忆",
  baseStats: { hp: 1270, atk: 476, def: 463 },
  skill: {
    name: "约定",
    description: "使装备者的速度提高 {0}%。装备者的忆灵对我方单体施放忆灵技时获得【空白】：敌方全体受到的伤害提高 {1}%。装备者的忆灵对敌方施放忆灵技时获得【诗行】：我方全体的暴击伤害提高 {2}%。装备者的忆灵同时持有【空白】和【诗行】时，【空白】和【诗行】的效果提高 {3}%。",
    valuesBySuperimposition: [
      [18, 10, 16, 60],
      [21, 12, 19, 65],
      [24, 14, 22, 70],
      [27, 16, 25, 75],
      [30, 18, 28, 80],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "恐惧踏碎血肉", count: 20 },
    { name: "勇气撕裂胸膛", count: 20 },
    { name: "荣耀洗礼身躯", count: 14 },
    { name: "思量的种", count: 4 },
    { name: "末那芽苗", count: 12 },
    { name: "阿赖耶华", count: 15 },
  ],
  recommendedCharacters: [
    { id: "robin-summeretto", reason: "昔涟专属，忆灵双印记增益机制全覆盖。" },
    { id: "cyrene", reason: "忆灵辅助型，速度与全队暴伤收益可观。" },
  ],
  rating: 5,
  review: "昔涟专属，速度与空白诗行双印记增益全覆盖。",
  art: "/assets/lightcones/ai-ru-ci-ke-yong-heng.png",
};
