import type { LightCone } from "../../types/lightcone";

export const yiChangShuHouDuiHua: LightCone = {
  id: "yi-chang-shu-hou-dui-hua",
  name: "一场术后对话",
  rarity: 4,
  path: "丰饶",
  baseStats: { hp: 1058, atk: 423, def: 330 },
  skill: {
    name: "互相治愈",
    description: "使装备者的能量恢复效率提高 {0}%，并在施放终结技时治疗量提高 {1}%。",
    valuesBySuperimposition: [[8, 12], [10, 15], [12, 18], [14, 21], [16, 24]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "熄灭原核", count: 15 },
  { name: "微光原核", count: 15 },
  { name: "蠢动原核", count: 12 },
  { name: "丰饶之种", count: 3 },
  { name: "生命之芽", count: 9 },
  { name: "永恒之花", count: 12 },
  ],
  recommendedCharacters: [
    { id: "natasha", reason: "终结技回转更快，治疗循环更顺畅。" },
    { id: "luocha", reason: "能量恢复加成，终结技治疗更频繁。" },
  ],
  rating: 4,
  review: "4★ 丰饶光锥。能量恢复与终结技治疗双加成，奶妈终结技回转利器。",
  art: "/assets/lightcones/yi-chang-shu-hou-dui-hua.png",
};
