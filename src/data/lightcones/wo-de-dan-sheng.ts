import type { LightCone } from "../../types/lightcone";

export const woDeDanSheng: LightCone = {
  id: "wo-de-dan-sheng",
  name: "「我」的诞生",
  rarity: 4,
  path: "智识",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "画像少女",
    description: "使装备者追加攻击造成的伤害提高 {0}%。若该敌方目标当前生命值百分比小于等于50%，则追加攻击造成的伤害额外提高 {1}%。",
    valuesBySuperimposition: [[24, 24], [30, 30], [36, 36], [42, 42], [48, 48]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "铁卫扣饰", count: 15 },
    { name: "铁卫军徽", count: 15 },
    { name: "铁卫勋章", count: 12 },
    { name: "灵感之钥", count: 3 },
    { name: "启迪之钥", count: 9 },
    { name: "智识之钥", count: 12 },
  ],
  recommendedCharacters: [
    { id: "herta", reason: "追加攻击机制核心，斩杀线内增伤翻倍。" },
    { id: "jade", reason: "高频追击输出，完整吃满双段增伤。" },
  ],
  rating: 3,
  review: "4★ 智识光锥。追加攻击增伤，半血斩杀线额外翻倍，追击流智识专用。",
  art: "/assets/lightcones/wo-de-dan-sheng.png",
};
