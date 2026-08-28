import type { LightCone } from "../../types/lightcone";

export const zhiZaoMingYunZhiXian: LightCone = {
  id: "zhi-zao-ming-yun-zhi-xian",
  name: "织造命运之线",
  rarity: 4,
  path: "存护",
  baseStats: { hp: 952, atk: 370, def: 463 },
  skill: {
    name: "洞见",
    description: "使装备者的效果抵抗提高 {0}%。装备者每有100点防御力，使装备者造成的伤害提高 {1}%，最多使造成的伤害提高 {2}%。",
    valuesBySuperimposition: [[12, 0.8, 32], [14, 0.9, 36], [16, 1.0, 40], [18, 1.1, 44], [20, 1.2, 48]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "思绪末屑", count: 15 },
    { name: "印象残晶", count: 15 },
    { name: "欲念碎镜", count: 12 },
    { name: "青铜的执着", count: 3 },
    { name: "寒铁的誓言", count: 9 },
    { name: "琥珀的坚守", count: 12 },
  ],
  recommendedCharacters: [
    { id: "aventurine", reason: "高防御存护，防御转伤收益稳定吃满。" },
    { id: "fuxuan", reason: "堆叠防御面板，输出型存护增伤可观。" },
  ],
  rating: 4,
  review: "4★ 防御转输出存护光锥，效果抵抗加防转伤，砂金体系优选。",
  art: "/assets/lightcones/zhi-zao-ming-yun-zhi-xian.png",
};
