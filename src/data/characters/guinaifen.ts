import type { Character } from "../../types/character";

export const guinaifen: Character = {
  id: "guinaifen",
  name: "桂乃芬",
  rarity: 4,
  element: "火",
  path: "虚无",
  faction: "仙舟罗浮",
  description: "流落仙舟罗浮的街头艺人，以直播才华示人，施加灼烧并使敌人易伤。",
  stats: { hp: 882, atk: 582, def: 441, speed: 106, critRate: 5, critDmg: 50, taunt: 100, energy: 120 },
  skills: [
    { type: "普攻", name: "劈头满堂彩", description: "对指定敌方单体造成等同于桂乃芬攻击力 50% 的火属性伤害。" },
    { type: "战技", name: "迎面开门红", description: "对指定敌方单体造成等同于桂乃芬攻击力 120% 的火属性伤害，对其相邻目标造成 40% 的火属性伤害，并以 100% 基础概率使其陷入【灼烧】状态（每回合开始时受到等同于桂乃芬攻击力 218% 的火属性持续伤害），持续 2 回合。" },
    { type: "终结技", name: "给您来段看家戏", description: "对敌方全体造成等同于桂乃芬攻击力 120% 的火属性伤害；若目标处于【灼烧】状态，使其当前【灼烧】立即产生等同于原伤害 92% 的额外伤害。", energyCost: 120 },
    { type: "天赋", name: "古来君子养艺人", description: "【灼烧】状态的持续伤害触发后，有 100% 基础概率使目标陷入【吞火】状态，受到的伤害提高 7%，持续 3 回合，最多叠加 3 层。" },
    { type: "秘技", name: "耍耍把式卖卖艺", description: "立即攻击敌人，进入战斗后造成 4 次伤害，每次对敌方随机单体造成等同于桂乃芬攻击力 50% 的火属性伤害，并以 100% 基础概率使其陷入【吞火】状态。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "工造机杼", count: 12 },
    { name: "工造迴轮", count: 13 },
    { name: "工造浑心", count: 12 },
    { name: "过热钢刃", count: 50 },
  ],
  traceMaterials: [
  { name: "信用点", count: 3000000 },
  { name: "黯淡黑曜", count: 18 },
  { name: "虚空黑曜", count: 69 },
  { name: "沉沦黑曜", count: 139 },
  { name: "工造机杼", count: 41 },
  { name: "工造迴轮", count: 56 },
  { name: "工造浑心", count: 58 },
  { name: "无穷假身的遗恨", count: 12 },
  { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "good-night-and-sleep-well", reason: "灼烧与吞火构成多层负面效果，增伤收益稳定。" },
    { id: "woof-walk-time", reason: "攻击力提升，且对灼烧目标增伤与自身机制天然契合。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度提升，强化灼烧施加频率与数值。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "攻击力提升直接放大持续伤害，兼顾辅助增伤。" },
  ],
  portrait: "/assets/characters/guinaifen.png",
  color: "#FF9F45",
  tags: ["持续伤害", "易伤", "群攻"],
};
