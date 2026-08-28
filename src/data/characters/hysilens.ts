import type { Character } from "../../types/character";

export const hysilens: Character = {
  id: "hysilens",
  name: "海瑟音",
  rarity: 5,
  element: "物理",
  path: "虚无",
  faction: "翁法罗斯",
  description: "展开结界施加多重持续伤害与减益的物理虚无角色。",
  stats: { hp: 1203, atk: 601, def: 485, speed: 102, critRate: 5, critDmg: 50, taunt: 100, energy: 110 },
  skills: [
    { type: "普攻", name: "小调，止水中回响", description: "对指定敌方单体造成等同于海瑟音攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "泛音，暗流后齐鸣", description: "有100%的基础概率使敌方全体受到的伤害提高 20%，持续3回合，同时对敌方全体造成等同于海瑟音攻击力 140% 的物理属性伤害。" },
    { type: "终结技", name: "绝海回涛，噬魂舞曲", description: "展开结界使敌方全体攻击力降低15%、防御力降低 25%，对其造成 200% 攻击力的物理属性伤害；结界内敌人每受到1次持续伤害，海瑟音对其造成 80% 攻击力的物理持续伤害，每回合最多触发8次，结界持续3回合。", energyCost: 110 },
    { type: "天赋", name: "海妖在欢唱", description: "我方攻击时有100%基础概率使被击中的敌方目标陷入风化/裂伤/灼烧/触电其中1种状态且优先不同状态；目标每回合开始受到 25% 攻击力的对应属性持续伤害（裂伤上限为海瑟音25%攻击力），持续2回合。" },
    { type: "秘技", name: "于海的栖息地", description: "制造持续20秒并自动前移的特殊领域，领域内敌人陷入【醉心】不会攻击并跟随领域；与其开战后有100%基础概率使每个敌人陷入上述4种状态中的2种。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膛", count: 15 },
    { name: "荣耀洗礼身躯", count: 15 },
    { name: "侵略凝块", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "灼情之灵", count: 18 },
    { name: "星火之精", count: 69 },
    { name: "焚天之魔", count: 139 },
    { name: "恐惧踏碎血肉", count: 41 },
    { name: "勇气撕裂胸膛", count: 56 },
    { name: "荣耀洗礼身躯", count: 58 },
    { name: "阳雷的遥想", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "hai-yang-wei-he-er-ge", reason: "专属光锥，按负面数量提升持续伤害。" },
    { id: "patience-is-all-you-need", reason: "增伤叠加速度，并附带持续伤害。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，加快挂负面频率。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击与终结技增伤，强化结界输出。" },
  ],
  portrait: "/assets/characters/hysilens.png",
  color: "#E8E4D9",
  tags: ["特殊领域", "持续伤害", "减益"],
};
