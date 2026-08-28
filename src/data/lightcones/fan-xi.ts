import type { LightCone } from "../../types/lightcone";

export const fanXi: LightCone = {
  id: "fan-xi",
  name: "蕃息",
  rarity: 3,
  path: "丰饶",
  baseStats: { hp: 952, atk: 317, def: 198 },
  skill: {
    name: "丰饶民",
    description: "当装备者施放普攻后，使下一次行动提前 {0}%。",
    valuesBySuperimposition: [12, 14, 16, 18, 20],
  },
  ascensionMaterials: [
  { name: "信用点", count: 231000 },
  { name: "永寿幼芽", count: 12 },
  { name: "永寿天华", count: 10 },
  { name: "永寿荣枝", count: 8 },
  { name: "丰饶之种", count: 2 },
  { name: "生命之芽", count: 6 },
  { name: "永恒之花", count: 9 },
  ],
  recommendedCharacters: [
    { id: "natasha", reason: "普攻频次高，行动提前加速终结技回转。" },
    { id: "bailu", reason: "普攻奶手法契合，提升治疗循环效率。" },
  ],
  rating: 2,
  review: "3★ 丰饶光锥。普攻后行动提前，显著提升奶妈终结技回转，功能性强。",
  art: "/assets/lightcones/fan-xi.png",
};
