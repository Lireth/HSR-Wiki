import type { LightCone } from "../../types/lightcone";

export const fangGeDuanJia: LightCone = {
  id: "fang-ge-duan-jia",
  name: "放个短假",
  rarity: 4,
  path: "欢愉",
  baseStats: { hp: 953, atk: 423, def: 397 },
  skill: {
    name: "秘语",
    description:
      "使装备者的欢愉度提高 {0}%。装备者施放欢愉技期间无视目标 {1}% 的防御力。",
    valuesBySuperimposition: [
      [20, 8],
      [25, 10],
      [30, 12],
      [35, 14],
      [40, 16],
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
    { id: "trailblazer-euphoria", reason: "欢愉辅助佩戴收益稳定。" },
    { id: "yao-guang", reason: "欢愉技高频施放，防御无视稳定增伤。" },
  ],
  rating: 3,
  review: "常驻欢愉装，欢愉度与防御无视加成，4星过渡优选。",
  art: "/assets/lightcones/fang-ge-duan-jia.png",
};
