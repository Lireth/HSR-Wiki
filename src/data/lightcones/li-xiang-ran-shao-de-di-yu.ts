import type { LightCone } from "../../types/lightcone";

export const liXiangRanShaoDeDiYu: LightCone = {
  id: "li-xiang-ran-shao-de-di-yu",
  name: "理想燃烧的地狱",
  rarity: 5,
  path: "巡猎",
  baseStats: { hp: 952, atk: 582, def: 529 },
  skill: {
    name: "赤原猎兵",
    description: "使装备者的暴击率提高 {0}%。进入战斗时，若我方的战技点上限大于等于6点，使装备者的攻击力提高 {1}%。装备者每次施放战技后，使装备者的攻击力提高 {2}%，最多叠加4次。",
    valuesBySuperimposition: [
      [16, 40, 10],
      [20, 50, 12],
      [24, 60, 15],
      [28, 70, 17],
      [32, 80, 20],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "熄灭原核", count: 20 },
    { name: "微光原核", count: 20 },
    { name: "蠕动原核", count: 14 },
    { name: "陨铁弹丸", count: 4 },
    { name: "命定死因", count: 12 },
    { name: "逆时一击", count: 15 },
  ],
  recommendedCharacters: [
    { id: "archer", reason: "Archer专属，战技点消耗换攻击叠层。" },
    { id: "feixiao", reason: "战技高频巡猎，攻击叠层上限惊人。" },
  ],
  rating: 4,
  review: "战技点充足时攻击加成最高160%，Archer专属神器。",
  art: "/assets/lightcones/li-xiang-ran-shao-de-di-yu.png",
};
