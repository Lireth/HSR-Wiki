import type { LightCone } from "../../types/lightcone";

export const xueHuoARanShaoQianLu: LightCone = {
  id: "xue-huo-a-ran-shao-qian-lu",
  name: "血火啊，燃烧前路",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 1375, atk: 476, def: 396 },
  skill: {
    name: "远望",
    description: "使装备者的生命上限提高 {0}%，受到的治疗量提高 {1}%，施放战技或终结技时消耗等同于自身 {2}% 生命上限的生命值，并使本次攻击造成的伤害提高 {3}%，若该效果消耗的生命值高于500点，可使伤害额外提高 {4}%。若当前生命值不足，该效果最多使装备者的当前生命值降低至1点。",
    valuesBySuperimposition: [
      [18, 21, 24, 27, 30],
      [20, 25, 30, 35, 40],
      [6, 6.5, 7, 7.5, 8],
      [30, 35, 40, 45, 50],
      [30, 35, 40, 45, 50],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "恐惧踏碎血肉", count: 20 },
    { name: "勇气撕裂胸膜", count: 20 },
    { name: "荣耀洗礼身躯", count: 14 },
    { name: "步离犬牙", count: 4 },
    { name: "狼毒锯牙", count: 12 },
    { name: "月狂獠牙", count: 15 },
  ],
  recommendedCharacters: [
    { id: "mydei", reason: "万敌专属，生命上限与烧血增伤联动。" },
    { id: "blade", reason: "烧血流高频触发增伤，治疗量加成实用。" },
  ],
  rating: 5,
  review: "万敌专属，生命上限、治疗量与烧血增伤层层联动。",
  art: "/assets/lightcones/xue-huo-a-ran-shao-qian-lu.png",
};
