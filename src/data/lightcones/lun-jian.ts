import type { LightCone } from "../../types/lightcone";

export const lunJian: LightCone = {
  id: "lun-jian",
  name: "论剑",
  rarity: 4,
  path: "巡猎",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "各自的答案",
    description: "当装备者多次击中同一敌方目标时，每次造成的伤害提高 {0}%，该效果最多叠加5层。若攻击目标发生变化，立即解除当前的增益效果。",
    valuesBySuperimposition: [8, 10, 12, 14, 16],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蠕动原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "熄灭原核", count: 12 },
    { name: "猎兽之矢", count: 3 },
    { name: "屠魔之矢", count: 9 },
    { name: "逐星之矢", count: 12 },
  ],
  recommendedCharacters: [
    { id: "seele", reason: "多段攻击集中单目标，满层增伤极高。" },
    { id: "feixiao", reason: "追击段数多，稳定吃满五层增伤。" },
  ],
  rating: 4,
  review: "4★ 巡猎光锥。单体多段角色满层增伤可观，部分角色甚至可比肩一星魂五星光锥。",
  art: "/assets/lightcones/lun-jian.png",
};
