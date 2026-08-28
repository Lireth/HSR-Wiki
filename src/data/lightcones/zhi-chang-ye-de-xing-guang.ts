import type { LightCone } from "../../types/lightcone";

export const zhiChangYeDeXingGuang: LightCone = {
  id: "zhi-chang-ye-de-xing-guang",
  name: "致长夜的星光",
  rarity: 5,
  path: "记忆",
  baseStats: { hp: 1164, atk: 529, def: 463 },
  skill: {
    name: "未眠",
    description: "使装备者的生命上限提高 {0}%。装备者的忆灵施放技能时，使装备者获得【夜色】。装备者持有【夜色】时，我方全体忆灵造成的伤害无视目标 {1}% 的防御力，装备者和装备者忆灵造成的伤害提高 {2}%，装备者的忆灵消失时为装备者恢复 {3} 点能量，同类效果无法叠加。",
    valuesBySuperimposition: [
      [30, 20, 30, 8],
      [37, 22, 37, 10],
      [45, 25, 45, 12],
      [52, 27, 52, 14],
      [60, 30, 60, 16],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "预兆似有若无", count: 20 },
    { name: "悲鸣由远及近", count: 20 },
    { name: "哀叹漫无止息", count: 14 },
    { name: "思量的种", count: 4 },
    { name: "末那芽苗", count: 12 },
    { name: "阿赖耶华", count: 15 },
  ],
  recommendedCharacters: [
    { id: "evernight", reason: "长夜月专属，无视防御与高额增伤全覆盖。" },
    { id: "castorice", reason: "生命上限提升血量，忆灵伤害同步增强。" },
  ],
  rating: 5,
  review: "长夜月专属，忆灵无视防御与60%增伤机制全面。",
  art: "/assets/lightcones/zhi-chang-ye-de-xing-guang.png",
};
