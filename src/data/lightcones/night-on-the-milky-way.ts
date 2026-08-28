import type { LightCone } from "../../types/lightcone";

export const nightOnTheMilkyWay: LightCone = {
  id: "night-on-the-milky-way",
  name: "银河铁道之夜",
  rarity: 5,
  path: "智识",
  baseStats: { hp: 1164, atk: 582, def: 396 },
  skill: {
    name: "流星群",
    description: "场上每有 1 个敌方目标，使装备者的攻击力提高 {0}%，该效果最多叠加 5 层。当有敌方目标的弱点被击破时，装备者造成的伤害提高 {1}%，持续 1 回合。",
    valuesBySuperimposition: [[9, 30], [10.5, 35], [12, 40], [13.5, 45], [15, 50]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 148000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 18 },
    { name: "铁卫勋章", count: 54 },
  ],
  recommendedCharacters: [
    { id: "himeko", reason: "专属池光锥，群攻弱点击破环境收益最大化。" },
    { id: "herta", reason: "群攻与追加攻击，敌人越多攻击叠层收益越高。" },
    { id: "argenti", reason: "群攻终结技角色，敌多场景攻击加成稳定。" },
  ],
  rating: 4,
  review: "5★ 智识清杂光锥。敌人越多攻击加成越高，配合弱点击破的额外增伤，姬子、黑塔等群攻角色的优选。",
  art: "/assets/lightcones/night-on-the-milky-way.png",
};
