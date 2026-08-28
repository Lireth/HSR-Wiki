import type { Character } from "../../types/character";

export const clara: Character = {
  id: "clara",
  name: "克拉拉",
  rarity: 5,
  element: "物理",
  path: "毁灭",
  faction: "贝洛伯格·下层区",
  description: "与机械「史瓦罗」相依为命的孤儿，以受击反击的战斗方式对敌方释放高额伤害。",
  stats: { hp: 1241, atk: 737, def: 485, speed: 90, critRate: 5, critDmg: 50, taunt: 125, energy: 110 },
  skills: [
    { type: "普攻", name: "征伐的先兆", description: "对指定敌方单体造成等同于克拉拉攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "注视着你", description: "对敌方全体造成等同于克拉拉攻击力 55% 的物理属性伤害，并使史瓦罗的反击伤害提高，持续 2 回合。" },
    { type: "终结技", name: "胜利的信念", description: "对敌方全体造成等同于克拉拉攻击力 110% 的物理属性伤害，并使史瓦罗的反击伤害大幅提高，克拉拉受到的伤害降低，持续 2 回合。", energyCost: 110 },
    { type: "天赋", name: "胜利的代价", description: "我方单体受到攻击后，史瓦罗立即对该敌人发动反击，造成等同于克拉拉攻击力 33% 的物理属性伤害（每回合每名角色最多触发 1 次）。" },
    { type: "秘技", name: "必要的牺牲", description: "使用秘技后，克拉拉受到敌人攻击的伤害降低，持续 5 秒。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "古代零件", count: 15 },
    { name: "古代转轴", count: 15 },
    { name: "古代引擎", count: 15 },
    { name: "铁狼碎齿", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "破碎残刃", count: 18 },
    { name: "无生残刃", count: 69 },
    { name: "净世残刃", count: 139 },
    { name: "古代零件", count: 41 },
    { name: "古代转轴", count: 56 },
    { name: "古代引擎", count: 58 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "something-irreplaceable", reason: "专属光锥，受击回复与增伤契合其反击坦克定位。" },
    { id: "mutual-demise", reason: "3★ 过渡选择，对高血量目标稳定增伤，前期可用。" },
  ],
  recommendedRelics: [
    { set: "街头出身的拳王", piece: "4件套", reason: "物理伤害提升并强化追加攻击，完美适配史瓦罗的反击机制。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与终结技增伤，补足反击面板。" },
  ],
  portrait: "/assets/characters/clara.png",
  color: "#E8E4D9",
  tags: ["输出", "反击", "坦克"],
};
