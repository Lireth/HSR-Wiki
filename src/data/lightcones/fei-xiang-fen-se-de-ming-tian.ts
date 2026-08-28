import type { LightCone } from "../../types/lightcone";

export const feiXiangFenSeDeMingTian: LightCone = {
  id: "fei-xiang-fen-se-de-ming-tian",
  name: "飞向粉色的明天",
  rarity: 4,
  path: "记忆",
  baseStats: { hp: 846, atk: 476, def: 396 },
  skill: {
    name: "凝望",
    description: "使装备者的暴击伤害提高 {0}%。开拓者•记忆装备时，使我方全体目标造成的伤害提高 {1}%，强化普攻【明天，一同写下！】造成的伤害提高 {2}%。",
    valuesBySuperimposition: [
      [12, 8, 60],
      [15, 10, 70],
      [18, 12, 80],
      [21, 14, 90],
      [24, 16, 100],
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
    { id: "trailblazer-remembrance", reason: "开拓者记忆专属，强化普攻伤害翻倍。" },
    { id: "cyrene", reason: "辅助型记忆，全体增伤与暴伤双重收益。" },
  ],
  rating: 4,
  review: "开拓者记忆专属，强化普攻增伤翻倍相当可观。",
  art: "/assets/lightcones/fei-xiang-fen-se-de-ming-tian.png",
};
