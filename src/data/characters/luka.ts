import type { Character } from "../../types/character";

export const luka: Character = {
  id: "luka",
  name: "卢卡",
  rarity: 4,
  element: "物理",
  path: "虚无",
  faction: "贝洛伯格·下层区",
  description: "贝洛伯格下层区的冠军拳手，「地火」成员，以战技施加裂伤，凭【斗志】强化普攻。",
  stats: { hp: 917, atk: 582, def: 485, speed: 103, critRate: 5, critDmg: 50, taunt: 100, energy: 130 },
  skills: [
    { type: "普攻", name: "直冲拳", description: "对指定敌方单体造成等同于卢卡攻击力 50% 的物理属性伤害；消耗 2 层【斗志】后强化为【直冲碎天拳】。" },
    { type: "战技", name: "裂伤拳", description: "造成等同于卢卡攻击力 120% 的物理属性伤害，并以 100% 基础概率使目标陷入【裂伤】状态，持续 3 回合；【裂伤】目标每回合开始时受到等同于自身生命上限 24% 的物理属性持续伤害（伤害上限为卢卡攻击力的 338%）。" },
    { type: "终结技", name: "制胜一击", description: "获得 2 层【斗志】，并以 100% 基础概率使指定敌方单体受到的伤害提高 20%，持续 3 回合，随后对其造成等同于卢卡攻击力 330% 的物理属性伤害。", energyCost: 130 },
    { type: "天赋", name: "火花四溅", description: "施放普攻和战技后各获得 1 层【斗志】，最多持有 4 层；【斗志】达到 2 层时普攻强化为【直冲碎天拳】；其【碎天拳】击中【裂伤】状态目标时，使其【裂伤】立即产生 1 次等同于原伤害 85% 的伤害；战斗开始时持有 1 层。" },
    { type: "秘技", name: "抢先者", description: "立即攻击敌人，进入战斗后对敌方随机单体造成等同于卢卡攻击力 50% 的物理属性伤害，并以 100% 基础概率使其陷入【裂伤】状态，随后额外获得 1 层【斗志】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "古代零件", count: 12 },
    { name: "古代转轴", count: 13 },
    { name: "古代引擎", count: 12 },
    { name: "铁狼碎齿", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 2400000 },
    { name: "黯淡黑曜", count: 12 },
    { name: "虚空黑曜", count: 54 },
    { name: "沉沦黑曜", count: 105 },
    { name: "古代零件", count: 28 },
    { name: "古代转轴", count: 42 },
    { name: "古代引擎", count: 42 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "good-night-and-sleep-well", reason: "裂伤与易伤构成多层负面效果，增伤收益稳定。" },
    { id: "woof-walk-time", reason: "攻击力提升，且对裂伤目标增伤与自身机制天然契合。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度提升，强化裂伤施加与直冲碎天拳输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补足易伤爆发面板。" },
  ],
  portrait: "/assets/characters/luka.png",
  color: "#E8E4D9",
  tags: ["持续伤害", "易伤", "强化普攻"],
};
