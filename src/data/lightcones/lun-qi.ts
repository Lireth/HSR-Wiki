import type { LightCone } from "../../types/lightcone";

export const lunQi: LightCone = {
  id: "lun-qi",
  name: "轮契",
  rarity: 3,
  path: "和谐",
  baseStats: { hp: 846, atk: 317, def: 264 },
  skill: {
    name: "速决",
    description: "使装备者施放攻击或受到攻击后，额外恢复 {0} 点能量，该效果单个回合内不可重复触发。",
    valuesBySuperimposition: [4, 5, 6, 7, 8],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 10 },
    { name: "铁卫勋章", count: 8 },
    { name: "谐乐小调", count: 2 },
    { name: "家族颂歌", count: 6 },
    { name: "群星乐章", count: 9 },
  ],
  recommendedCharacters: [
    { id: "tingyun", reason: "终结技关键，攻击受击回能加快大招循环。" },
    { id: "sparkle", reason: "易叠影的回能选择，辅助终结技启动更早。" },
  ],
  rating: 3,
  review: "3★ 和谐回能神器，易叠影提升终结技启动频率。",
  art: "/assets/lightcones/lun-qi.png",
};
