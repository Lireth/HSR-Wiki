import type { LightCone } from "../../types/lightcone";

export const zhuiZhuFengDeShiHou: LightCone = {
  id: "zhui-zhu-feng-de-shi-hou",
  name: "追逐风的时候",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 1058, atk: 476, def: 396 },
  skill: {
    name: "慌张",
    description: "进入战斗后，使我方全体造成的击破伤害提高 {0}%。同类技能无法重复生效。",
    valuesBySuperimposition: [16, 18, 20, 22, 24],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "预兆似有若无", count: 15 },
    { name: "悲鸣由远及近", count: 15 },
    { name: "哀叹漫无止息", count: 12 },
    { name: "云际音符", count: 3 },
    { name: "空际小节", count: 9 },
    { name: "天外乐章", count: 12 },
  ],
  recommendedCharacters: [
    { id: "ruan-mei", reason: "击破队核心辅助，全体击破伤害再增强。" },
    { id: "hanya", reason: "击破流辅助，开战即享24%击破增伤。" },
  ],
  rating: 4,
  review: "全体击破伤害24%开局生效，击破队辅助性价比高。",
  art: "/assets/lightcones/zhui-zhu-feng-de-shi-hou.png",
};
