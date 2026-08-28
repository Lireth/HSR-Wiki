import type { LightCone } from "../../types/lightcone";

export const niYing: LightCone = {
  id: "ni-ying",
  name: "匿影",
  rarity: 3,
  path: "虚无",
  baseStats: { hp: 846, atk: 317, def: 264 },
  skill: {
    name: "机关",
    description: "施放战技后，使装备者的下一次普攻对敌方目标造成等同于自身 {0}% 攻击力的附加伤害。",
    valuesBySuperimposition: [60, 75, 90, 105, 120],
  },
  ascensionMaterials: [
  { name: "信用点", count: 231000 },
  { name: "工造机杼", count: 12 },
  { name: "工造迴轮", count: 10 },
  { name: "工造浑心", count: 8 },
  { name: "黯淡黑曜", count: 2 },
  { name: "虚空黑曜", count: 6 },
  { name: "沉沦黑曜", count: 9 },
  ],
  recommendedCharacters: [
    { id: "sampo", reason: "战技普攻交替循环，附加伤害收益稳定。" },
    { id: "guinaifen", reason: "战技后普攻附加伤害，输出节奏契合。" },
  ],
  rating: 2,
  review: "3★ 虚无光锥。战技后普攻附加伤害，收益有限，过渡备用。",
  art: "/assets/lightcones/ni-ying.png",
};
