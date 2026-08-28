import type { LightCone } from "../../types/lightcone";

export const beforeDawn: LightCone = {
  id: "before-dawn",
  name: "拂晓之前",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "长夜",
    description: "使装备者的暴击伤害提高 {0}%。装备者施放战技或终结技后，其战技与终结技造成的伤害提高 {1}%，持续 2 回合。装备者发动追加攻击后，追加攻击造成的伤害提高 {2}%。",
    valuesBySuperimposition: [[36, 18, 48], [42, 21, 56], [48, 24, 64], [54, 27, 72], [60, 30, 80]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 385000 },
  { name: "铁卫扣饰", count: 20 },
  { name: "铁卫军徽", count: 20 },
  { name: "铁卫勋章", count: 14 },
  { name: "灵感之钥", count: 4 },
  { name: "启迪之钥", count: 12 },
  { name: "智识之钥", count: 15 },
  ],
  recommendedCharacters: [{ id: "jingyuan", reason: "专属光锥，吃满战技/终结技增伤。" }],
  rating: 5,
  review: "智识命途毕业光锥，多段增伤层叠收益极高，景元、姬子等智识主C通用。",
  art: "/assets/lightcones/before-dawn.png",
};
