import type { Character } from "../../types/character";

export const boothill: Character = {
  id: "boothill",
  name: "波提欧",
  rarity: 5,
  element: "物理",
  path: "巡猎",
  faction: "巡海游侠",
  description: "改造人牛仔，以决斗强化普攻并植入物理弱点的物理巡猎输出。",
  stats: { hp: 1203, atk: 620, def: 436, speed: 107, critRate: 5, critDmg: 50, taunt: 75, energy: 115 },
  skills: [
    { type: "普攻", name: "蹄铁裂颅", description: "对指定敌方单体造成等同于波提欧攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "炽砾舞者的探戈", description: "使指定敌方单体及自身进入【绝命对峙】状态，持续2回合：目标陷入嘲讽，波提欧普攻获得强化且无法施放战技；该目标与波提欧受到对方攻击时，受到的伤害分别提高 30% 与 15%；目标被消灭或弱点被击破后，波提欧均获得1层【优势口袋】并解除对峙。该战技无法恢复能量，施放后本回合不会结束。" },
    { type: "终结技", name: "尘魔舞者的日落秀", description: "为指定敌方单体添加物理弱点，持续2回合；对其造成等同于波提欧攻击力 400% 的物理属性伤害，并使其行动延后 40%。", energyCost: 115 },
    { type: "天赋", name: "轮中五豆", description: "每层【优势口袋】使强化普攻的削韧值提高50%，最多叠加3层；施放强化普攻期间，若目标处于弱点击破状态，基于【优势口袋】层数对其造成等同于波提欧 70%/120%/170% 物理击破伤害的击破伤害，计入的韧性上限不超过普攻基础削韧值的16倍。战斗胜利后，【优势口袋】可保留至下一次战斗。" },
    { type: "秘技", name: "三乘九的微笑", description: "使用后，下一次战斗首次施放战技时，为目标添加与终结技相同的物理弱点，持续2回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "思绪末屑", count: 15 },
    { name: "印象残晶", count: 15 },
    { name: "欲念碎镜", count: 15 },
    { name: "星际和平工作证", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "猎兽之矢", count: 18 },
    { name: "屠魔之矢", count: 69 },
    { name: "逐星之矢", count: 139 },
    { name: "思绪末屑", count: 41 },
    { name: "印象残晶", count: 56 },
    { name: "欲念碎镜", count: 58 },
    { name: "同愿的遗音", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "shi-xiang-di-er-ci-sheng-ming", reason: "专属光锥，击破特攻提升并破防无视防御。" },
    { id: "dian-ge-guan-zhu-ba", reason: "普攻与战技增伤，契合强化普攻的输出循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度与攻击提升，配合对峙强化普攻节奏。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补强直伤部分。" },
  ],
  portrait: "/assets/characters/boothill.png",
  color: "#E8E4D9",
  tags: ["强化技能", "弱点植入", "嘲讽"],
};
