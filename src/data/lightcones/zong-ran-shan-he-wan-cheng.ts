import type { LightCone } from "../../types/lightcone";

export const zongRanShanHeWanCheng: LightCone = {
  id: "zong-ran-shan-he-wan-cheng",
  name: "纵然山河万程",
  rarity: 5,
  path: "存护",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "新鳞",
    description: "使装备者的攻击力提高 {0}%。装备者施放终结技时，为我方全体回复等同于装备者攻击力 {1}% 的生命值，额外为当前生命值最低的角色回复等同于装备者攻击力 {2}% 的生命值，并使我方全体获得【卫戍】，【卫戍】持续3回合。获得【卫戍】的目标，造成的伤害提高 {3}%，若目标拥有召唤物则造成的伤害额外提高 {4}%。",
    valuesBySuperimposition: [
      [64, 80, 96, 112, 128],
      [10, 12, 15, 17, 20],
      [10, 12, 15, 17, 20],
      [24, 30, 36, 42, 48],
      [12, 15, 18, 21, 24],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "恐惧踏碎血肉", count: 20 },
    { name: "勇气撕裂胸膛", count: 20 },
    { name: "荣耀洗礼身躯", count: 14 },
    { name: "散逸星砂", count: 4 },
    { name: "流星棱晶", count: 12 },
    { name: "神体琥珀", count: 15 },
  ],
  recommendedCharacters: [
    { id: "danheng-permansor", reason: "腾荒专属，攻击治疗与卫戍增伤全覆盖。" },
    { id: "aventurine", reason: "按攻击力结盾，攻击加成同步强化输出。" },
  ],
  rating: 5,
  review: "腾荒专属，攻血兼顾兼具治疗与卫戍全队增伤。",
  art: "/assets/lightcones/zong-ran-shan-he-wan-cheng.png",
};
