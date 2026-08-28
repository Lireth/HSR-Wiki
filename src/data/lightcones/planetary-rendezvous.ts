import type { LightCone } from "../../types/lightcone";

export const planetaryRendezvous: LightCone = {
  id: "planetary-rendezvous",
  name: "与行星相会",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 1058, atk: 423, def: 330 },
  skill: {
    name: "启程",
    description: "进入战斗后，当我方目标造成与装备者相同属性的伤害时，造成的伤害提高 {0}%。",
    valuesBySuperimposition: [12, 15, 18, 21, 24],
  },
  ascensionMaterials: [
    { name: "信用点", count: 118000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "asta", reason: "火属性辅助，与火属性主C同队时提供稳定增伤。" },
    { id: "yukong", reason: "虚数辅助，虚数队增伤收益直接。" },
  ],
  rating: 3,
  review: "4★ 和谐光锥。同属性队伍增伤稳定，元素辅助佩戴可强化属性队输出。",
  art: "/assets/lightcones/planetary-rendezvous.png",
};
