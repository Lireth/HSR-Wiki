import type { Character } from "../../types/character";

export const sampo: Character = {
  id: "sampo",
  name: "桑博",
  rarity: 4,
  element: "风",
  path: "虚无",
  faction: "贝洛伯格",
  description: "在贝洛伯格地表与地底间来去自如的行商，热情幽默的贩梦者，擅长施加风化持续伤害。",
  stats: { hp: 1023, atk: 617, def: 396, speed: 102, critRate: 5, critDmg: 50, taunt: 100, energy: 120 },
  skills: [
    { type: "普攻", name: "酷炫的刀花", description: "对指定敌方单体造成等同于桑博攻击力 50% 的风属性伤害。" },
    { type: "战技", name: "反复横跳的爱", description: "对指定敌方单体造成等同于桑博攻击力 56% 的风属性伤害，并额外造成 4 次伤害，每次对敌方随机单体造成等同于桑博攻击力 56% 的风属性伤害。" },
    { type: "终结技", name: "惊喜礼盒", description: "对敌方全体造成等同于桑博攻击力 160% 的风属性伤害，并以 100% 基础概率使目标受到的持续伤害提高 30%，持续 2 回合。", energyCost: 120 },
    { type: "天赋", name: "撕风的匕首", description: "击中敌方目标后有 65% 基础概率使其陷入【风化】状态，持续 3 回合，每回合开始时受到等同于桑博攻击力 52% 的风属性持续伤害，最多叠加 5 层。" },
    { type: "秘技", name: "你最闪亮", description: "使一定区域内的敌人陷入目盲状态；主动攻击目盲敌人时，以 100% 固定概率使每个敌方单体行动延后 25%。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "古代零件", count: 12 },
    { name: "古代转轴", count: 13 },
    { name: "古代引擎", count: 12 },
    { name: "暴风之眼", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 2400000 },
    { name: "黯淡黑曜", count: 12 },
    { name: "虚空黑曜", count: 54 },
    { name: "沉沦黑曜", count: 105 },
    { name: "古代零件", count: 28 },
    { name: "古代转轴", count: 42 },
    { name: "古代引擎", count: 42 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "good-night-and-sleep-well", reason: "敌方每多 1 个负面效果增伤一层，与自身风化叠加层数完美联动。" },
    { id: "patience-is-all-you-need", reason: "5★ 虚无选择，增伤与速度叠层强化持续伤害循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度提升，强化持续伤害的频率与数值。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补足面板输出。" },
  ],
  portrait: "/assets/characters/sampo.svg",
  color: "#6EE7B7",
  tags: ["持续伤害", "群攻", "行动延后"],
};
