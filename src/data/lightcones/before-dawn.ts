import type { LightCone } from "../../types/lightcone";

export const beforeDawn: LightCone = {
  id: "before-dawn",
  name: "拂晓之前",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 1164, atk: 582, def: 396 },
  skill: {
    name: "拂晓将至",
    description: "使装备者的暴击伤害提高 {0}%，战技与终结技造成的伤害提高 {1}%，装备者施放终结技后使装备者造成的伤害提高 {2}%。",
    valuesBySuperimposition: [[36, 18, 24], [42, 21, 28], [48, 24, 32], [54, 27, 36], [60, 30, 40]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [{ id: "jingyuan", reason: "专属光锥，吃满战技/终结技增伤。" }],
  rating: 5,
  review: "智识命途毕业光锥，多段增伤层叠收益极高，景元、姬子等智识主C通用。",
  art: "/assets/lightcones/before-dawn.svg",
};
