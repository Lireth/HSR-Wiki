import type { LightCone } from "../../types/lightcone";

export const xingHuoQiaoRanShanYao: LightCone = {
  id: "xing-huo-qiao-ran-shan-yao",
  name: "星火悄然闪耀",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 847, atk: 635, def: 529 },
  skill: {
    name: "萌芽",
    description:
      "使装备者的暴击率提高 {0}%。我方任意角色在自身同一回合内累计消耗大于等于4点战技点时，装备者获得【闪耀王冠】，持续3回合。装备者持有【闪耀王冠】时，我方全体造成的伤害无视目标 {1}% 的防御力，装备者造成的战技伤害提高 {2}%，同类效果无法叠加。",
    valuesBySuperimposition: [
      [18, 20, 72],
      [21, 24, 84],
      [24, 28, 96],
      [27, 32, 108],
      [30, 36, 120],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "掠夺的本能", count: 20 },
    { name: "篡改的野心", count: 20 },
    { name: "践踏的意志", count: 14 },
    { name: "天体模型", count: 4 },
    { name: "星系框架", count: 12 },
    { name: "银河沙盘", count: 15 },
  ],
  recommendedCharacters: [
    { id: "the-herta", reason: "战技消耗型智识，王冠增伤收益极高。" },
    { id: "qingque", reason: "频繁消耗战技点，稳定触发闪耀王冠。" },
  ],
  rating: 5,
  review: "消耗战技点智识专属，战技伤害大幅提升并全队无视防御。",
  art: "/assets/lightcones/xing-huo-qiao-ran-shan-yao.png",
};
