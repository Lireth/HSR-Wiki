import type { LightCone } from "../../types/lightcone";

export const louYueCaiYunZhiYi: LightCone = {
  id: "lou-yue-cai-yun-zhi-yi",
  name: "镂月裁云之意",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "秘密",
    description: "在战斗开始时以及当装备者回合开始时，随机生效1个效果。该效果生效时，替换上次的效果且本次不会与上次重复。效果包含：使我方全体攻击力提高 {0}%；使我方全体暴击伤害提高 {1}%；使我方全体能量恢复效率提高 {2}%。同类效果无法叠加，在装备者陷入无法战斗状态时解除。",
    valuesBySuperimposition: [
      [10, 12, 6],
      [12, 15, 7],
      [15, 18, 9],
      [17, 21, 10],
      [20, 24, 12],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 12 },
    { name: "谐乐小调", count: 3 },
    { name: "家族颂歌", count: 9 },
    { name: "群星乐章", count: 12 },
  ],
  recommendedCharacters: [
    { id: "tingyun", reason: "回合开始随机全体增益，与停云辅助定位契合。" },
    { id: "bronya", reason: "同谐通用增益光锥，前期省心的过渡选择。" },
  ],
  rating: 3,
  review: "无名勋礼同谐通用，随机增益不稳定，前期省心之选。",
  art: "/assets/lightcones/lou-yue-cai-yun-zhi-yi.png",
};
