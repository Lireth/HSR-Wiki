import type { Character } from "../../types/character";

export const hook: Character = {
  id: "hook",
  name: "虎克",
  rarity: 4,
  element: "火",
  path: "毁灭",
  faction: "贝洛伯格",
  description: "鼹鼠党的自封老大，以灼烧持续伤害与强化战技输出的小小冒险家。",
  stats: { hp: 1340, atk: 617, def: 352, speed: 94, critRate: 5, critDmg: 50, taunt: 75, energy: 120 },
  skills: [
    { type: "普攻", name: "喂！小心火烛", description: "对指定敌方单体造成等同于虎克攻击力 50% 的火属性伤害。" },
    { type: "战技", name: "嘿！记得虎克吗", description: "对指定敌方单体造成等同于虎克攻击力 240% 的火属性伤害，并以 100% 基础概率使其陷入灼烧状态，持续 2 回合；灼烧状态下每回合开始时受到等同于虎克攻击力 65% 的火属性持续伤害。" },
    { type: "终结技", name: "轰！飞来焰火", description: "对指定敌方单体造成等同于虎克攻击力 400% 的火属性伤害；施放后下一次施放的战技得到强化，能够同时对指定敌方单体及其相邻目标造成伤害。", energyCost: 120 },
    { type: "天赋", name: "哈！火上浇油", description: "攻击处于灼烧状态的敌方目标时，追加 1 次等同于虎克攻击力 100% 的火属性附加伤害，并额外恢复 5 点能量。" },
    { type: "秘技", name: "哎！瞧这一团糟", description: "立即攻击敌人，进入战斗后对敌方随机单体造成等同于虎克攻击力 50% 的火属性伤害，并以 100% 基础概率使每个单体目标陷入灼烧状态，持续 3 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "古代零件", count: 12 },
    { name: "古代转轴", count: 13 },
    { name: "古代引擎", count: 12 },
    { name: "恒温晶壳", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "破碎残刃", count: 18 },
    { name: "无生残刃", count: 69 },
    { name: "净世残刃", count: 139 },
    { name: "古代零件", count: 41 },
    { name: "古代转轴", count: 56 },
    { name: "古代引擎", count: 58 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "woof-walk-time", reason: "攻击力加成并对灼烧目标增伤，灼烧流完美契合。" },
    { id: "something-irreplaceable", reason: "受击回血并提高伤害，契合站场持续输出。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度加成，适配战技强化输出节奏。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与增伤，补足输出面板。" },
  ],
  portrait: "/assets/characters/hook.png",
  color: "#FF9F45",
  tags: ["技能强化", "持续伤害", "附加伤害"],
};
