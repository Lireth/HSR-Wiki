import type { LightCone } from "../../types/lightcone";

export const jueXinRuHanZhuBanShanYao: LightCone = {
  id: "jue-xin-ru-han-zhu-ban-shan-yao",
  name: "决心如汗珠般闪耀",
  rarity: 4,
  path: "虚无",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "回眸",
    description: "当装备者击中敌方目标时，如果该目标不处于【攻陷】状态，则有 {0}% 的基础概率使其陷入【攻陷】状态。【攻陷】状态下的敌方目标防御力降低 {1}%，持续1回合。",
    valuesBySuperimposition: [
      [60, 12],
      [70, 13],
      [80, 14],
      [90, 15],
      [100, 16],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "工造机杼", count: 15 },
    { name: "工造迴轮", count: 15 },
    { name: "工造浑心", count: 12 },
    { name: "黯淡黑曜", count: 3 },
    { name: "虚空黑曜", count: 9 },
    { name: "沉沦黑曜", count: 12 },
  ],
  recommendedCharacters: [
    { id: "luka", reason: "高频多段攻击稳定触发攻陷减防，dot输出受益。" },
    { id: "sampo", reason: "全体多段风刃轻松挂减防，扩散队伍受益。" },
  ],
  rating: 3,
  review: "攻击附带减防，契合高频攻击的虚无角色。",
  art: "/assets/lightcones/jue-xin-ru-han-zhu-ban-shan-yao.png",
};
