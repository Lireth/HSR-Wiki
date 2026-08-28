import type { LightCone } from "../../types/lightcone";

export const yuNaZhongDianZaiJian: LightCone = {
  id: "yu-na-zhong-dian-zai-jian",
  name: "于那终点再见",
  rarity: 4,
  path: "巡猎",
  baseStats: { hp: 952, atk: 529, def: 396 },
  skill: {
    name: "执着",
    description: "使装备者的暴击伤害提高 {0}%。装备者造成的战技和追加攻击伤害提高 {1}%。",
    valuesBySuperimposition: [
      [24, 24],
      [28, 28],
      [32, 32],
      [36, 36],
      [40, 40],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "预兆似有若无", count: 15 },
    { name: "悲鸣由远及近", count: 15 },
    { name: "叹息漫无止息", count: 12 },
    { name: "陨铁弹丸", count: 3 },
    { name: "命定死因", count: 9 },
    { name: "逆时一击", count: 12 },
  ],
  recommendedCharacters: [
    { id: "feixiao", reason: "追加攻击流完美契合，暴伤全面加成。" },
    { id: "topaz", reason: "战技与追加攻击双增伤，输出提升显著。" },
  ],
  rating: 4,
  review: "无名勋礼巡猎装，暴伤与追加攻击增伤，飞霄优选。",
  art: "/assets/lightcones/yu-na-zhong-dian-zai-jian.png",
};
