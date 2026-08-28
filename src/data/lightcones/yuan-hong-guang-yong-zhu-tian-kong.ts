import type { LightCone } from "../../types/lightcone";

export const yuanHongGuangYongZhuTianKong: LightCone = {
  id: "yuan-hong-guang-yong-zhu-tian-kong",
  name: "愿虹光永驻天空",
  rarity: 5,
  path: "记忆",
  baseStats: { hp: 1164, atk: 476, def: 529 },
  skill: {
    name: "包容",
    description: "使装备者的速度提高 {0}%。装备者施放普攻、战技和终结技时消耗我方全体等同于当前生命值 {1}% 的生命值并使装备者的忆灵下一次攻击后额外对攻击目标造成1次等同于 {2}% 生命值消耗总量的基于装备者的忆灵属性的附加伤害，随后清空生命值消耗总量。装备者的忆灵施放忆灵技时，使敌方全体受到的伤害提高 {3}%，持续2回合。同类效果无法叠加。",
    valuesBySuperimposition: [
      [18, 1, 250, 18],
      [21, 1.2, 312.5, 22.5],
      [24, 1.5, 375, 27],
      [27, 1.7, 437.5, 31.5],
      [30, 2, 500, 36],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "恐惧踏碎血肉", count: 20 },
    { name: "勇气撕裂胸膜", count: 20 },
    { name: "荣耀洗礼身躯", count: 14 },
    { name: "思量的种", count: 4 },
    { name: "末那芽苗", count: 12 },
    { name: "阿赖耶华", count: 15 },
  ],
  recommendedCharacters: [
    { id: "hyacine", reason: "风堇专属，速度与忆灵附加伤害契合。" },
    { id: "castorice", reason: "全队生命消耗触发遐蝶输出机制。" },
  ],
  rating: 5,
  review: "风堇专属，速度加持与忆灵附加伤害、易伤一体。",
  art: "/assets/lightcones/yuan-hong-guang-yong-zhu-tian-kong.png",
};
