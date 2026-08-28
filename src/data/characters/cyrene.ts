import type { Character } from "../../types/character";

export const cyrene: Character = {
  id: "cyrene",
  name: "昔涟",
  rarity: 5,
  element: "冰",
  path: "记忆",
  faction: "翁法罗斯",
  description: "召唤忆灵德谬歌，激活全队终结技并使我方额外造成真实伤害。",
  stats: { hp: 1397, atk: 446, def: 582, speed: 101, critRate: 5, critDmg: 50, taunt: 100, energy: 0 },
  skills: [
    { type: "普攻", name: "看，希望的起始！", description: "获得1点【追忆】，对指定敌方单体造成等同于昔涟 25% 生命上限的冰属性伤害。" },
    { type: "战技", name: "盛放吧，来世的乐土", description: "获得3点【追忆】并展开结界，持续2回合；期间我方全体每造成1次伤害，额外造成1次等同于原伤害 24% 的真实伤害。昔涟陷入无法战斗状态时结界被解除。" },
    { type: "终结技", name: "诗的「◦」誓约的「∞」", description: "消耗12点【追忆】：召唤忆灵德谬歌并激活全体队友的终结技，进入【往昔的涟漪】状态，普攻强化且昔涟与德谬歌暴击率提高 50%，展开战技结界且无持续时间；单场战斗仅可施放1次。", energyCost: 0 },
    { type: "天赋", name: "众愿啊，汇流如歌", description: "战斗开始或昔涟行动后，我方角色获得【未来】，行动时消耗使昔涟获得1点【追忆】；【追忆】达24点可激活终结技并解除自身负面效果；昔涟在场时我方全体造成的伤害提高 20%。" },
    { type: "秘技", name: "西风尽头，宁谧永恒", description: "制造持续30秒的特殊领域，领域内敌人陷入【此刻永驻】，我方移动速度提高50%；持续时间内进入战斗后展开战技的结界。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膛", count: 15 },
    { name: "荣耀洗礼身躯", count: 15 },
    { name: "海妖残鳍", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "思量的种", count: 18 },
    { name: "末那芽苗", count: 69 },
    { name: "阿赖耶华", count: 139 },
    { name: "恐惧踏碎血肉", count: 41 },
    { name: "勇气撕裂胸膛", count: 56 },
    { name: "荣耀洗礼身躯", count: 58 },
    { name: "阳雷的遥想", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "ai-ru-ci-ke-yong-heng", reason: "专属光锥，忆灵双向增益强化全队。" },
    { id: "jiang-guang-yin-zhi-cheng-huang-jin", reason: "基础速度与暴伤叠层，增益忆灵输出。" },
  ],
  recommendedRelics: [
    { set: "不老者的仙舟", piece: "4件套", reason: "生命上限提升伤害与生存能力。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率提升，强化真实伤害增益。" },
  ],
  portrait: "/assets/characters/cyrene.png",
  color: "#7DD3FC",
  tags: ["特殊能量", "忆灵", "特殊领域"],
};
