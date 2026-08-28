import type { Character } from "../../types/character";

export const phainon: Character = {
  id: "phainon",
  name: "白厄",
  rarity: 5,
  element: "物理",
  path: "毁灭",
  faction: "翁法罗斯",
  description: "积攒【火种】变身为卡厄斯兰那，展开境界持续输出的物理毁灭角色。",
  stats: { hp: 1435, atk: 582, def: 703, speed: 94, critRate: 5, critDmg: 50, taunt: 75, energy: 0 },
  skills: [
    { type: "普攻", name: "逐火救世，行则将至", description: "对指定敌方单体造成等同于白厄攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "黎明创世，地辟天开", description: "获得2点【火种】，对指定敌方单体造成等同于白厄攻击力 300% 的物理属性伤害，对相邻目标造成等同于白厄攻击力 120% 的物理属性伤害。" },
    { type: "终结技", name: "永劫燔世，其将背负", description: "消耗12点【火种】激活：变身为卡厄斯兰那并展开【境界】，队友离场且敌方全体始终拥有物理弱点；获得8个额外回合（速度为基础速度的60%），最后一个额外回合发动最后一击，对敌方全体造成等同于卡厄斯兰那攻击力 960% 的物理属性终结技伤害，由敌方全体均分。", energyCost: 0 },
    { type: "天赋", name: "此身为炬", description: "【火种】达12点可激活终结技，上限后最多溢出3点；白厄成为技能目标时获得1点【火种】，施放者为队友时暴击伤害提高 30%，持续3回合。变身时攻击力提高 80%、生命上限提高 270%，施放攻击后回复等同于生命上限20%的生命值，免疫控制类负面状态。" },
    { type: "秘技", name: "终结之始", description: "秘技点上限提高3点；消耗2点秘技点攻击范围内敌人，进入战斗后为队友恢复25点能量、获得2点【毁伤】和1个战技点，每个波次开始时对敌方全体造成等同于白厄 200% 攻击力的物理属性伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "预兆似有若无", count: 15 },
    { name: "悲鸣由远及近", count: 15 },
    { name: "哀叹漫无止息", count: 15 },
    { name: "侵略凝块", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "步离犬牙", count: 18 },
    { name: "狼毒锯牙", count: 69 },
    { name: "月狂獠牙", count: 139 },
    { name: "预兆似有若无", count: 41 },
    { name: "悲鸣由远及近", count: 56 },
    { name: "哀叹漫无止息", count: 58 },
    { name: "阳雷的遥想", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "li-ming-qia-ru-ci-ran-shao", reason: "专属光锥，烈阳增伤与无视防御完美契合。" },
    { id: "brighter-than-the-sun", reason: "暴击率提升，普攻叠【龙吟】加攻回能。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，强化输出与行动频率。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击与终结技增伤，放大变身爆发。" },
  ],
  portrait: "/assets/characters/phainon.png",
  color: "#E8E4D9",
  tags: ["特殊能量", "额外回合", "反击"],
};
