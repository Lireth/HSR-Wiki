import type { LightCone } from "../../types/lightcone";

export const chongSuShiGuangZhiYi: LightCone = {
  id: "chong-su-shi-guang-zhi-yi",
  name: "重塑时光之忆",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "结晶",
    description: "使装备者的效果命中提高{0}%。装备者对陷入风化、灼烧、触电、裂伤状态的敌方目标造成伤害时，分别获得1层【先知】，最多叠加4层。单场战斗中，每种持续伤害状态类型仅可叠加1次【先知】效果。每层【先知】使装备者的攻击力提高{1}%，造成的持续伤害无视目标{2}%的防御力。",
    valuesBySuperimposition: [
      [40, 5, 7.2],
      [45, 6, 7.9],
      [50, 7, 8.6],
      [55, 8, 9.3],
      [60, 9, 10],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "熄灭原核", count: 20 },
    { name: "微光原核", count: 20 },
    { name: "蠕动原核", count: 14 },
    { name: "灼情之灵", count: 4 },
    { name: "星火之精", count: 12 },
    { name: "焚天之魔", count: 15 },
  ],
  recommendedCharacters: [
    { id: "black-swan", reason: "DOT 核心专属，命中与增伤全面契合。" },
    { id: "kafka", reason: "持续伤害体系通用，无视防御提升触电收益。" },
  ],
  rating: 5,
  review: "DOT 体系核心光锥，效果命中与增伤全面提升。",
  art: "/assets/lightcones/chong-su-shi-guang-zhi-yi.png",
};
