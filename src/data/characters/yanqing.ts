import type { Character } from "../../types/character";

export const yanqing: Character = {
  id: "yanqing",
  name: "彦卿",
  rarity: 5,
  element: "冰",
  path: "巡猎",
  faction: "仙舟「罗浮」",
  description: "总角之年的御剑天才，借【智剑连心】提升暴击并以追加攻击冻结敌人。",
  stats: { hp: 892, atk: 679, def: 412, speed: 109, critRate: 5, critDmg: 50, taunt: 75, energy: 140 },
  skills: [
    { type: "普攻", name: "霜锋点寒芒", description: "对指定敌方单体造成等同于彦卿攻击力 50% 的冰属性伤害。" },
    { type: "战技", name: "遥击三尺水", description: "对指定敌方单体造成等同于彦卿攻击力 220% 的冰属性伤害，并为彦卿附加【智剑连心】，持续 1 回合。" },
    { type: "终结技", name: "快雨燕相逐", description: "提高自身 60% 暴击率，若处于【智剑连心】效果则暴击伤害额外提高 50%，持续 1 回合；随后对指定敌方单体造成等同于彦卿攻击力 350% 的冰属性伤害。", energyCost: 140 },
    { type: "天赋", name: "呼剑如影", description: "处于【智剑连心】效果时受击概率降低，暴击率提高 20%、暴击伤害提高 30%；施放攻击后有 60% 固定概率发动追加攻击，造成 50% 攻击力的冰属性伤害，并以 65% 基础概率使目标冻结 1 回合。受到伤害后【智剑连心】消失。" },
    { type: "秘技", name: "御剑真诀", description: "使用秘技后，下一次战斗开始时对当前生命值百分比大于等于 50% 的敌方目标造成的伤害提高 30%，持续 2 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 15 },
    { name: "苦寒晶壳", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "猎兽之矢", count: 18 },
    { name: "屠魔之矢", count: 69 },
    { name: "逐星之矢", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "sleep-like-the-dead", reason: "专属光锥，暴伤加成契合其高暴击的追加攻击体系。" },
    { id: "lun-jian", reason: "4星选择，多次命中同一目标叠层增伤，契合追击节奏。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度加成，适配巡猎单体输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与增伤，补足输出面板。" },
  ],
  portrait: "/assets/characters/yanqing.png",
  color: "#7DD3FC",
  tags: ["暴击率", "追加攻击", "冻结"],
};
