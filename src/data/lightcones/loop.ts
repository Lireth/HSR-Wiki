import type { LightCone } from "../../types/lightcone";

export const loop: LightCone = {
  id: "loop",
  name: "渊环",
  rarity: 3,
  path: "虚无",
  baseStats: { hp: 846, atk: 317, def: 264 },
  skill: {
    name: "逼近",
    description: "使装备者对陷入减速状态的敌方目标造成的伤害提高 {0}%。",
    valuesBySuperimposition: [24, 30, 36, 42, 48],
  },
  ascensionMaterials: [
    { name: "信用点", count: 88000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [{ id: "welt", reason: "技能自带减速，开荒期缺少 5★ 虚无光锥时的过渡选择。" }],
  rating: 2,
  review: "3★ 虚无过渡光锥。配合减速类技能即可吃到增伤，开荒期瓦尔特的临时选择，后期建议更换。",
  art: "/assets/lightcones/loop.png",
};
