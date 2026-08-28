import type { LightCone } from "../../types/lightcone";

export const daoBuLiaoDeBiAn: LightCone = {
  id: "dao-bu-liao-de-bi-an",
  name: "到不了的彼岸",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 1270, atk: 582, def: 330 },
  skill: {
    name: "不得",
    description: "使装备者的暴击率提高 {0}%，生命上限提高 {1}%。当装备者受到攻击或装备者消耗自身生命值后，造成的伤害提高 {2}%，该效果在装备者施放攻击后解除。",
    valuesBySuperimposition: [[18, 18, 24], [21, 21, 28], [24, 24, 32], [27, 27, 36], [30, 30, 40]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "永寿幼芽", count: 20 },
    { name: "永寿天华", count: 20 },
    { name: "永寿荣枝", count: 14 },
    { name: "破碎残刃", count: 4 },
    { name: "无生残刃", count: 12 },
    { name: "净世残刃", count: 15 },
  ],
  recommendedCharacters: [
    { id: "blade", reason: "烧血与受击触发增伤，生命上限强化面板。" },
    { id: "mydei", reason: "生命型毁灭角色，消耗生命稳定吃满增伤。" },
  ],
  rating: 4,
  review: "5★ 生命型毁灭光锥，暴击、生命与烧血增伤兼备，刃体系优选备选。",
  art: "/assets/lightcones/dao-bu-liao-de-bi-an.png",
};
