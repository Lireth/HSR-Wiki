import type { LightCone } from "../../types/lightcone";

export const geniusesRepose: LightCone = {
  id: "geniuses-repose",
  name: "天才们的休憩",
  rarity: 4,
  path: "智识",
  baseStats: { hp: 846, atk: 476, def: 396 },
  skill: {
    name: "各得其所",
    description: "使装备者攻击力提高 {0}%，当装备者消灭敌方目标后，暴击伤害提高 {1}%，持续 3 回合。",
    valuesBySuperimposition: [[16, 24], [20, 30], [24, 36], [28, 42], [32, 48]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 118000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "herta", reason: "斩杀线触发天赋追加攻击，击杀后暴伤收益稳定。" },
    { id: "qingque", reason: "群攻清杂节奏下击杀频繁，攻击与暴伤全面强化。" },
  ],
  rating: 3,
  review: "4★ 智识光锥。攻击加成常驻，击杀后暴伤加成契合清杂补刀节奏，过渡期表现优秀。",
  art: "/assets/lightcones/geniuses-repose.svg",
};
