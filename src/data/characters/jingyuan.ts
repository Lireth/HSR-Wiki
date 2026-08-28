import type { Character } from "../../types/character";

export const jingyuan: Character = {
  id: "jingyuan",
  name: "景元",
  rarity: 5,
  element: "雷",
  path: "智识",
  faction: "仙舟罗浮",
  description: "仙舟联盟帝弓七天将之一，节制罗浮云骑军的「神策将军」，谈笑间指挥神君降下雷霆。",
  stats: { hp: 1165, atk: 643, def: 485, speed: 99, critRate: 5, critDmg: 50, taunt: 125, energy: 130 },
  skills: [
    { type: "普攻", name: "电霓", description: "对指定敌方单体造成等同于景元攻击力 50% 的雷属性伤害。" },
    { type: "战技", name: "石移三更", description: "对指定敌方单体及其相邻目标造成等同于景元攻击力 50% 的雷属性伤害，同时强化神君。" },
    { type: "终结技", name: "吾身光明", description: "对敌方全体造成等同于景元攻击力 120% 的雷属性伤害，并使神君下回合的攻击段数增加 3 段。", energyCost: 130 },
    { type: "天赋", name: "紫绶冥携", description: "战斗开始时召唤神君。景元施放普攻、战技或终结技后，神君立即行动，每段攻击对随机敌人造成等同于景元攻击力 33% 的雷属性伤害。" },
    { type: "秘技", name: "策简", description: "使用秘技后，下一次战斗开始时神君的攻击段数增加 2 段。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 15 },
    { name: "炼形者雷枝", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "灵感之钥", count: 18 },
    { name: "启迪之钥", count: 69 },
    { name: "智识之钥", count: 139 },
    { name: "永寿幼芽", count: 41 },
    { name: "永寿天华", count: 56 },
    { name: "永寿荣枝", count: 58 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "before-dawn", reason: "专属光锥，战技与终结技增伤被神君多段攻击充分兑现。" },
    { id: "today-is-another-peaceful-day", reason: "4★ 平民选择，终结技循环下攻击加成稳定生效。" },
  ],
  recommendedRelics: [
    { set: "沉陷的地下虎", piece: "4件套", reason: "雷属性伤害提升，释放终结技后进一步增伤，适配神君群体输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与终结技增伤，补足面板。" },
  ],
  portrait: "/assets/characters/jingyuan.svg",
  color: "#C084FC",
  tags: ["输出", "群攻", "召唤物"],
};
