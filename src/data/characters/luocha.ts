import type { Character } from "../../types/character";

export const luocha: Character = {
  id: "luocha",
  name: "罗刹",
  rarity: 5,
  element: "虚数",
  path: "丰饶",
  faction: "仙舟罗浮",
  description: "仙舟罗浮的云游行商，医术高超的丰饶治疗者，战技可自动触发并展开回血结界。",
  stats: { hp: 1280, atk: 756, def: 363, speed: 101, critRate: 5, critDmg: 50, taunt: 100, energy: 100 },
  skills: [
    { type: "普攻", name: "黑渊的棘刺", description: "对指定敌方单体造成等同于罗刹攻击力 50% 的虚数属性伤害。" },
    { type: "战技", name: "白花的祈望", description: "为指定我方单体回复等同于罗刹攻击力 60%+800 的生命值并获得 1 层【白花之刻】；当我方任意单体生命值小于等于 50% 时，立即对其触发 1 次等同战技的效果，不消耗战技点，触发后 2 回合内不可再次触发。" },
    { type: "终结技", name: "归葬的遂愿", description: "解除敌方全体的 1 个增益效果，并对敌方全体造成等同于罗刹攻击力 200% 的虚数属性伤害，同时获得 1 层【白花之刻】。", energyCost: 100 },
    { type: "天赋", name: "生息的轮转", description: "【白花之刻】达到 2 层时消耗全部层数展开结界，结界中的我方攻击敌方目标后，攻击者立即回复等同于罗刹攻击力 18%+240 的生命值，持续 2 回合。" },
    { type: "秘技", name: "愚者的悲悯", description: "使用秘技后，下一次战斗开始时立即触发天赋效果。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "工造机杼", count: 15 },
    { name: "工造迴轮", count: 15 },
    { name: "工造浑心", count: 15 },
    { name: "往日之影的金饰", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "丰饶之种", count: 18 },
    { name: "生命之芽", count: 69 },
    { name: "永恒之花", count: 139 },
    { name: "工造机杼", count: 41 },
    { name: "工造迴轮", count: 56 },
    { name: "工造浑心", count: 58 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "time-waits-for-no-one", reason: "5★ 丰饶光锥，生命与治疗量提升，记录治疗量反哺输出。" },
    { id: "shared-feeling", reason: "4★ 选择，治疗量提升且施放技能时为全队回能。" },
  ],
  recommendedRelics: [
    { set: "云无留迹的过客", piece: "4件套", reason: "治疗量提升并在施放战技后回复能量，治疗位毕业配置。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "攻击力提升直接放大治疗量，兼顾客场辅助。" },
  ],
  portrait: "/assets/characters/luocha.png",
  color: "#FDE047",
  tags: ["治疗", "自动触发", "驱散"],
};
