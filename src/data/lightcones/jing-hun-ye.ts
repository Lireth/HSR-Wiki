import type { LightCone } from "../../types/lightcone";

export const jingHunYe: LightCone = {
  id: "jing-hun-ye",
  name: "惊魂夜",
  rarity: 5,
  path: "丰饶",
  baseStats: { hp: 1164, atk: 476, def: 529 },
  skill: {
    name: "深度深呼吸",
    description: "使装备者的能量恢复效率提高 {0}%。我方目标施放终结技时，装备者为当前生命值百分比最低的我方目标回复等同于其 {1}% 生命上限的生命值。当装备者为我方目标提供治疗时，使该目标的攻击力提高 {2}%，该效果最多叠加5层，持续2回合。",
    valuesBySuperimposition: [[12, 10, 2.4], [14, 11, 2.8], [16, 12, 3.2], [18, 13, 3.6], [20, 14, 4.0]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "永寿幼芽", count: 20 },
    { name: "永寿天华", count: 20 },
    { name: "永寿荣枝", count: 14 },
    { name: "丰饶之种", count: 4 },
    { name: "生命之芽", count: 12 },
    { name: "永恒之花", count: 15 },
  ],
  recommendedCharacters: [
    { id: "huohuo", reason: "专属光锥，回能与治疗联动增幅全队攻击。" },
    { id: "lingsha", reason: "高频治疗角色，稳定叠加攻击增益层数。" },
  ],
  rating: 5,
  review: "5★ 丰饶辅助治疗毕业光锥，回能、群体回复与攻击增益兼备。",
  art: "/assets/lightcones/jing-hun-ye.png",
};
