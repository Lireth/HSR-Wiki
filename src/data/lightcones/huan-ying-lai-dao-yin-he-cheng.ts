import type { LightCone } from "../../types/lightcone";

export const huanYingLaiDaoYinHeCheng: LightCone = {
  id: "huan-ying-lai-dao-yin-he-cheng",
  name: "欢迎来到银河城",
  rarity: 5,
  path: "欢愉",
  baseStats: { hp: 1164, atk: 476, def: 529 },
  skill: {
    name: "稳赢",
    description:
      "使装备者的速度提高 {0}%，造成的欢愉伤害无视目标 {1}% 的防御力。当装备者对自身单体施放终结技时，获得 {2} 点【笑点】。该效果最多触发1次，施放3次普攻后重置可触发次数。",
    valuesBySuperimposition: [
      [18, 20, 20],
      [21, 24, 25],
      [24, 28, 30],
      [27, 32, 35],
      [30, 36, 40],
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
    { id: "silverwolf-999", reason: "速度流欢愉输出，防御无视直接增伤。" },
    { id: "yao-guang", reason: "终结技获取笑点，速度提升加快行动。" },
  ],
  rating: 5,
  review: "速度型欢愉毕业光锥，无视防御与笑点机制高度契合。",
  art: "/assets/lightcones/huan-ying-lai-dao-yin-he-cheng.png",
};
