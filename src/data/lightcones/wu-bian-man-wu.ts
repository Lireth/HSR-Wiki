import type { LightCone } from "../../types/lightcone";

export const wuBianManWu: LightCone = {
  id: "wu-bian-man-wu",
  name: "无边曼舞",
  rarity: 4,
  path: "虚无",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "试探",
    description: "使装备者的暴击率提高{0}%。装备者对处于防御降低或减速状态下的敌人造成的暴击伤害提高{1}%。",
    valuesBySuperimposition: [
      [8, 24],
      [10, 30],
      [12, 36],
      [14, 42],
      [16, 48],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "思绪末屑", count: 15 },
    { name: "印象残晶", count: 15 },
    { name: "欲念碎镜", count: 12 },
    { name: "灼情之灵", count: 3 },
    { name: "星火之精", count: 9 },
    { name: "焚天之魔", count: 12 },
  ],
  recommendedCharacters: [
    { id: "acheron", reason: "配队自带降防减速，暴伤收益极高。" },
    { id: "pela", reason: "降防触发条件，双爆增伤稳定。" },
  ],
  rating: 4,
  review: "黄泉优质四星，双爆与无视增伤实用。",
  art: "/assets/lightcones/wu-bian-man-wu.png",
};
