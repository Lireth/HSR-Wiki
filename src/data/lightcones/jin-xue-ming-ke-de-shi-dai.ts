import type { LightCone } from "../../types/lightcone";

export const jinXueMingKeDeShiDai: LightCone = {
  id: "jin-xue-ming-ke-de-shi-dai",
  name: "金血铭刻的时代",
  rarity: 5,
  path: "和谐",
  baseStats: { hp: 952, atk: 635, def: 463 },
  skill: {
    name: "征服",
    description: "使装备者的攻击力提高 {0}%。施放终结技攻击后恢复1个战技点，装备者对我方单体角色施放战技后，使目标造成的战技伤害提高 {1}%，持续3回合。",
    valuesBySuperimposition: [
      [64, 54],
      [80, 67.5],
      [96, 81],
      [112, 94.5],
      [128, 108],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "预兆似有若无", count: 20 },
    { name: "悲鸣由远及近", count: 20 },
    { name: "哀叹漫无止息", count: 14 },
    { name: "云际音符", count: 4 },
    { name: "空际小节", count: 12 },
    { name: "天外乐章", count: 15 },
  ],
  recommendedCharacters: [
    { id: "cerydra", reason: "刻律德菈专属，128%攻击与战技增伤拔群。" },
    { id: "bronya", reason: "战技增益单体C，攻击加成全队受益。" },
  ],
  rating: 5,
  review: "刻律德菈专属，128%攻击与战技增伤效果拔群。",
  art: "/assets/lightcones/jin-xue-ming-ke-de-shi-dai.png",
};
