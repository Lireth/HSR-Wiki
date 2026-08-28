import type { LightCone } from "../../types/lightcone";

export const zhuoJinLianYuDeXinHai: LightCone = {
  id: "zhuo-jin-lian-yu-de-xin-hai",
  name: "灼尽炼狱的新骸",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 1376, atk: 423, def: 463 },
  skill: {
    name: "淬炼",
    description:
      "使装备者的生命上限提高 {0}%，装备者回合开始时，固定恢复20点能量，该效果每个波次可触发1次。装备者施放战技攻击后，使目标陷入【炼狱】状态，持续2回合，【炼狱】状态下目标受到的暴击伤害提高 {1}%，受到来自装备者的暴击伤害额外提高 {2}%。",
    valuesBySuperimposition: [
      [30, 30, 30],
      [37, 37, 37],
      [45, 45, 45],
      [52, 52, 52],
      [60, 60, 60],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "童真蜡笔", count: 20 },
    { name: "造梦蕊钢", count: 20 },
    { name: "梦现管锥", count: 14 },
    { name: "炽情之灵", count: 4 },
    { name: "星火之精", count: 12 },
    { name: "焚天之魔", count: 15 },
  ],
  recommendedCharacters: [
    { id: "mortenax-blade", reason: "生命转伤型虚无主C，生命上限收益极高。" },
    { id: "hysilens", reason: "战技高频施加炼狱，暴伤增幅稳定触发。" },
  ],
  rating: 5,
  review: "高生命虚无光锥，炼狱状态叠加暴伤，千炼刃专属。",
  art: "/assets/lightcones/zhuo-jin-lian-yu-de-xin-hai.png",
};
