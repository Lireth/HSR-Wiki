import type { Character } from "../../types/character";

export const trailblazerRemembrance: Character = {
  id: "trailblazer-remembrance",
  name: "开拓者•记忆",
  rarity: 5,
  element: "冰",
  path: "记忆",
  faction: "星穹列车",
  description: "召唤忆灵迷迷、赋予真实伤害的冰属性辅助，迷迷充能满后使我方立即行动。",
  stats: { hp: 1047, atk: 543, def: 630, speed: 103, critRate: 5, critDmg: 50, taunt: 100, energy: 160 },
  skills: [
    { type: "普攻", name: "包在我身上！", description: "对指定敌方单体造成等同于开拓者 50% 攻击力的冰属性伤害。" },
    { type: "战技", name: "就决定是你了！", description: "召唤忆灵迷迷；若迷迷已在场，为其回复等同于迷迷生命上限 60% 的生命值，并使迷迷获得10%充能。" },
    { type: "终结技", name: "一起上吧，迷迷！", description: "召唤忆灵迷迷并使其获得40%充能，随后迷迷对敌方全体造成等同于迷迷 240% 攻击力的冰属性伤害。", energyCost: 160 },
    { type: "天赋", name: "无所不能的伙伴", description: "忆灵迷迷初始拥有130点速度和等同于开拓者生命上限 80%+640 点的生命，我方每恢复10点能量迷迷获得1%充能。迷迷行动时施放忆灵技【坏人！麻烦！】对随机目标造成多段冰伤；充能满时使指定我方单体行动提前100%并附上【迷迷的声援】，其每造成1次伤害额外造成 28% 的真实伤害。" },
    { type: "秘技", name: "记忆如往日重现", description: "制造持续10秒的特殊领域，领域内敌人陷入时停；与其进入战斗后使敌方全体行动延后50%，并受到等同于开拓者100%攻击力的冰属性伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 15 },
    { name: "深邃的星外质", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "思量的种", count: 18 },
    { name: "末那芽苗", count: 69 },
    { name: "阿赖耶华", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "吉光片羽", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "fei-xiang-fen-se-de-ming-tian", reason: "开拓者•记忆专属效果，全队增伤并强化连携普攻。" },
    { id: "ji-yi-yong-bu-luo-mu", reason: "战技后全队增伤，契合高频召唤辅助循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度提升，高频支援迷迷与全队循环。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，同步增强迷迷的生命。" },
  ],
  portrait: "/assets/characters/trailblazer-remembrance.png",
  color: "#7DD3FC",
  tags: ["忆灵", "真实伤害", "行动提前"],
};
