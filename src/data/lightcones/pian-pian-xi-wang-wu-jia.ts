import type { LightCone } from "../../types/lightcone";

export const pianPianXiWangWuJia: LightCone = {
  id: "pian-pian-xi-wang-wu-jia",
  name: "偏偏希望无价",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 952, atk: 582, def: 529 },
  skill: {
    name: "承诺",
    description: "使装备者的暴击率提高{0}%。当装备者在战斗中暴击伤害大于120%时，每超过20%，追加攻击造成的伤害提高{1}%，该效果可叠加4层。战斗开始时和装备者施放普攻后，使终结技或追加攻击造成的伤害无视目标{2}%的防御，持续2回合。",
    valuesBySuperimposition: [
      [16, 12, 20],
      [19, 14, 24],
      [22, 16, 28],
      [25, 18, 32],
      [28, 20, 36],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "蓄梦元件", count: 20 },
    { name: "流梦阀门", count: 20 },
    { name: "造梦马达", count: 14 },
    { name: "凌乱草图", count: 4 },
    { name: "动态线稿", count: 12 },
    { name: "精致色稿", count: 15 },
  ],
  recommendedCharacters: [
    { id: "jade", reason: "翡翠专属，追加攻击增伤质变。" },
    { id: "the-herta", reason: "暴击率与无视防御适配高频输出。" },
  ],
  rating: 5,
  review: "翡翠专属，暴击与追加攻击增伤质变。",
  art: "/assets/lightcones/pian-pian-xi-wang-wu-jia.png",
};
