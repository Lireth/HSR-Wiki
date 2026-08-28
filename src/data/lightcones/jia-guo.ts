import type { LightCone } from "../../types/lightcone";

export const jiaGuo: LightCone = {
  id: "jia-guo",
  name: "嘉果",
  rarity: 3,
  path: "丰饶",
  baseStats: { hp: 952, atk: 317, def: 198 },
  skill: {
    name: "甘美",
    description: "战斗开始时，立即为我方全体恢复 {0} 点能量。",
    valuesBySuperimposition: [6, 7, 9, 10, 12],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "蠕动原核", count: 12 },
    { name: "微光原核", count: 10 },
    { name: "熄灭原核", count: 8 },
    { name: "丰饶之种", count: 2 },
    { name: "生命之芽", count: 6 },
    { name: "永恒之花", count: 9 },
  ],
  recommendedCharacters: [
    { id: "bailu", reason: "开局全队回能，加速战技循环。" },
    { id: "huohuo", reason: "能量供给契合充能型辅助玩法。" },
  ],
  rating: 2,
  review: "3★ 丰饶光锥。开局全体回能，帮助队伍抢先手，前期过渡可用。",
  art: "/assets/lightcones/jia-guo.png",
};
