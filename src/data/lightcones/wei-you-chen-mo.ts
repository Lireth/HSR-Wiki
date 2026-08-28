import type { LightCone } from "../../types/lightcone";

export const weiYouChenMo: LightCone = {
  id: "wei-you-chen-mo",
  name: "唯有沉默",
  rarity: 4,
  path: "巡猎",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "记录",
    description: "使装备者的攻击力提高 {0}%。当场上的敌方目标数量小于等于2时，装备者的暴击率提高 {1}%。",
    valuesBySuperimposition: [
      [16, 12],
      [20, 15],
      [24, 18],
      [28, 21],
      [32, 24],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "铁卫扣饰", count: 15 },
    { name: "铁卫军徽", count: 15 },
    { name: "铁卫勋章", count: 12 },
    { name: "猎兽之矢", count: 3 },
    { name: "屠魔之矢", count: 9 },
    { name: "逐星之矢", count: 12 },
  ],
  recommendedCharacters: [
    { id: "seele", reason: "单核点杀场景常驻满暴击加成，输出收益最大化。" },
    { id: "danheng", reason: "单体巡猎对王作战，攻击暴击双词条全覆盖。" },
  ],
  rating: 3,
  review: "攻击暴击双加成，Boss战与清杂兼顾的巡猎过渡。",
  art: "/assets/lightcones/wei-you-chen-mo.png",
};
