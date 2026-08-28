import type { LightCone } from "../../types/lightcone";

export const chongFanYouMing: LightCone = {
  id: "chong-fan-you-ming",
  name: "重返幽冥",
  rarity: 4,
  path: "巡猎",
  baseStats: { hp: 846, atk: 529, def: 330 },
  skill: {
    name: "汹涌",
    description: "使装备者暴击率提高 {0}%。暴击后有 {1}% 的固定概率解除被攻击敌方目标所拥有的1个增益效果，该效果每次攻击只可触发1次。",
    valuesBySuperimposition: [[12, 16], [15, 20], [18, 24], [21, 28], [24, 32]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 12 },
    { name: "猎兽之矢", count: 3 },
    { name: "屠魔之矢", count: 9 },
    { name: "逐星之矢", count: 12 },
  ],
  recommendedCharacters: [
    { id: "seele", reason: "暴击需求高，驱散增益锦上添花。" },
    { id: "topaz", reason: "攻击段数多，触发驱散概率较高。" },
  ],
  rating: 2,
  review: "4★ 巡猎光锥。暴击率稳定加成，附加驱散偏功能性，定位略显尴尬。",
  art: "/assets/lightcones/chong-fan-you-ming.png",
};
