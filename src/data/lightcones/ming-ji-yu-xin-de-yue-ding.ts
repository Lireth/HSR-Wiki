import type { LightCone } from "../../types/lightcone";

export const mingJiYuXinDeYueDing: LightCone = {
  id: "ming-ji-yu-xin-de-yue-ding",
  name: "铭记于心的约定",
  rarity: 4,
  path: "毁灭",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "传承",
    description: "使装备者的击破特攻提高 {0}%。当装备者施放终结技时，暴击率提高 {1}%，持续2回合。",
    valuesBySuperimposition: [[28, 15], [35, 18], [42, 22], [49, 26], [56, 30]],
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
    { id: "misha", reason: "终结技输出型毁灭，暴击率增益收益直接。" },
    { id: "xueyi", reason: "击破特攻型毁灭，高额击破加成完美契合。" },
  ],
  rating: 3,
  review: "4★ 击破向毁灭光锥，终结技暴击提升直观，米沙与雪衣适用。",
  art: "/assets/lightcones/ming-ji-yu-xin-de-yue-ding.png",
};
