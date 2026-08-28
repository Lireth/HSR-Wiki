import type { LightCone } from "../../types/lightcone";

export const ruiJian: LightCone = {
  id: "rui-jian",
  name: "睿见",
  rarity: 3,
  path: "智识",
  baseStats: { hp: 740, atk: 370, def: 264 },
  skill: {
    name: "天才",
    description: "当装备者施放终结技时，攻击力提高 {0}%，持续2回合。",
    valuesBySuperimposition: [24, 30, 36, 42, 48],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "掠夺的本能", count: 12 },
    { name: "篡改的野心", count: 10 },
    { name: "践踏的意志", count: 8 },
    { name: "灵感之钥", count: 2 },
    { name: "启迪之钥", count: 6 },
    { name: "智识之钥", count: 9 },
  ],
  recommendedCharacters: [
    { id: "jingyuan", reason: "终结技后神君输出吃满攻击加成。" },
    { id: "serval", reason: "终结技频率高，攻击加成覆盖率好。" },
  ],
  rating: 2,
  review: "3★ 智识光锥。终结技后攻击加成持续两回合，前期智识角色过渡可选。",
  art: "/assets/lightcones/rui-jian.png",
};
