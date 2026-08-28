import type { LightCone } from "../../types/lightcone";

export const shiXiangDiErCiShengMing: LightCone = {
  id: "shi-xiang-di-er-ci-sheng-ming",
  name: "驶向第二次生命",
  rarity: 5,
  path: "巡猎",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "苦航",
    description: "使装备者的击破特攻提高{0}%，造成的击破伤害无视目标{1}%的防御力。当装备者在战斗中击破特攻大于等于150%时，速度提高{2}%。",
    valuesBySuperimposition: [
      [60, 20, 12],
      [70, 23, 14],
      [80, 26, 16],
      [90, 29, 18],
      [100, 32, 20],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "思绪末屑", count: 20 },
    { name: "印象残晶", count: 20 },
    { name: "欲念碎镜", count: 14 },
    { name: "陨铁弹丸", count: 4 },
    { name: "命定死因", count: 12 },
    { name: "逆时一击", count: 15 },
  ],
  recommendedCharacters: [
    { id: "boothill", reason: "波提欧专属，击破流毕业光锥。" },
    { id: "topaz", reason: "击破转输出，速度加成提升行动频率。" },
  ],
  rating: 5,
  review: "击破巡猎天花板，波提欧专属毕业装。",
  art: "/assets/lightcones/shi-xiang-di-er-ci-sheng-ming.png",
};
