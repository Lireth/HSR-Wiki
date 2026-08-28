import type { LightCone } from "../../types/lightcone";

export const huangYanZaiFengZhongPiaoYang: LightCone = {
  id: "huang-yan-zai-feng-zhong-piao-yang",
  name: "谎言在风中飘扬",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 952, atk: 582, def: 529 },
  skill: {
    name: "欺瞒",
    description: "使装备者的速度提高 {0}%。装备者施放攻击后，有120%的基础概率使敌方每个单体目标陷入【茫然】状态，【茫然】状态下的敌方目标防御力降低 {1}%，持续2回合，若装备者的速度大于等于170，有120%的基础概率使敌方每个单体目标陷入【失窃】状态，【失窃】状态下的敌方目标防御力降低 {2}%，持续2回合。【茫然】或【失窃】被重复施加时，仅最新施加的生效。",
    valuesBySuperimposition: [
      [18, 16, 8],
      [21, 18, 9],
      [24, 20, 10],
      [27, 22, 11],
      [30, 24, 12],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "预兆似有若无", count: 20 },
    { name: "悲鸣由远及近", count: 20 },
    { name: "叹息漫无止息", count: 14 },
    { name: "炽情之灵", count: 4 },
    { name: "星火之精", count: 12 },
    { name: "焚天之魔", count: 15 },
  ],
  recommendedCharacters: [
    { id: "cipher", reason: "赛飞儿专属，高速减防体系核心输出。" },
    { id: "pela", reason: "速度流减防辅助，叠层收益显著。" },
  ],
  rating: 5,
  review: "赛飞儿专属，高速双状态减防，虚无辅助输出兼备。",
  art: "/assets/lightcones/huang-yan-zai-feng-zhong-piao-yang.png",
};
