import type { LightCone } from "../../types/lightcone";

export const miMiShiXin: LightCone = {
  id: "mi-mi-shi-xin",
  name: "秘密誓心",
  rarity: 4,
  path: "毁灭",
  baseStats: { hp: 1058, atk: 476, def: 264 },
  skill: {
    name: "竭力而为",
    description: "使装备者造成的伤害提高 {0}%，同时对当前生命值百分比大于等于装备者自身当前生命值百分比的敌方目标造成的伤害额外提高 {1}%。",
    valuesBySuperimposition: [[20, 20], [25, 25], [30, 30], [35, 35], [40, 40]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 308000 },
  { name: "铁卫扣饰", count: 15 },
  { name: "铁卫军徽", count: 15 },
  { name: "铁卫勋章", count: 12 },
  { name: "破碎残刃", count: 3 },
  { name: "无生残刃", count: 9 },
  { name: "净世残刃", count: 12 },
  ],
  recommendedCharacters: [
    { id: "arlan", reason: "残血输出机制契合血线判定条件。" },
    { id: "blade", reason: "常驻增伤配合高血量敌目标收益高。" },
  ],
  rating: 4,
  review: "4★ 毁灭光锥。稳定增伤附血线判定加成，阿兰残血打法完美契合。",
  art: "/assets/lightcones/mi-mi-shi-xin.png",
};
