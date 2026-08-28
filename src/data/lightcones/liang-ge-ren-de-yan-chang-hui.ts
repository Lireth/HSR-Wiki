import type { LightCone } from "../../types/lightcone";

export const liangGeRenDeYanChangHui: LightCone = {
  id: "liang-ge-ren-de-yan-chang-hui",
  name: "两个人的演唱会",
  rarity: 4,
  path: "存护",
  baseStats: { hp: 952, atk: 370, def: 463 },
  skill: {
    name: "鼓舞",
    description: "使装备者的防御力提高{0}%。场上每有一名持有护盾的角色，装备者造成的伤害提高{1}%。",
    valuesBySuperimposition: [
      [16, 4],
      [20, 5],
      [24, 6],
      [28, 7],
      [32, 8],
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
    { id: "aventurine", reason: "护盾常驻，自增伤体系轻松吃满。" },
    { id: "gepard", reason: "提供护盾触发增伤，输出型副C可用。" },
  ],
  rating: 3,
  review: "护盾队增伤条件简单，副C存护可选。",
  art: "/assets/lightcones/liang-ge-ren-de-yan-chang-hui.png",
};
