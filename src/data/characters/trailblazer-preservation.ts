import type { Character } from "../../types/character";

export const trailblazerPreservation: Character = {
  id: "trailblazer-preservation",
  name: "开拓者•存护",
  rarity: 5,
  element: "火",
  path: "存护",
  faction: "星穹列车",
  description: "手持炎枪的列车组守护者，以嘲讽与群体护盾掩护全队的初期形态。",
  stats: { hp: 1241, atk: 601, def: 606, speed: 95, critRate: 5, critDmg: 50, taunt: 125, energy: 120 },
  skills: [
    { type: "普攻", name: "穿彻坚冰的烈芒", description: "对指定敌方单体造成等同于开拓者攻击力 50% 的火属性伤害，并叠加 1 层【灼热意志】。" },
    { type: "战技", name: "炽燃不灭的琥珀", description: "施放后自身受到的伤害降低 50% 并叠加 1 层【灼热意志】，同时以 100% 基础概率使敌方全体陷入嘲讽状态，持续 1 回合。" },
    { type: "终结技", name: "陷阵无回的炎枪", description: "对敌方全体造成等同于开拓者 100% 攻击力+150% 防御力的火属性伤害；下一次施放普攻时自动获得强化且不消耗【灼热意志】。", energyCost: 120 },
    { type: "天赋", name: "筑城者遗宝", description: "每受到 1 次攻击叠加 1 层【灼热意志】，最多 8 层；层数不低于 4 时普攻获得强化。施放普攻、战技、终结技后，为我方全体提供抵消等同于开拓者 6% 防御力+80 伤害的护盾，持续 2 回合。" },
    { type: "秘技", name: "守护者召令", description: "使用秘技后，下一次战斗开始时为自身提供抵消等同于开拓者 30% 防御力+384 伤害的护盾，持续 1 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 15 },
    { name: "深邃的星外质", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "青铜的执着", count: 18 },
    { name: "寒铁的誓言", count: 69 },
    { name: "琥珀的坚守", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "moment-of-victory", reason: "专属光锥，防御提高且受击回能，加速终结技循环。" },
    { id: "day-one-of-my-new-life", reason: "防御加成并提供全队抗性，泛用存护选择。" },
  ],
  recommendedRelics: [
    { set: "戍卫风雪的铁卫", piece: "4件套", reason: "防御力加成，强化护盾量与防御倍率输出。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "提供生命上限加成，提升生存能力。" },
  ],
  portrait: "/assets/characters/trailblazer-preservation.png",
  color: "#FF9F45",
  tags: ["嘲讽", "群体护盾", "自身减伤"],
};
