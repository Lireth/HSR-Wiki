import type { LightCone } from "../../types/lightcone";

export const chiXiao: LightCone = {
  id: "chi-xiao",
  name: "嗤笑",
  rarity: 3,
  path: "欢愉",
  baseStats: { hp: 740, atk: 370, def: 264 },
  skill: {
    name: "纵欢",
    description: "阿哈时刻发动时，使装备者的欢愉度提高 {0}%，持续到阿哈时刻结束。",
    valuesBySuperimposition: [16, 20, 24, 28, 32],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "童真蜡笔", count: 12 },
    { name: "造梦鑢钢", count: 10 },
    { name: "梦现管锥", count: 8 },
    { name: "《绒绒号》手绘分镜稿", count: 2 },
    { name: "《绒绒号》连载纪念刊", count: 6 },
    { name: "《绒绒号》典藏版合集", count: 9 },
  ],
  recommendedCharacters: [
    { id: "trailblazer-euphoria", reason: "阿哈时刻欢愉度提升，三星过渡可用。" },
    { id: "yao-guang", reason: "欢愉体系适配的输出选择。" },
  ],
  rating: 2,
  review: "阿哈时刻欢愉度提升，三星体系过渡装。",
  art: "/assets/lightcones/chi-xiao.png",
};
