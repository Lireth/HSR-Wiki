import type { LightCone } from "../../types/lightcone";

export const jiangGuangYinZhiChengHuangJin: LightCone = {
  id: "jiang-guang-yin-zhi-cheng-huang-jin",
  name: "将光阴织成黄金",
  rarity: 5,
  path: "记忆",
  baseStats: { hp: 1058, atk: 635, def: 396 },
  skill: {
    name: "创设",
    description: "使装备者的基础速度提高 {0}，装备者和装备者的忆灵在攻击后使装备者获得1层【织锦】，每层【织锦】使装备者和装备者的忆灵暴击伤害提高 {1}%，最多叠加6层。叠加至上限时，每层【织锦】额外使造成的普攻伤害提高 {2}%。",
    valuesBySuperimposition: [
      [12, 9, 9],
      [14, 10.5, 10.5],
      [16, 12, 12],
      [18, 13.5, 13.5],
      [20, 15, 15],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "恐惧踏碎血肉", count: 20 },
    { name: "勇气撕裂胸膜", count: 20 },
    { name: "荣耀洗礼身躯", count: 14 },
    { name: "思量的种", count: 4 },
    { name: "末那芽苗", count: 12 },
    { name: "阿赖耶华", count: 15 },
  ],
  recommendedCharacters: [
    { id: "aglaea", reason: "阿格莱雅专属，速度与叠层暴伤收益极高。" },
    { id: "castorice", reason: "忆灵高频攻击快速叠层，全程吃满。" },
  ],
  rating: 5,
  review: "阿格莱雅专属，基础速度与六层暴伤叠层收益极高。",
  art: "/assets/lightcones/jiang-guang-yin-zhi-cheng-huang-jin.png",
};
