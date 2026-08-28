import type { LightCone } from "../../types/lightcone";

export const zuiHouDeYingJia: LightCone = {
  id: "zui-hou-de-ying-jia",
  name: "最后的赢家",
  rarity: 4,
  path: "巡猎",
  baseStats: { hp: 952, atk: 476, def: 330 },
  skill: {
    name: "下注",
    description: "使装备者的攻击力提高 {0}%。当装备者对敌方目标造成暴击后获得一层【好运】，使装备者的暴击伤害提高 {1}%，【好运】在装备者的回合结束时移除。",
    valuesBySuperimposition: [[12, 8], [14, 9], [16, 10], [18, 11], [20, 12]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "思绪末屑", count: 15 },
    { name: "印象残晶", count: 15 },
    { name: "欲念碎镜", count: 12 },
    { name: "猎兽之矢", count: 3 },
    { name: "屠魔之矢", count: 9 },
    { name: "逐星之矢", count: 12 },
  ],
  recommendedCharacters: [
    { id: "dr-ratio", reason: "高频暴击输出，回合内暴击吃满暴伤加成。" },
    { id: "moze", reason: "暴击型巡猎角色，攻击与暴伤双重提升。" },
  ],
  rating: 3,
  review: "4★ 巡猎暴伤光锥，暴击触发简单直接，回合外输出角色受益。",
  art: "/assets/lightcones/zui-hou-de-ying-jia.png",
};
