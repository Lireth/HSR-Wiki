import type { LightCone } from "../../types/lightcone";

export const jinRiHaoShouQi: LightCone = {
  id: "jin-ri-hao-shou-qi",
  name: "今日好手气",
  rarity: 4,
  path: "欢愉",
  baseStats: { hp: 952, atk: 529, def: 396 },
  skill: {
    name: "抉择",
    description: "使装备者的暴击率提高 {0}%。装备者施放欢愉技时，欢愉度提高 {1}%，该效果最多叠加2次。",
    valuesBySuperimposition: [
      [12, 12],
      [14, 14],
      [16, 16],
      [18, 18],
      [20, 20],
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
    { id: "yao-guang", reason: "暴击率与欢愉度叠加，输出辅助两相宜。" },
    { id: "silverwolf-999", reason: "欢愉技高频释放，叠层增益稳定触发。" },
  ],
  rating: 3,
  review: "暴击率加欢愉度双层叠加，欢愉体系稳定组件。",
  art: "/assets/lightcones/jin-ri-hao-shou-qi.png",
};
