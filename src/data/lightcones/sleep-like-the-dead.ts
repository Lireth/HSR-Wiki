import type { LightCone } from "../../types/lightcone";

export const sleepLikeTheDead: LightCone = {
  id: "sleep-like-the-dead",
  name: "如泥酣眠",
  rarity: 5,
  path: "巡猎",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "美梦",
    description: "使装备者的暴击伤害提高 {0}%。当装备者的普攻或战技伤害未造成暴击时，使自身暴击率提高 {1}%，持续 1 回合。该效果每 3 回合可以触发 1 次。",
    valuesBySuperimposition: [[30, 36], [35, 42], [40, 48], [45, 54], [50, 60]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "猎兽之矢", count: 12 },
    { name: "屠魔之矢", count: 18 },
    { name: "逐星之矢", count: 54 },
  ],
  recommendedCharacters: [
    { id: "seele", reason: "高额暴伤与未暴击补偿，输出下限稳定。" },
    { id: "sushang", reason: "高频单体攻击，暴击补偿机制收益可观。" },
    { id: "danheng", reason: "单体巡猎输出，缺专属时的优质备选。" },
  ],
  rating: 4,
  review: "5★ 巡猎光锥。高额暴伤外加未暴击补偿机制，输出下限稳定，希儿等巡猎主C的通用备选。",
  art: "/assets/lightcones/sleep-like-the-dead.png",
};
