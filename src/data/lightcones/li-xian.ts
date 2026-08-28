import type { LightCone } from "../../types/lightcone";

export const liXian: LightCone = {
  id: "li-xian",
  name: "离弦",
  rarity: 3,
  path: "巡猎",
  baseStats: { hp: 740, atk: 370, def: 264 },
  skill: {
    name: "鸣角",
    description: "使装备者消灭敌方目标后，攻击力提高 {0}%，持续3回合。",
    valuesBySuperimposition: [24, 30, 36, 42, 48],
  },
  ascensionMaterials: [
  { name: "信用点", count: 231000 },
  { name: "铁卫扣饰", count: 12 },
  { name: "铁卫军徽", count: 10 },
  { name: "铁卫勋章", count: 8 },
  { name: "猎兽之矢", count: 2 },
  { name: "屠魔之矢", count: 6 },
  { name: "逐星之矢", count: 9 },
  ],
  recommendedCharacters: [
    { id: "seele", reason: "击杀再动配合攻击加成，滚雪球输出。" },
    { id: "danheng", reason: "单体击杀后攻击提升，输出更稳定。" },
  ],
  rating: 2,
  review: "3★ 巡猎光锥。击杀后攻击力提升，适合清杂环境，过渡可用。",
  art: "/assets/lightcones/li-xian.png",
};
