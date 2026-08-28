import type { Character } from "../../types/character";

export const castorice: Character = {
  id: "castorice",
  name: "遐蝶",
  rarity: 5,
  element: "量子",
  path: "记忆",
  faction: "翁法罗斯",
  description: "死荫的侍女，与死龙共耗生命、以【新蕊】召唤亡境的量子输出。",
  stats: { hp: 1630, atk: 524, def: 485, speed: 95, critRate: 5, critDmg: 50, taunt: 100, energy: 0 },
  skills: [
    { type: "普攻", name: "哀悼，死海之涟漪", description: "对指定敌方单体造成等同于遐蝶 25% 生命上限的量子属性伤害。" },
    { type: "战技", name: "缄默，幽蝶之轻抚", description: "消耗我方全体当前30%的生命值，对指定敌方单体造成等同于遐蝶 50% 生命上限的量子属性伤害、相邻目标 30%；死龙在场时替换为连携攻击【骸爪，冥龙之环拥】，与死龙对敌方全体分别造成 30% 与 50% 生命上限的量子属性伤害。" },
    { type: "终结技", name: "亡喉怒哮，苏生之颂铃", description: "召唤忆灵死龙使其行动提前100%，并展开境界【遗世冥域】：敌方全体全属性抗性降低 20%，持续至死龙消失；其能量机制特殊，由天赋的【新蕊】点数（上限34000）激活而非普通能量。", energyCost: 0 },
    { type: "天赋", name: "掌心淌过的荒芜", description: "我方全体每损失1点生命值，遐蝶获得1点【新蕊】，攒满上限即可激活终结技；我方损失生命值时，遐蝶与死龙造成的伤害提高 20%，最多叠加3层。死龙自动施放忆灵技消耗自身生命输出，消失时弹射6次随机伤害并为全体回复生命。" },
    { type: "秘技", name: "悲鸣，赐死之先声", description: "进入持续20秒的【冥茫】状态，敌人无法主动靠近；期间主动攻击将召唤死龙、展开【遗世冥域】进入战斗，并消耗除死龙外的我方全体40%当前生命值。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "预兆似有若无", count: 15 },
    { name: "悲鸣由远及近", count: 15 },
    { name: "哀叹漫无止息", count: 15 },
    { name: "暗帷月华", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "思量的种", count: 18 },
    { name: "末那芽苗", count: 69 },
    { name: "阿赖耶华", count: 139 },
    { name: "预兆似有若无", count: 41 },
    { name: "悲鸣由远及近", count: 56 },
    { name: "哀叹漫无止息", count: 58 },
    { name: "吉光片羽", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "rang-gao-bie-geng-mei-yi-xie", reason: "专属光锥，生命上限与无视防御强化输出。" },
    { id: "zhi-chang-ye-de-xing-guang", reason: "忆灵施技叠层增伤，消失时返还能量。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度提升，加快【新蕊】与死龙轮转。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，直接放大其伤害机制。" },
  ],
  portrait: "/assets/characters/castorice.png",
  color: "#818CF8",
  tags: ["忆灵", "消耗生命值", "减抗"],
};
