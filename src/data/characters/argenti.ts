import type { Character } from "../../types/character";

export const argenti: Character = {
  id: "argenti",
  name: "银枝",
  rarity: 5,
  element: "物理",
  path: "智识",
  faction: "纯美骑士团",
  description: "纯美骑士团的忠诚骑士，以强化终结技轰击群敌，命中越多暴击与回能越高。",
  stats: { hp: 1047, atk: 737, def: 363, speed: 103, critRate: 5, critDmg: 50, taunt: 100, energy: 180 },
  skills: [
    { type: "普攻", name: "芬芳一现", description: "对指定敌方单体造成等同于银枝攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "公正，此处盛放", description: "对敌方全体造成等同于银枝攻击力 120% 的物理属性伤害。" },
    { type: "终结技", name: "驻于花庭，赐与尽美", description: "消耗 90 点能量对敌方全体造成等同于银枝攻击力 160% 的物理属性伤害；强化版本消耗 180 点能量，造成等同于银枝攻击力 280% 的物理属性伤害并额外造成 6 次伤害，每次对随机敌方单体造成等同于银枝攻击力 95% 的物理属性伤害。", energyCost: 180 },
    { type: "天赋", name: "崇高的客体", description: "施放普攻、战技或终结技时，每击中 1 个目标恢复 3 点能量并获得 1 层【升格】，每层使暴击率提高 2.5%，最多叠加 10 层。" },
    { type: "秘技", name: "纯粹高洁宣言", description: "使一定区域内的敌人晕眩且不会主动攻击；主动攻击晕眩敌人进入战斗后，对敌方全体造成等同于银枝攻击力 80% 的物理属性伤害并恢复 15 点能量。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 15 },
    { name: "幽府通令", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "灵感之钥", count: 18 },
    { name: "启迪之钥", count: 69 },
    { name: "智识之钥", count: 139 },
    { name: "熄灭原核", count: 41 },
    { name: "微光原核", count: 56 },
    { name: "蠢动原核", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "an-instant-before-a-gaze", reason: "专属光锥，暴伤与按能量上限的终结技增伤，爆发上限极高。" },
    { id: "night-on-the-milky-way", reason: "群攻场景攻击叠层，与群攻终结技联动出色。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度提升，终结技爆发的面板基础。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，完美契合终结技输出模式。" },
  ],
  portrait: "/assets/characters/argenti.png",
  color: "#E8E4D9",
  tags: ["输出", "群攻", "终结技"],
};
