import type { Character } from "../../types/character";

export const danheng: Character = {
  id: "danheng",
  name: "丹恒",
  rarity: 4,
  element: "风",
  path: "巡猎",
  faction: "星穹列车",
  description: "对自己的过去讳莫如深、清冷寡言的青年，以长枪「击云」护送列车，擅长对单体减速输出。",
  stats: { hp: 882, atk: 546, def: 396, speed: 110, critRate: 5, critDmg: 50, taunt: 75, energy: 100 },
  skills: [
    { type: "普攻", name: "云骑枪术·溯", description: "对指定敌方单体造成等同于丹恒攻击力 50% 的风属性伤害。" },
    { type: "战技", name: "云骑枪术·疾穿", description: "对指定敌方单体造成等同于丹恒攻击力 130% 的风属性伤害，并有概率使目标陷入【减速】状态。" },
    { type: "终结技", name: "洞天鹤鸣", description: "对指定敌方单体造成等同于丹恒攻击力 240% 的风属性伤害，若目标处于减速状态则造成的伤害提高。", energyCost: 100 },
    { type: "天赋", name: "绝影", description: "丹恒受到我方目标战技指定时，自身风属性穿透提高 20%，持续 2 回合。" },
    { type: "秘技", name: "低回的枪风", description: "使用秘技后生成持续一段时间的领域，领域内敌人移动速度降低；与领域中的敌人进入战斗时，有概率使其陷入减速状态。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "熄灭原核", count: 12 },
    { name: "微光原核", count: 13 },
    { name: "蠢动原核", count: 12 },
    { name: "暴风之眼", count: 50 },
  ],
  traceMaterials: [
  { name: "信用点", count: 3000000 },
  { name: "猎兽之矢", count: 18 },
  { name: "屠魔之矢", count: 69 },
  { name: "逐星之矢", count: 139 },
  { name: "熄灭原核", count: 41 },
  { name: "微光原核", count: 56 },
  { name: "蠢动原核", count: 58 },
  { name: "毁灭者的末路", count: 12 },
  { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "in-the-night", reason: "高速度巡猎角色可充分吃满暴击与速度增伤。" },
    { id: "today-is-another-peaceful-day", reason: "4★ 平民选择，终结技循环下攻击加成稳定。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度提升，普攻强化契合其单体输出循环。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与终结技增伤，补足输出面板。" },
  ],
  portrait: "/assets/characters/danheng.png",
  color: "#6EE7B7",
  tags: ["输出", "单体", "减速"],
};
