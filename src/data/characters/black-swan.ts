import type { Character } from "../../types/character";

export const blackSwan: Character = {
  id: "black-swan",
  name: "黑天鹅",
  rarity: 5,
  element: "风",
  path: "虚无",
  faction: "流光忆庭",
  description: "流光忆庭占卜师，以【奥迹】叠层引爆持续伤害的风属性虚无输出。",
  stats: { hp: 1086, atk: 659, def: 485, speed: 102, critRate: 5, critDmg: 50, taunt: 100, energy: 120 },
  skills: [
    { type: "普攻", name: "洞见，缄默的黎明", description: "对指定敌方单体造成等同于黑天鹅攻击力 30% 的风属性伤害，有 50% 基础概率使目标陷入1层【奥迹】；攻击陷入风化、裂伤、灼烧、触电状态的目标后，分别各有 50% 基础概率额外使目标陷入1层【奥迹】。" },
    { type: "战技", name: "失坠，伪神的黄昏", description: "对指定敌方单体及其相邻目标造成等同于黑天鹅攻击力 90% 的风属性伤害，以100%基础概率使目标与相邻目标陷入1层【奥迹】，并使其防御力降低 20.8%，持续3回合。" },
    { type: "终结技", name: "沉醉于彼界的臂湾", description: "使敌方全体陷入【揭露】状态，持续2回合：目标自身回合内受到的伤害提高 25%，且处于【奥迹】时视为同时陷入风化、裂伤、灼烧、触电状态，【奥迹】每回合造成伤害后不会重置层数（持续期间最多触发1次）；随后对敌方全体造成等同于黑天鹅攻击力 120% 的风属性伤害。", energyCost: 120 },
    { type: "天赋", name: "无端命运的机杼", description: "敌方目标每回合开始时每受到1次持续伤害，有 65% 基础概率陷入1层【奥迹】；【奥迹】状态下目标每回合开始时受到等同于黑天鹅攻击力 240% 的风属性持续伤害，每层使此倍率提高 12.0%，随后重置为1层，最多叠加50层。达到3层时对相邻目标造成扩散持续伤害并概率附加【奥迹】，达到7层时本次持续伤害无视目标及其相邻目标20%的防御力。" },
    { type: "秘技", name: "取此真相，弃舍表征", description: "使用后，下一次战斗开始时有150%基础概率使敌方每个单体目标陷入1层【奥迹】，成功后再次施加，重复直至失败为止。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 15 },
    { name: "天人遗垢", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "黯淡黑曜", count: 18 },
    { name: "虚空黑曜", count: 69 },
    { name: "沉沦黑曜", count: 139 },
    { name: "熄灭原核", count: 41 },
    { name: "微光原核", count: 56 },
    { name: "蠢动原核", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "chong-su-shi-guang-zhi-yi", reason: "专属光锥，效果命中与【先知】强化持续伤害。" },
    { id: "patience-is-all-you-need", reason: "增伤叠速度，【游丝】补充持续伤害来源。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，加快【奥迹】叠层节奏。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，强化生存与持续伤害收益。" },
  ],
  portrait: "/assets/characters/black-swan.png",
  color: "#6EE7B7",
  tags: ["持续伤害", "减防", "群攻"],
};
