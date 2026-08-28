import type { LightCone } from "../../types/lightcone";

export const yuYiZhiXia: LightCone = {
  id: "yu-yi-zhi-xia",
  name: "雨一直下",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "幻影现实",
    description: "使装备者的效果命中提高 {0}%。当装备者对同时处于大于等于3个负面效果的敌方目标造成伤害时，暴击率提高 {1}%。装备者施放普攻、战技、终结技后，有100%的基础概率对随机1个未持有【以太编码】的受击目标施加【以太编码】。持有【以太编码】的目标受到的伤害提高 {2}%，持续1回合。",
    valuesBySuperimposition: [[24, 12, 12], [28, 14, 14], [32, 16, 16], [36, 18, 18], [40, 20, 20]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "古代零件", count: 20 },
    { name: "古代转轴", count: 20 },
    { name: "古代引擎", count: 14 },
    { name: "黯淡黑曜", count: 4 },
    { name: "虚空黑曜", count: 12 },
    { name: "沉沦黑曜", count: 15 },
  ],
  recommendedCharacters: [
    { id: "silverwolf", reason: "专属级命中增益，施加编码扩大负面覆盖。" },
    { id: "black-swan", reason: "负面效果体系核心，易伤增伤收益显著。" },
  ],
  rating: 4,
  review: "5★ 虚无通用光锥，命中、暴击与易伤三重增益，负面体系队伍表现优异。",
  art: "/assets/lightcones/yu-yi-zhi-xia.png",
};
