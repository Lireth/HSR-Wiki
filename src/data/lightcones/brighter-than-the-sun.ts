import type { LightCone } from "../../types/lightcone";

export const brighterThanTheSun: LightCone = {
  id: "brighter-than-the-sun",
  name: "比阳光更明亮的",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 1058, atk: 635, def: 396 },
  skill: {
    name: "抵死",
    description: "使装备者的暴击率提高 {0}%。当装备者施放普攻时，获得 1 层【龙吟】，持续 2 回合；每层【龙吟】使装备者的攻击力提高 {1}%，能量恢复效率提高 {2}%。【龙吟】最多叠加 2 层。",
    valuesBySuperimposition: [[18, 18, 6], [21, 21, 7], [24, 24, 8], [27, 27, 9], [30, 30, 10]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "danhenglunae", reason: "专属光锥，多段强化普攻下攻击与回能叠满。" },
  ],
  rating: 5,
  review: "5★ 毁灭光锥，丹恒•饮月专属。暴击、攻击与回能全面强化高频普攻输出循环。",
  art: "/assets/lightcones/brighter-than-the-sun.svg",
};
