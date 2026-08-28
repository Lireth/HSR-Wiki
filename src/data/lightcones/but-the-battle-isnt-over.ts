import type { LightCone } from "../../types/lightcone";

export const butTheBattleIsntOver: LightCone = {
  id: "but-the-battle-isnt-over",
  name: "但战斗还未结束",
  rarity: 5,
  path: "和谐",
  baseStats: { hp: 1164, atk: 532, def: 463 },
  skill: {
    name: "未竟之战",
    description: "使装备者施放战技后，我方下一个行动的目标造成的伤害提高 {0}%。若装备者的能量在 100 点及以下，施放战技后额外恢复 1 个战技点。",
    valuesBySuperimposition: [30, 35, 40, 45, 50],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "bronya", reason: "专属光锥，再动体系与战技点回收收益拉满。" },
    { id: "tingyun", reason: "高频战技触发增伤，增辅定位进一步强化。" },
  ],
  rating: 5,
  review: "和谐辅助毕业光锥。增伤与战技点回收双重收益，布洛妮娅携带即为完全体，抽到必练。",
  art: "/assets/lightcones/but-the-battle-isnt-over.svg",
};
