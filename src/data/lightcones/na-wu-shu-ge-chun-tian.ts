import type { LightCone } from "../../types/lightcone";

export const naWuShuGeChunTian: LightCone = {
  id: "na-wu-shu-ge-chun-tian",
  name: "那无数个春天",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 952, atk: 582, def: 529 },
  skill: {
    name: "世事无痕",
    description: "使装备者的效果命中提高{0}%，装备者施放普攻、战技、终结技攻击敌方目标后，有60%的基础概率使其陷入【卸甲】状态。【卸甲】状态下，敌方目标受到的伤害提高{1}%，持续2回合。若目标处于装备者施加的持续伤害状态，则有60%的基础概率将装备者施加的【卸甲】状态升级成【穷寇】状态，使敌方目标受到的伤害额外提高{2}%，持续2回合，期间装备者无法对其施加【卸甲】。",
    valuesBySuperimposition: [
      [60, 10, 14],
      [70, 12, 16],
      [80, 14, 18],
      [90, 16, 20],
      [100, 18, 22],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "幼芽", count: 20 },
    { name: "天华", count: 20 },
    { name: "荣枝", count: 14 },
    { name: "灼情之灵", count: 4 },
    { name: "星火之精", count: 12 },
    { name: "焚天之魔", count: 15 },
  ],
  recommendedCharacters: [
    { id: "jiaoqiu", reason: "椒丘专属，命中与易伤叠加最大化。" },
    { id: "black-swan", reason: "持续伤害触发穷寇，易伤收益极高。" },
  ],
  rating: 5,
  review: "椒丘专属，命中与易伤叠加最大化。",
  art: "/assets/lightcones/na-wu-shu-ge-chun-tian.png",
};
