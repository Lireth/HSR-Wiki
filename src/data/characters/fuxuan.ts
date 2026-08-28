import type { Character } from "../../types/character";

export const fuxuan: Character = {
  id: "fuxuan",
  name: "符玄",
  rarity: 5,
  element: "量子",
  path: "存护",
  faction: "仙舟罗浮·太卜司",
  description: "仙舟罗浮太卜司之首，凭借第三眼与穷观阵占算航路，为全队分摊伤害并提供暴击增益。",
  stats: { hp: 1474, atk: 465, def: 606, speed: 100, critRate: 5, critDmg: 50, taunt: 125, energy: 135 },
  skills: [
    { type: "普攻", name: "玄灵", description: "对指定敌方单体造成等同于符玄攻击力 50% 的量子属性伤害。" },
    { type: "战技", name: "太上摩挲", description: "开启「穷观阵」，持续 3 回合：我方全体暴击率提高，且敌方对队友造成的部分伤害转移给符玄自身。" },
    { type: "终结技", name: "深幕常仪", description: "对敌方全体造成等同于符玄攻击力 100% 的量子属性伤害，并使其陷入【厄难】状态。", energyCost: 135 },
    { type: "天赋", name: "惟吾虚灵", description: "穷观阵存在时，我方全体生命上限提高；符玄代为承受的伤害降低，且自身生命值低于 50% 时可回复大量生命。" },
    { type: "秘技", name: "抱朴", description: "使用秘技后，下一次战斗开始时立即开启「穷观阵」。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "工造机杼", count: 15 },
    { name: "工造迴轮", count: 15 },
    { name: "工造浑心", count: 15 },
    { name: "苍猿之钉", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "青铜的执着", count: 18 },
    { name: "寒铁的誓言", count: 69 },
    { name: "琥珀的坚守", count: 139 },
    { name: "工造机杼", count: 41 },
    { name: "工造迴轮", count: 56 },
    { name: "工造浑心", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "moment-of-victory", reason: "5★ 存护光锥，防御与增伤双收，强化其站场承伤能力。" },
    { id: "landau-s-choice", reason: "4★ 生存向选择，降低敌方对我方的输出。" },
  ],
  recommendedRelics: [
    { set: "戍卫风雪的铁卫", piece: "4件套", reason: "减伤并在低生命时回复，契合穷观阵的承伤机制。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "提高生命上限并增益全队攻击，兼顾生存与辅助。" },
  ],
  portrait: "/assets/characters/fuxuan.png",
  color: "#818CF8",
  tags: ["辅助", "减伤", "增益"],
};
