import type { LightCone } from "../../types/lightcone";

export const somethingIrreplaceable: LightCone = {
  id: "something-irreplaceable",
  name: "无可取代的东西",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 1164, atk: 582, def: 396 },
  skill: {
    name: "家人",
    description: "使装备者的攻击力提高 {0}%。当装备者消灭敌方目标或受到攻击后，立即回复等同于装备者攻击力 {1}% 的生命值。装备者造成的伤害提高 {2}%。",
    valuesBySuperimposition: [[24, 8, 24], [28, 9, 28], [32, 10, 32], [36, 11, 36], [40, 12, 40]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 385000 },
  { name: "铁卫扣饰", count: 20 },
  { name: "铁卫军徽", count: 20 },
  { name: "铁卫勋章", count: 14 },
  { name: "破碎残刃", count: 4 },
  { name: "无生残刃", count: 12 },
  { name: "净世残刃", count: 15 },
  ],
  recommendedCharacters: [{ id: "clara", reason: "专属光锥，反击体系频繁受击，几乎常驻吃满增伤。" }],
  rating: 4,
  review: "毁灭反击流毕业光锥。受击增伤与克拉拉反击机制天作之合，其余毁灭输出位也可通用。",
  art: "/assets/lightcones/something-irreplaceable.png",
};
