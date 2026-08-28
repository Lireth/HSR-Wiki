import type { LightCone } from "../../types/lightcone";

export const suYi: LightCone = {
  id: "su-yi",
  name: "溯忆",
  rarity: 3,
  path: "记忆",
  baseStats: { hp: 635, atk: 423, def: 264 },
  skill: {
    name: "入寐",
    description: "忆灵的回合开始时，使装备者和忆灵分别获得1层【缱怀】，每层使造成的伤害提高 {0}%，最多叠加4层。忆灵消失时移除装备者和忆灵的【缱怀】。",
    valuesBySuperimposition: [8, 9, 10, 11, 12],
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
    { id: "aglaea", reason: "忆灵常驻，稳定叠满四层增伤。" },
    { id: "trailblazer-remembrance", reason: "忆灵回合稳定叠加，增伤常驻。" },
  ],
  rating: 2,
  review: "三星记忆过渡，忆灵常驻时可稳定叠至四层增伤。",
  art: "/assets/lightcones/su-yi.png",
};
