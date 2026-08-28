import type { LightCone } from "../../types/lightcone";

export const yuanLvTuYongYuanTanRan: LightCone = {
  id: "yuan-lv-tu-yong-yuan-tan-ran",
  name: "愿旅途永远坦然",
  rarity: 4,
  path: "存护",
  baseStats: { hp: 1058, atk: 370, def: 529 },
  skill: {
    name: "甜梦",
    description: "使装备者提供的护盾量提高 {0}%，我方目标持有护盾时，造成的伤害提高 {1}%。",
    valuesBySuperimposition: [
      [12, 12],
      [15, 14],
      [18, 16],
      [21, 18],
      [24, 20],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "思绪末屑", count: 15 },
    { name: "印象残晶", count: 15 },
    { name: "欲念碎镜", count: 12 },
    { name: "散逸星砂", count: 3 },
    { name: "流星棱晶", count: 9 },
    { name: "神体琥珀", count: 12 },
  ],
  recommendedCharacters: [
    { id: "aventurine", reason: "高频护盾覆盖全队，持盾增伤与定位完美契合。" },
    { id: "march7th", reason: "单体护盾稳定覆盖C位，增防增伤两相宜。" },
  ],
  rating: 4,
  review: "护盾量与持盾增伤双收益，砂金四星毕业级光锥。",
  art: "/assets/lightcones/yuan-lv-tu-yong-yuan-tan-ran.png",
};
