import type { Character } from "../../types/character";

export const aventurine: Character = {
  id: "aventurine",
  name: "砂金",
  rarity: 5,
  element: "虚数",
  path: "存护",
  faction: "星际和平公司",
  description: "星际和平公司高层，提供叠加护盾并频发追击的虚数存护。",
  stats: { hp: 1203, atk: 446, def: 654, speed: 106, critRate: 5, critDmg: 50, taunt: 125, energy: 110 },
  skills: [
    { type: "普攻", name: "直观投注", description: "对指定敌方单体造成等同于砂金防御力 50% 的虚数属性伤害。" },
    { type: "战技", name: "繁荣基石", description: "为我方全体提供能够抵消等同于砂金 24.0% 防御力 + 320 伤害的护盾【坚垣筹码】，持续3回合；重复获得时护盾量可叠加，最高不超过当前战技提供的护盾量的200%。" },
    { type: "终结技", name: "轮盘勋爵", description: "随机获得1到7点【盲注】，使指定敌方单体陷入【惊惶】状态，持续3回合，并对其造成等同于砂金 270% 防御力的虚数属性伤害；我方目标击中【惊惶】状态下的敌方目标时，造成的暴击伤害提高 15.0%。", energyCost: 110 },
    { type: "天赋", name: "枪口以右", description: "持有【坚垣筹码】的我方单体效果抵抗提高 50.0%；砂金持有【坚垣筹码】时可抵抗控制类负面效果，受到攻击后获得1点【盲注】（2回合后可再次触发并额外获得1点）。【盲注】达到7点后消耗7点发动7段追加攻击，每段对随机敌方单体造成等同于砂金 25% 防御力的虚数属性伤害，【盲注】上限10点。" },
    { type: "秘技", name: "红黑之间", description: "使用后随机获得1种效果：一定概率防御力提高24%，大概率提高36%，小概率提高60%；重复使用保留最高值。下一次战斗开始时，使我方全体提高对应数值的防御力，持续3回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "思绪末屑", count: 15 },
    { name: "印象残晶", count: 15 },
    { name: "欲念碎镜", count: 15 },
    { name: "镇灵敕符", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "青铜的执着", count: 18 },
    { name: "寒铁的誓言", count: 69 },
    { name: "琥珀的坚守", count: 139 },
    { name: "思绪末屑", count: 41 },
    { name: "印象残晶", count: 56 },
    { name: "欲念碎镜", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "ming-yun-cong-wei-gong-ping", reason: "专属光锥，防御叠暴伤，追击附加易伤。" },
    { id: "moment-of-victory", reason: "防御加成与受击回能，护盾循环更稳定。" },
  ],
  recommendedRelics: [
    { set: "戍卫的孤堡", piece: "4件套", reason: "防御加成强化护盾厚度，容错与追击兼顾。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与追加攻击增伤，放大追击收益。" },
  ],
  portrait: "/assets/characters/aventurine.png",
  color: "#FDE047",
  tags: ["群体护盾", "追加攻击", "护盾叠加"],
};
