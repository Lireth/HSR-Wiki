import type { Character } from "../../types/character";

export const blade: Character = {
  id: "blade",
  name: "刃",
  rarity: 5,
  element: "风",
  path: "毁灭",
  faction: "星核猎手",
  description: "星核猎手，以剑为名的长生者，消耗自身生命换取高额伤害与追加攻击。",
  stats: { hp: 1358, atk: 543, def: 485, speed: 97, critRate: 5, critDmg: 50, taunt: 75, energy: 130 },
  skills: [
    { type: "普攻", name: "支离剑", description: "对指定敌方单体造成等同于刃生命上限 50% 的风属性伤害。" },
    { type: "战技", name: "地狱变", description: "消耗等同于刃生命上限 30% 的生命值进入【地狱变】状态，自身造成的伤害提高 40%，普攻强化为【无间剑树】（对单体及其相邻目标分别造成等同于刃生命上限 130% 和 52% 的风属性伤害），持续 3 回合。" },
    { type: "终结技", name: "大辟万死", description: "将当前生命值转化为生命上限的 50%，对指定敌方单体造成等同于刃生命上限 150% 与累计已损失生命值 120% 的风属性伤害，并对其相邻目标造成等同于刃生命上限 60% 与累计已损失生命值 60% 的风属性伤害；累计已损失生命值的计算上限为生命上限的 90%。", energyCost: 130 },
    { type: "天赋", name: "倏忽恩赐", description: "受到伤害或消耗生命值时获得 1 层充能，最多叠加 5 层；达到 5 层时立即发动追加攻击，对敌方全体造成等同于刃生命上限 130% 的风属性伤害并回复等同于刃生命上限 25% 的生命值。" },
    { type: "秘技", name: "业途风", description: "立即攻击敌人，进入战斗后消耗等同于刃生命上限 20% 的生命值，对敌方全体造成等同于刃生命上限 40% 的风属性伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 15 },
    { name: "天人遗垢", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "破碎残刃", count: 18 },
    { name: "无生残刃", count: 69 },
    { name: "净世残刃", count: 139 },
    { name: "永寿幼芽", count: 41 },
    { name: "永寿天华", count: 56 },
    { name: "永寿荣枝", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "the-unreachable-side", reason: "专属光锥，生命上限与全队增伤双重收益，与烧血机制完全绑定。" },
    { id: "woof-walk-time", reason: "4★ 平民选择，攻击力提升与追加攻击伤害加成稳定。" },
  ],
  recommendedRelics: [
    { set: "生命的庭园", piece: "4件套", reason: "生命上限提升直接强化伤害与生存，烧血流核心配置。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，兼顾生存容错与面板输出。" },
  ],
  portrait: "/assets/characters/blade.png",
  color: "#6EE7B7",
  tags: ["输出", "消耗生命", "追加攻击"],
};
