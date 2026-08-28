import type { Character } from "../../types/character";

export const silverwolf: Character = {
  id: "silverwolf",
  name: "银狼",
  rarity: 5,
  element: "量子",
  path: "虚无",
  faction: "星核猎手",
  description: "星核猎手的天才骇客，将宇宙视作大型游戏，可为敌方植入属性弱点与随机缺陷。",
  stats: { hp: 1047, atk: 640, def: 460, speed: 107, critRate: 5, critDmg: 50, taunt: 100, energy: 110 },
  skills: [
    { type: "普攻", name: "系统警告", description: "对指定敌方单体造成等同于银狼攻击力 50% 的量子属性伤害。" },
    { type: "战技", name: "是否允许更改？", description: "有 120% 基础概率为指定敌方单体添加我方持有属性的弱点并使其对应抗性降低 20%，持续 3 回合；同时造成等同于银狼攻击力 196% 的量子属性伤害。" },
    { type: "终结技", name: "账号已封禁", description: "有 120% 基础概率使敌方全体防御力降低 45%，持续 3 回合，并对敌方全体造成等同于银狼攻击力 380% 的量子属性伤害。", energyCost: 110 },
    { type: "天赋", name: "等待程序响应…", description: "可制造【攻击力降低 10%】【防御力降低 12%】【速度降低 6%】三种【缺陷】；每次施放攻击后有 100% 基础概率植入 1 个随机缺陷，持续 3 回合。" },
    { type: "秘技", name: "强制结束进程", description: "立即攻击敌人，进入战斗后对敌方全体造成等同于银狼攻击力 80% 的量子属性伤害，并无视弱点属性削减敌方全体韧性。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "古代零件", count: 15 },
    { name: "古代转轴", count: 15 },
    { name: "古代引擎", count: 15 },
    { name: "虚幻铸铁", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "黯淡黑曜", count: 18 },
    { name: "虚空黑曜", count: 69 },
    { name: "沉沦黑曜", count: 139 },
    { name: "古代零件", count: 41 },
    { name: "古代转轴", count: 56 },
    { name: "古代引擎", count: 58 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "in-the-name-of-the-world", reason: "5★ 虚无光锥，效果命中与增伤兼备，强化弱点植入与减防定位。" },
    { id: "good-night-and-sleep-well", reason: "4★ 神卡，自身与队友制造的负面效果越多增伤越高。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度提升保证先手植入弱点，掌控全队输出节奏。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，兼顾减防手的伤害贡献。" },
  ],
  portrait: "/assets/characters/silverwolf.png",
  color: "#818CF8",
  tags: ["辅助", "弱点植入", "减防"],
};
