import type { Character } from "../../types/character";

export const march7th: Character = {
  id: "march7th",
  name: "三月七",
  rarity: 4,
  element: "冰",
  path: "存护",
  faction: "星穹列车",
  description: "被星穹列车从冰块中救起的失忆少女，用相机记录旅途，以单体护盾与冻结守护同伴。",
  stats: { hp: 904, atk: 527, def: 573, speed: 101, critRate: 5, critDmg: 50, taunt: 100, energy: 115 },
  skills: [
    { type: "普攻", name: "极寒的弓矢", description: "对指定敌方单体造成等同于三月七攻击力 50% 的冰属性伤害。" },
    { type: "战技", name: "可爱即正义", description: "为指定我方单体提供等同于三月七防御力 64%+80 的护盾，持续 3 回合。" },
    { type: "终结技", name: "冻结的瞬间", description: "对敌方全体造成等同于三月七攻击力 90% 的冰属性伤害，并有基础概率使其陷入【冻结】状态，持续 1 回合。", energyCost: 115 },
    { type: "天赋", name: "拨转机枢", description: "拥有护盾的我方角色受到攻击后，三月七立即对其攻击者发动反击，造成等同于三月七防御力 30%+160 的冰属性伤害（每回合每名角色最多触发 1 次）。" },
    { type: "秘技", name: "伙伴们的快门", description: "使用秘技后，冻结大范围内的敌人。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 13 },
    { name: "铁卫勋章", count: 12 },
    { name: "风雪之角", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 2400000 },
    { name: "青铜的执着", count: 12 },
    { name: "寒铁的誓言", count: 54 },
    { name: "琥珀的坚守", count: 105 },
    { name: "铁卫扣饰", count: 28 },
    { name: "铁卫军徽", count: 42 },
    { name: "铁卫勋章", count: 42 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "moment-of-victory", reason: "防御与增伤双收，护盾量与反击伤害兼得。" },
    { id: "landau-s-choice", reason: "4★ 平民选择，专属定位的存护光锥，降低敌方输出。" },
  ],
  recommendedRelics: [
    { set: "戍卫风雪的铁卫", piece: "4件套", reason: "减伤与低生命回复，提升护盾体系的整体容错。" },
    { set: "戍卫的孤堡", piece: "2件套", reason: "防御力提升，直接放大护盾与反击数值。" },
  ],
  portrait: "/assets/characters/march7th.svg",
  color: "#7DD3FC",
  tags: ["护盾", "冻结", "辅助"],
};
