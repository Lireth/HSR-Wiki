import type { LightCone } from "../../types/lightcone";

export const mengDeMengTaiQi: LightCone = {
  id: "meng-de-meng-tai-qi",
  name: "梦的蒙太奇",
  rarity: 4,
  path: "丰饶",
  baseStats: { hp: 952, atk: 423, def: 396 },
  skill: {
    name: "学院式剪接",
    description: "使装备者的速度提高 {0}%，攻击处于弱点击破状态下的敌方目标后，恢复 {1} 点能量，该效果每回合最多触发2次。",
    valuesBySuperimposition: [
      [8, 3],
      [9, 3.5],
      [10, 4],
      [11, 4.5],
      [12, 5],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 12 },
    { name: "异木种籼", count: 3 },
    { name: "滋长花蜜", count: 9 },
    { name: "万相果实", count: 12 },
  ],
  recommendedCharacters: [
    { id: "gallagher", reason: "击破流频繁战技，速度与回能双收益。" },
    { id: "lingsha", reason: "高速丰饶受益速度加成，强化循环。" },
  ],
  rating: 3,
  review: "定位尴尬的四星丰饶，速度回能平平，多数场景不如等效交换。",
  art: "/assets/lightcones/meng-de-meng-tai-qi.png",
};
