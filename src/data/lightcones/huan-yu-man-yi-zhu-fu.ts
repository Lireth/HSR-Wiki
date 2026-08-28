import type { LightCone } from "../../types/lightcone";

export const huanYuManYiZhuFu: LightCone = {
  id: "huan-yu-man-yi-zhu-fu",
  name: "欢愉满溢祝福",
  rarity: 5,
  path: "欢愉",
  baseStats: { hp: 952, atk: 529, def: 463 },
  skill: {
    name: "开场",
    description:
      "使装备者的攻击力提高 {0}%。当装备者对我方单体角色施放战技或终结技后，使目标欢愉度提高 {1}%，持续2回合。",
    valuesBySuperimposition: [
      [20, 12],
      [25, 15],
      [30, 18],
      [35, 21],
      [40, 24],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "熄灭原核", count: 20 },
    { name: "微光原核", count: 20 },
    { name: "蠢动原核", count: 14 },
    { name: "《绒绒号》手绘分镜稿", count: 4 },
    { name: "《绒绒号》连载纪念刊", count: 12 },
    { name: "《绒绒号》典藏版合集", count: 15 },
  ],
  recommendedCharacters: [
    { id: "aventurine-waveflair", reason: "辅助型欢愉施放频繁，稳定为目标增欢愉度。" },
    { id: "yao-guang", reason: "单体增益型欢愉技，攻击力加成契合输出。" },
  ],
  rating: 4,
  review: "黑塔商店常驻欢愉装，攻击力加成与单体欢愉度辅助。",
  art: "/assets/lightcones/huan-yu-man-yi-zhu-fu.png",
};
