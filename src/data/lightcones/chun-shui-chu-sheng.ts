import type { LightCone } from "../../types/lightcone";

export const chunShuiChuSheng: LightCone = {
  id: "chun-shui-chu-sheng",
  name: "春水初生",
  rarity: 4,
  path: "巡猎",
  baseStats: { hp: 846, atk: 476, def: 396 },
  skill: {
    name: "驱散余寒",
    description: "进入战斗后，使装备者速度提高 {0}%，造成的伤害提高 {1}%。当装备者受到伤害后该效果失效，下个回合结束时该效果恢复。",
    valuesBySuperimposition: [[8, 12], [9, 15], [10, 18], [11, 21], [12, 24]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "古代零件", count: 15 },
  { name: "古代转轴", count: 15 },
  { name: "古代引擎", count: 12 },
  { name: "猎兽之矢", count: 3 },
  { name: "屠魔之矢", count: 9 },
  { name: "逐星之矢", count: 12 },
  ],
  recommendedCharacters: [
    { id: "seele", reason: "速度加成契合再动，无伤增伤易维持。" },
    { id: "feixiao", reason: "高速追击手，增伤与速度双重收益。" },
  ],
  rating: 4,
  review: "4★ 巡猎光锥。速度加成配合增伤，保持无伤时收益接近常驻。",
  art: "/assets/lightcones/chun-shui-chu-sheng.png",
};
