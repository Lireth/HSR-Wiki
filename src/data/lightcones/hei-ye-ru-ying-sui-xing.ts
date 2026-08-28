import type { LightCone } from "../../types/lightcone";

export const heiYeRuYingSuiXing: LightCone = {
  id: "hei-ye-ru-ying-sui-xing",
  name: "黑夜如影随行",
  rarity: 4,
  path: "巡猎",
  baseStats: { hp: 846, atk: 476, def: 396 },
  skill: {
    name: "隐匿",
    description: "使装备者的击破特攻提高{0}%。进入战斗时或造成击破伤害后，速度提高{1}%，持续2回合，该效果每回合只可触发1次。",
    valuesBySuperimposition: [
      [28, 8],
      [35, 9],
      [42, 10],
      [49, 11],
      [56, 12],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "机杼", count: 15 },
    { name: "迥轮", count: 15 },
    { name: "浑心", count: 12 },
    { name: "陨铁弹丸", count: 3 },
    { name: "命定死因", count: 9 },
    { name: "逆时一击", count: 12 },
  ],
  recommendedCharacters: [
    { id: "moze", reason: "貊泽适配，击破与速度提升行动效率。" },
    { id: "boothill", reason: "击破流巡猎，加速契合输出节奏。" },
  ],
  rating: 3,
  review: "巡猎击破过渡，貊泽加速契合。",
  art: "/assets/lightcones/hei-ye-ru-ying-sui-xing.png",
};
