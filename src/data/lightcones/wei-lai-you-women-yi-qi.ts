import type { LightCone } from "../../types/lightcone";

export const weiLaiYouWomenYiQi: LightCone = {
  id: "wei-lai-you-women-yi-qi",
  name: "未来，有我们一起",
  rarity: 4,
  path: "欢愉",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "同行",
    description:
      "使装备者的暴击伤害提高 {0}%。装备者施放终结技后，使我方全体欢愉度提高 {1}%，持续1回合。",
    valuesBySuperimposition: [
      [12, 8],
      [15, 9],
      [18, 10],
      [21, 11],
      [24, 12],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "童真蜡笔", count: 15 },
    { name: "造梦蕊钢", count: 15 },
    { name: "梦现管锥", count: 12 },
    { name: "《绒绒号》手绘分镜稿", count: 3 },
    { name: "《绒绒号》连载纪念刊", count: 9 },
    { name: "《绒绒号》典藏版合集", count: 12 },
  ],
  recommendedCharacters: [
    { id: "trailblazer-euphoria", reason: "终结技高频释放，全队欢愉度稳定增益。" },
    { id: "sparxie", reason: "终结技输出型欢愉，暴伤直接提升伤害。" },
  ],
  rating: 3,
  review: "活动限定欢愉装，暴伤与全体欢愉度增益，免费可选。",
  art: "/assets/lightcones/wei-lai-you-women-yi-qi.png",
};
