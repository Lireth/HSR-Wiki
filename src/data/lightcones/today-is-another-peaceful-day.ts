import type { LightCone } from "../../types/lightcone";

export const todayIsAnotherPeacefulDay: LightCone = {
  id: "today-is-another-peaceful-day",
  name: "今日亦是和平的一日",
  rarity: 4,
  path: "智识",
  baseStats: { hp: 846, atk: 529, def: 330 },
  skill: {
    name: "风雨将至",
    description: "使装备者造成的伤害提高：装备者的能量上限每 1 点，造成的伤害提高 {0}%，最多计入 160 点。",
    valuesBySuperimposition: [0.2, 0.25, 0.3, 0.35, 0.4],
  },
  ascensionMaterials: [
    { name: "信用点", count: 118000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "jingyuan", reason: "能量上限高，从能量加成中获取的增伤最多。" },
    { id: "seele", reason: "通用增伤的面板提升明显，缺专属光锥时的优质备选。" },
  ],
  rating: 4,
  review: "4★ 智识通用增伤光锥。能量上限越高的角色收益越大，景元等高耗能主C的平民毕业选择。",
  art: "/assets/lightcones/today-is-another-peaceful-day.png",
};
