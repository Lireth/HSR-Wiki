import type { LightCone } from "../../types/lightcone";

export const zaiLanTianXia: LightCone = {
  id: "zai-lan-tian-xia",
  name: "在蓝天下",
  rarity: 4,
  path: "毁灭",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "暖阳麦浪",
    description: "使装备者攻击力提高 {0}%，当装备者消灭敌方目标后，暴击率提高 {1}%，持续3回合。",
    valuesBySuperimposition: [[16, 12], [20, 15], [24, 18], [28, 21], [32, 24]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "永寿幼芽", count: 15 },
  { name: "永寿天华", count: 15 },
  { name: "永寿荣枝", count: 12 },
  { name: "破碎残刃", count: 3 },
  { name: "无生残刃", count: 9 },
  { name: "净世残刃", count: 12 },
  ],
  recommendedCharacters: [
    { id: "clara", reason: "攻击加成常驻，反击清杂易触发暴击。" },
    { id: "hook", reason: "击杀后暴击率提升，输出爆发更稳定。" },
  ],
  rating: 4,
  review: "4★ 毁灭光锥。攻击加成击杀暴击，清杂环境近乎常驻，四星优选。",
  art: "/assets/lightcones/zai-lan-tian-xia.png",
};
