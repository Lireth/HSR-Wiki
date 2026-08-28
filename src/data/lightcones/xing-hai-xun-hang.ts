import type { LightCone } from "../../types/lightcone";

export const xingHaiXunHang: LightCone = {
  id: "xing-hai-xun-hang",
  name: "星海巡航",
  rarity: 5,
  path: "巡猎",
  baseStats: { hp: 952, atk: 529, def: 463 },
  skill: {
    name: "猎逐",
    description: "使装备者的暴击率提高 {0}%，装备者对生命值百分比小于等于50%的敌方目标暴击率额外提高 {1}%。当装备者消灭敌方目标后，攻击力提高 {2}%，持续2回合。",
    valuesBySuperimposition: [
      [8, 8, 20],
      [10, 10, 25],
      [12, 12, 30],
      [14, 14, 35],
      [16, 16, 40],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "熄灭原核", count: 20 },
    { name: "微光原核", count: 20 },
    { name: "蠢动原核", count: 14 },
    { name: "猎兽之矢", count: 4 },
    { name: "屠魔之矢", count: 12 },
    { name: "逐星之矢", count: 15 },
  ],
  recommendedCharacters: [
    { id: "seele", reason: "击杀续动配合击杀增攻，暴击覆盖全面。" },
    { id: "dr-ratio", reason: "平民毕业巡猎，暴击与增攻词条泛用性极强。" },
  ],
  rating: 4,
  review: "5★ 黑塔商店平民毕业巡猎，暴击与击杀增攻兼备。",
  art: "/assets/lightcones/xing-hai-xun-hang.png",
};
