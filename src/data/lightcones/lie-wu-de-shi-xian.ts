import type { LightCone } from "../../types/lightcone";

export const lieWuDeShiXian: LightCone = {
  id: "lie-wu-de-shi-xian",
  name: "猎物的视线",
  rarity: 4,
  path: "虚无",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "自信",
    description: "使装备者的效果命中提高 {0}%，同时造成的持续伤害提高 {1}%。",
    valuesBySuperimposition: [[20, 24], [25, 30], [30, 36], [35, 42], [40, 48]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "古代零件", count: 15 },
  { name: "古代转轴", count: 15 },
  { name: "古代引擎", count: 12 },
  { name: "黯淡黑曜", count: 3 },
  { name: "虚空黑曜", count: 9 },
  { name: "沉沦黑曜", count: 12 },
  ],
  recommendedCharacters: [
    { id: "kafka", reason: "DOT核心，持续伤害与命中双收益。" },
    { id: "sampo", reason: "风化施加者，命中与DOT增伤契合。" },
  ],
  rating: 4,
  review: "4★ 虚无光锥。效果命中与持续伤害双加成，DOT队四星核心良品。",
  art: "/assets/lightcones/lie-wu-de-shi-xian.png",
};
