import type { LightCone } from "../../types/lightcone";

export const landauSChoice: LightCone = {
  id: "landau-s-choice",
  name: "朗道的选择",
  rarity: 4,
  path: "存护",
  baseStats: { hp: 952, atk: 423, def: 396 },
  skill: {
    name: "时光如梭",
    description: "使装备者受到敌方目标攻击的几率提高 16%，受到的伤害降低 {0}%。",
    valuesBySuperimposition: [16, 18, 20, 22, 24],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "铁卫扣饰", count: 15 },
  { name: "铁卫军徽", count: 15 },
  { name: "铁卫勋章", count: 12 },
  { name: "青铜的执着", count: 3 },
  { name: "寒铁的誓言", count: 9 },
  { name: "琥珀的坚守", count: 12 },
  ],
  recommendedCharacters: [
    { id: "gepard", reason: "拉高嘲讽帮全队吸火，减伤降低护盾真空期的暴毙风险。" },
    { id: "march7th", reason: "嘲讽与减伤便于保护队友，前期生存位实用过渡。" },
  ],
  rating: 3,
  review: "4★ 生存向光锥。拉高嘲讽与减伤帮助护盾手稳定承伤，缺 5★ 存护锥时的可靠过渡。",
  art: "/assets/lightcones/landau-s-choice.png",
};
