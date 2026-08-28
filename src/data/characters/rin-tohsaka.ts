import type { Character } from "../../types/character";

export const rinTohsaka: Character = {
  id: "rin-tohsaka",
  name: "远坂凛",
  rarity: 5,
  element: "量子",
  path: "智识",
  faction: "异界(Fate系列)",
  description: "以宝石能量强化战技爆发的输出，队友耗点或回点均可提升自身暴伤。",
  stats: { hp: 1125, atk: 717, def: 509, speed: 97, critRate: 5, critDmg: 50, taunt: 100, energy: 360 },
  skills: [
    { type: "普攻", name: "八极拳", description: "对指定敌方单体造成等同于远坂凛 100% 攻击力的量子属性伤害。" },
    { type: "战技", name: "宝石剑•泽尔里奇", description: "对指定敌方单体造成等同于远坂凛180%攻击力的量子属性伤害。持有15点以上【宝石能量】或战技点不小于7点时，战技强化为【第二魔法实验】：对敌方全体造成90%攻击力伤害，并消耗宝石能量反复弹射，每次造成90%攻击力伤害，最多重复33轮。" },
    { type: "终结技", name: "山脉震撼•明星之薪", description: "对指定敌方单体造成等同于远坂凛600%攻击力的量子属性伤害，同时对其他敌方目标造成200%攻击力伤害；施放时为我方恢复1个战技点，并使敌方全体受到的伤害提高20%，持续3回合。", energyCost: 360 },
    { type: "天赋", name: "宝石魔术", description: "进入战斗时获得【宝石能量】；我方单位消耗或恢复战技点时，使其暴击伤害提高70%，且每点变动使远坂凛获得【宝石能量】。与Archer同队时，可触发【自在远坂流】连携追加攻击并恢复4个战技点。" },
    { type: "秘技", name: "转换充能", description: "使用秘技后，下一次战斗开始时获得10点【宝石能量】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 15 },
    { name: "嗤笑丑面", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "天体模型", count: 18 },
    { name: "星系框架", count: 69 },
    { name: "银河沙盘", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "xing-huo-qiao-ran-shan-yao", reason: "耗点触发全队无视防御，强化战技伤害大幅提升。" },
    { id: "before-dawn", reason: "暴伤与战技终结技增伤，契合宝石能量爆发。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，配合宝石能量战技爆发。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补足爆发面板。" },
  ],
  portrait: "/assets/characters/rin-tohsaka.png",
  color: "#818CF8",
  tags: ["联动", "战技点恢复", "战技点上限"],
};
