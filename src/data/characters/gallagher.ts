import type { Character } from "../../types/character";

export const gallagher: Character = {
  id: "gallagher",
  name: "加拉赫",
  rarity: 4,
  element: "火",
  path: "丰饶",
  faction: "匹诺康尼",
  description: "匹诺康尼治安官，治疗与击破易伤兼备的火属性丰饶生存位。",
  stats: { hp: 1305, atk: 529, def: 441, speed: 98, critRate: 5, critDmg: 50, taunt: 100, energy: 110 },
  skills: [
    { type: "普攻", name: "开瓶费", description: "对指定敌方单体造成等同于加拉赫攻击力 50% 的火属性伤害。" },
    { type: "战技", name: "罐装特调", description: "立即为指定我方单体回复 1600 点生命值。" },
    { type: "终结技", name: "香槟仪礼", description: "使敌方全体陷入【酩酊】状态，持续2回合，并对其全体造成等同于加拉赫攻击力 150% 的火属性伤害，随后将下一次普攻强化为【酒花奔涌】。", energyCost: 110 },
    { type: "天赋", name: "鏖战正酣", description: "【酩酊】使目标受到的击破伤害提高 12.0%；陷入【酩酊】状态的目标每次受到我方角色攻击后，为攻击者回复 640 点生命值。" },
    { type: "秘技", name: "亲启佳酿", description: "立即攻击敌人，进入战斗后使敌方全体陷入【酩酊】状态，持续2回合，并对其全体造成等同于加拉赫 50% 攻击力的火属性伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "蓄梦元件", count: 12 },
    { name: "流梦阀门", count: 13 },
    { name: "造梦马达", count: 12 },
    { name: "忿火之心", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "丰饶之种", count: 18 },
    { name: "生命之芽", count: 69 },
    { name: "永恒之花", count: 139 },
    { name: "蓄梦元件", count: 41 },
    { name: "流梦阀门", count: 56 },
    { name: "造梦马达", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "jing-hun-ye", reason: "回能与终结技后群体回复，强化全队生存。" },
    { id: "time-waits-for-no-one", reason: "生命与治疗量提升，治疗转化为附加伤害。" },
  ],
  recommendedRelics: [
    { set: "云无留迹的过客", piece: "4件套", reason: "治疗量提升并开局回复战技点，辅助首选。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，增强治疗位容错。" },
  ],
  portrait: "/assets/characters/gallagher.png",
  color: "#FF9F45",
  tags: ["治疗", "击破易伤", "群攻"],
};
