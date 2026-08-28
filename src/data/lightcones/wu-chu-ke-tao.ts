import type { LightCone } from "../../types/lightcone";

export const wuChuKeTao: LightCone = {
  id: "wu-chu-ke-tao",
  name: "无处可逃",
  rarity: 4,
  path: "毁灭",
  baseStats: { hp: 952, atk: 529, def: 264 },
  skill: {
    name: "绝境",
    description: "使装备者的攻击力提高 {0}%。当装备者消灭敌方目标时，回复等同于自身 {1}% 攻击力的生命值。",
    valuesBySuperimposition: [[24, 12], [30, 15], [36, 18], [42, 21], [48, 24]],
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
    { id: "blade", reason: "高攻击加成，灭敌回血补足消耗。" },
    { id: "clara", reason: "反击常驻站场，攻击与续航双收益。" },
  ],
  rating: 3,
  review: "4★ 毁灭光锥。高额攻击加成并附带灭敌回血，生存压力大的站场毁灭角色过渡可用。",
  art: "/assets/lightcones/wu-chu-ke-tao.png",
};
