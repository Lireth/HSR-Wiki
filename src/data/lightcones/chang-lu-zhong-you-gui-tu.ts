import type { LightCone } from "../../types/lightcone";

export const changLuZhongYouGuiTu: LightCone = {
  id: "chang-lu-zhong-you-gui-tu",
  name: "长路终有归途",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 952, atk: 476, def: 661 },
  skill: {
    name: "新生",
    description: "使装备者的击破特攻提高 {0}%。当有敌方目标的弱点被击破时，有100%的基础概率使其陷入【焚灼】状态，受到的击破伤害提高 {1}%，持续2回合，此效果可叠加2层。",
    valuesBySuperimposition: [
      [60, 18],
      [70, 21],
      [80, 24],
      [90, 27],
      [100, 30],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "永寿幼芽", count: 20 },
    { name: "永寿天华", count: 20 },
    { name: "永寿荣枝", count: 14 },
    { name: "炽情之灵", count: 4 },
    { name: "星火之精", count: 12 },
    { name: "焚天之魔", count: 15 },
  ],
  recommendedCharacters: [
    { id: "fugue", reason: "忘归人专属，击破虚无核心装备。" },
    { id: "guinaifen", reason: "击破特攻强化灼烧与击破易伤输出。" },
  ],
  rating: 5,
  review: "忘归人专属，击破特攻与焚灼易伤叠加，击破队核心。",
  art: "/assets/lightcones/chang-lu-zhong-you-gui-tu.png",
};
