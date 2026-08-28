import type { LightCone } from "../../types/lightcone";

export const niJiangQiShenGeChang: LightCone = {
  id: "ni-jiang-qi-shen-ge-chang",
  name: "你将起身歌唱",
  rarity: 5,
  path: "记忆",
  baseStats: { hp: 1164, atk: 582, def: 397 },
  skill: {
    name: "即兴",
    description:
      "使装备者的生命上限提高 {0}%，装备者施放终结技后，为我方恢复1个战技点。进入战斗时，使装备者的行动提前 {1}%，并使装备者获得【新声】，持续2回合。装备者持有【新声】时，我方全体速度提高 {2}%。",
    valuesBySuperimposition: [
      [30, 30, 20],
      [37, 32, 25],
      [45, 35, 30],
      [52, 37, 35],
      [60, 40, 40],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "蓄梦元件", count: 20 },
    { name: "流梦闸门", count: 20 },
    { name: "造梦马达", count: 14 },
    { name: "思绪的种", count: 4 },
    { name: "末那芽苗", count: 12 },
    { name: "阿赖耶华", count: 15 },
  ],
  recommendedCharacters: [
    { id: "robin-summeretto", reason: "记忆辅助核心，战技点恢复与全队加速。" },
    { id: "aglaea", reason: "高生命需求记忆角色，行动提前收益显著。" },
  ],
  rating: 5,
  review: "记忆辅助毕业光锥，战技点恢复、行动提前与全队加速。",
  art: "/assets/lightcones/ni-jiang-qi-shen-ge-chang.png",
};
