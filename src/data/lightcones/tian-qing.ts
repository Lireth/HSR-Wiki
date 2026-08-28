import type { LightCone } from "../../types/lightcone";

export const tianQing: LightCone = {
  id: "tian-qing",
  name: "天倾",
  rarity: 3,
  path: "毁灭",
  baseStats: { hp: 846, atk: 370, def: 198 },
  skill: {
    name: "破灭",
    description: "使装备者普攻和战技造成的伤害提高 {0}%。",
    valuesBySuperimposition: [20, 25, 30, 35, 40],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "掠夺的本能", count: 12 },
    { name: "篡改的野心", count: 10 },
    { name: "践踏的意志", count: 8 },
    { name: "破碎残刃", count: 2 },
    { name: "无生残刃", count: 6 },
    { name: "净世残刃", count: 9 },
  ],
  recommendedCharacters: [
    { id: "trailblazer-destruction", reason: "普攻战技为主的输出手，增伤直白有效。" },
    { id: "hook", reason: "战技输出型毁灭，前期过渡性价比高。" },
  ],
  rating: 2,
  review: "三星增伤直白，普攻战技型毁灭前期过渡可用。",
  art: "/assets/lightcones/tian-qing.png",
};
