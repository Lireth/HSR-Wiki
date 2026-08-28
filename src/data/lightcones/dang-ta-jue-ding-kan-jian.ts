import type { LightCone } from "../../types/lightcone";

export const dangTaJueDingKanJian: LightCone = {
  id: "dang-ta-jue-ding-kan-jian",
  name: "当她决定看见",
  rarity: 5,
  path: "欢愉",
  baseStats: { hp: 1058, atk: 529, def: 529 },
  skill: {
    name: "破局",
    description: "使装备者的速度提高 {0}%。装备者进入战斗或对我方目标施放终结技时，使装备者获得【上上签】，持续3回合。当装备者持有【上上签】时，我方全体暴击率提高 {1}%，暴击伤害提高 {2}%，装备者自身能量恢复效率提高 {3}%。每个波次开始时，装备者固定恢复15点能量。",
    valuesBySuperimposition: [
      [18, 10, 30, 12],
      [21, 11, 37, 14],
      [24, 12, 45, 16],
      [27, 13, 52, 18],
      [30, 14, 60, 20],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "童真蜡笔", count: 20 },
    { name: "造梦鑢钢", count: 20 },
    { name: "梦现管锥", count: 14 },
    { name: "《绒绒号》手绘分镜稿", count: 4 },
    { name: "《绒绒号》连载纪念刊", count: 12 },
    { name: "《绒绒号》典藏版合集", count: 15 },
  ],
  recommendedCharacters: [
    { id: "yao-guang", reason: "爻光专属，全体暴击暴伤与回能效率全面。" },
    { id: "trailblazer-euphoria", reason: "欢愉输出，速度增益与全队暴伤均适配。" },
  ],
  rating: 5,
  review: "爻光专属，全体暴击暴伤与回能效率增益全面。",
  art: "/assets/lightcones/dang-ta-jue-ding-kan-jian.png",
};
