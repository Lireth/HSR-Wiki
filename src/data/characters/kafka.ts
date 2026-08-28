import type { Character } from "../../types/character";

export const kafka: Character = {
  id: "kafka",
  name: "卡芙卡",
  rarity: 5,
  element: "雷",
  path: "虚无",
  faction: "星核猎手",
  description: "星核猎手，优雅而危险的「女人」，可使持续伤害立即引爆的雷属性虚无输出。",
  stats: { hp: 1086, atk: 679, def: 485, speed: 100, critRate: 5, critDmg: 50, taunt: 100, energy: 120 },
  skills: [
    { type: "普攻", name: "夜间喧嚣不止", description: "对指定敌方单体造成等同于卡芙卡攻击力 50% 的雷属性伤害。" },
    { type: "战技", name: "月光摩挲连绵", description: "对指定敌方单体造成等同于卡芙卡攻击力 160% 的雷属性伤害，对其相邻目标造成等同于卡芙卡攻击力 60% 的雷属性伤害；若目标处于持续伤害状态，其承受的所有持续伤害立即产生等同于原伤害 75% 的额外伤害。" },
    { type: "终结技", name: "悲剧尽头的颤音", description: "对敌方全体造成等同于卡芙卡攻击力 80% 的雷属性伤害，并以 100% 基础概率使目标陷入【触电】状态，且使其【触电】立即产生等同于原伤害 100% 的额外伤害；【触电】持续 2 回合，每回合开始时受到等同于卡芙卡攻击力 290% 的雷属性持续伤害。", energyCost: 120 },
    { type: "天赋", name: "温柔亦同残酷", description: "我方队友对敌方目标施放普攻后，卡芙卡立即对其发动追加攻击，造成等同于卡芙卡攻击力 140% 的雷属性伤害，并以 100% 基础概率使目标陷入【触电】状态，持续 2 回合；每回合最多触发 1 次。" },
    { type: "秘技", name: "宽恕无关慈悲", description: "立即攻击范围内的所有敌人，进入战斗后对敌方全体造成等同于卡芙卡攻击力 50% 的雷属性伤害，并以 100% 基础概率使每个敌方单体陷入【触电】状态，持续 2 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 15 },
    { name: "炼形者雷枝", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "黯淡黑曜", count: 18 },
    { name: "虚空黑曜", count: 69 },
    { name: "沉沦黑曜", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "patience-is-all-you-need", reason: "专属光锥，增伤与速度叠层，【游丝】视作触电强化引爆体系。" },
    { id: "good-night-and-sleep-well", reason: "4★ 神卡，多层负面效果环境下增伤显著。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度提升，持续伤害与追加攻击的核心面板。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，兼顾引爆爆发的直伤部分。" },
  ],
  portrait: "/assets/characters/kafka.svg",
  color: "#C084FC",
  tags: ["持续伤害", "追加攻击", "群攻"],
};
