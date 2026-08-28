import type { LightCone } from "../../types/lightcone";

export const rangGaoBieGengMeiYiXie: LightCone = {
  id: "rang-gao-bie-geng-mei-yi-xie",
  name: "让告别，更美一些",
  rarity: 5,
  path: "记忆",
  baseStats: { hp: 1270, atk: 529, def: 396 },
  skill: {
    name: "铭记",
    description: "使装备者的生命上限提高 {0}%，装备者或装备者的忆灵在自身回合内损失生命值时，装备者获得【冥花】，【冥花】可以使装备者和装备者的忆灵造成伤害时，无视目标 {1}% 的防御力，持续2回合。当装备者的忆灵消失时，使装备者行动提前 {2}%。该效果最多触发1次，装备者每次施放终结技时重置触发次数。",
    valuesBySuperimposition: [
      [30, 30, 12],
      [37, 35, 15],
      [45, 40, 18],
      [52, 45, 21],
      [60, 50, 24],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "预兆似有若无", count: 20 },
    { name: "悲鸣由远及近", count: 20 },
    { name: "叹息漫无止息", count: 14 },
    { name: "思量的种", count: 4 },
    { name: "末那芽苗", count: 12 },
    { name: "阿赖耶华", count: 15 },
  ],
  recommendedCharacters: [
    { id: "castorice", reason: "遐蝶专属，生命机制与无视防御契合。" },
    { id: "hyacine", reason: "生命上限提升治疗量与输出上限。" },
  ],
  rating: 5,
  review: "遐蝶专属，生命上限、无视防御与忆灵联动全面。",
  art: "/assets/lightcones/rang-gao-bie-geng-mei-yi-xie.png",
};
