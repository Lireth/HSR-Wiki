import type { LightCone } from "../../types/lightcone";

export const guGuGaGaLiXianJi: LightCone = {
  id: "gu-gu-ga-ga-li-xian-ji",
  name: "菇菇嘎嘎历险记",
  rarity: 4,
  path: "欢愉",
  baseStats: { hp: 846, atk: 476, def: 396 },
  skill: {
    name: "乱斗",
    description: "使装备者的欢愉度提高 {0}%。装备者施放欢愉技时，使敌方全体受到的欢愉伤害提高 {1}%，持续2回合。",
    valuesBySuperimposition: [
      [12, 6],
      [14, 7],
      [16, 8],
      [18, 9],
      [20, 10],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "童真蜡笔", count: 15 },
    { name: "造梦鑢钢", count: 15 },
    { name: "梦现管锥", count: 12 },
    { name: "《绒绒号》手绘分镜稿", count: 3 },
    { name: "《绒绒号》连载纪念刊", count: 9 },
    { name: "《绒绒号》典藏版合集", count: 12 },
  ],
  recommendedCharacters: [
    { id: "sparxie", reason: "火花适配，欢愉度与欢愉伤害双重提升。" },
    { id: "sparxie", reason: "欢愉同调，强化普攻循环。" },
  ],
  rating: 3,
  review: "欢愉度与欢愉伤害提升直观，欢愉体系过渡可用。",
  art: "/assets/lightcones/gu-gu-ga-ga-li-xian-ji.png",
};
