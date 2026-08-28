import type { LightCone } from "../../types/lightcone";

export const goodNightAndSleepWell: LightCone = {
  id: "good-night-and-sleep-well",
  name: "晚安与睡颜",
  rarity: 4,
  path: "虚无",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "劳累者",
    description: "敌方目标每承受 1 个负面效果，装备者对其造成的伤害提高 {0}%，最多叠加 3 层。该效果对持续伤害也会生效。",
    valuesBySuperimposition: [12, 15, 18, 21, 24],
  },
  ascensionMaterials: [
    { name: "信用点", count: 118000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "kafka", reason: "触电与队友负面效果叠加，满层增伤收益极高。" },
    { id: "pela", reason: "减防与负面效果制造者，为自身增伤提供环境。" },
    { id: "sampo", reason: "多层风化与易伤联动，持续伤害增伤显著。" },
  ],
  rating: 5,
  review: "4★ 虚无神卡。满层 72% 增伤且对持续伤害生效，负面效果体系的最优四星选择，叠影收益极高。",
  art: "/assets/lightcones/good-night-and-sleep-well.svg",
};
