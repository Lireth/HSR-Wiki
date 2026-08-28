import type { LightCone } from "../../types/lightcone";

export const dayOneOfMyNewLife: LightCone = {
  id: "day-one-of-my-new-life",
  name: "余生的第一天",
  rarity: 4,
  path: "存护",
  baseStats: { hp: 952, atk: 370, def: 463 },
  skill: {
    name: "此刻定格",
    description: "使装备者的防御力提高 {0}%。进入战斗后，使我方全体的全属性抗性提高 {1}%。同类技能无法重复生效。",
    valuesBySuperimposition: [[16, 8], [18, 9], [20, 10], [22, 11], [24, 12]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 118000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "gepard", reason: "防御加成放大护盾量，全队抗性提升整体容错。" },
    { id: "fuxuan", reason: "防御与抗性双重收益，强化全队生存兜底。" },
    { id: "march7th", reason: "防御加成直接提升护盾与反击数值。" },
  ],
  rating: 4,
  review: "4★ 存护光锥。防御与全队抗性双重收益，杰帕德等护盾角色的平民优选。",
  art: "/assets/lightcones/day-one-of-my-new-life.svg",
};
