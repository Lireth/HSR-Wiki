import type { Character } from "../../types/character";

export const trailblazerDestruction: Character = {
  id: "trailblazer-destruction",
  name: "开拓者•毁灭",
  rarity: 5,
  element: "物理",
  path: "毁灭",
  faction: "星穹列车",
  description: "挥舞星核之力的列车组初期形态，击破弱点叠加攻击力的物理群攻手。",
  stats: { hp: 1203, atk: 620, def: 460, speed: 100, critRate: 5, critDmg: 50, taunt: 75, energy: 120 },
  skills: [
    { type: "普攻", name: "再见安打", description: "对指定敌方单体造成等同于开拓者攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "安息全垒打", description: "对指定敌方单体及其相邻目标造成等同于开拓者攻击力 125% 的物理属性伤害。" },
    { type: "终结技", name: "星尘王牌", description: "在两种攻击模式中选择其一：【全胜•再见安打】对单体造成 450% 攻击力的物理属性伤害；【全胜•安息全垒打】对单体造成 270% 并对其相邻目标造成 162% 攻击力的物理属性伤害。", energyCost: 120 },
    { type: "天赋", name: "牵制盗垒", description: "每次击破敌方目标的弱点后，攻击力提高 20%，该效果最多叠加 2 层。" },
    { type: "秘技", name: "不灭三振", description: "使用秘技后立即为我方全体回复等同于各自生命上限 15% 的生命值。" },
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
    { name: "破碎残刃", count: 18 },
    { name: "无生残刃", count: 69 },
    { name: "净世残刃", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "brighter-than-the-sun", reason: "普攻叠层提升攻击与回能，契合其混合输出节奏。" },
    { id: "zai-lan-tian-xia", reason: "4星选择，攻击力加成配合击破后暴击提升。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度加成，适配物理击破输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与增伤，补足输出面板。" },
  ],
  portrait: "/assets/characters/trailblazer-destruction.png",
  color: "#E8E4D9",
  tags: ["攻击力", "秘技治疗", "自身伤害提升"],
};
