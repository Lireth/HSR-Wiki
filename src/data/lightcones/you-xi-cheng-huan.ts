import type { LightCone } from "../../types/lightcone";

export const youXiChengHuan: LightCone = {
  id: "you-xi-cheng-huan",
  name: "游戏尘寰",
  rarity: 5,
  path: "和谐",
  baseStats: { hp: 1164, atk: 529, def: 463 },
  skill: {
    name: "善变",
    description: "使装备者的暴击伤害提高{0}%。战斗开始时，使装备者获得【假面】，持续3回合。当装备者持有【假面】时，装备者的队友暴击率提高{1}%，暴击伤害提高{2}%。装备者每恢复1个战技点，获得1层【彩灿】，恢复时溢出的战技点也会被计算在内。当【彩灿】达到4层后，移除所有【彩灿】并获得【假面】，持续4回合。",
    valuesBySuperimposition: [
      [32, 10, 28],
      [39, 11, 35],
      [46, 12, 42],
      [53, 13, 49],
      [60, 14, 56],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "思绪末屑", count: 20 },
    { name: "印象残晶", count: 20 },
    { name: "欲念碎镜", count: 14 },
    { name: "云际音符", count: 4 },
    { name: "空际小节", count: 12 },
    { name: "天外乐章", count: 15 },
  ],
  recommendedCharacters: [
    { id: "sparkle", reason: "战技点循环契合彩灿，双爆辅助拉满。" },
    { id: "robin", reason: "队友暴击增益覆盖全队输出循环。" },
  ],
  rating: 5,
  review: "爆伤辅核神器，全队双爆大幅提升。",
  art: "/assets/lightcones/you-xi-cheng-huan.png",
};
