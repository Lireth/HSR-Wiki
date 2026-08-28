import type { LightCone } from "../../types/lightcone";

export const jiYiDeZhiLiao: LightCone = {
  id: "ji-yi-de-zhi-liao",
  name: "记忆的质料",
  rarity: 5,
  path: "存护",
  baseStats: { hp: 1058, atk: 423, def: 529 },
  skill: {
    name: "珍存",
    description: "使装备者的效果抵抗提高 {0}%，当装备者受到攻击后，如果自身未持有护盾，则获得1个等同于装备者 {1}% 生命上限的护盾，持续2回合，该效果每3回合只能触发1次。如果装备者持有护盾，则使自身受到的伤害降低 {2}%。",
    valuesBySuperimposition: [[8, 16, 12], [10, 20, 15], [12, 24, 18], [14, 28, 21], [16, 32, 24]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 385000 },
  { name: "熄灭原核", count: 20 },
  { name: "微光原核", count: 20 },
  { name: "蠢动原核", count: 14 },
  { name: "青铜的执着", count: 4 },
  { name: "寒铁的誓言", count: 12 },
  { name: "琥珀的坚守", count: 15 },
  ],
  recommendedCharacters: [
    { id: "fuxuan", reason: "效果抵抗契合天赋，受击触发护盾减伤。" },
    { id: "gepard", reason: "受击获得护盾与减伤，生存能力强化。" },
  ],
  rating: 4,
  review: "5★ 存护光锥。效果抵抗加护盾减伤，生存向功能件，泛用性一般。",
  art: "/assets/lightcones/ji-yi-de-zhi-liao.png",
};
