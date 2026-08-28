import type { LightCone } from "../../types/lightcone";

export const huaHuaShiJieMiRenYan: LightCone = {
  id: "hua-hua-shi-jie-mi-ren-yan",
  name: "花花世界迷人眼",
  rarity: 5,
  path: "欢愉",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "瞩目",
    description:
      "使装备者的暴击伤害提高 {0}%。装备者在场时，队伍中每名「欢愉」命途的角色，战技点上限提高1点，最多提高3点；装备者每消耗1个战技点使自身造成的欢愉伤害无视敌方目标 {1}% 的防御力，最多叠加4层，若在同一回合内消耗大于等于4个战技点则使装备者获得【推流】。装备者持有【推流】时，我方全体欢愉度提高 {2}%。同类光锥效果无法叠加。",
    valuesBySuperimposition: [
      [48, 5, 20],
      [56, 6, 24],
      [64, 7, 28],
      [72, 8, 32],
      [80, 9, 36],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "童真蜡笔", count: 20 },
    { name: "造梦蕊钢", count: 20 },
    { name: "梦现管锥", count: 14 },
    { name: "《绒绒号》手绘分镜稿", count: 4 },
    { name: "《绒绒号》连载纪念刊", count: 12 },
    { name: "《绒绒号》典藏版合集", count: 15 },
  ],
  recommendedCharacters: [
    { id: "sparxie", reason: "高频消耗战技点，防御无视轻松叠满。" },
    { id: "trailblazer-euphoria", reason: "欢愉队伍核心，全队战技点上限提升。" },
  ],
  rating: 5,
  review: "欢愉体系毕业光锥，高暴伤与防御无视，全队欢愉度增益。",
  art: "/assets/lightcones/hua-hua-shi-jie-mi-ren-yan.png",
};
