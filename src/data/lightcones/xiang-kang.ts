import type { LightCone } from "../../types/lightcone";

export const xiangKang: LightCone = {
  id: "xiang-kang",
  name: "相抗",
  rarity: 3,
  path: "巡猎",
  baseStats: { hp: 740, atk: 370, def: 264 },
  skill: {
    name: "联盟",
    description: "使装备者在消灭敌方目标后，速度提高 {0}%，持续2回合。",
    valuesBySuperimposition: [10, 12, 14, 16, 18],
  },
  ascensionMaterials: [
  { name: "信用点", count: 231000 },
  { name: "古代零件", count: 12 },
  { name: "古代转轴", count: 10 },
  { name: "古代引擎", count: 8 },
  { name: "猎兽之矢", count: 2 },
  { name: "屠魔之矢", count: 6 },
  { name: "逐星之矢", count: 9 },
  ],
  recommendedCharacters: [
    { id: "seele", reason: "击杀后提速，配合再动循环更顺畅。" },
    { id: "sushang", reason: "击杀提速强化机动，输出节奏契合。" },
  ],
  rating: 2,
  review: "3★ 巡猎光锥。击杀后速度提升，改善出手循环，过渡可用。",
  art: "/assets/lightcones/xiang-kang.png",
};
