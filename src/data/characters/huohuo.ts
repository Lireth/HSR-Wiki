import type { Character } from "../../types/character";

export const huohuo: Character = {
  id: "huohuo",
  name: "藿藿",
  rarity: 5,
  element: "风",
  path: "丰饶",
  faction: "仙舟「罗浮」",
  description: "怕鬼捉鬼的十王司见习判官，以【禳命】持续治疗并为全队充能加攻。",
  stats: { hp: 1358, atk: 601, def: 509, speed: 98, critRate: 5, critDmg: 50, taunt: 100, energy: 140 },
  skills: [
    { type: "普攻", name: "令旗•征风召雨", description: "对指定敌方单体造成等同于藿藿 50% 生命上限的风属性伤害。" },
    { type: "战技", name: "灵符•保命护身", description: "解除指定我方单体 1 个负面效果，为其回复等同于藿藿 21% 生命上限+560 的生命值，并为其相邻目标回复 16.8% 生命上限+448 的生命值。" },
    { type: "终结技", name: "尾巴•遣神役鬼", description: "为除自身以外的队友恢复等同于各自 20% 能量上限的能量，同时使其攻击力提高 40%，持续 2 回合。", energyCost: 140 },
    { type: "天赋", name: "凭附•气通天真", description: "施放战技后获得【禳命】，持续 2 回合；拥有【禳命】时，我方目标回合开始或施放终结技时回复等同于藿藿 4.5% 生命上限+120 的生命值，并解除其 1 个负面效果，该效果可触发 6 次。" },
    { type: "秘技", name: "凶煞•劾压鬼物", description: "恐吓周围敌人使其陷入【魄散】状态并逃跑，持续 10 秒；与陷入【魄散】的敌人进入战斗后，以 100% 基础概率使敌方每个单体目标攻击力降低 25%，持续 2 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 15 },
    { name: "天人遗垢", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "丰饶之种", count: 18 },
    { name: "生命之芽", count: 69 },
    { name: "永恒之花", count: 139 },
    { name: "永寿幼芽", count: 41 },
    { name: "永寿天华", count: 56 },
    { name: "永寿荣枝", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "guan-de-hui-xiang", reason: "专属光锥，攻击后回能并提升全队速度，加速终结技循环。" },
    { id: "shared-feeling", reason: "4星选择，治疗量提高并随战技为全队回能。" },
  ],
  recommendedRelics: [
    { set: "云无留迹的过客", piece: "4件套", reason: "治疗量加成并于战斗开始恢复战技点，治疗毕业装。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限加成，提高治疗量与生存。" },
  ],
  portrait: "/assets/characters/huohuo.png",
  color: "#6EE7B7",
  tags: ["治疗", "能量恢复", "效果解除"],
};
