import type { LightCone } from "../../types/lightcone";

export const lingYao: LightCone = {
  id: "ling-yao",
  name: "灵钥",
  rarity: 3,
  path: "智识",
  baseStats: { hp: 740, atk: 370, def: 264 },
  skill: {
    name: "顿悟",
    description: "使装备者施放战技后额外恢复 {0} 点能量，该效果单个回合内不可重复触发。",
    valuesBySuperimposition: [8, 9, 10, 11, 12],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "熄灭原核", count: 12 },
    { name: "微光原核", count: 10 },
    { name: "蠢动原核", count: 8 },
    { name: "灵感之钥", count: 2 },
    { name: "启迪之钥", count: 6 },
    { name: "智识之钥", count: 9 },
  ],
  recommendedCharacters: [
    { id: "qingque", reason: "青雀频繁战技摸牌，回能加速终结技循环。" },
    { id: "herta", reason: "靠战技输出的清杂副C，回能提升大招覆盖。" },
  ],
  rating: 2,
  review: "三星回能光锥，缓解战技循环压力，过渡可用。",
  art: "/assets/lightcones/ling-yao.png",
};
