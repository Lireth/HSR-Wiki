import type { LightCone } from "../../types/lightcone";

export const heWuWeiZhen: LightCone = {
  id: "he-wu-wei-zhen",
  name: "何物为真",
  rarity: 4,
  path: "丰饶",
  baseStats: { hp: 1058, atk: 423, def: 330 },
  skill: {
    name: "假设",
    description: "使装备者的击破特攻提高{0}%。施放普攻后，装备者回复等同于{1}%生命上限+800点的生命值。",
    valuesBySuperimposition: [
      [24, 2],
      [30, 2.5],
      [36, 3],
      [42, 3.5],
      [48, 4],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 12 },
    { name: "丰饶之种", count: 3 },
    { name: "生命之芽", count: 9 },
    { name: "永恒之花", count: 12 },
  ],
  recommendedCharacters: [
    { id: "gallagher", reason: "击破特攻强化治疗量，普攻触发回血。" },
    { id: "lynx", reason: "高生命加成下回血收益可观。" },
  ],
  rating: 3,
  review: "击破丰饶专属，普攻回血契合加拉赫。",
  art: "/assets/lightcones/he-wu-wei-zhen.png",
};
