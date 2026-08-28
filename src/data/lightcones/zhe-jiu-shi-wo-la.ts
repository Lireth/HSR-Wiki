import type { LightCone } from "../../types/lightcone";

export const zheJiuShiWoLa: LightCone = {
  id: "zhe-jiu-shi-wo-la",
  name: "这就是我啦！",
  rarity: 4,
  path: "存护",
  baseStats: { hp: 846, atk: 370, def: 529 },
  skill: {
    name: "新篇章",
    description: "使装备者防御力提高 {0}%。使装备者施放终结技时造成的伤害值提高，提高数值等同于装备者防御力的 {1}%，该效果每次施放终结技时对每个敌方目标仅生效1次。",
    valuesBySuperimposition: [[16, 60], [20, 75], [24, 90], [28, 105], [32, 120]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "掠夺的本能", count: 15 },
  { name: "篡改的野心", count: 15 },
  { name: "践踏的意志", count: 12 },
  { name: "青铜的执着", count: 3 },
  { name: "寒铁的誓言", count: 9 },
  { name: "琥珀的坚守", count: 12 },
  ],
  recommendedCharacters: [
    { id: "gepard", reason: "防御转终结技伤害，护盾与输出兼顾。" },
    { id: "march7th", reason: "高基础防御提升护盾量与终结技伤害。" },
  ],
  rating: 3,
  review: "4★ 存护光锥。基础防御最高，终结技伤害随防御提升，生存优异。",
  art: "/assets/lightcones/zhe-jiu-shi-wo-la.png",
};
