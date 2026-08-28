import type { Character } from "../../types/character";

export const cipher: Character = {
  id: "cipher",
  name: "赛飞儿",
  rarity: 5,
  element: "量子",
  path: "虚无",
  faction: "翁法罗斯",
  description: "捷足的侠盗，记录我方对【老主顾】的伤害并在终结技中引爆真实伤害。",
  stats: { hp: 931, atk: 640, def: 509, speed: 106, critRate: 5, critDmg: 50, taunt: 100, energy: 130 },
  skills: [
    { type: "普攻", name: "呀，漏网之鱼", description: "对指定敌方单体造成等同于赛飞儿 50% 攻击力的量子属性伤害。" },
    { type: "战技", name: "嘿，空手套白银", description: "以120%基础概率使指定敌方单体及其相邻目标陷入虚弱状态（造成的伤害降低10%），并使赛飞儿的攻击力提高30%，持续2回合；随后对指定敌方单体造成等同于赛飞儿 200% 攻击力的量子属性伤害、相邻目标 100%。" },
    { type: "终结技", name: "猫咪怪盗，敬上！", description: "对指定敌方单体造成等同于赛飞儿 120% 攻击力的量子属性伤害，再对其造成等同于当前记录值25%的真实伤害；随后对主目标及其相邻目标造成 40% 攻击力的量子属性伤害与总计等同于当前记录值75%的真实伤害（由所有目标均分），施放后清空记录值。", energyCost: 130 },
    { type: "天赋", name: "热情好客的多洛斯人", description: "标记场上生命上限最高的敌方单体或战技、终结技主目标为【老主顾】；【老主顾】受到我方其他目标攻击后，赛飞儿立即对其发动追加攻击，造成等同于赛飞儿 150% 攻击力的量子属性伤害，每回合最多触发1次；赛飞儿记录我方对【老主顾】造成的非真实伤害的12%，终结技施放后清空。" },
    { type: "秘技", name: "穿靴子的猫", description: "获得【扎格列斯的祝福】，持续15秒：不被敌人发现且移动速度提高50%；期间进入战斗时对敌方全体造成等同于赛飞儿100%攻击力的量子属性伤害，该次获得的记录值提高200%。" },
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
    { name: "炽情之灵", count: 18 },
    { name: "星火之精", count: 69 },
    { name: "焚天之魔", count: 139 },
    { name: "预兆似有若无", count: 41 },
    { name: "悲鸣由远及近", count: 56 },
    { name: "哀叹漫无止息", count: 58 },
    { name: "阳雷的遥想", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "in-the-name-of-the-world", reason: "战技施加虚弱，对负面目标增伤并补攻击。" },
    { id: "good-night-and-sleep-well", reason: "敌方每层负面增伤，虚弱叠加收益稳定。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度提升，高频触发追加攻击与记录。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与追加攻击伤害双提升。" },
  ],
  portrait: "/assets/characters/cipher.png",
  color: "#818CF8",
  tags: ["快速移动", "真实伤害", "追加攻击"],
};
