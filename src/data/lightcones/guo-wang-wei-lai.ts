import type { LightCone } from "../../types/lightcone";

export const guoWangWeiLai: LightCone = {
  id: "guo-wang-wei-lai",
  name: "过往未来",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 1058, atk: 423, def: 396 },
  skill: {
    name: "旧日纸鸢",
    description: "当装备者施放战技后，使下一个行动的我方其他目标造成的伤害提高 {0}%，持续1回合。",
    valuesBySuperimposition: [16, 20, 24, 28, 32],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 12 },
    { name: "谐乐小调", count: 3 },
    { name: "家族颂歌", count: 9 },
    { name: "群星乐章", count: 12 },
  ],
  recommendedCharacters: [
    { id: "bronya", reason: "战技拉条让主C紧随其后，稳定吃满增伤。" },
    { id: "hanya", reason: "战技辅助后置输出位，单体增伤覆盖主C。" },
  ],
  rating: 3,
  review: "4★ 和谐战技单体增伤，配拉条辅助可稳定覆盖主C。",
  art: "/assets/lightcones/guo-wang-wei-lai.png",
};
