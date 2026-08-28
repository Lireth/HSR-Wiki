import type { LightCone } from "../../types/lightcone";

export const landauSChoice: LightCone = {
  id: "landau-s-choice",
  name: "朗道的选择",
  rarity: 4,
  path: "存护",
  baseStats: { hp: 1016, atk: 470, def: 429 },
  skill: {
    name: "钢铁意志",
    description: "使装备者受到敌方攻击的几率提高 24%，受到的伤害降低 {0}%。",
    valuesBySuperimposition: [16, 17, 18, 19, 20],
  },
  ascensionMaterials: [
    { name: "信用点", count: 118000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "gepard", reason: "拉高嘲讽帮全队吸火，减伤降低护盾真空期的暴毙风险。" },
    { id: "march7th", reason: "嘲讽与减伤便于保护队友，前期生存位实用过渡。" },
  ],
  rating: 3,
  review: "4★ 生存向光锥。拉高嘲讽与减伤帮助护盾手稳定承伤，缺 5★ 存护锥时的可靠过渡。",
  art: "/assets/lightcones/landau-s-choice.svg",
};
