import type { LightCone } from "../../types/lightcone";

export const yiChangHuangYanDeZhongMu: LightCone = {
  id: "yi-chang-huang-yan-de-zhong-mu",
  name: "一场谎言的终幕",
  rarity: 5,
  path: "巡猎",
  baseStats: { hp: 846, atk: 635, def: 529 },
  skill: {
    name: "吞没",
    description:
      "使装备者的暴击率提高 {0}%。战斗开始时或装备者每累计施放4次追加攻击，使装备者获得【影噬】，持续3回合。当装备者持有【影噬】时，攻击力提高 {1}%，并使敌方全体受到的伤害提高 {2}%，同类效果无法叠加。",
    valuesBySuperimposition: [
      [18, 40, 20],
      [21, 50, 22],
      [24, 60, 25],
      [27, 70, 27],
      [30, 80, 30],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "童真蜡笔", count: 20 },
    { name: "造梦蕊钢", count: 20 },
    { name: "梦现管锥", count: 14 },
    { name: "纷争血尘", count: 4 },
    { name: "战魂血珀", count: 12 },
    { name: "天谶血矛", count: 15 },
  ],
  recommendedCharacters: [
    { id: "feixiao", reason: "追加攻击高频触发影噬，攻击力加成拉满。" },
    { id: "topaz", reason: "追加攻击核心，全队增伤收益显著。" },
  ],
  rating: 5,
  review: "追加攻击巡猎专属，暴击率、攻击力与全队增伤一体。",
  art: "/assets/lightcones/yi-chang-huang-yan-de-zhong-mu.png",
};
