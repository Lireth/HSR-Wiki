import type { LightCone } from "../../types/lightcone";

export const patienceIsAllYouNeed: LightCone = {
  id: "patience-is-all-you-need",
  name: "只需等待",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "蜘蛛的网",
    description: "使装备者造成的伤害提高 {0}%。装备者每次施放攻击后，速度提高 {1} 点，最多叠加 3 层。当装备者击中敌方目标时，如果该目标不处于【游丝】状态，则有 100% 的基础概率使其陷入【游丝】状态；【游丝】状态下敌方目标每回合开始时受到等同于装备者 {2}% 攻击力的雷属性持续伤害，持续 1 回合。",
    valuesBySuperimposition: [[24, 4.8, 60], [28, 5.6, 70], [32, 6.4, 80], [36, 7.2, 90], [40, 8, 100]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "kafka", reason: "专属光锥，【游丝】视作触电，与引爆体系天作之合。" },
    { id: "sampo", reason: "增伤与速度叠层强化持续伤害循环。" },
    { id: "guinaifen", reason: "虚无持续伤害体系通用，速度叠层加快灼烧覆盖。" },
  ],
  rating: 5,
  review: "5★ 虚无持续伤害光锥，卡芙卡专属。增伤与速度叠层兼顾循环，持续伤害体系的顶级选择。",
  art: "/assets/lightcones/patience-is-all-you-need.png",
};
