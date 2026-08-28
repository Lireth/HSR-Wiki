import type { LightCone } from "../../types/lightcone";

export const meiYouHuiBaoDeJiaMian: LightCone = {
  id: "mei-you-hui-bao-de-jia-mian",
  name: "没有回报的加冕",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 952, atk: 582, def: 529 },
  skill: {
    name: "骑士之王",
    description: "使装备者的暴击伤害提高 {0}%。施放终结技时，使装备者的攻击力提高 {1}%，若装备者的能量上限大于等于300点，为装备者固定恢复等同于装备者能量上限10%的能量，并再次使装备者的攻击力提高 {2}%，持续2回合。",
    valuesBySuperimposition: [
      [36, 40, 40],
      [45, 50, 50],
      [54, 60, 60],
      [63, 70, 70],
      [72, 80, 80],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "掠夺的本能", count: 20 },
    { name: "窜改的野心", count: 20 },
    { name: "践踏的意志", count: 14 },
    { name: "步离犬牙", count: 4 },
    { name: "狼毒锯牙", count: 12 },
    { name: "月狂獠牙", count: 15 },
  ],
  recommendedCharacters: [
    { id: "saber", reason: "Saber专属，终结技双重增攻与回能完美联动。" },
    { id: "mydei", reason: "能量上限充足，终结技爆发再获大幅增攻。" },
  ],
  rating: 5,
  review: "Saber专属，终结技双重增攻与回能爆发极强。",
  art: "/assets/lightcones/mei-you-hui-bao-de-jia-mian.png",
};
