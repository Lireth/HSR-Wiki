import type { LightCone } from "../../types/lightcone";

export const inTheNight: LightCone = {
  id: "in-the-night",
  name: "于夜色中",
  rarity: 5,
  path: "巡猎",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "花与蝶",
    description: "使装备者的暴击率提高 {0}%。装备者在战斗中速度大于 100 时，每提高 10 点，普攻与战技造成的伤害额外提高 {1}%；速度大于 120 时，每提高 10 点，终结技造成的暴击伤害额外提高 {2}%。",
    valuesBySuperimposition: [[18, 6, 12], [21, 7, 14], [24, 8, 16], [27, 9, 18], [30, 10, 20]],
  },
  ascensionMaterials: [
  { name: "信用点", count: 385000 },
  { name: "铁卫扣饰", count: 20 },
  { name: "铁卫军徽", count: 20 },
  { name: "铁卫勋章", count: 14 },
  { name: "猎兽之矢", count: 4 },
  { name: "屠魔之矢", count: 12 },
  { name: "逐星之矢", count: 15 },
  ],
  recommendedCharacters: [
    { id: "seele", reason: "专属光锥，速度收益与暴击完美适配。" },
    { id: "danheng", reason: "高速度巡猎角色的次优选择。" },
  ],
  rating: 5,
  review: "巡猎命途顶级光锥。堆速度即可吃满全部加成，与希儿等高速主C联动极强，抽到即毕业。",
  art: "/assets/lightcones/in-the-night.png",
};
