import type { LightCone } from "../../types/lightcone";

export const weiLeMingRiDeLvTu: LightCone = {
  id: "wei-le-ming-ri-de-lv-tu",
  name: "为了明日的旅途",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "联结",
    description: "使装备者的攻击力提高{0}%。装备者施放终结技后，造成的伤害提高{1}%，持续1回合。",
    valuesBySuperimposition: [
      [16, 18],
      [20, 21],
      [24, 24],
      [28, 27],
      [32, 30],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 12 },
    { name: "云际音符", count: 3 },
    { name: "空际小节", count: 9 },
    { name: "天外乐章", count: 12 },
  ],
  recommendedCharacters: [
    { id: "trailblazer-harmony", reason: "同谐主终结技频次高，增伤稳定。" },
    { id: "tingyun", reason: "攻击加成提升辅助输出下限。" },
  ],
  rating: 3,
  review: "活动免费，攻击与终结技增伤中规中矩。",
  art: "/assets/lightcones/wei-le-ming-ri-de-lv-tu.png",
};
