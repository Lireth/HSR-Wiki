import type { Character } from "../../types/character";

export const natasha: Character = {
  id: "natasha",
  name: "娜塔莎",
  rarity: 4,
  element: "物理",
  path: "丰饶",
  faction: "贝洛伯格·下层区",
  description: "下层区受人爱戴的医生，温柔与危险并存，提供单体急救与群体治疗的丰饶治疗者。",
  stats: { hp: 1164, atk: 476, def: 507, speed: 98, critRate: 5, critDmg: 50, taunt: 100, energy: 90 },
  skills: [
    { type: "普攻", name: "仁慈的背面", description: "对指定敌方单体造成等同于娜塔莎攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "爱，救护与抉择", description: "为指定我方单体回复等同于娜塔莎生命上限 10.5%+280 的生命值，并在其回合开始时为其回复等同于娜塔莎生命上限 7.2%+192 的生命值，持续 2 回合。" },
    { type: "终结技", name: "新生之礼", description: "为我方全体回复等同于娜塔莎生命上限 13.8%+368 的生命值。", energyCost: 90 },
    { type: "天赋", name: "生机焕发", description: "为当前生命值百分比小于等于 30% 的我方目标提供治疗时，治疗量提高 50%，对持续治疗效果同样生效。" },
    { type: "秘技", name: "催眠研习", description: "立即攻击敌人，进入战斗后对敌方随机单体造成等同于娜塔莎攻击力 80% 的物理属性伤害，并有 100% 基础概率使其陷入【虚弱】状态（对我方造成的伤害降低 30%），持续 1 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "古代零件", count: 12 },
    { name: "古代转轴", count: 13 },
    { name: "古代引擎", count: 12 },
    { name: "铁狼碎齿", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 2400000 },
    { name: "丰饶之种", count: 12 },
    { name: "生命之芽", count: 54 },
    { name: "永恒之花", count: 105 },
    { name: "古代零件", count: 28 },
    { name: "古代转轴", count: 42 },
    { name: "古代引擎", count: 42 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "time-waits-for-no-one", reason: "5★ 治疗向光锥，生命与治疗量双重提升。" },
    { id: "shared-feeling", reason: "4★ 选择，治疗量提升且施放技能时为全队回能。" },
  ],
  recommendedRelics: [
    { set: "云无留迹的过客", piece: "4件套", reason: "治疗量提升并在施放战技后回复能量，治疗位毕业配置。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "提高生命上限并增益全队攻击，兼顾生存与辅助。" },
  ],
  portrait: "/assets/characters/natasha.png",
  color: "#E8E4D9",
  tags: ["治疗", "持续回复", "辅助"],
};
