import type { LightCone } from "../../types/lightcone";

export const zaiHuoDeYuanChu: LightCone = {
  id: "zai-huo-de-yuan-chu",
  name: "在火的远处",
  rarity: 4,
  path: "毁灭",
  baseStats: { hp: 1058, atk: 476, def: 264 },
  skill: {
    name: "爆燃",
    description: "当装备者在单次受到攻击中累计损失的生命值超过最大生命值的25%，或单次消耗自身生命值超过最大生命值的25%，则立即回复等同于装备者生命上限15%的生命值，同时使装备者造成的伤害提高 {0}%，持续2回合。该效果每3回合只能触发1次。",
    valuesBySuperimposition: [25, 31, 37, 43, 50],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 12 },
    { name: "步离犬牙", count: 3 },
    { name: "狼毒锯牙", count: 9 },
    { name: "月狂獠牙", count: 12 },
  ],
  recommendedCharacters: [
    { id: "firefly", reason: "烧血强化稳定触发，高额增伤覆盖输出期。" },
    { id: "mydei", reason: "频繁消耗生命，触发条件几乎常驻生效。" },
  ],
  rating: 4,
  review: "4★ 烧血向毁灭光锥，触发附带自回复，增伤幅度可观易用。",
  art: "/assets/lightcones/zai-huo-de-yuan-chu.png",
};
