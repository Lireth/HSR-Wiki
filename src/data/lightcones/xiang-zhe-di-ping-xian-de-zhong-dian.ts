import type { LightCone } from "../../types/lightcone";

export const xiangZheDiPingXianDeZhongDian: LightCone = {
  id: "xiang-zhe-di-ping-xian-de-zhong-dian",
  name: "向着地平线的终点",
  rarity: 4,
  path: "巡猎",
  baseStats: { hp: 847, atk: 476, def: 397 },
  skill: {
    name: "超越",
    description:
      "使装备者的攻击力提高 {0}%。装备者施放追加攻击后，使装备者的暴击伤害提高 {1}%，持续2回合，该效果最多叠加10层。",
    valuesBySuperimposition: [
      [12, 3],
      [15, 3.5],
      [18, 4],
      [21, 4.5],
      [24, 5],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "童真蜡笔", count: 15 },
    { name: "造梦蕊钢", count: 15 },
    { name: "梦现管锥", count: 12 },
    { name: "陨铁弹丸", count: 3 },
    { name: "命定死因", count: 9 },
    { name: "逆时一击", count: 12 },
  ],
  recommendedCharacters: [
    { id: "feixiao", reason: "追加攻击高频触发，暴伤快速叠至满层。" },
    { id: "topaz", reason: "追加攻击流核心，攻击力与暴伤双重收益。" },
  ],
  rating: 3,
  review: "活动限定巡猎装，追加攻击叠层暴伤，叠满后收益可观。",
  art: "/assets/lightcones/xiang-zhe-di-ping-xian-de-zhong-dian.png",
};
