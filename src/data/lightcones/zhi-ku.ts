import type { LightCone } from "../../types/lightcone";

export const zhiKu: LightCone = {
  id: "zhi-ku",
  name: "智库",
  rarity: 3,
  path: "智识",
  baseStats: { hp: 740, atk: 370, def: 264 },
  skill: {
    name: "沉沦",
    description: "使装备者终结技造成的伤害提高 {0}%。",
    valuesBySuperimposition: [28, 35, 42, 49, 56],
  },
  ascensionMaterials: [
  { name: "信用点", count: 231000 },
  { name: "熄灭原核", count: 12 },
  { name: "微光原核", count: 10 },
  { name: "蠢动原核", count: 8 },
  { name: "灵感之钥", count: 2 },
  { name: "启迪之钥", count: 6 },
  { name: "智识之钥", count: 9 },
  ],
  recommendedCharacters: [
    { id: "jingyuan", reason: "终结技增伤直接放大主要伤害。" },
    { id: "herta", reason: "大招流清杂，终结技增伤契合。" },
  ],
  rating: 2,
  review: "3★ 智识光锥。终结技增伤数值可观，前期大招输出手过渡选择。",
  art: "/assets/lightcones/zhi-ku.png",
};
