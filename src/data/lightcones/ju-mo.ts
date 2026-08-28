import type { LightCone } from "../../types/lightcone";

export const juMo: LightCone = {
  id: "ju-mo",
  name: "俱殁",
  rarity: 3,
  path: "毁灭",
  baseStats: { hp: 846, atk: 370, def: 198 },
  skill: {
    name: "军团",
    description: "装备者当前生命值百分比小于80%时，暴击率提高 {0}%。",
    valuesBySuperimposition: [12, 15, 18, 21, 24],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 10 },
    { name: "铁卫勋章", count: 8 },
    { name: "破碎残刃", count: 2 },
    { name: "无生残刃", count: 6 },
    { name: "净世残刃", count: 9 },
  ],
  recommendedCharacters: [
    { id: "arlan", reason: "主动压血线保持常驻暴击加成。" },
    { id: "blade", reason: "扣血机制天然契合，易维持低血状态。" },
  ],
  rating: 2,
  review: "3★ 毁灭低血暴击，契合扣血换输出的低血主C。",
  art: "/assets/lightcones/ju-mo.png",
};
