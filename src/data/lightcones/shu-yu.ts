import type { LightCone } from "../../types/lightcone";

export const shuYu: LightCone = {
  id: "shu-yu",
  name: "戍御",
  rarity: 3,
  path: "存护",
  baseStats: { hp: 952, atk: 264, def: 264 },
  skill: {
    name: "兴复",
    description: "使装备者施放终结技时，回复等同于自身生命上限 {0}% 的生命值。",
    valuesBySuperimposition: [18, 21, 24, 27, 30],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "掠夺的本能", count: 12 },
    { name: "篡改的野心", count: 10 },
    { name: "践踏的意志", count: 8 },
    { name: "青铜的执着", count: 2 },
    { name: "寒铁的誓言", count: 6 },
    { name: "琥珀的坚守", count: 9 },
  ],
  recommendedCharacters: [
    { id: "fuxuan", reason: "终结技按生命上限回血，残血回复量可观。" },
    { id: "trailblazer-preservation", reason: "终结技护盾间隙回血，提升坦度续航。" },
  ],
  rating: 2,
  review: "三星过渡，终结技回血契合高生命存护，泛用性一般。",
  art: "/assets/lightcones/shu-yu.png",
};
