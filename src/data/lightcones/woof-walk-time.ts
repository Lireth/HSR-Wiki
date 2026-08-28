import type { LightCone } from "../../types/lightcone";

export const woofWalkTime: LightCone = {
  id: "woof-walk-time",
  name: "汪！散步时间！",
  rarity: 4,
  path: "毁灭",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "快溜",
    description: "使装备者的攻击力提高 {0}%，对处于【灼烧】或【裂伤】状态的敌方目标造成的伤害提高 {1}%，该效果对持续伤害也会生效。",
    valuesBySuperimposition: [[10, 16], [12, 20], [15, 24], [17, 28], [20, 32]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 118000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "luka", reason: "裂伤施加者，双段增伤与自身机制天然契合。" },
    { id: "guinaifen", reason: "灼烧施加者，持续伤害增伤收益显著。" },
    { id: "arlan", reason: "攻击力常驻加成，强化雷属性单体输出。" },
  ],
  rating: 3,
  review: "4★ 毁灭光锥。攻击力常驻加成，灼烧或裂伤体系下增伤可观，卢卡、桂乃芬等角色的低配良品。",
  art: "/assets/lightcones/woof-walk-time.png",
};
