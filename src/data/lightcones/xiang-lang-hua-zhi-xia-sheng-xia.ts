import type { LightCone } from "../../types/lightcone";

export const xiangLangHuaZhiXiaShengXia: LightCone = {
  id: "xiang-lang-hua-zhi-xia-sheng-xia",
  name: "向浪花掷下盛夏",
  rarity: 5,
  path: "欢愉",
  baseStats: { hp: 953, atk: 582, def: 529 },
  skill: {
    name: "浪行",
    description:
      "使装备者的暴击率提高 {0}%。装备者施放欢愉技时，获得【风口】，【风口】使装备者的速度提高 {1}%。若施放的欢愉技与上一次施放的欢愉技不同，则额外获得【潮流】，【潮流】使装备者的欢愉度提高 {2}%。每个波次开始时或装备者每施放3次欢愉技后，恢复1个战技点。",
    valuesBySuperimposition: [
      [18, 24, 40],
      [21, 28, 55],
      [24, 32, 70],
      [27, 36, 85],
      [30, 40, 100],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "思绪末屑", count: 20 },
    { name: "印象残晶", count: 20 },
    { name: "欲念碎镜", count: 14 },
    { name: "《绒绒号》手绘分镜稿", count: 4 },
    { name: "《绒绒号》连载纪念刊", count: 12 },
    { name: "《绒绒号》典藏版合集", count: 15 },
  ],
  recommendedCharacters: [
    { id: "aventurine-waveflair", reason: "多段欢愉技切换施放，潮流叠加收益极高。" },
    { id: "sparxie", reason: "欢愉技轮换施放，速度与欢愉度全面强化。" },
  ],
  rating: 5,
  review: "欢愉技轮换专属光锥，暴击率、速度与欢愉度全面增益。",
  art: "/assets/lightcones/xiang-lang-hua-zhi-xia-sheng-xia.png",
};
