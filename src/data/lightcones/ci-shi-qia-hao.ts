import type { LightCone } from "../../types/lightcone";

export const ciShiQiaHao: LightCone = {
  id: "ci-shi-qia-hao",
  name: "此时恰好",
  rarity: 4,
  path: "丰饶",
  baseStats: { hp: 952, atk: 423, def: 396 },
  skill: {
    name: "折射的视线",
    description: "使装备者的效果抵抗提高 {0}%，并使装备者的治疗量提高，提高数值等同于效果抵抗的 {1}%，最多使治疗量提高 {2}%。",
    valuesBySuperimposition: [[16, 33, 15], [20, 36, 18], [24, 39, 21], [28, 42, 24], [32, 45, 27]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "工造机杼", count: 15 },
  { name: "工造迴轮", count: 15 },
  { name: "工造浑心", count: 12 },
  { name: "丰饶之种", count: 3 },
  { name: "生命之芽", count: 9 },
  { name: "永恒之花", count: 12 },
  ],
  recommendedCharacters: [
    { id: "huohuo", reason: "效果抵抗契合天赋，治疗量随之提升。" },
    { id: "gallagher", reason: "效果抵抗防控，治疗量提升稳定。" },
  ],
  rating: 3,
  review: "4★ 丰饶光锥。效果抵抗转治疗量，防控制防暴毙，功能奶优选。",
  art: "/assets/lightcones/ci-shi-qia-hao.png",
};
