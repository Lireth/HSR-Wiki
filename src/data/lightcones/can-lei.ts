import type { LightCone } from "../../types/lightcone";

export const canLei: LightCone = {
  id: "can-lei",
  name: "残泪",
  rarity: 3,
  path: "欢愉",
  baseStats: { hp: 846, atk: 317, def: 264 },
  skill: {
    name: "悼念",
    description: "当拥有的笑点大于等于10时，装备者的暴击伤害提高 {0}%。",
    valuesBySuperimposition: [20, 25, 30, 35, 40],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "童真蜡笔", count: 12 },
    { name: "造梦蘸钢", count: 10 },
    { name: "梦现管锥", count: 8 },
    { name: "《绒绒号》手绘分镜稿", count: 2 },
    { name: "《绒绒号》连载纪念刊", count: 6 },
    { name: "《绒绒号》典藏版合集", count: 9 },
  ],
  recommendedCharacters: [
    { id: "sparxie", reason: "欢愉机制轻松维持笑点，暴伤加成常驻吃满。" },
    { id: "trailblazer-euphoria", reason: "笑点获取稳定，直白暴伤提升输出。" },
  ],
  rating: 2,
  review: "笑点达标即加暴伤，欢愉三星过渡简单粗暴。",
  art: "/assets/lightcones/can-lei.png",
};
