import type { Character } from "../../types/character";

export const ruanMei: Character = {
  id: "ruan-mei",
  name: "阮•梅",
  rarity: 5,
  element: "冰",
  path: "和谐",
  faction: "空间站「黑塔」",
  description: "天才俱乐部#81的生命科学专家，以增伤速度加成与击破辅助驱动全队。",
  stats: { hp: 1086, atk: 659, def: 485, speed: 104, critRate: 5, critDmg: 50, taunt: 100, energy: 130 },
  skills: [
    { type: "普攻", name: "一针幽兰", description: "对指定敌方单体造成等同于阮•梅攻击力 50% 的冰属性伤害。" },
    { type: "战技", name: "慢捻抹复挑", description: "施放战技后阮•梅获得【弦外音】，持续 3 回合；拥有该效果时我方全体伤害提高 32%，弱点击破效率提高 50%。" },
    { type: "终结技", name: "摇花缎水，沾衣不摘", description: "展开结界，持续 2 回合：处于结界中时我方全体全属性抗性穿透提高 25%，且攻击后对敌方目标附加【残梅绽】；其尝试从弱点击破状态恢复时受到等同于阮•梅 50% 冰属性击破伤害的击破伤害并行动延后。", energyCost: 130 },
    { type: "天赋", name: "分型的螺旋", description: "使除自身以外的队友速度提高 10%；我方全体击破敌方目标弱点时，阮•梅对其造成等同于自身 120% 冰属性击破伤害的击破伤害。" },
    { type: "秘技", name: "拭琴抚罗袂", description: "使用秘技后获得【拭琴抚罗袂】，使下一次战斗开始时自动触发 1 次战技，此次触发不消耗战技点。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 15 },
    { name: "苦寒晶壳", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "谐乐小调", count: 18 },
    { name: "家族颂歌", count: 69 },
    { name: "群星乐章", count: 139 },
    { name: "永寿幼芽", count: 41 },
    { name: "永寿天华", count: 56 },
    { name: "永寿荣枝", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "jing-zhong-gu-wo", reason: "专属光锥，击破加成、全队增伤并恢复战技点。" },
    { id: "dance-dance-dance", reason: "终结技后全队行动提前，加速全队输出循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度与攻击加成，提升辅助效率与击破伤害。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限加成，提升辅助生存能力。" },
  ],
  portrait: "/assets/characters/ruan-mei.png",
  color: "#7DD3FC",
  tags: ["速度提升", "增伤", "击破特攻提升"],
};
