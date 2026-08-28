import type { LightCone } from "../../types/lightcone";

export const youSui: LightCone = {
  id: "you-sui",
  name: "幽邃",
  rarity: 3,
  path: "虚无",
  baseStats: { hp: 846, atk: 317, def: 264 },
  skill: {
    name: "沉沦",
    description: "战斗开始时，使装备者的效果命中提高 {0}%，持续3回合。",
    valuesBySuperimposition: [20, 25, 30, 35, 40],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "古代零件", count: 12 },
    { name: "古代转轴", count: 10 },
    { name: "古代引擎", count: 8 },
    { name: "黯淡黑曜", count: 2 },
    { name: "虚空黑曜", count: 6 },
    { name: "沉沦黑曜", count: 9 },
  ],
  recommendedCharacters: [
    { id: "pela", reason: "减防技能受效果命中加成，开局即受益。" },
    { id: "silverwolf", reason: "弱点植入依赖命中，开局命中提升实用。" },
  ],
  rating: 2,
  review: "3★ 虚无光锥。开局三回合效果命中加成，依赖命中的辅助过渡可用。",
  art: "/assets/lightcones/you-sui.png",
};
