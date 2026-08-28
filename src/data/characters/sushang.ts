import type { Character } from "../../types/character";

export const sushang: Character = {
  id: "sushang",
  name: "素裳",
  rarity: 4,
  element: "物理",
  path: "巡猎",
  faction: "仙舟罗浮",
  description: "出身仙舟「曜青」的云骑新兵，挥舞家传剑器，触发【剑势】造成高额附加伤害。",
  stats: { hp: 917, atk: 564, def: 418, speed: 107, critRate: 5, critDmg: 50, taunt: 75, energy: 120 },
  skills: [
    { type: "普攻", name: "云骑剑经·素霓", description: "对指定敌方单体造成等同于素裳攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "云骑剑经·山倾", description: "对指定敌方单体造成等同于素裳攻击力 210% 的物理属性伤害，最后一击后有 33% 概率发动【剑势】追加等同于素裳攻击力 100% 的物理属性附加伤害；目标处于弱点击破状态时必定发动。" },
    { type: "终结技", name: "太虚形蕴·烛夜", description: "对指定敌方单体造成等同于素裳攻击力 320% 的物理属性伤害，素裳立即行动且攻击力提高 30%，战技额外增加 2 次【剑势】判定，持续 2 回合。", energyCost: 120 },
    { type: "天赋", name: "游刃若水", description: "场上有敌方目标弱点被击破时，素裳速度提高 20%，持续 2 回合。" },
    { type: "秘技", name: "云骑剑经·叩阵", description: "立即攻击敌人，进入战斗后对敌方全体造成等同于素裳攻击力 80% 的物理属性伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "工造机杼", count: 12 },
    { name: "工造迴轮", count: 13 },
    { name: "工造浑心", count: 12 },
    { name: "铁狼碎齿", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 2400000 },
    { name: "猎兽之矢", count: 12 },
    { name: "屠魔之矢", count: 54 },
    { name: "逐星之矢", count: 105 },
    { name: "工造机杼", count: 28 },
    { name: "工造迴轮", count: 42 },
    { name: "工造浑心", count: 42 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "sleep-like-the-dead", reason: "暴伤提升与未暴击补偿，适配其高频单体攻击。" },
    { id: "in-the-night", reason: "速度与暴击双重收益，契合弱点击破后的加速机制。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度提升，普攻与剑势输出循环的核心配置。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补足单体爆发面板。" },
  ],
  portrait: "/assets/characters/sushang.svg",
  color: "#E8E4D9",
  tags: ["输出", "单体", "附加伤害"],
};
