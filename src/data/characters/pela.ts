import type { Character } from "../../types/character";

export const pela: Character = {
  id: "pela",
  name: "佩拉",
  rarity: 4,
  element: "冰",
  path: "虚无",
  faction: "贝洛伯格",
  description: "银鬃铁卫情报官，以冻馁的情报战削弱敌人，可驱散增益并大幅降低敌方全体防御。",
  stats: { hp: 987, atk: 546, def: 463, speed: 105, critRate: 5, critDmg: 50, taunt: 100, energy: 110 },
  skills: [
    { type: "普攻", name: "冰点射击", description: "对指定敌方单体造成等同于佩拉攻击力 50% 的冰属性伤害。" },
    { type: "战技", name: "低温妨害", description: "解除指定敌方单体的 1 个增益效果，并造成等同于佩拉攻击力 210% 的冰属性伤害。" },
    { type: "终结技", name: "领域压制", description: "对敌方全体造成等同于佩拉攻击力 100% 的冰属性伤害，并有 100% 基础概率使其陷入【通解】状态，防御力降低 40%，持续 2 回合。", energyCost: 110 },
    { type: "天赋", name: "数据采集", description: "施放攻击后，若敌方目标处于负面效果状态，佩拉额外恢复 10 点能量，每次攻击只能触发 1 次。" },
    { type: "秘技", name: "先发制人", description: "立即攻击敌人，进入战斗后对敌方随机单体造成等同于佩拉攻击力 80% 的冰属性伤害，并有 100% 基础概率使敌方全体防御力降低 20%，持续 2 回合。" },
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
    { name: "黯淡黑曜", count: 12 },
    { name: "虚空黑曜", count: 54 },
    { name: "沉沦黑曜", count: 105 },
    { name: "熄灭原核", count: 28 },
    { name: "微光原核", count: 42 },
    { name: "蠢动原核", count: 42 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "in-the-name-of-the-world", reason: "5★ 虚无光锥，效果命中与增伤兼备，强化减防手定位。" },
    { id: "good-night-and-sleep-well", reason: "4★ 选择，敌方多负面效果环境下增伤显著，与减防体系联动。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度提升保证先手挂减防，攻击加成兼顾削韧输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补足辅助位的面板收益。" },
  ],
  portrait: "/assets/characters/pela.svg",
  color: "#7DD3FC",
  tags: ["辅助", "减防", "驱散"],
};
