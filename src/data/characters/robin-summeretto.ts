import type { Character } from "../../types/character";

export const robinSummeretto: Character = {
  id: "robin-summeretto",
  name: "知更鸟•晴歌",
  rarity: 5,
  element: "风",
  path: "记忆",
  faction: "匹诺康尼",
  description: "召唤忆灵晴空乐手的辅助，行动提前回能并随行动频率提供无视防御增益。",
  stats: { hp: 1203, atk: 601, def: 485, speed: 95, critRate: 5, critDmg: 50, taunt: 100, energy: 140 },
  skills: [
    { type: "普攻", name: "音浪，为海风定调", description: "对敌方单体造成等同于知更鸟•晴歌 50% 生命上限的风属性伤害。" },
    { type: "战技", name: "盛夏是灵魂的乐手", description: "召唤忆灵「晴空乐手」贝茜；若「晴空乐手」已在场，则为其回复等同于100%生命上限的生命值，并获得6点气氛值。" },
    { type: "终结技", name: "跃入这片蔚蓝狂想", description: "使指定我方单体行动提前100%并恢复等同于20%能量上限的能量，随后附加【特邀嘉宾】：其攻击时额外使知更鸟获得2点气氛值，持续2回合。", energyCost: 140 },
    { type: "天赋", name: "巡游在无界的天空", description: "忆灵「晴空乐手」继承自身70%生命上限与180%速度；我方施放攻击、治疗或护盾时积累气氛值（上限50点），乐手全员登台后进入【Fever】状态并展开结界：结界内我方造成伤害时无视敌方15%+气氛值×0.5%防御力。" },
    { type: "秘技", name: "我们自成旋律", description: "使用后，使下一次战斗开始时行动提前20%，立即获得6点气氛值，并使我方全体造成的伤害提高30%，持续2回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 15 },
    { name: "暮晖烬蕾", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "思量的种", count: 18 },
    { name: "末那芽苗", count: 69 },
    { name: "阿赖耶华", count: 139 },
    { name: "蓄梦元件", count: 41 },
    { name: "流梦阀门", count: 56 },
    { name: "造梦马达", count: 58 },
    { name: "伪觉者的期许", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "yuan-hong-guang-yong-zhu-tian-kong", reason: "专属光锥，忆灵附加伤害与忆灵技全队易伤。" },
    { id: "ni-jiang-qi-shen-ge-chang", reason: "终结技回战技点，行动提前与全队提速契合。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度加成提升行动频率，气氛值积累更快。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命提升容错，速度达120后攻击再增强。" },
  ],
  portrait: "/assets/characters/robin-summeretto.png",
  color: "#6EE7B7",
  tags: ["SP", "忆灵"],
};
