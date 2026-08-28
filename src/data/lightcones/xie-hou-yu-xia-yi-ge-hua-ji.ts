import type { LightCone } from "../../types/lightcone";

export const xieHouYuXiaYiGeHuaJi: LightCone = {
  id: "xie-hou-yu-xia-yi-ge-hua-ji",
  name: "邂逅于下一个花季",
  rarity: 5,
  path: "欢愉",
  baseStats: { hp: 952, atk: 635, def: 463 },
  skill: {
    name: "遐想",
    description:
      "使装备者的暴击伤害提高 {0}%，能量恢复效率提高 {1}%。装备者的能量上限大于120时，每超出10点能量上限额外使能量恢复效率提高0.3%，最多计入360点超出的能量上限。装备者施放欢愉技时，使敌方全体受到的伤害提高 {2}%，持续2回合，同类效果无法叠加。",
    valuesBySuperimposition: [
      [60, 10, 15],
      [75, 11.5, 18.7],
      [90, 13, 22.5],
      [105, 14.5, 26.2],
      [120, 16, 30],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "童真蜡笔", count: 20 },
    { name: "造梦蕊钢", count: 20 },
    { name: "梦现管锥", count: 14 },
    { name: "《绒绒号》手绘分镜稿", count: 4 },
    { name: "《绒绒号》连载纪念刊", count: 12 },
    { name: "《绒绒号》典藏版合集", count: 15 },
  ],
  recommendedCharacters: [
    { id: "evanescia", reason: "能量上限机制契合，充能循环大幅加速。" },
    { id: "yao-guang", reason: "欢愉技全队增伤，暴伤收益极高。" },
  ],
  rating: 5,
  review: "欢愉主C毕业光锥，超高暴伤与充能，全队增伤辅助。",
  art: "/assets/lightcones/xie-hou-yu-xia-yi-ge-hua-ji.png",
};
