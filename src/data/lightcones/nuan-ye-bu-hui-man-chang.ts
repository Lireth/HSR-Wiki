import type { LightCone } from "../../types/lightcone";

export const nuanYeBuHuiManChang: LightCone = {
  id: "nuan-ye-bu-hui-man-chang",
  name: "暖夜不会漫长",
  rarity: 4,
  path: "丰饶",
  baseStats: { hp: 1058, atk: 370, def: 396 },
  skill: {
    name: "小小灯火",
    description: "使装备者的生命上限提高 {0}%。施放普攻或战技后，为我方全体回复等同于各自生命上限 {1}% 的生命值。",
    valuesBySuperimposition: [[16, 2.0], [20, 2.5], [24, 3.0], [28, 3.5], [32, 4.0]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蠕动原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "熄灭原核", count: 12 },
    { name: "丰饶之种", count: 3 },
    { name: "生命之芽", count: 9 },
    { name: "永恒之花", count: 12 },
  ],
  recommendedCharacters: [
    { id: "bailu", reason: "高生命基数，回血量随上限放大。" },
    { id: "lingsha", reason: "普攻战技高频，全队奶量稳定提升。" },
  ],
  rating: 2,
  review: "4★ 丰饶光锥。生命上限与全队回复双词条，奶妈角色过渡可用。",
  art: "/assets/lightcones/nuan-ye-bu-hui-man-chang.png",
};
