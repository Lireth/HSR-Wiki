import type { Character } from "../../types/character";

export const asta: Character = {
  id: "asta",
  name: "艾丝妲",
  rarity: 4,
  element: "火",
  path: "和谐",
  faction: "空间站「黑塔」",
  description: "空间站「黑塔」站长，好奇心旺盛的天文研究者，可为全队提速并叠加攻击力。",
  stats: { hp: 1023, atk: 511, def: 463, speed: 106, critRate: 5, critDmg: 50, taunt: 100, energy: 120 },
  skills: [
    { type: "普攻", name: "光谱射线", description: "对指定敌方单体造成等同于艾丝妲攻击力 50% 的火属性伤害。" },
    { type: "战技", name: "流星群落", description: "对指定敌方单体造成等同于艾丝妲攻击力 50% 的火属性伤害，并额外造成 4 次伤害，每次对随机敌方单体造成等同于艾丝妲攻击力 50% 的火属性伤害。" },
    { type: "终结技", name: "星空祝言", description: "使我方全体速度提高 50 点，持续 2 回合。", energyCost: 120 },
    { type: "天赋", name: "天象学", description: "每击中 1 名不同敌方目标获得 1 层【蓄能】（受击目标弱点为火则额外获得 1 层），每层使我方全体攻击力提高 14%，最多叠加 5 层；第 2 回合起每回合开始时减少 3 层。" },
    { type: "秘技", name: "灵光一现", description: "立即攻击敌人，进入战斗后对敌方全体造成等同于艾丝妲攻击力 50% 的火属性伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 13 },
    { name: "铁卫勋章", count: 12 },
    { name: "恒温晶壳", count: 50 },
  ],
  traceMaterials: [
  { name: "信用点", count: 3000000 },
  { name: "谐乐小调", count: 18 },
  { name: "家族颂歌", count: 69 },
  { name: "群星乐章", count: 139 },
  { name: "铁卫扣饰", count: 41 },
  { name: "铁卫军徽", count: 56 },
  { name: "铁卫勋章", count: 58 },
  { name: "毁灭者的末路", count: 12 },
  { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "dance-dance-dance", reason: "终结技后全队行动提前，与全队提速增益进一步放大出手频率。" },
    { id: "planetary-rendezvous", reason: "火队适配，与火属性主C同队时提供额外增伤。" },
  ],
  recommendedRelics: [
    { set: "生命的庭园", piece: "4件套", reason: "提高生命与速度，保证辅助增益的稳定覆盖。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "全队攻击力提升，与天赋叠加攻击力协同。" },
  ],
  portrait: "/assets/characters/asta.png",
  color: "#FF9F45",
  tags: ["辅助", "全队加速", "加攻"],
};
