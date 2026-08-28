import type { Character } from "../../types/character";

export const lynx: Character = {
  id: "lynx",
  name: "玲可",
  rarity: 4,
  element: "量子",
  path: "丰饶",
  faction: "贝洛伯格·下层区",
  description: "朗道家的小女儿，贝洛伯格下层区的见习急救员，提高生命上限并提供持续治疗。",
  stats: { hp: 1058, atk: 493, def: 551, speed: 100, critRate: 5, critDmg: 50, taunt: 100, energy: 100 },
  skills: [
    { type: "普攻", name: "冰攀前齿技术", description: "对指定敌方单体造成等同于玲可生命上限 50% 的量子属性伤害。" },
    { type: "战技", name: "盐渍野营罐头", description: "为指定我方单体附加【求生反应】，生命上限提高 7.5%+200（若为毁灭或存护命途则被敌方攻击概率大幅提高），持续 2 回合；并回复等同于玲可生命上限 12%+320 的生命值。" },
    { type: "终结技", name: "雪原急救方案", description: "解除我方全体 1 个负面效果，并为全体回复等同于玲可生命上限 13.5%+360 的生命值。", energyCost: 100 },
    { type: "天赋", name: "户外生存经验", description: "施放战技或终结技时，使目标获得持续 2 回合的持续治疗，每回合回复等同于玲可生命上限 3.6%+96 的生命值；持有【求生反应】的目标额外回复等同于玲可生命上限 4.5%+120 的生命值。" },
    { type: "秘技", name: "巧克力能量棒", description: "使用秘技后，下一次战斗开始时为我方全体附加天赋的持续治疗效果，持续 2 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "熄灭原核", count: 12 },
    { name: "微光原核", count: 13 },
    { name: "蠢动原核", count: 12 },
    { name: "苍猿之钉", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 2400000 },
    { name: "丰饶之种", count: 12 },
    { name: "生命之芽", count: 54 },
    { name: "永恒之花", count: 105 },
    { name: "熄灭原核", count: 28 },
    { name: "微光原核", count: 42 },
    { name: "蠢动原核", count: 42 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "time-waits-for-no-one", reason: "5★ 丰饶光锥，生命与治疗量双重提升，放大持续治疗。" },
    { id: "shared-feeling", reason: "4★ 选择，治疗量提升且施放技能时为全队回能。" },
  ],
  recommendedRelics: [
    { set: "云无留迹的过客", piece: "4件套", reason: "治疗量提升并在施放战技后回复能量。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "提高生命上限并增益全队攻击，兼顾生存与辅助。" },
  ],
  portrait: "/assets/characters/lynx.svg",
  color: "#818CF8",
  tags: ["治疗", "生命上限", "解除负面"],
};
