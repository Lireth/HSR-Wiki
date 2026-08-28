import type { Character } from "../../types/character";

export const lingsha: Character = {
  id: "lingsha",
  name: "灵砂",
  rarity: 5,
  element: "火",
  path: "丰饶",
  faction: "仙舟「罗浮」",
  description: "召唤烟兽【浮元】行动治疗全队的司鼎，还能提高敌方所受击破伤害。",
  stats: { hp: 1358, atk: 679, def: 436, speed: 98, critRate: 5, critDmg: 50, taunt: 100, energy: 110 },
  skills: [
    { type: "普攻", name: "肃香", description: "对指定敌方单体造成等同于灵砂 50% 攻击力的火属性伤害。" },
    { type: "战技", name: "识烟飞彩", description: "对敌方全体造成 80% 攻击力火伤，并为我方全体回复等同于 14% 攻击力+420 的生命值，使【浮元】行动提前 20%。" },
    { type: "终结技", name: "幔亭缭霞", description: "使敌方全体陷入【醇醉】，所受击破伤害提高 25% 持续 2 回合；对敌方全体造成 150% 攻击力火伤，为我方全体回复 12% 攻击力+360 的生命值，并使【浮元】行动提前 100%。", energyCost: 110 },
    { type: "天赋", name: "烟斜雾横，氛氲化生", description: "施放战技时召唤【浮元】（初始 90 速度、3 次行动次数）；其行动时发动追加攻击，对敌方全体造成 75% 攻击力火伤并额外对随机单体造成 75% 火伤，同时解除我方全体 1 个负面效果并回复 12% 攻击力+360 的生命值。" },
    { type: "秘技", name: "流翠散云", description: "使用后，下一次战斗开始时立即召唤【浮元】，并使敌方全体陷入【醇醉】状态，持续 2 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 12 },
    { name: "忿火之心", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "异木种籽", count: 18 },
    { name: "滋长花蜜", count: 69 },
    { name: "万相果实", count: 139 },
    { name: "永寿幼芽", count: 41 },
    { name: "永寿天华", count: 56 },
    { name: "永寿荣枝", count: 58 },
    { name: "吉光片羽", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "wei-you-xiang-ru-gu", reason: "专属光锥，击破特攻转化治疗并附加易伤。" },
    { id: "time-waits-for-no-one", reason: "生命与治疗量双提升，治疗转化为附加伤害。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力直接提升治疗量与伤害，速度改善循环。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，增强治疗位的站场容错。" },
  ],
  portrait: "/assets/characters/lingsha.png",
  color: "#FF9F45",
  tags: ["召唤", "治疗", "追加攻击"],
};
