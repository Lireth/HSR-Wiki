import type { Character } from "../../types/character";

export const danhengPermansor: Character = {
  id: "danheng-permansor",
  name: "丹恒•腾荒",
  rarity: 5,
  element: "物理",
  path: "存护",
  faction: "翁法罗斯",
  description: "为队友召唤【龙灵】提供护盾与追加攻击的存护防御角色。",
  stats: { hp: 1047, atk: 582, def: 776, speed: 97, critRate: 5, critDmg: 50, taunt: 125, energy: 135 },
  skills: [
    { type: "普攻", name: "镇恶护生", description: "对指定敌方单体造成等同于丹恒•腾荒攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "渊渟岳峙，地载八荒", description: "使指定我方单体成为【同袍】，为我方全体提供抵消等同于丹恒•腾荒攻击力 20%+400 伤害的护盾，持续3回合；重复获得其护盾时可叠加，上限为本次护盾量的300%。【同袍】仅对最新施放目标生效。" },
    { type: "终结技", name: "亢龙无悔，移山辟世", description: "对敌方全体造成 300% 攻击力的物理属性伤害，为我方全体提供攻击力 20%+400 的可叠加护盾，持续3回合；并强化【龙灵】，其行动时对敌方全体造成 80% 攻击力的物理伤害和等同【同袍】80% 攻击力的附加伤害，持续2次行动。", energyCost: 135 },
    { type: "天赋", name: "生生之德，品物流形", description: "我方角色成为【同袍】时召唤【龙灵】（速度165）；【龙灵】行动时解除我方全体1个负面效果，并提供攻击力 10%+200 的护盾，持续3回合，可与丹恒•腾荒的护盾叠加；丹恒•腾荒或【同袍】陷入无法战斗状态时【龙灵】消失。" },
    { type: "秘技", name: "地坼", description: "使用秘技后获得【同袍】，并使一定区域内的敌人陷入10秒晕眩状态，晕眩状态下敌人不会主动攻击我方目标。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膛", count: 15 },
    { name: "荣耀洗礼身躯", count: 15 },
    { name: "侵略凝块", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "散逸星砂", count: 18 },
    { name: "流星棱晶", count: 69 },
    { name: "神体琥珀", count: 139 },
    { name: "恐惧踏碎血肉", count: 41 },
    { name: "勇气撕裂胸膛", count: 56 },
    { name: "荣耀洗礼身躯", count: 58 },
    { name: "阳雷的遥想", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "zong-ran-shan-he-wan-cheng", reason: "专属光锥，卫戍增伤契合龙灵召唤物。" },
    { id: "moment-of-victory", reason: "防御力提升，受击回能加速循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力直接提升护盾量，兼顾输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击提升，强化龙灵追加攻击。" },
  ],
  portrait: "/assets/characters/danheng-permansor.png",
  color: "#E8E4D9",
  tags: ["召唤", "群体护盾", "护盾叠加"],
};
