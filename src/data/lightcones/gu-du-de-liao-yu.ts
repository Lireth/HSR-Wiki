import type { LightCone } from "../../types/lightcone";

export const guDuDeLiaoYu: LightCone = {
  id: "gu-du-de-liao-yu",
  name: "孤独的疗愈",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 1058, atk: 529, def: 396 },
  skill: {
    name: "混沌灵药",
    description: "使装备者的击破特攻提高 {0}%。当装备者施放终结技时，使装备者造成的持续伤害提高 {1}%，持续2回合。陷入装备者施加的持续伤害效果的敌方目标被消灭时，装备者恢复 {2} 点能量。",
    valuesBySuperimposition: [[20, 24, 4.0], [25, 30, 4.5], [30, 36, 5.0], [35, 42, 5.5], [40, 48, 6.0]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "熄灭原核", count: 20 },
    { name: "微光原核", count: 20 },
    { name: "蠢动原核", count: 14 },
    { name: "黯淡黑曜", count: 4 },
    { name: "虚空黑曜", count: 12 },
    { name: "沉沦黑曜", count: 15 },
  ],
  recommendedCharacters: [
    { id: "kafka", reason: "终结技引爆DOT，持续伤害增伤收益直接。" },
    { id: "black-swan", reason: "DOT队终结技起手，击杀回能加速循环。" },
  ],
  rating: 4,
  review: "5★ 黑塔商店DOT向光锥，击破与持续伤害增伤实用，性价比优秀。",
  art: "/assets/lightcones/gu-du-de-liao-yu.png",
};
