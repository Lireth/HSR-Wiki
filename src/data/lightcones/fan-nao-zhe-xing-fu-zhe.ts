import type { LightCone } from "../../types/lightcone";

export const fanNaoZheXingFuZhe: LightCone = {
  id: "fan-nao-zhe-xing-fu-zhe",
  name: "烦恼着，幸福着",
  rarity: 5,
  path: "巡猎",
  baseStats: { hp: 1058, atk: 582, def: 463 },
  skill: {
    name: "一个一个来",
    description: "使装备者暴击率提高 {0}%，追加攻击造成的伤害提高 {1}%。装备者施放追加攻击后，使目标陷入【温驯】状态，该效果最多叠加2层。我方目标击中【温驯】状态下的敌方目标时，每层【温驯】使造成的暴击伤害提高 {2}%。",
    valuesBySuperimposition: [[18, 30, 12], [21, 35, 14], [24, 40, 16], [27, 45, 18], [30, 50, 20]],
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
    { id: "topaz", reason: "专属光锥，追加攻击触发温驯增伤完美联动。" },
    { id: "feixiao", reason: "高频追击核心，暴击与暴伤收益全额享受。" },
  ],
  rating: 5,
  review: "5★ 追击体系毕业光锥，托帕专属，暴击率与追加攻击增伤收益极高。",
  art: "/assets/lightcones/fan-nao-zhe-xing-fu-zhe.png",
};
