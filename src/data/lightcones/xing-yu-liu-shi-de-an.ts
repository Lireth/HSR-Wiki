import type { LightCone } from "../../types/lightcone";

export const xingYuLiuShiDeAn: LightCone = {
  id: "xing-yu-liu-shi-de-an",
  name: "行于流逝的岸",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 1058, atk: 635, def: 396 },
  skill: {
    name: "司渡",
    description: "使装备者的暴击伤害提高{0}%。当装备者击中敌方目标时，使敌方陷入【泡影】状态，持续1回合。装备者每次攻击时，对每个目标只可触发1次。装备者对陷入【泡影】状态的目标造成的伤害提高{1}%，终结技造成的伤害额外提高{2}%。",
    valuesBySuperimposition: [
      [36, 24, 24],
      [42, 28, 28],
      [48, 32, 32],
      [54, 36, 36],
      [60, 40, 40],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "蓄梦元件", count: 20 },
    { name: "流梦阀门", count: 20 },
    { name: "造梦马达", count: 14 },
    { name: "灼情之灵", count: 4 },
    { name: "星火之精", count: 12 },
    { name: "焚天之魔", count: 15 },
  ],
  recommendedCharacters: [
    { id: "acheron", reason: "黄泉专属，暴伤与终结技增伤满配。" },
    { id: "jiaoqiu", reason: "高频攻击触发泡影，终结技收益高。" },
  ],
  rating: 5,
  review: "黄泉专属，暴伤与终结技增伤无可替代。",
  art: "/assets/lightcones/xing-yu-liu-shi-de-an.png",
};
