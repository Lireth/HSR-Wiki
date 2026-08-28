import type { LightCone } from "../../types/lightcone";

export const xinShouRenWuKaiShiQian: LightCone = {
  id: "xin-shou-ren-wu-kai-shi-qian",
  name: "新手任务开始前",
  rarity: 4,
  path: "虚无",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "眼疾手快",
    description: "使装备者的效果命中提高 {0}%。当装备者攻击防御力被降低的敌方目标后，恢复 {1} 点能量。",
    valuesBySuperimposition: [[20, 4], [25, 5], [30, 6], [35, 7], [40, 8]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 12 },
    { name: "黯淡黑曜", count: 3 },
    { name: "虚空黑曜", count: 9 },
    { name: "沉沦黑曜", count: 12 },
  ],
  recommendedCharacters: [
    { id: "silverwolf", reason: "降防触发回能，效果命中提升缠身概率。" },
    { id: "kafka", reason: "负面体系队友配合，命中与循环兼顾。" },
  ],
  rating: 3,
  review: "4★ 虚无过渡光锥，降防触发回能提升循环，但需队友配合，中期可选。",
  art: "/assets/lightcones/xin-shou-ren-wu-kai-shi-qian.png",
};
