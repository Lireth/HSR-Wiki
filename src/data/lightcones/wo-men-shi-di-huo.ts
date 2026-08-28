import type { LightCone } from "../../types/lightcone";

export const woMenShiDiHuo: LightCone = {
  id: "wo-men-shi-di-huo",
  name: "我们是地火",
  rarity: 4,
  path: "存护",
  baseStats: { hp: 740, atk: 476, def: 463 },
  skill: {
    name: "泪中人",
    description: "战斗开始时，使我方全体受到的伤害降低 {0}%，持续5回合。同时立即为我方全体回复等同于各自已损失生命值 {1}% 的生命值。",
    valuesBySuperimposition: [
      [8, 30],
      [10, 35],
      [12, 40],
      [14, 45],
      [16, 50],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "古代零件", count: 15 },
    { name: "古代转轴", count: 15 },
    { name: "古代引擎", count: 12 },
    { name: "青铜的执着", count: 3 },
    { name: "寒铁的誓言", count: 9 },
    { name: "琥珀的坚守", count: 12 },
  ],
  recommendedCharacters: [
    { id: "trailblazer-preservation", reason: "开局全体减伤契合火主嘲讽承伤定位。" },
    { id: "gepard", reason: "开局回血补稳血线，配合群盾过渡平滑。" },
  ],
  rating: 3,
  review: "开局全体减伤回血，存护通用过渡，模拟宇宙实用。",
  art: "/assets/lightcones/wo-men-shi-di-huo.png",
};
