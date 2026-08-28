import type { LightCone } from "../../types/lightcone";

export const anInstantBeforeAGaze: LightCone = {
  id: "an-instant-before-a-gaze",
  name: "片刻，留在眼底",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "骑士巡礼",
    description: "使装备者的暴击伤害提高 {0}%。当装备者施放终结技时，根据装备者的能量上限提高装备者终结技造成的伤害：每点能量提高 {1}%，最多计入 180 点。",
    valuesBySuperimposition: [[36, 0.36], [42, 0.42], [48, 0.48], [54, 0.54], [60, 0.6]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "argenti", reason: "专属光锥，能量上限 180 点，终结技增伤收益最大化。" },
    { id: "jingyuan", reason: "终结技核心输出，高能量面板吃满增伤。" },
  ],
  rating: 5,
  review: "5★ 智识终结技光锥，银枝专属。能量上限越高终结技增伤越夸张，高耗能爆发角色的毕业选择。",
  art: "/assets/lightcones/an-instant-before-a-gaze.svg",
};
