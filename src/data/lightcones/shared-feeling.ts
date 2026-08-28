import type { LightCone } from "../../types/lightcone";

export const sharedFeeling: LightCone = {
  id: "shared-feeling",
  name: "同一种心情",
  rarity: 4,
  path: "丰饶",
  baseStats: { hp: 984, atk: 470, def: 396 },
  skill: {
    name: "感同身受",
    description: "使装备者的治疗量提高 {0}%，装备者施放战技或终结技后，使我方全体恢复 2 点能量。",
    valuesBySuperimposition: [10, 12, 14, 16, 18],
  },
  ascensionMaterials: [
    { name: "信用点", count: 118000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [{ id: "bailu", reason: "治疗量与全队回能双重收益，强化持续续航。" }],
  rating: 3,
  review: "4★ 丰饶辅助光锥。治疗量提升外还附带全队回能，白露等治疗位的优质过渡装。",
  art: "/assets/lightcones/shared-feeling.svg",
};
