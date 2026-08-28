import type { LightCone } from "../../types/lightcone";

export const liMingQiaRuCiRanShao: LightCone = {
  id: "li-ming-qia-ru-ci-ran-shao",
  name: "黎明恰如此燃烧",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 952, atk: 687, def: 396 },
  skill: {
    name: "失却",
    description: "使装备者的基础速度提高 {0}，造成伤害时无视目标 {1}% 的防御力。装备者施放终结技后，获得【烈阳】，回合开始时移除。持有【烈阳】时，装备者造成的伤害提高 {2}%。",
    valuesBySuperimposition: [
      [12, 18, 60],
      [14, 22, 78],
      [16, 27, 96],
      [18, 31, 114],
      [20, 36, 132],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "预兆似有若无", count: 20 },
    { name: "悲鸣由远及近", count: 20 },
    { name: "叹息漫无止息", count: 14 },
    { name: "步离犬牙", count: 4 },
    { name: "狼毒锯牙", count: 12 },
    { name: "月狂獠牙", count: 15 },
  ],
  recommendedCharacters: [
    { id: "phainon", reason: "白厄专属，终结技后烈阳增伤巨大。" },
    { id: "mydei", reason: "终结技流毁灭，吃满增伤窗口期。" },
  ],
  rating: 5,
  review: "白厄专属，无视防御与烈阳132%增伤爆发惊人。",
  art: "/assets/lightcones/li-ming-qia-ru-ci-ran-shao.png",
};
