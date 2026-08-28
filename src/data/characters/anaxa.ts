import type { Character } from "../../types/character";

export const anaxa: Character = {
  id: "anaxa",
  name: "那刻夏",
  rarity: 5,
  element: "风",
  path: "智识",
  faction: "翁法罗斯",
  description: "渎神的独断学者，植入弱点并高频弹射输出的风属性智识。",
  stats: { hp: 970, atk: 756, def: 557, speed: 97, critRate: 5, critDmg: 50, taunt: 100, energy: 140 },
  skills: [
    { type: "普攻", name: "楚痛，酿造实识", description: "对指定敌方单体造成等同于那刻夏 50% 攻击力的风属性伤害。" },
    { type: "战技", name: "分形，驱逐虚知", description: "对指定敌方单体造成等同于那刻夏 70% 攻击力的风属性伤害，并额外造成4次伤害，每次对随机单体造成 70% 攻击力的风属性伤害；施放时场上每有1个可攻击的敌方目标，本次战技伤害提高20%。" },
    { type: "终结技", name: "生息破土，世界塑造", description: "对敌方全体造成等同于那刻夏 160% 攻击力的风属性伤害，并使其陷入【升华】：同时被添加物理、火、冰、雷、风、量子、虚数7种属性弱点，持续至目标回合开始时，无控制抵抗的目标无法行动。", energyCost: 140 },
    { type: "天赋", name: "四分明哲，三重至高", description: "每次击中敌方目标为其添加1个随机属性弱点，持续3回合；拥有至少5个不同属性弱点的目标陷入【质性揭露】，那刻夏对其造成的伤害提高 30%，且对其施放普攻或战技后追加1次不消耗战技点的额外战技。" },
    { type: "秘技", name: "瞳扉之彩", description: "使一定区域内的敌人陷入10秒恐惧逃跑；主动攻击恐惧的敌人视为利用弱点进入战斗，那刻夏为敌方每个单体目标添加1个攻击者属性的弱点，持续3回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "预兆似有若无", count: 15 },
    { name: "悲鸣由远及近", count: 15 },
    { name: "哀叹漫无止息", count: 15 },
    { name: "一杯酩酊的时代", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "凌乱草图", count: 18 },
    { name: "动态线稿", count: 69 },
    { name: "精致色稿", count: 139 },
    { name: "预兆似有若无", count: 41 },
    { name: "悲鸣由远及近", count: 56 },
    { name: "哀叹漫无止息", count: 58 },
    { name: "同愿的遗音", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "before-dawn", reason: "战技弹射与追加战技全面享受增伤。" },
    { id: "yu-zhou-da-sheng-yi", reason: "植入七种弱点后逐层放大增伤收益。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，加速弱点铺层与循环。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率提升，强化终结技与追加攻击。" },
  ],
  portrait: "/assets/characters/anaxa.png",
  color: "#6EE7B7",
  tags: ["弱点植入", "增伤", "行动控制"],
};
