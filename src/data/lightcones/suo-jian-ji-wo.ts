import type { LightCone } from "../../types/lightcone";

export const suoJianJiWo: LightCone = {
  id: "suo-jian-ji-wo",
  name: "所见即我",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 953, atk: 635, def: 463 },
  skill: {
    name: "随心",
    description:
      "使装备者的攻击力提高 {0}%，能量恢复效率提高 {1}%。装备者施放终结技时，每消耗1点能量值，使本次造成的终结技伤害提高 {2}%，最多提高 {3}%。装备者进入战斗或施放终结技时，使装备者获得【王之娱乐】，持续3回合。当装备者持有【王之娱乐】时，我方全体暴击伤害提高 {4}%，同类效果无法叠加。",
    valuesBySuperimposition: [
      [18, 21, 24, 27, 30],
      [10.0, 12.5, 15.0, 17.5, 20.0],
      [0.20, 0.25, 0.30, 0.35, 0.40],
      [72, 90, 108, 126, 144],
      [24, 30, 36, 42, 48],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "熄灭原核", count: 20 },
    { name: "微光原核", count: 20 },
    { name: "蠢动原核", count: 14 },
    { name: "四相，过河照君", count: 4 },
    { name: "六合，王手飞车", count: 12 },
    { name: "万色，愚者自将", count: 15 },
  ],
  recommendedCharacters: [
    { id: "gilgamesh", reason: "高耗能终结技核心，终结技增伤收益拉满。" },
    { id: "mydei", reason: "毁灭主C终结技流，全队暴伤增益显著。" },
  ],
  rating: 5,
  review: "终结技毁灭毕业光锥，能耗转增伤并全队暴伤提升。",
  art: "/assets/lightcones/suo-jian-ji-wo.png",
};
