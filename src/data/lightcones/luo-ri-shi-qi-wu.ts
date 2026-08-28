import type { LightCone } from "../../types/lightcone";

export const luoRiShiQiWu: LightCone = {
  id: "luo-ri-shi-qi-wu",
  name: "落日时起舞",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "沉酣",
    description: "使装备者受到攻击的概率大幅提高，暴击伤害提高{0}%。当装备者施放终结技后，获得1层【火舞】，持续2回合，最多叠加2层。每层【火舞】使装备者追加攻击造成的伤害提高{1}%。",
    valuesBySuperimposition: [
      [36, 36],
      [42, 42],
      [48, 48],
      [54, 54],
      [60, 60],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "机杼", count: 20 },
    { name: "迥轮", count: 20 },
    { name: "浑心", count: 14 },
    { name: "步离犬牙", count: 4 },
    { name: "狼毒锯牙", count: 12 },
    { name: "月狂獠牙", count: 15 },
  ],
  recommendedCharacters: [
    { id: "yunli", reason: "云璃专属，暴伤与追加攻击增伤毕业。" },
    { id: "clara", reason: "反击流契合嘲讽，追加伤害翻倍。" },
  ],
  rating: 5,
  review: "反击流核心，云璃专属毕业光锥。",
  art: "/assets/lightcones/luo-ri-shi-qi-wu.png",
};
