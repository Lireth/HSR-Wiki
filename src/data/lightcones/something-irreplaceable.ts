import type { LightCone } from "../../types/lightcone";

export const somethingIrreplaceable: LightCone = {
  id: "something-irreplaceable",
  name: "无可取代的东西",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 1058, atk: 635, def: 396 },
  skill: {
    name: "无可取代之物",
    description: "使装备者的攻击力提高 {0}%。当装备者受到攻击或消耗自身生命值后，造成的伤害提高 {1}%，持续到装备者的下个回合结束。",
    valuesBySuperimposition: [[24, 24], [28, 28], [32, 32], [36, 36], [40, 40]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [{ id: "clara", reason: "专属光锥，反击体系频繁受击，几乎常驻吃满增伤。" }],
  rating: 4,
  review: "毁灭反击流毕业光锥。受击增伤与克拉拉反击机制天作之合，其余毁灭输出位也可通用。",
  art: "/assets/lightcones/something-irreplaceable.svg",
};
