import type { LightCone } from "../../types/lightcone";

export const dianGeGuanZhuBa: LightCone = {
  id: "dian-ge-guan-zhu-ba",
  name: "点个关注吧！",
  rarity: 4,
  path: "巡猎",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "不赞不许走！",
    description: "使装备者普攻和战技造成的伤害提高 {0}%，当装备者的当前能量值等于其能量上限时，该效果额外提高 {1}%。",
    valuesBySuperimposition: [[24, 24], [30, 30], [36, 36], [42, 42], [48, 48]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "工造机柙", count: 15 },
    { name: "工造迴轮", count: 15 },
    { name: "工造浑心", count: 12 },
    { name: "猎兽之矢", count: 3 },
    { name: "屠魔之矢", count: 9 },
    { name: "逐星之矢", count: 12 },
  ],
  recommendedCharacters: [
    { id: "sushang", reason: "普攻战技输出为主，增伤覆盖率较好。" },
    { id: "danheng", reason: "单体战技输出，能量满时增伤更高。" },
  ],
  rating: 2,
  review: "4★ 巡猎光锥。仅增普攻战技且满能量条件苛刻，当前版本泛用性有限。",
  art: "/assets/lightcones/dian-ge-guan-zhu-ba.png",
};
