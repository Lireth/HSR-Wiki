import type { Character } from "../../types/character";

export const herta: Character = {
  id: "herta",
  name: "黑塔",
  rarity: 4,
  element: "冰",
  path: "智识",
  faction: "空间站「黑塔」",
  description: "「天才俱乐部」#83 号会员，空间站真正的主人，以追加攻击清剿残敌的冰属性群攻手。",
  stats: { hp: 952, atk: 582, def: 396, speed: 100, critRate: 5, critDmg: 50, taunt: 100, energy: 110 },
  skills: [
    { type: "普攻", name: "看什么看", description: "对指定敌方单体造成等同于黑塔攻击力 50% 的冰属性伤害。" },
    { type: "战技", name: "一锤子买卖", description: "对敌方全体造成等同于黑塔攻击力 100% 的冰属性伤害；若敌方目标当前生命值百分比大于等于 50%，则对该目标造成的伤害提高 20%。" },
    { type: "终结技", name: "是魔法，我加了魔法", description: "对敌方全体造成等同于黑塔攻击力 200% 的冰属性伤害。", energyCost: 110 },
    { type: "天赋", name: "还是我来吧", description: "当任意我方目标的攻击使敌方目标当前生命值百分比小于等于 50% 时，黑塔发动追加攻击，对敌方全体造成等同于黑塔攻击力 40% 的冰属性伤害。" },
    { type: "秘技", name: "可以优化一下", description: "使用秘技后，下一次战斗开始时黑塔攻击力提高 40%，持续 3 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "熄灭原核", count: 12 },
    { name: "微光原核", count: 13 },
    { name: "蠢动原核", count: 12 },
    { name: "风雪之角", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 2400000 },
    { name: "灵感之钥", count: 12 },
    { name: "启迪之钥", count: 54 },
    { name: "智识之钥", count: 105 },
    { name: "熄灭原核", count: 28 },
    { name: "微光原核", count: 42 },
    { name: "蠢动原核", count: 42 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "night-on-the-milky-way", reason: "场上敌人越多攻击加成越高，清杂收益最大化。" },
    { id: "geniuses-repose", reason: "4★ 选择，击杀敌人后暴伤提升，契合补刀触发天赋追加攻击的循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度提升，强化群攻与追加攻击输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与追加攻击增伤，完美契合天赋斩杀机制。" },
  ],
  portrait: "/assets/characters/herta.png",
  color: "#7DD3FC",
  tags: ["输出", "群攻", "追加攻击"],
};
