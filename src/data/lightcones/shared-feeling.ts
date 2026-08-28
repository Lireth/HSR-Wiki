import type { LightCone } from "../../types/lightcone";

export const sharedFeeling: LightCone = {
  id: "shared-feeling",
  name: "同一种心情",
  rarity: 4,
  path: "丰饶",
  baseStats: { hp: 952, atk: 423, def: 396 },
  skill: {
    name: "救治与维修",
    description: "使装备者的治疗量提高 {0}%。当装备者施放战技时，为我方全体恢复 {1} 点能量。",
    valuesBySuperimposition: [[10, 2], [12, 2.5], [15, 3], [17, 3.5], [20, 4]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "铁卫扣饰", count: 15 },
  { name: "铁卫军徽", count: 15 },
  { name: "铁卫勋章", count: 12 },
  { name: "丰饶之种", count: 3 },
  { name: "生命之芽", count: 9 },
  { name: "永恒之花", count: 12 },
  ],
  recommendedCharacters: [{ id: "bailu", reason: "治疗量与全队回能双重收益，强化持续续航。" }],
  rating: 3,
  review: "4★ 丰饶辅助光锥。治疗量提升外还附带全队回能，白露等治疗位的优质过渡装。",
  art: "/assets/lightcones/shared-feeling.png",
};
