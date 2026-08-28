import type { LightCone } from "../../types/lightcone";

export const yuZhouShiChangQuShi: LightCone = {
  id: "yu-zhou-shi-chang-qu-shi",
  name: "宇宙市场趋势",
  rarity: 4,
  path: "存护",
  baseStats: { hp: 1058, atk: 370, def: 396 },
  skill: {
    name: "新一轮洗牌",
    description: "使装备者的防御力提高 {0}%。当装备者受到攻击后，有 {1}% 的基础概率使敌方目标陷入灼烧状态，每回合造成等同于装备者 {2}% 防御力的持续伤害，持续2回合。",
    valuesBySuperimposition: [[16, 100, 40], [20, 105, 50], [24, 110, 60], [28, 115, 70], [32, 120, 80]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 12 },
    { name: "青铜的执着", count: 3 },
    { name: "寒铁的誓言", count: 9 },
    { name: "琥珀的坚守", count: 12 },
  ],
  recommendedCharacters: [
    { id: "fuxuan", reason: "受击频繁，稳定挂灼烧供队友触发。" },
    { id: "aventurine", reason: "高防御吃满加成，反击挂负面。" },
  ],
  rating: 4,
  review: "4★ 存护光锥。防御加成并稳定施加灼烧，负面状态体系队伍核心配件。",
  art: "/assets/lightcones/yu-zhou-shi-chang-qu-shi.png",
};
