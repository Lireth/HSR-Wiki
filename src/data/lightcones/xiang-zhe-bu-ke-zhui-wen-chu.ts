import type { LightCone } from "../../types/lightcone";

export const xiangZheBuKeZhuiWenChu: LightCone = {
  id: "xiang-zhe-bu-ke-zhui-wen-chu",
  name: "向着不可追问处",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 952, atk: 635, def: 463 },
  skill: {
    name: "思维游戏",
    description: "使装备者的暴击率提高 {0}%。装备者施放终结技时，使装备者造成的战技和终结技伤害提高 {1}%，持续3回合。装备者施放终结技后，若本次终结技消耗的能量大于等于140点，恢复1个战技点。",
    valuesBySuperimposition: [
      [12, 60],
      [14, 70],
      [16, 80],
      [18, 90],
      [20, 100],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "熄灭原核", count: 20 },
    { name: "微光原核", count: 20 },
    { name: "蠹动原核", count: 14 },
    { name: "凌乱草图", count: 4 },
    { name: "动态线稿", count: 12 },
    { name: "精致色稿", count: 15 },
  ],
  recommendedCharacters: [
    { id: "the-herta", reason: "大黑塔专属，高耗能终结技完美触发。" },
    { id: "jade", reason: "终结技高耗能，可稳定返还战技点。" },
  ],
  rating: 5,
  review: "大黑塔专属，暴击率与终结技爆发兼顾，返还战技点。",
  art: "/assets/lightcones/xiang-zhe-bu-ke-zhui-wen-chu.png",
};
