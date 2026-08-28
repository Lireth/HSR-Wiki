import type { LightCone } from "../../types/lightcone";

export const renShiLuYinLuShouLie: LightCone = {
  id: "ren-shi-lu-yin-lu-shou-lie",
  name: "忍事录•音律狩猎",
  rarity: 4,
  path: "毁灭",
  baseStats: { hp: 1058, atk: 476, def: 264 },
  skill: {
    name: "开演！",
    description: "使装备者的生命上限提高 {0}%，损失或回复自身生命值后，暴击伤害提高 {1}%，持续2回合，该效果每回合只可触发1次。",
    valuesBySuperimposition: [
      [12, 18],
      [15, 22],
      [18, 27],
      [21, 31],
      [24, 36],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "思绪末屑", count: 15 },
    { name: "印象残晶", count: 15 },
    { name: "欲念碎镜", count: 12 },
    { name: "步离犬牙", count: 3 },
    { name: "狼毒锯牙", count: 9 },
    { name: "月狂獠牙", count: 12 },
  ],
  recommendedCharacters: [
    { id: "blade", reason: "烧血流频繁损血，暴伤常驻高覆盖。" },
    { id: "mydei", reason: "生命机制角色，生命上限与暴伤双收益。" },
  ],
  rating: 4,
  review: "烧血毁灭四星良品，生命上限与暴伤双提升，黑塔商店可换。",
  art: "/assets/lightcones/ren-shi-lu-yin-lu-shou-lie.png",
};
