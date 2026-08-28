import type { LightCone } from "../../types/lightcone";

export const mutualDemise: LightCone = {
  id: "mutual-demise",
  name: "乐圮",
  rarity: 3,
  path: "毁灭",
  baseStats: { hp: 780, atk: 423, def: 346 },
  skill: {
    name: "共赴消亡",
    description: "当装备者的当前生命值百分比低于或等于 50% 时，造成的伤害提高 {0}%。",
    valuesBySuperimposition: [16, 18, 20, 22, 24],
  },
  ascensionMaterials: [
    { name: "信用点", count: 88000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [{ id: "clara", reason: "战斗中生命值易被压低，开荒期的过渡增伤选择。" }],
  rating: 2,
  review: "3★ 毁灭过渡光锥。残血增伤机制简单粗暴，开荒期毁灭角色的临时选择，不值得长期投入。",
  art: "/assets/lightcones/mutual-demise.svg",
};
