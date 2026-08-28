import type { LightCone } from "../../types/lightcone";

export const zaoCanDeYiShiGan: LightCone = {
  id: "zao-can-de-yi-shi-gan",
  name: "早餐的仪式感",
  rarity: 4,
  path: "智识",
  baseStats: { hp: 846, atk: 476, def: 396 },
  skill: {
    name: "各就其位",
    description: "使装备者造成伤害提高 {0}%。每消灭1个敌方目标，装备者的攻击力提高 {1}%，该效果最多叠加3层。",
    valuesBySuperimposition: [
      [12, 4],
      [15, 5],
      [18, 6],
      [21, 7],
      [24, 8],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 12 },
    { name: "灵感之钥", count: 3 },
    { name: "启迪之钥", count: 9 },
    { name: "智识之钥", count: 12 },
  ],
  recommendedCharacters: [
    { id: "himeko", reason: "击杀追击频繁触发，增伤叠攻双收益吃满。" },
    { id: "herta", reason: "清杂击杀叠层快，免费高叠影性价比极高。" },
  ],
  rating: 4,
  review: "免费易高叠，常驻增伤加击杀叠攻，智识泛用毕业。",
  art: "/assets/lightcones/zao-can-de-yi-shi-gan.png",
};
