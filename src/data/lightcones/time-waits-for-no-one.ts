import type { LightCone } from "../../types/lightcone";

export const timeWaitsForNoOne: LightCone = {
  id: "time-waits-for-no-one",
  name: "时节不居",
  rarity: 5,
  path: "丰饶",
  baseStats: { hp: 1270, atk: 476, def: 463 },
  skill: {
    name: "日有四时",
    description: "使装备者生命上限提高 {0}%，治疗量提高 {1}%。当装备者对我方目标提供治疗时，记录治疗量；当任意我方目标施放攻击后，根据记录治疗量的 {2}%，对随机 1 个受到攻击的敌方目标造成基于装备者属性的附加伤害，每回合最多结算 1 次。",
    valuesBySuperimposition: [[18, 12, 36], [21, 14, 42], [24, 16, 48], [27, 18, 54], [30, 20, 60]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "bailu", reason: "生命与治疗量双重提升，群体治疗收益最大化。" },
    { id: "luocha", reason: "高频自动治疗持续记录治疗量，附加伤害反哺输出。" },
    { id: "natasha", reason: "持续治疗效果稳定，生命加成提升生存容错。" },
  ],
  rating: 5,
  review: "5★ 丰饶毕业光锥。生命与治疗量双提升，记录治疗量的附加伤害让治疗位也有可观输出贡献。",
  art: "/assets/lightcones/time-waits-for-no-one.png",
};
