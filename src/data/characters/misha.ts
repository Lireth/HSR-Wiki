import type { Character } from "../../types/character";

export const misha: Character = {
  id: "misha",
  name: "米沙",
  rarity: 4,
  element: "冰",
  path: "毁灭",
  faction: "匹诺康尼",
  description: "匹诺康尼门童，消耗战技点叠加段数、冻结控场的冰属性毁灭输出。",
  stats: { hp: 1270, atk: 599, def: 396, speed: 96, critRate: 5, critDmg: 50, taunt: 75, energy: 100 },
  skills: [
    { type: "普攻", name: "请…请让一下！", description: "对指定敌方单体造成等同于米沙攻击力 50% 的冰属性伤害。" },
    { type: "战技", name: "客…客房服务！", description: "增加1段米沙下一次终结技的攻击段数；对指定敌方单体造成等同于米沙攻击力 200% 的冰属性伤害，并对其相邻目标造成等同于米沙攻击力 80% 的冰属性伤害。" },
    { type: "终结技", name: "要…要迟到了！", description: "初始拥有3段攻击，每段对随机或指定敌方单体造成等同于米沙攻击力 60% 的冰属性伤害；每段攻击前有 20% 基础概率使目标陷入冻结状态，持续1回合，冻结目标每回合开始时受到等同于米沙攻击力 30% 的冰属性附加伤害。终结技最多累计10段攻击段数，施放后段数恢复至初始状态。", energyCost: 100 },
    { type: "天赋", name: "擒纵机构", description: "我方全体每消耗1个战技点，增加1段米沙下一次终结技的攻击段数，同时米沙恢复 2 点能量。" },
    { type: "秘技", name: "停一停吧，你真美丽！", description: "制造1片持续15秒的特殊领域，领域内敌人陷入【梦境监牢】停止所有行动；与其进入战斗后，增加2段米沙下一次终结技的攻击段数。我方制造的领域效果最多存在1个。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "蓄梦元件", count: 12 },
    { name: "流梦阀门", count: 13 },
    { name: "造梦马达", count: 12 },
    { name: "冷藏梦箱", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "破碎残刃", count: 18 },
    { name: "无生残刃", count: 69 },
    { name: "净世残刃", count: 139 },
    { name: "蓄梦元件", count: 41 },
    { name: "流梦阀门", count: 56 },
    { name: "造梦马达", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "ji-yi-wei-xing-shen-de-yun-luo", reason: "施放攻击叠攻击力，破弱增伤强化终结技爆发。" },
    { id: "brighter-than-the-sun", reason: "暴击与攻击回能，契合高频普攻的输出循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，支撑终结技爆发频率。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，强化段数爆发。" },
  ],
  portrait: "/assets/characters/misha.png",
  color: "#7DD3FC",
  tags: ["暴击伤害", "冻结", "附加伤害"],
};
