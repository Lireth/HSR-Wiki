import type { Character } from "../../types/character";

export const gepard: Character = {
  id: "gepard",
  name: "杰帕德",
  rarity: 5,
  element: "冰",
  path: "存护",
  faction: "贝洛伯格·银鬃铁卫",
  description: "银鬃铁卫的戍卫官，贝洛伯格数一数二的战士，以全队护盾守护同伴的钢铁壁垒。",
  stats: { hp: 1397, atk: 543, def: 654, speed: 92, critRate: 5, critDmg: 50, taunt: 125, energy: 100 },
  skills: [
    { type: "普攻", name: "凛冬之矛", description: "对指定敌方单体造成等同于杰帕德攻击力 50% 的冰属性伤害。" },
    { type: "战技", name: "恸哭冰霜", description: "对指定敌方单体造成等同于杰帕德攻击力 100% 的冰属性伤害，并有基础概率使其陷入【冻结】状态。" },
    { type: "终结技", name: "永固壁垒", description: "为我方全体提供等同于杰帕德防御力 60%+150 的护盾，持续 3 回合。", energyCost: 100 },
    { type: "天赋", name: "永不退却", description: "杰帕德受到致命攻击时，不会陷入无法战斗状态，并回复等同于自身生命上限 25% 的生命值（每场战斗触发 1 次）。" },
    { type: "秘技", name: "倾覆壁垒", description: "使用秘技后，下一次战斗开始时为我方全体提供随机护盾，吸收等同于杰帕德防御力 24%+150 的伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "铁卫扣饰", count: 15 },
    { name: "铁卫军徽", count: 15 },
    { name: "铁卫勋章", count: 15 },
    { name: "风雪之角", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "青铜的执着", count: 18 },
    { name: "寒铁的誓言", count: 69 },
    { name: "琥珀的坚守", count: 139 },
    { name: "铁卫扣饰", count: 41 },
    { name: "铁卫军徽", count: 56 },
    { name: "铁卫勋章", count: 58 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "moment-of-victory", reason: "5★ 存护光锥，防御与增伤双收，护盾量与输出兼得。" },
    { id: "landau-s-choice", reason: "4★ 生存向选择，降低敌方对我方的输出。" },
  ],
  recommendedRelics: [
    { set: "戍卫风雪的铁卫", piece: "4件套", reason: "减伤与低生命回复，强化其站场守护能力。" },
    { set: "戍卫的孤堡", piece: "2件套", reason: "防御力提升，直接放大全队护盾量。" },
  ],
  portrait: "/assets/characters/gepard.png",
  color: "#7DD3FC",
  tags: ["护盾", "坦克", "冻结"],
};
