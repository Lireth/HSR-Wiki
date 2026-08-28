import type { LightCone } from "../../types/lightcone";

export const wuWangTaDeHuoYan: LightCone = {
  id: "wu-wang-ta-de-huo-yan",
  name: "勿忘她的火焰",
  rarity: 5,
  path: "虚无",
  baseStats: { hp: 1164, atk: 529, def: 463 },
  skill: {
    name: "焚身",
    description: "使装备者的击破特攻提高 {0}%。进入战斗时，使装备者和另一位开战的队友造成的击破伤害提高 {1}%，若不存在开战的队友则对装备者和击破特攻最高的队友生效，同类效果无法叠加。装备者为敌方目标添加弱点时，恢复1个战技点，该效果最多触发1次，施放终结技时重置可触发次数。",
    valuesBySuperimposition: [
      [60, 32],
      [75, 42],
      [90, 52],
      [105, 62],
      [120, 72],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "蓄梦元件", count: 20 },
    { name: "流梦阀门", count: 20 },
    { name: "造梦马达", count: 14 },
    { name: "灼情之灵", count: 4 },
    { name: "星火之精", count: 12 },
    { name: "焚天之魔", count: 15 },
  ],
  recommendedCharacters: [
    { id: "the-dahlia", reason: "大丽花专属，击破特攻与弱点联动强势。" },
    { id: "fugue", reason: "击破流虚无，双人击破增伤全队受益。" },
  ],
  rating: 5,
  review: "大丽花专属，120%击破特攻与弱点回点联动强势。",
  art: "/assets/lightcones/wu-wang-ta-de-huo-yan.png",
};
