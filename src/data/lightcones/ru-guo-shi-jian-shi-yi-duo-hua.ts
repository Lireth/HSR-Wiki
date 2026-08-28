import type { LightCone } from "../../types/lightcone";

export const ruGuoShiJianShiYiDuoHua: LightCone = {
  id: "ru-guo-shi-jian-shi-yi-duo-hua",
  name: "如果时间是一朵花",
  rarity: 5,
  path: "和谐",
  baseStats: { hp: 1270, atk: 529, def: 396 },
  skill: {
    name: "希冀",
    description: "使装备者的暴击伤害提高 {0}%。装备者施放追加攻击后额外恢复12点能量，并获得【谒示】，持续2回合。当装备者持有【谒示】时，我方全体目标的暴击伤害提高 {1}%。进入战斗时，装备者恢复21点能量，并获得【谒示】，持续2回合。",
    valuesBySuperimposition: [
      [36, 48],
      [42, 60],
      [48, 72],
      [54, 84],
      [60, 96],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "恐惧踏碎血肉", count: 20 },
    { name: "勇气撕裂胸膜", count: 20 },
    { name: "荣耀洗礼身躯", count: 14 },
    { name: "云际音符", count: 4 },
    { name: "空际小节", count: 12 },
    { name: "天外乐章", count: 15 },
  ],
  recommendedCharacters: [
    { id: "tribbie", reason: "缇宝专属，追加攻击高频回能循环。" },
    { id: "robin", reason: "暴伤光环加持，强化全队爆发上限。" },
  ],
  rating: 5,
  review: "缇宝专属，追加攻击回能与全队暴伤96%提升巨大。",
  art: "/assets/lightcones/ru-guo-shi-jian-shi-yi-duo-hua.png",
};
