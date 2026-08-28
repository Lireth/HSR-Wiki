import type { LightCone } from "../../types/lightcone";

export const inTheNameOfTheWorld: LightCone = {
  id: "in-the-name-of-the-world",
  name: "以世界之名",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 1164, atk: 582, def: 396 },
  skill: {
    name: "虚妄冠冕",
    description: "使装备者造成的伤害提高 {0}%，装备者攻击陷入负面效果的敌方目标时，无视其 {1}% 的防御力。",
    valuesBySuperimposition: [[24, 12], [28, 14], [32, 16], [36, 18], [40, 20]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [{ id: "welt", reason: "专属光锥，减速与禁锢等负面效果覆盖率极高，吃满无视防御。" }],
  rating: 4,
  review: "虚无输出位优质光锥。增伤与无视防御双重收益，配合持续施加负面效果的角色收益最大化。",
  art: "/assets/lightcones/in-the-name-of-the-world.svg",
};
