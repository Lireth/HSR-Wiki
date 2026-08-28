import type { Character } from "../../types/character";

export const mydei: Character = {
  id: "mydei",
  name: "万敌",
  rarity: 5,
  element: "虚数",
  path: "毁灭",
  faction: "翁法罗斯",
  description: "不死的不败王储，以消耗生命积攒充能进入【血仇】强化的虚数毁灭输出。",
  stats: { hp: 1552, atk: 426, def: 194, speed: 95, critRate: 5, critDmg: 50, taunt: 75, energy: 160 },
  skills: [
    { type: "普攻", name: "踏破征途的誓言", description: "对指定敌方单体造成等同于万敌 25% 生命上限的虚数属性伤害。" },
    { type: "战技", name: "万死无悔", description: "消耗当前生命值50%，对指定敌方单体造成等同于万敌 90% 生命上限的虚数属性伤害，对相邻目标造成 50% 生命上限的虚数属性伤害；当前生命值不足时降至1点。" },
    { type: "终结技", name: "诛天焚骨的王座", description: "回复等同于万敌 20% 生命上限的生命值并积攒20点充能；对指定敌方单体造成等同于万敌 160% 生命上限的虚数属性伤害、相邻目标 100%，并使其与相邻目标陷入嘲讽状态，持续2回合。", energyCost: 160 },
    { type: "天赋", name: "以血还血", description: "每损失1%生命值积攒1点充能，最多200点；充能达到100时进入【血仇】状态：生命上限提高50%、防御力保持0、行动提前100%并回复 25% 生命，回合开始自动施放【弑王成王】；【血仇】期间充能达到150时获得额外回合并自动施放【弑神登神】（对单体造成 280%、相邻 168% 生命上限的虚数伤害）；期间受到致命攻击不会陷入无法战斗状态。" },
    { type: "秘技", name: "折戟臣服的监牢", description: "牵引并使一定区域内的敌人陷入10秒晕眩；主动攻击晕眩的敌人进入战斗时，对敌方全体造成等同于万敌80%生命上限的虚数属性伤害并嘲讽1回合，自身积攒50点充能。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膜", count: 15 },
    { name: "荣耀洗礼身躯", count: 15 },
    { name: "纷争先兆", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "步离犬牙", count: 18 },
    { name: "狼毒锯牙", count: 69 },
    { name: "月狂獠牙", count: 139 },
    { name: "恐惧踏碎血肉", count: 41 },
    { name: "勇气撕裂胸膜", count: 56 },
    { name: "荣耀洗礼身躯", count: 58 },
    { name: "吉光片羽", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "xue-huo-a-ran-shao-qian-lu", reason: "专属光锥，消耗生命换取本次攻击增伤。" },
    { id: "the-unreachable-side", reason: "生命上限与失血全队增伤，契合卖血打法。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度提升，加快充能与【血仇】循环。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升伤害，并强化不死坦度。" },
  ],
  portrait: "/assets/characters/mydei.png",
  color: "#FDE047",
  tags: ["消耗生命值", "额外回合", "嘲讽"],
};
