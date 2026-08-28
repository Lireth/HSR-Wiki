import type { LightCone } from "../../types/lightcone";

export const houHuiYouQi: LightCone = {
  id: "hou-hui-you-qi",
  name: "后会有期",
  rarity: 4,
  path: "虚无",
  baseStats: { hp: 846, atk: 529, def: 330 },
  skill: {
    name: "秘密",
    description: "装备者施放普攻或战技后，对随机1个受到攻击的敌方目标造成等同于自身 {0}% 攻击力的附加伤害。",
    valuesBySuperimposition: [48, 60, 72, 84, 96],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "古代零件", count: 15 },
    { name: "古代转轴", count: 15 },
    { name: "古代引擎", count: 12 },
    { name: "黯淡黑曜", count: 3 },
    { name: "虚空黑曜", count: 9 },
    { name: "沉沦黑曜", count: 12 },
  ],
  recommendedCharacters: [
    { id: "sampo", reason: "高频普攻战技，附加伤害收益稳定。" },
    { id: "kafka", reason: "普攻输出为主，追加伤害锦上添花。" },
  ],
  rating: 2,
  review: "4★ 虚无光锥。附加伤害缺乏泛用词条支撑，输出型虚无角色过渡选择。",
  art: "/assets/lightcones/hou-hui-you-qi.png",
};
