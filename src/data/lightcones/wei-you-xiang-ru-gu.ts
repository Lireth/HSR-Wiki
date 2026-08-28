import type { LightCone } from "../../types/lightcone";

export const weiYouXiangRuGu: LightCone = {
  id: "wei-you-xiang-ru-gu",
  name: "唯有香如故",
  rarity: 5,
  path: "丰饶",
  baseStats: { hp: 1058, atk: 529, def: 529 },
  skill: {
    name: "安心",
    description: "使装备者击破特攻提高{0}%。装备者施放终结技攻击敌方目标后，使其陷入【忘忧】状态，持续2回合，【忘忧】状态下的敌方目标受到的伤害提高{1}%，若装备者当前击破特攻大于等于150%，受到的伤害提高效果额外提高{2}%。",
    valuesBySuperimposition: [
      [60, 10, 8],
      [70, 12, 10],
      [80, 14, 12],
      [90, 16, 14],
      [100, 18, 16],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "幼芽", count: 20 },
    { name: "天华", count: 20 },
    { name: "荣枝", count: 14 },
    { name: "异木种籼", count: 4 },
    { name: "滋长花蜜", count: 12 },
    { name: "万相果实", count: 15 },
  ],
  recommendedCharacters: [
    { id: "lingsha", reason: "灵砂专属，击破治疗流最佳配置。" },
    { id: "gallagher", reason: "击破特攻转化治疗，易伤再增收益。" },
  ],
  rating: 5,
  review: "灵砂专属，击破治疗流最佳选择。",
  art: "/assets/lightcones/wei-you-xiang-ru-gu.png",
};
