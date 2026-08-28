import type { LightCone } from "../../types/lightcone";

export const mutualDemise: LightCone = {
  id: "mutual-demise",
  name: "乐圮",
  rarity: 3,
  path: "毁灭",
  baseStats: { hp: 846, atk: 370, def: 198 },
  skill: {
    name: "诛讨",
    description: "当敌方目标当前生命值百分比大于 50% 时，装备者对其造成的伤害提高 {0}%。",
    valuesBySuperimposition: [20, 25, 30, 35, 40],
  },
  ascensionMaterials: [
    { name: "信用点", count: 88000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [{ id: "clara", reason: "对高血量目标稳定增伤，开荒期的过渡增伤选择。" }],
  rating: 2,
  review: "3★ 毁灭过渡光锥。对高生命值目标稳定增伤，开荒期毁灭角色的临时选择，不值得长期投入。",
  art: "/assets/lightcones/mutual-demise.png",
};
