import type { LightCone } from "../../types/lightcone";

export const yanChangJiHao: LightCone = {
  id: "yan-chang-ji-hao",
  name: "延长记号",
  rarity: 4,
  path: "虚无",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "休止符",
    description: "使装备者的击破特攻提高 {0}%，对处于触电或风化状态的敌方目标造成的伤害提高 {1}%，该效果对持续伤害也会生效。",
    valuesBySuperimposition: [[16, 16], [20, 20], [24, 24], [28, 28], [32, 32]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "铁卫扣饰", count: 15 },
    { name: "铁卫军徽", count: 15 },
    { name: "铁卫勋章", count: 12 },
    { name: "黯淡黑曜", count: 3 },
    { name: "虚空黑曜", count: 9 },
    { name: "沉沦黑曜", count: 12 },
  ],
  recommendedCharacters: [
    { id: "kafka", reason: "触电体系核心，增伤对持续伤害生效。" },
    { id: "sampo", reason: "风化施加者，持续伤害增伤收益显著。" },
  ],
  rating: 3,
  review: "4★ 虚无光锥。击破与触电、风化增伤双词条，持续伤害体系专用配件。",
  art: "/assets/lightcones/yan-chang-ji-hao.png",
};
