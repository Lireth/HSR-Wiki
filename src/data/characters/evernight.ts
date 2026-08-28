import type { Character } from "../../types/character";

export const evernight: Character = {
  id: "evernight",
  name: "长夜月",
  rarity: 5,
  element: "冰",
  path: "记忆",
  faction: "翁法罗斯",
  description: "召唤忆灵「长夜」作战并提升全队忆灵伤害的冰属性记忆输出。",
  stats: { hp: 1319, atk: 543, def: 582, speed: 99, critRate: 5, critDmg: 50, taunt: 100, energy: 240 },
  skills: [
    { type: "普攻", name: "从此岁月朦胧", description: "对指定敌方单体造成等同于长夜月 25% 生命上限的冰属性伤害。" },
    { type: "战技", name: "白昼悄然离去", description: "消耗当前10%生命值召唤忆灵「长夜」，使我方全体忆灵暴击伤害提高，数值等同于长夜月暴击伤害的 24%，持续2回合；若「长夜」已在场则为其回复50%生命上限。施放时获得2点【忆质】。" },
    { type: "终结技", name: "晚安，全世界无眠", description: "召唤「长夜」对敌方全体造成等同于「长夜」 200% 生命上限的冰属性伤害；长夜月进入【至暗之谜】状态：敌方全体受到的伤害提高 30%，长夜月与「长夜」造成的伤害提高 60% 且免疫控制类负面状态，获得2点充能。", energyCost: 240 },
    { type: "天赋", name: "今夜与我同行", description: "进入战斗时召唤「长夜」（速度160，生命上限为长夜月的50%）；长夜月或「长夜」生命值降低时，二者暴击伤害提高 60%，持续2回合并获得2点【忆质】。" },
    { type: "秘技", name: "愿有冷雨落下", description: "使用秘技后，下一次战斗开始时获得与战技相同的提高我方全体忆灵暴击伤害的效果，并获得1点【忆质】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "预兆似有若无", count: 15 },
    { name: "悲鸣由远及近", count: 15 },
    { name: "哀叹漫无止息", count: 15 },
    { name: "海妖残鳍", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "思量的种", count: 18 },
    { name: "末那芽苗", count: 69 },
    { name: "阿赖耶华", count: 139 },
    { name: "预兆似有若无", count: 41 },
    { name: "悲鸣由远及近", count: 56 },
    { name: "哀叹漫无止息", count: 58 },
    { name: "阳雷的遥想", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "zhi-chang-ye-de-xing-guang", reason: "专属光锥，忆灵伤害无视防御大幅增伤。" },
    { id: "rang-gao-bie-geng-mei-yi-xie", reason: "损血叠层无视防御，契合忆灵体系。" },
  ],
  recommendedRelics: [
    { set: "不老者的仙舟", piece: "4件套", reason: "生命上限转伤害，忆灵同步受益。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击与终结技增伤，提升忆灵输出。" },
  ],
  portrait: "/assets/characters/evernight.png",
  color: "#7DD3FC",
  tags: ["忆灵", "群攻", "易伤"],
};
