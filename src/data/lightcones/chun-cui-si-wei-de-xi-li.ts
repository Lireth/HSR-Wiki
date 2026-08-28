import type { LightCone } from "../../types/lightcone";

export const chunCuiSiWeiDeXiLi: LightCone = {
  id: "chun-cui-si-wei-de-xi-li",
  name: "纯粹思维的洗礼",
  rarity: 5,
  path: "巡猎",
  baseStats: { hp: 952, atk: 582, def: 529 },
  skill: {
    name: "思想训练",
    description: "使装备者的暴击伤害提高 {0}%。敌方目标每承受1个负面效果，装备者对其造成的暴击伤害额外提高 {1}%，最多叠加3层。施放终结技攻击敌方目标时，使装备者获得【论辩】效果，造成的伤害提高 {2}%，追加攻击无视目标 {3}% 的防御力，该效果持续2回合。",
    valuesBySuperimposition: [[20, 8, 36, 24], [23, 9, 42, 28], [26, 10, 48, 32], [29, 11, 54, 36], [32, 12, 60, 40]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "掠夺的本能", count: 20 },
    { name: "篡改的野心", count: 20 },
    { name: "践踏的意志", count: 14 },
    { name: "猎兽之矢", count: 4 },
    { name: "屠魔之矢", count: 12 },
    { name: "逐星之矢", count: 15 },
  ],
  recommendedCharacters: [
    { id: "dr-ratio", reason: "专属光锥，负面层数与终结技增伤完美联动。" },
    { id: "feixiao", reason: "终结技追击双吃，无视防御提升爆发上限。" },
  ],
  rating: 5,
  review: "5★ 巡猎暴伤光锥，真理医生专属，负面叠加与论辩增伤上限极高。",
  art: "/assets/lightcones/chun-cui-si-wei-de-xi-li.png",
};
