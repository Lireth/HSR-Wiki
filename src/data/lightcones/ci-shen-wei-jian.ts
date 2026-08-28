import type { LightCone } from "../../types/lightcone";

export const ciShenWeiJian: LightCone = {
  id: "ci-shen-wei-jian",
  name: "此身为剑",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 1164, atk: 582, def: 396 },
  skill: {
    name: "执此宵玉",
    description: "使装备者的暴击伤害提高 {0}%。当队友受到攻击或消耗生命值后，装备者获得1层【月蚀】，最多叠加3层。每层【月蚀】使装备者下一次攻击造成的伤害提高 {1}%。叠满3层时，额外使该次攻击无视目标 {2}% 的防御力。该效果在装备者施放攻击后解除。",
    valuesBySuperimposition: [[20, 14.0, 12], [23, 16.5, 14], [26, 19.0, 16], [29, 21.5, 18], [32, 24.0, 20]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "永寿幼芽", count: 20 },
    { name: "永寿天华", count: 20 },
    { name: "永寿荣枝", count: 14 },
    { name: "破碎残刃", count: 4 },
    { name: "无生残刃", count: 12 },
    { name: "净世残刃", count: 15 },
  ],
  recommendedCharacters: [
    { id: "jingliu", reason: "专属光锥，队友烧血稳定叠满月蚀增伤。" },
    { id: "blade", reason: "自身与队友烧血快速叠层，吃满减防效果。" },
  ],
  rating: 5,
  review: "5★ 毁灭暴伤光锥天花板，镜流专属，叠层增伤加无视防御极为强力。",
  art: "/assets/lightcones/ci-shen-wei-jian.png",
};
