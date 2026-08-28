import type { LightCone } from "../../types/lightcone";

export const mengYingGuiYuHeChu: LightCone = {
  id: "meng-ying-gui-yu-he-chu",
  name: "梦应归于何处",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 1164, atk: 476, def: 529 },
  skill: {
    name: "蜕变",
    description: "使装备者的击破特攻提高{0}%。当装备者对敌方目标造成击破伤害时，使敌方陷入【溃败】状态，持续2回合。【溃败】状态下目标受到装备者造成的击破伤害提高{1}%，速度降低20%，同类效果无法叠加。",
    valuesBySuperimposition: [
      [60, 24],
      [70, 28],
      [80, 32],
      [90, 36],
      [100, 40],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "思绪末屑", count: 20 },
    { name: "印象残晶", count: 20 },
    { name: "欲念碎镜", count: 14 },
    { name: "步离犬牙", count: 4 },
    { name: "狼毒锯牙", count: 12 },
    { name: "月狂獠牙", count: 15 },
  ],
  recommendedCharacters: [
    { id: "firefly", reason: "流萤专属，击破特攻与溃败增伤核心。" },
    { id: "xueyi", reason: "击破流毁灭，无视增伤收益直接。" },
  ],
  rating: 5,
  review: "流萤专属，击破流核心增伤。",
  art: "/assets/lightcones/meng-ying-gui-yu-he-chu.png",
};
