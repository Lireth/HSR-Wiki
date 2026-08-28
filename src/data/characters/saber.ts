import type { Character } from "../../types/character";

export const saber: Character = {
  id: "saber",
  name: "Saber",
  rarity: 5,
  element: "风",
  path: "毁灭",
  faction: "异界(Fate系列)",
  description: "以终结技对敌方全体大量输出，借【炉心共鸣】立即行动并恢复满能量。",
  stats: { hp: 1241, atk: 601, def: 654, speed: 101, critRate: 5, critDmg: 50, taunt: 75, energy: 360 },
  skills: [
    { type: "普攻", name: "风王结界", description: "对指定敌方单体造成等同于Saber攻击力 50% 的风属性伤害。" },
    { type: "战技", name: "风王铁槌", description: "对指定敌方单体造成等同于Saber攻击力 150% 的风属性伤害，对相邻目标造成 75%；若消耗【炉心共鸣】可恢复满能量，每点使本次战技倍率提高 14%，并在攻击后消耗所有【炉心共鸣】恢复能量，否则立即获得3点【炉心共鸣】。" },
    { type: "终结技", name: "誓约胜利之剑", description: "对敌方全体造成等同于Saber攻击力 280% 的风属性伤害，并额外造成10次伤害，每次对随机敌方单体造成 110% 攻击力的风属性伤害；施放后下次普攻被替换为强化普攻【解放的金色王权】且仅能施放该普攻。", energyCost: 360 },
    { type: "天赋", name: "龙之炉心", description: "进入战斗时获得1点【炉心共鸣】；我方任意目标施放终结技时，Saber造成的伤害提高 60%，持续2回合，并获得3点【炉心共鸣】；每消耗1点【炉心共鸣】为Saber固定恢复8点能量。" },
    { type: "秘技", name: "骑士王的登场", description: "使用秘技后，下一次战斗开始时Saber攻击力提高35%，持续2回合，并获得2点【炉心共鸣】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 15 },
    { name: "一杯酩酊的时代", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "步离犬牙", count: 18 },
    { name: "狼毒锯牙", count: 69 },
    { name: "月狂獠牙", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "mei-you-hui-bao-de-jia-mian", reason: "专属光锥，高能量上限吃满终结技加攻。" },
    { id: "brighter-than-the-sun", reason: "暴击与龙吟回能，契合强化普攻循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击速度双增，终结技爆发更强。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击与终结技增伤，契合终结技流。" },
  ],
  portrait: "/assets/characters/saber.png",
  color: "#6EE7B7",
  tags: ["伤害倍率", "自身立即行动", "联动"],
};
