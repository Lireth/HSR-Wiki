import type { LightCone } from "../../types/lightcone";

export const mingYunCongWeiGongPing: LightCone = {
  id: "ming-yun-cong-wei-gong-ping",
  name: "命运从未公平",
  rarity: 5,
  path: "存护",
  baseStats: { hp: 1058, atk: 423, def: 661 },
  skill: {
    name: "全下",
    description: "使装备者的防御力提高{0}%，当装备者为我方目标提供护盾时，使装备者的暴击伤害提高{1}%，持续2回合。当装备者发动追加攻击击中敌方目标时，有{2}%的基础概率使受到攻击的敌方目标受到的伤害提高{3}%，持续2回合。",
    valuesBySuperimposition: [
      [40, 40, 100, 10],
      [46, 46, 115, 11.5],
      [52, 52, 130, 13],
      [58, 58, 145, 14.5],
      [64, 64, 160, 16],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "思绪末屑", count: 20 },
    { name: "印象残晶", count: 20 },
    { name: "欲念碎镜", count: 14 },
    { name: "散逸星砂", count: 4 },
    { name: "流星棱晶", count: 12 },
    { name: "神体琥珀", count: 15 },
  ],
  recommendedCharacters: [
    { id: "aventurine", reason: "砂金专属，防御转暴伤与易伤全覆盖。" },
    { id: "fuxuan", reason: "高防御存护，追加攻击触发易伤。" },
  ],
  rating: 5,
  review: "砂金专属，防御暴伤与易伤增益拉满。",
  art: "/assets/lightcones/ming-yun-cong-wei-gong-ping.png",
};
