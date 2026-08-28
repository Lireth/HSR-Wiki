import type { Character } from "../../types/character";

export const trailblazerEuphoria: Character = {
  id: "trailblazer-euphoria",
  name: "开拓者•欢愉",
  rarity: 5,
  element: "雷",
  path: "欢愉",
  faction: "星穹列车",
  description: "使队友立即施放欢愉技的辅助，产出笑点与好活当赏并提升全队欢愉度。",
  stats: { hp: 1086, atk: 465, def: 630, speed: 106, critRate: 5, critDmg: 50, taunt: 100, energy: 160 },
  skills: [
    { type: "普攻", name: "此即应援", description: "对指定敌方单体造成等同于开拓者 100% 攻击力的雷属性伤害。" },
    { type: "战技", name: "风暴甚是喧嚣", description: "对敌方全体造成等同于开拓者60%攻击力的雷属性伤害，并获得20点【好活当赏】。" },
    { type: "终结技", name: "放心飞，开拓永相随！", description: "获得5个笑点，使指定我方单体暴击伤害提高50%（持续3回合）并解除其控制类负面状态；若目标拥有欢愉技，额外获得10点【好活当赏】并立即施放1次欢愉技，否则使其行动提前50%。", energyCost: 160 },
    { type: "天赋", name: "英雄一笑，生死难料", description: "施放攻击后固定恢复10点能量并获得3个笑点；持有【好活当赏】时，战技对敌方全体额外造成30%雷属性欢愉伤害。自身欢愉技【我说欢愉，你耳朵聋吗？】对随机单体造成8次20%欢愉伤害，最后造成60%均分伤害。" },
    { type: "秘技", name: "燃起来了！", description: "使用后随机获得【开怀大笑】（欢愉度提高30%）或【忍俊不禁】（提高20%）；下次战斗开始时使我方全体提高对应数值的欢愉度，持续3回合。" },
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
    { name: "《绒绒号》手绘分镜稿", count: 18 },
    { name: "《绒绒号》连载纪念刊", count: 69 },
    { name: "《绒绒号》典藏版合集", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "灭流绝溢的缄默", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "huan-yu-man-yi-zhu-fu", reason: "攻击提升，战技终结技后提高单体目标欢愉度。" },
    { id: "dang-ta-jue-ding-kan-jian", reason: "全队暴击率暴伤提升，波次回能辅助循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，保证高频施放技能辅助全队。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，兼顾生存与辅助覆盖。" },
  ],
  portrait: "/assets/characters/trailblazer-euphoria.png",
  color: "#C084FC",
  tags: ["命途切换", "阿哈时刻"],
};
