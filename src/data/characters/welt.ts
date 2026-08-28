import type { Character } from "../../types/character";

export const welt: Character = {
  id: "welt",
  name: "瓦尔特",
  rarity: 5,
  element: "虚数",
  path: "虚无",
  faction: "星穹列车",
  description: "星穹列车上老成持重的前辈乘客，以虚数之力减缓并禁锢敌人，兼任输出与控制的核心。",
  stats: { hp: 1165, atk: 702, def: 485, speed: 102, critRate: 5, critDmg: 50, taunt: 100, energy: 120 },
  skills: [
    { type: "普攻", name: "重力压制", description: "对指定敌方单体造成等同于瓦尔特攻击力 50% 的虚数属性伤害。" },
    { type: "战技", name: "虚空断界", description: "对指定敌方单体造成攻击力 36% 的虚数属性伤害，并额外弹射 2 次随机单体的伤害，每次攻击有概率使受击者速度降低 10%，持续 2 回合。" },
    { type: "终结技", name: "拟似黑洞", description: "对敌方全体造成等同于瓦尔特攻击力 150% 的虚数属性伤害，并有 100% 基础概率使其陷入【禁锢】状态、行动延后。", energyCost: 120 },
    { type: "天赋", name: "时空扭曲", description: "攻击命中处于减速状态的敌人时，额外造成一次等同于瓦尔特攻击力 50% 的虚数属性伤害。" },
    { type: "秘技", name: "画地为牢", description: "使用秘技后制造持续 15 秒的领域，领域内敌人移动速度降低；与领域中的敌人进入战斗时，有 100% 基础概率使其陷入【禁锢】状态。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "铁卫扣饰", count: 15 },
    { name: "铁卫军徽", count: 15 },
    { name: "铁卫勋章", count: 15 },
    { name: "往日之影的金饰", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "黯淡黑曜", count: 18 },
    { name: "虚空黑曜", count: 69 },
    { name: "沉沦黑曜", count: 139 },
    { name: "铁卫扣饰", count: 41 },
    { name: "铁卫军徽", count: 56 },
    { name: "铁卫勋章", count: 58 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "in-the-name-of-the-world", reason: "专属光锥，攻击、效果命中与对负面状态敌人的增伤全面契合。" },
    { id: "loop", reason: "3★ 过渡选择，对处于减速状态的敌人提供增伤，平民适配度高。" },
  ],
  recommendedRelics: [
    { set: "白云归处", piece: "4件套", reason: "虚数伤害提升，对被减速敌人进一步增伤，契合其减速机制。" },
    { set: "泛银河商业公司", piece: "2件套", reason: "效果命中与攻击加成，提高减速与禁锢的命中率。" },
  ],
  portrait: "/assets/characters/welt.svg",
  color: "#FDE047",
  tags: ["输出", "控制", "减速"],
};
