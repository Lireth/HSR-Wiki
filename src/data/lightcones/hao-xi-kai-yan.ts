import type { LightCone } from "../../types/lightcone";

export const haoXiKaiYan: LightCone = {
  id: "hao-xi-kai-yan",
  name: "好戏开演",
  rarity: 4,
  path: "虚无",
  baseStats: { hp: 1058, atk: 476, def: 264 },
  skill: {
    name: "自娱自乐",
    description: "装备者对敌方目标施加负面状态后，获得一层【戏法】，每层【戏法】使装备者造成的伤害提高{0}%，最多叠加3层，持续1回合。当装备者的效果命中大于等于80%时，攻击力提高{1}%。",
    valuesBySuperimposition: [
      [6, 20],
      [7, 24],
      [8, 28],
      [9, 32],
      [10, 36],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠕动原核", count: 12 },
    { name: "灼情之灵", count: 3 },
    { name: "星火之精", count: 9 },
    { name: "焚天之魔", count: 12 },
  ],
  recommendedCharacters: [
    { id: "sampo", reason: "高频挂风化叠层，命中轻松达标。" },
    { id: "black-swan", reason: "四星备选，施加负面即可增伤。" },
  ],
  rating: 3,
  review: "需高频挂负面与命中门槛，泛用性一般。",
  art: "/assets/lightcones/hao-xi-kai-yan.png",
};
