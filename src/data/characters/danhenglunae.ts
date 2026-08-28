import type { Character } from "../../types/character";

export const danhenglunae: Character = {
  id: "danhenglunae",
  name: "丹恒•饮月",
  rarity: 5,
  element: "虚数",
  path: "毁灭",
  faction: "仙舟罗浮",
  description: "云骑军骁卫「饮月君」，可消耗多个战技点强化普攻的虚数毁灭输出，【逆鳞】抵扣战技点。",
  stats: { hp: 1241, atk: 698, def: 363, speed: 102, critRate: 5, critDmg: 50, taunt: 75, energy: 140 },
  skills: [
    { type: "普攻", name: "泽芝", description: "施放 2 段攻击，对指定敌方单体造成等同于丹恒•饮月攻击力 100% 的虚数属性伤害。" },
    { type: "战技", name: "龙力自在", description: "不消耗战技点，对普攻进行强化：【瞬华】对单体造成等同于丹恒•饮月攻击力 260% 的虚数属性伤害；【天矢阴】对单体及其相邻目标造成 380% 与 60% 的虚数属性伤害；【盘拏耀跃】对单体及其相邻目标造成 500% 与 180% 的虚数属性伤害。" },
    { type: "终结技", name: "苍龙傲睨，劫水濯世", description: "施放 3 段攻击，对指定敌方单体造成等同于丹恒•饮月攻击力 300% 的虚数属性伤害，对其相邻目标造成 140% 的虚数属性伤害，并使自身获得 2 个【逆鳞】。", energyCost: 140 },
    { type: "天赋", name: "亢心", description: "每段攻击后获得 1 层【亢心】，使自身造成的伤害提高 10%，最多叠加 6 层，持续至自身回合结束。" },
    { type: "秘技", name: "掣空如虹", description: "进入持续 20 秒的【蟠跃】状态，快速移动可抵挡所有攻击；主动攻击敌人进入战斗后，对敌方全体造成等同于丹恒•饮月攻击力 120% 的虚数属性伤害并获得 1 个【逆鳞】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 15 },
    { name: "镇灵敕符", count: 65 },
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
    { id: "brighter-than-the-sun", reason: "专属光锥，暴击、攻击与回能全面强化多段强化普攻。" },
    { id: "woof-walk-time", reason: "4★ 平民选择，攻击力加成稳定受益于高频普攻。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "普攻与战技伤害加成，契合多段强化普攻输出模式。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补足爆发面板。" },
  ],
  portrait: "/assets/characters/danhenglunae.png",
  color: "#FDE047",
  tags: ["输出", "爆发", "战技点消耗"],
};
