import type { LightCone } from "../../types/lightcone";

export const momentOfVictory: LightCone = {
  id: "moment-of-victory",
  name: "制胜的瞬间",
  rarity: 5,
  path: "存护",
  baseStats: { hp: 1058, atk: 532, def: 496 },
  skill: {
    name: "决胜时刻",
    description: "使装备者的防御力提高 {0}%，装备者受到敌方攻击后额外恢复 4 点能量。",
    valuesBySuperimposition: [24, 28, 32, 36, 40],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "gepard", reason: "专属光锥，防御转护盾量与受击回能全面强化。" },
    { id: "fuxuan", reason: "高防御面板提升生存上限，减伤体系更稳固。" },
    { id: "march7th", reason: "护盾量吃防御加成，前期护盾手的优质上位选择。" },
  ],
  rating: 4,
  review: "存护通用毕业光锥。高额防御加成与受击回能兼顾生存与技能循环，杰帕德携带收益最大。",
  art: "/assets/lightcones/moment-of-victory.svg",
};
