import type { LightCone } from "../../types/lightcone";

export const kaiJiang: LightCone = {
  id: "kai-jiang",
  name: "开疆",
  rarity: 3,
  path: "存护",
  baseStats: { hp: 952, atk: 264, def: 264 },
  skill: {
    name: "公司",
    description: "当装备者击破敌方目标的弱点时，回复等同于自身生命上限 {0}% 的生命值。",
    valuesBySuperimposition: [12, 14, 16, 18, 20],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "蠕动原核", count: 12 },
    { name: "微光原核", count: 10 },
    { name: "熄灭原核", count: 8 },
    { name: "青铜的执着", count: 2 },
    { name: "寒铁的誓言", count: 6 },
    { name: "琥珀的坚守", count: 9 },
  ],
  recommendedCharacters: [
    { id: "march7th", reason: "冰系击破触发回血，提升生存。" },
    { id: "trailblazer-preservation", reason: "火主易击破弱点，回复稳定。" },
  ],
  rating: 2,
  review: "3★ 存护光锥。击破弱点回复生命，前期缺乏治疗时的过渡选择。",
  art: "/assets/lightcones/kai-jiang.png",
};
