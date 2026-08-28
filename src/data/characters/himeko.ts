import type { Character } from "../../types/character";

export const himeko: Character = {
  id: "himeko",
  name: "姬子",
  rarity: 5,
  element: "火",
  path: "智识",
  faction: "星穹列车",
  description: "星穹列车的科学家兼冒险家，擅长以灼烧与追击清场，是弱点火敌人的克星。",
  stats: { hp: 1165, atk: 717, def: 485, speed: 102, critRate: 5, critDmg: 50, taunt: 125, energy: 120 },
  skills: [
    { type: "普攻", name: "鏖战", description: "对指定敌方单体造成等同于姬子攻击力 50% 的火属性伤害。" },
    { type: "战技", name: "熔核爆裂", description: "对指定敌方单体造成等同于姬子攻击力 55% 的火属性伤害，对相邻目标造成的伤害减半，并有概率使其陷入【灼烧】状态。" },
    { type: "终结技", name: "炙热喷发", description: "对敌方全体造成等同于姬子攻击力 138% 的火属性伤害，并有概率使其陷入【灼烧】状态。", energyCost: 120 },
    { type: "天赋", name: "胜利余兴", description: "敌方目标被击破弱点后，姬子获得 1 点充能；充满 5 点时对敌方全体发动等同于攻击力 90% 的火属性追击。" },
    { type: "秘技", name: "军用火花", description: "使用秘技后，立即对大范围内的敌人造成火属性伤害，并有概率使其陷入【灼烧】状态。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 15 },
    { name: "恒温晶壳", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "灵感之钥", count: 18 },
    { name: "启迪之钥", count: 69 },
    { name: "智识之钥", count: 139 },
    { name: "熄灭原核", count: 41 },
    { name: "微光原核", count: 56 },
    { name: "蠢动原核", count: 58 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "before-dawn", reason: "战技/终结技高频增伤，配合追击清场收益极高。" },
    { id: "today-is-another-peaceful-day", reason: "4★ 平民选择，能量循环下攻击加成稳定。" },
  ],
  recommendedRelics: [
    { set: "沉陷的地下虎", piece: "4件套", reason: "火属性伤害提升并强化终结技后的输出，适配群攻循环。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与增伤，补足追击面板。" },
  ],
  portrait: "/assets/characters/himeko.svg",
  color: "#FF9F45",
  tags: ["输出", "群攻", "追击"],
};
