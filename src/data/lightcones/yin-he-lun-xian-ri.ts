import type { LightCone } from "../../types/lightcone";

export const yinHeLunXianRi: LightCone = {
  id: "yin-he-lun-xian-ri",
  name: "银河沦陷日",
  rarity: 4,
  path: "智识",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "攻略",
    description: "使装备者的攻击力提高{0}%。装备者施放攻击后，若有不少于2个被攻击的敌方目标具有对应属性弱点，装备者的暴击伤害提高{1}%，持续2回合。",
    valuesBySuperimposition: [
      [16, 20],
      [18, 25],
      [20, 30],
      [22, 35],
      [24, 40],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 12 },
    { name: "灵感之钥", count: 3 },
    { name: "启迪之钥", count: 9 },
    { name: "智识之钥", count: 12 },
  ],
  recommendedCharacters: [
    { id: "jingyuan", reason: "常驻攻击加成，神君吃满暴伤。" },
    { id: "himeko", reason: "免费智识光锥，对弱输出稳定提升。" },
  ],
  rating: 4,
  review: "免费智识光锥，攻击与暴伤常驻，兑换即用。",
  art: "/assets/lightcones/yin-he-lun-xian-ri.png",
};
