import type { LightCone } from "../../types/lightcone";

export const theUnreachableSide: LightCone = {
  id: "the-unreachable-side",
  name: "她已闭上双眼",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 1270, atk: 423, def: 529 },
  skill: {
    name: "视界",
    description: "使装备者的生命上限提高 {0}%，能量恢复效率提高 {1}%。当装备者的生命值降低时，使我方全体造成的伤害提高 {2}%，持续 2 回合。每个波次开始时，为我方全体回复等同于各自已损失生命值 {3}% 的生命值。",
    valuesBySuperimposition: [[24, 12, 9, 80], [28, 14, 10.5, 85], [32, 16, 12, 90], [36, 18, 13.5, 95], [40, 20, 15, 100]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "blade", reason: "专属光锥，生命上限与烧血增伤机制完全绑定。" },
    { id: "clara", reason: "生命型毁灭角色，高生命面板与波次回复提升容错。" },
  ],
  rating: 5,
  review: "5★ 生命型毁灭光锥，刃的专属。生命上限、能量回复与全队增伤一应俱全，烧血体系毕业装。",
  art: "/assets/lightcones/the-unreachable-side.svg",
};
