import type { LightCone } from "../../types/lightcone";

export const fangHuaDaiZhuo: LightCone = {
  id: "fang-hua-dai-zhuo",
  name: "芳华待灼",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 952, atk: 423, def: 396 },
  skill: {
    name: "莫失莫忘",
    description: "使装备者的攻击力提高{0}%。进入战斗时，若有两名及以上我方角色拥有任意相同命途，使这些角色的暴击伤害提高{1}%。同类技能无法重复生效。",
    valuesBySuperimposition: [
      [16, 16],
      [20, 20],
      [24, 24],
      [28, 28],
      [32, 32],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 12 },
    { name: "云际音符", count: 3 },
    { name: "空际小节", count: 9 },
    { name: "天外乐章", count: 12 },
  ],
  recommendedCharacters: [
    { id: "hanya", reason: "双同谐队易满足条件，暴伤增益稳定。" },
    { id: "asta", reason: "多命途重复阵容中收益可观。" },
  ],
  rating: 3,
  review: "同命途队限定，条件达成收益可观。",
  art: "/assets/lightcones/fang-hua-dai-zhuo.png",
};
