import type { LightCone } from "../../types/lightcone";

export const bieRangShiJieJingXiaLai: LightCone = {
  id: "bie-rang-shi-jie-jing-xia-lai",
  name: "别让世界静下来",
  rarity: 4,
  path: "智识",
  baseStats: { hp: 846, atk: 476, def: 396 },
  skill: {
    name: "声音的力量",
    description: "使装备者进入战斗时立即恢复 {0} 点能量，同时使其终结技造成的伤害提高 {1}%。",
    valuesBySuperimposition: [[20, 32], [23, 40], [26, 48], [29, 56], [32, 64]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "古代零件", count: 15 },
  { name: "古代转轴", count: 15 },
  { name: "古代引擎", count: 12 },
  { name: "灵感之钥", count: 3 },
  { name: "启迪之钥", count: 9 },
  { name: "智识之钥", count: 12 },
  ],
  recommendedCharacters: [
    { id: "jingyuan", reason: "终结技核心输出，开局回能加速首轮爆发。" },
    { id: "serval", reason: "大招流输出手，终结技增伤收益直接。" },
  ],
  rating: 4,
  review: "4★ 智识光锥。开局回能加终结技大增伤，大招流输出手四星优选。",
  art: "/assets/lightcones/bie-rang-shi-jie-jing-xia-lai.png",
};
