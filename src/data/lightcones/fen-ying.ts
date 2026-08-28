import type { LightCone } from "../../types/lightcone";

export const fenYing: LightCone = {
  id: "fen-ying",
  name: "焚影",
  rarity: 3,
  path: "记忆",
  baseStats: { hp: 846, atk: 317, def: 264 },
  skill: {
    name: "美化",
    description: "装备者首次召唤忆灵时，恢复1点战技点，并恢复自身 {0} 点能量。",
    valuesBySuperimposition: [12, 14, 16, 18, 20],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "恐惧踏碎血肉", count: 12 },
    { name: "勇气撕裂胸膜", count: 10 },
    { name: "荣耀洗礼身躯", count: 8 },
    { name: "思量的种", count: 2 },
    { name: "末那芽苗", count: 6 },
    { name: "阿赖耶华", count: 9 },
  ],
  recommendedCharacters: [
    { id: "trailblazer-remembrance", reason: "开局召唤忆灵回战技点，改善循环。" },
    { id: "aglaea", reason: "首召忆灵回能，加速启动节奏。" },
  ],
  rating: 2,
  review: "三星记忆过渡，首次召唤忆灵返还战技点与能量，聊胜于无。",
  art: "/assets/lightcones/fen-ying.png",
};
