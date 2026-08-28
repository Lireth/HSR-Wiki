import type { LightCone } from "../../types/lightcone";

export const yongYuanDeMiJingFan: LightCone = {
  id: "yong-yuan-de-mi-jing-fan",
  name: "永远的迷境饭",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "真香",
    description: "使装备者的攻击力提高 {0}%。装备者施放战技后，攻击力提高 {1}%，该效果最多叠加3层。",
    valuesBySuperimposition: [
      [16, 8],
      [20, 10],
      [24, 12],
      [28, 14],
      [32, 16],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膛", count: 15 },
    { name: "荣耀洗礼身躯", count: 12 },
    { name: "云际音符", count: 3 },
    { name: "空际小节", count: 9 },
    { name: "天外乐章", count: 12 },
  ],
  recommendedCharacters: [
    { id: "tingyun", reason: "赐福按自身攻击力结算，攻击叠层收益高。" },
    { id: "yukong", reason: "增伤按攻击力换算，战技叠层易保持。" },
  ],
  rating: 3,
  review: "攻击叠层稳定易保持，攻击增益辅助的好选择。",
  art: "/assets/lightcones/yong-yuan-de-mi-jing-fan.png",
};
