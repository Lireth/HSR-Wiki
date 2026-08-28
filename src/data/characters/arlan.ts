import type { Character } from "../../types/character";

export const arlan: Character = {
  id: "arlan",
  name: "阿兰",
  rarity: 4,
  element: "雷",
  path: "毁灭",
  faction: "空间站「黑塔」",
  description: "空间站「黑塔」防卫科负责人，以消耗自身生命换取雷属性输出，生命值越低伤害越高。",
  stats: { hp: 1199, atk: 599, def: 330, speed: 102, critRate: 5, critDmg: 50, taunt: 75, energy: 110 },
  skills: [
    { type: "普攻", name: "如雷疾行", description: "对指定敌方单体造成等同于阿兰攻击力 50% 的雷属性伤害。" },
    { type: "战技", name: "禁锢解除", description: "消耗等同于阿兰生命上限 15% 的生命值，对指定敌方单体造成等同于阿兰攻击力 240% 的雷属性伤害；若当前生命值不足，施放时生命值降至 1 点。" },
    { type: "终结技", name: "狂者制裁", description: "对指定敌方单体造成等同于阿兰攻击力 320% 的雷属性伤害，同时对其相邻目标造成等同于阿兰攻击力 160% 的雷属性伤害。", energyCost: 110 },
    { type: "天赋", name: "至痛至怒", description: "根据阿兰当前已损失的生命值百分比获得伤害加成，最多使造成的伤害提高 72%。" },
    { type: "秘技", name: "极速收割", description: "立即攻击敌人，进入战斗后对敌方全体造成等同于阿兰攻击力 80% 的雷属性伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "熄灭原核", count: 12 },
    { name: "微光原核", count: 13 },
    { name: "蠢动原核", count: 12 },
    { name: "往日之影的雷冠", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 2400000 },
    { name: "破碎残刃", count: 12 },
    { name: "无生残刃", count: 54 },
    { name: "净世残刃", count: 105 },
    { name: "熄灭原核", count: 28 },
    { name: "微光原核", count: 42 },
    { name: "蠢动原核", count: 42 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "something-irreplaceable", reason: "5★ 毁灭光锥，低生命状态下的增伤与续航契合其烧血机制。" },
    { id: "mutual-demise", reason: "3★ 低配选择，对高生命值目标稳定增伤，适合单体攻坚。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度提升，强化雷属性单体输出循环。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补足爆发面板。" },
  ],
  portrait: "/assets/characters/arlan.png",
  color: "#C084FC",
  tags: ["输出", "消耗生命", "残血增伤"],
};
