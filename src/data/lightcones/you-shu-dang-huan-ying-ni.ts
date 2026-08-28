import type { LightCone } from "../../types/lightcone";

export const youShuDangHuanYingNi: LightCone = {
  id: "you-shu-dang-huan-ying-ni",
  name: "鼹鼠党欢迎你",
  rarity: 4,
  path: "毁灭",
  baseStats: { hp: 1058, atk: 476, def: 264 },
  skill: {
    name: "奇妙冒险",
    description: "装备者施放普攻、战技或终结技攻击敌方目标后，分别获取一层【淘气值】。每层使装备者的攻击力提高 {0}%。",
    valuesBySuperimposition: [12, 15, 18, 21, 24],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 12 },
    { name: "破碎残刃", count: 3 },
    { name: "无生残刃", count: 9 },
    { name: "净世残刃", count: 12 },
  ],
  recommendedCharacters: [
    { id: "hook", reason: "普攻战技终结技循环，快速叠满三层。" },
    { id: "arlan", reason: "常驻输出，叠层后攻击加成可观。" },
  ],
  rating: 3,
  review: "4★ 毁灭光锥。三种攻击手段各叠一层，攻击加成稳定，毁灭角色通用过渡。",
  art: "/assets/lightcones/you-shu-dang-huan-ying-ni.png",
};
