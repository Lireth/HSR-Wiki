import type { Character } from "../../types/character";

export const bailu: Character = {
  id: "bailu",
  name: "白露",
  rarity: 5,
  element: "雷",
  path: "丰饶",
  faction: "仙舟罗浮",
  description: "仙舟罗浮持明族的尊长，有「衔药龙女」之称的医士，可群体治疗并让队友免于倒下。",
  stats: { hp: 1206, atk: 582, def: 485, speed: 98, critRate: 5, critDmg: 50, taunt: 100, energy: 100 },
  skills: [
    { type: "普攻", name: "望、闻、问…蹴！", description: "对指定敌方单体造成等同于白露攻击力 50% 的雷属性伤害。" },
    { type: "战技", name: "云吟乍涌坠珠露", description: "为指定我方单体及其相邻目标治疗 3 次，每次治疗量依次递减。" },
    { type: "终结技", name: "匏蛟跃渊先雷音", description: "为我方全体回复等同于白露生命上限 12%+240 的生命值，并为没有【生息】的队友附加【生息】，已拥有的延长持续 1 回合。", energyCost: 100 },
    { type: "天赋", name: "奔走悬壶济世长", description: "拥有【生息】的队友受到攻击时立即回复生命（每回合最多 2 次）；受到致命伤害时不会陷入无法战斗状态，转而回复生命（每场战斗触发 1 次）。" },
    { type: "秘技", name: "徜徉灵泽病恙短", description: "使用秘技后，下一次战斗开始时为我方全体附加【生息】，持续 2 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 15 },
    { name: "往日之影的雷冠", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "丰饶之种", count: 18 },
    { name: "生命之芽", count: 69 },
    { name: "永恒之花", count: 139 },
    { name: "熄灭原核", count: 41 },
    { name: "微光原核", count: 56 },
    { name: "蠢动原核", count: 58 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "shared-feeling", reason: "4★ 治疗向光锥，提高治疗量并在施放战技时为全队回能。" },
    { id: "landau-s-choice", reason: "4★ 生存向选择，提高白露自身的承伤容错。" },
  ],
  recommendedRelics: [
    { set: "云无留迹的过客", piece: "4件套", reason: "治疗量提升并在施放战技后回复能量，奶妈毕业配置。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "提高生命上限并增益全队攻击，兼顾生存与辅助。" },
  ],
  portrait: "/assets/characters/bailu.svg",
  color: "#C084FC",
  tags: ["治疗", "辅助", "免死"],
};
