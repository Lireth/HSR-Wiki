import type { LightCone } from "../../types/lightcone";

export const yuZhouDaShengYi: LightCone = {
  id: "yu-zhou-da-sheng-yi",
  name: "宇宙大生意",
  rarity: 4,
  path: "智识",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "互惠",
    description: "使装备者的攻击力提高 {0}%。敌方目标每拥有1个不同属性的弱点，装备者对其造成的伤害提高 {1}%，最多计入7个。",
    valuesBySuperimposition: [
      [8, 4],
      [10, 5],
      [12, 6],
      [14, 7],
      [16, 8],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膜", count: 15 },
    { name: "荣耀洗礼身躯", count: 12 },
    { name: "凌乱草图", count: 3 },
    { name: "动态线稿", count: 9 },
    { name: "精致色稿", count: 12 },
  ],
  recommendedCharacters: [
    { id: "herta", reason: "多弱点深渊环境增伤可观，过渡实用。" },
    { id: "qingque", reason: "智识过渡输出装，攻击与增伤兼备。" },
  ],
  rating: 3,
  review: "多弱点敌人增伤可观，智识四星过渡可用，上限一般。",
  art: "/assets/lightcones/yu-zhou-da-sheng-yi.png",
};
