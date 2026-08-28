import type { LightCone } from "../../types/lightcone";

export const dengJiaJiaoHuan: LightCone = {
  id: "deng-jia-jiao-huan",
  name: "等价交换",
  rarity: 4,
  path: "丰饶",
  baseStats: { hp: 952, atk: 423, def: 396 },
  skill: {
    name: "酣适",
    description: "当装备者的回合开始时，随机为1个当前能量百分比小于50%的我方其他目标恢复 {0} 点能量。",
    valuesBySuperimposition: [8, 10, 12, 14, 16],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "铁卫扣饰", count: 15 },
    { name: "铁卫军徽", count: 15 },
    { name: "铁卫勋章", count: 12 },
    { name: "丰饶之种", count: 3 },
    { name: "生命之芽", count: 9 },
    { name: "永恒之花", count: 12 },
  ],
  recommendedCharacters: [
    { id: "bailu", reason: "丰饶四星毕业级功能光锥，回能加速全队循环。" },
    { id: "tingyun", reason: "为能量不足的队友补能，配合停云增益闭环。" },
  ],
  rating: 4,
  review: "为能量不足队友回能，丰饶四星毕业级功能性光锥。",
  art: "/assets/lightcones/deng-jia-jiao-huan.png",
};
