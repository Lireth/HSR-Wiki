import type { LightCone } from "../../types/lightcone";

export const dangYiKeXingZhaoLiangYeKong: LightCone = {
  id: "dang-yi-ke-xing-zhao-liang-ye-kong",
  name: "当一颗星照亮夜空",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 846, atk: 635, def: 529 },
  skill: {
    name: "初愿",
    description:
      "使装备者造成伤害时无视目标 {0}% 的防御力。当装备者施放助攻技时，恢复6点能量并获得【启航】，持续2回合，最多叠加3层。每层【启航】使助攻技伤害提高 {1}%，【启航】达到3层时，每层【启航】使终结技伤害提高 {2}%。",
    valuesBySuperimposition: [
      [32, 20, 20],
      [36, 25, 25],
      [40, 30, 30],
      [44, 35, 35],
      [48, 40, 40],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "童真蜡笔", count: 20 },
    { name: "造梦蕊钢", count: 20 },
    { name: "梦现管锥", count: 14 },
    { name: "天体模型", count: 4 },
    { name: "星系框架", count: 12 },
    { name: "银河沙盘", count: 15 },
  ],
  recommendedCharacters: [
    { id: "himeko-nova", reason: "助攻技核心角色，启航叠层收益最大化。" },
    { id: "the-herta", reason: "智识助攻体系，防御无视全面增伤。" },
  ],
  rating: 5,
  review: "助攻技智识毕业光锥，高防御无视与叠层增伤。",
  art: "/assets/lightcones/dang-yi-ke-xing-zhao-liang-ye-kong.png",
};
