import type { LightCone } from "../../types/lightcone";

export const xieLeJingMoZhiHou: LightCone = {
  id: "xie-le-jing-mo-zhi-hou",
  name: "谐乐静默之后",
  rarity: 4,
  path: "智识",
  baseStats: { hp: 846, atk: 476, def: 396 },
  skill: {
    name: "沉寂",
    description: "使装备者的击破特攻提高{0}%。装备者施放终结技后，速度提高{1}%，持续2回合。",
    valuesBySuperimposition: [
      [28, 8],
      [35, 10],
      [42, 12],
      [49, 14],
      [56, 16],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "思绪末屑", count: 15 },
    { name: "印象残晶", count: 15 },
    { name: "欲念碎镜", count: 12 },
    { name: "凌乱草图", count: 3 },
    { name: "动态线稿", count: 9 },
    { name: "精致色稿", count: 12 },
  ],
  recommendedCharacters: [
    { id: "qingque", reason: "终结技后加速，摸牌节奏更顺。" },
    { id: "jade", reason: "击破特攻四星过渡选择。" },
  ],
  rating: 3,
  review: "击破智识四星过渡，青雀翡翠可选。",
  art: "/assets/lightcones/xie-le-jing-mo-zhi-hou.png",
};
