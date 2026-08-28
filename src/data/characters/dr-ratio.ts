import type { Character } from "../../types/character";

export const drRatio: Character = {
  id: "dr-ratio",
  name: "真理医生",
  rarity: 5,
  element: "虚数",
  path: "巡猎",
  faction: "博识学会",
  description: "博识学会古怪学者，借负面效果提升暴击并频发追击的虚数巡猎输出。",
  stats: { hp: 1047, atk: 776, def: 460, speed: 103, critRate: 5, critDmg: 50, taunt: 75, energy: 140 },
  skills: [
    { type: "普攻", name: "知识就是力量", description: "对指定敌方单体造成等同于真理医生攻击力 50% 的虚数属性伤害。" },
    { type: "战技", name: "精神助产术", description: "对指定敌方单体造成等同于真理医生攻击力 150% 的虚数属性伤害。" },
    { type: "终结技", name: "三段悖论", description: "对指定敌方单体造成等同于真理医生攻击力 240% 的虚数属性伤害，并附上【智者的短见】；队友攻击持有【智者的短见】的目标时，真理医生对该目标发动1次天赋的追加攻击。该效果最多触发2次，仅对终结技最新施放的目标生效，施放终结技后重置触发次数。", energyCost: 140 },
    { type: "天赋", name: "我思故我在", description: "施放战技时，有40%固定概率对该目标发动1次追加攻击，造成等同于真理医生攻击力 270% 的虚数属性伤害；目标每有1个负面效果，该概率提高20%。若目标在追加攻击施放前被消灭，则改为对敌方随机单体发动。" },
    { type: "秘技", name: "偶像塑造", description: "制造特殊领域嘲讽附近敌人，持续10秒；与领域内敌人进入战斗后，有100%基础概率使敌方每个单体目标速度降低15%，持续2回合。我方制造的领域效果最多存在1个。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 15 },
    { name: "镇灵敕符", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "猎兽之矢", count: 18 },
    { name: "屠魔之矢", count: 69 },
    { name: "逐星之矢", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "chun-cui-si-wei-de-xi-li", reason: "专属光锥，负面层数叠加暴伤与追击增伤。" },
    { id: "in-the-night", reason: "速度超100强化普攻战技，超120提升终结技暴伤。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，追击输出的通用面板。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与追加攻击增伤，契合追击体系。" },
  ],
  portrait: "/assets/characters/dr-ratio.png",
  color: "#FDE047",
  tags: ["追加攻击", "负面效果参照", "暴击伤害"],
};
