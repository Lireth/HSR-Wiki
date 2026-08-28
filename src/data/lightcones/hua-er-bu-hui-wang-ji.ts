import type { LightCone } from "../../types/lightcone";

export const huaErBuHuiWangJi: LightCone = {
  id: "hua-er-bu-hui-wang-ji",
  name: "花儿不会忘记",
  rarity: 4,
  path: "记忆",
  baseStats: { hp: 1058, atk: 529, def: 330 },
  skill: {
    name: "相依为命",
    description: "使装备者的暴击伤害提高 {0}%。装备者忆灵造成的暴击伤害额外提高 {1}%。",
    valuesBySuperimposition: [
      [24, 24],
      [28, 30],
      [32, 36],
      [36, 42],
      [40, 48],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "预兆似有若无", count: 15 },
    { name: "悲鸣由远及近", count: 15 },
    { name: "哀叹漫无止息", count: 12 },
    { name: "思量的种", count: 3 },
    { name: "末那芽苗", count: 9 },
    { name: "阿赖耶华", count: 12 },
  ],
  recommendedCharacters: [
    { id: "castorice", reason: "遐蝶适配，忆灵暴伤额外提升48%。" },
    { id: "aglaea", reason: "忆灵高频输出，暴伤加成收益极大。" },
  ],
  rating: 4,
  review: "忆灵暴伤额外提升48%，记忆主C优质输出光锥。",
  art: "/assets/lightcones/hua-er-bu-hui-wang-ji.png",
};
