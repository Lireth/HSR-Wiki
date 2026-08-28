import type { Character } from "../../types/character";

export const qingque: Character = {
  id: "qingque",
  name: "青雀",
  rarity: 4,
  element: "量子",
  path: "智识",
  faction: "仙舟罗浮",
  description: "太卜司摸鱼卜者，抽取琼玉牌凑齐四张同色进入【暗杠】，以强化普攻输出群伤。",
  stats: { hp: 1023, atk: 652, def: 441, speed: 98, critRate: 5, critDmg: 50, taunt: 100, energy: 140 },
  skills: [
    { type: "普攻", name: "门前清", description: "使用 1 张当前花色最少的琼玉牌，对指定敌方单体造成等同于青雀攻击力 50% 的量子属性伤害。" },
    { type: "战技", name: "海底捞月", description: "立即抽取 2 张琼玉牌，自身造成的伤害提高 28%，可叠加 4 层，持续至本回合结束；施放后本回合不会结束。" },
    { type: "终结技", name: "四幺暗刻？和！", description: "对敌方全体造成等同于青雀攻击力 200% 的量子属性伤害，并获得 4 张相同花色的琼玉牌。", energyCost: 140 },
    { type: "天赋", name: "帝垣琼玉", description: "我方目标回合开始时随机抽取 1 张琼玉牌，最多持有 4 张；持有 4 张相同花色时进入【暗杠】，攻击力提高 72%，普攻强化为【杠上开花！】，施放后状态结束。" },
    { type: "秘技", name: "独弈之乐", description: "使用秘技后，进入战斗时青雀会抽取 2 张琼玉牌。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "掠夺的本能", count: 12 },
    { name: "篡改的野心", count: 13 },
    { name: "践踏的意志", count: 12 },
    { name: "虚幻铸铁", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 2400000 },
    { name: "灵感之钥", count: 12 },
    { name: "启迪之钥", count: 54 },
    { name: "智识之钥", count: 105 },
    { name: "掠夺的本能", count: 28 },
    { name: "篡改的野心", count: 42 },
    { name: "践踏的意志", count: 42 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "today-is-another-peaceful-day", reason: "能量上限 140 点，从能量增伤中获取的收益极高。" },
    { id: "geniuses-repose", reason: "4★ 选择，击杀敌人后暴伤提升，契合群攻清杂节奏。" },
  ],
  recommendedRelics: [
    { set: "密林卧游的观星者", piece: "4件套", reason: "量子伤害与无视防御，量子主C通用输出配置。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补足爆发面板。" },
  ],
  portrait: "/assets/characters/qingque.png",
  color: "#818CF8",
  tags: ["输出", "群攻", "随机强化"],
};
