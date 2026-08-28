import type { Character } from "../../types/character";

export const yaoGuang: Character = {
  id: "yao-guang",
  name: "爻光",
  rarity: 5,
  element: "物理",
  path: "欢愉",
  faction: "仙舟「玉阙」",
  description: "使我方攻击附带欢愉伤害并提升欢愉度，触发「阿哈时刻」的辅助。",
  stats: { hp: 1241, atk: 465, def: 654, speed: 101, critRate: 5, critDmg: 50, taunt: 100, energy: 180 },
  skills: [
    { type: "普攻", name: "雀翎鸣镝，过招有喜", description: "对指定敌方单体造成等同于爻光攻击力 45% 的物理属性伤害，对其相邻目标造成 30% 攻击力的物理属性伤害；普攻恢复的能量提高至30点。" },
    { type: "战技", name: "十方光映，万法皆明", description: "展开结界持续3回合，期间我方全体欢愉度提高，数值等同于爻光欢愉度的 20%；爻光施放普攻、战技后获得3个【笑点】。" },
    { type: "终结技", name: "霓裳铁羽，六爻皆吉", description: "获得5个【笑点】；使【阿哈】立即获得1个固定计入20点笑点的额外回合，并使我方全体全属性抗性穿透提高 24%。", energyCost: 180 },
    { type: "天赋", name: "屏开千光，遍观自在", description: "持有【好活当赏】时，我方施放攻击后触发【大吉大利】，对随机1个击中目标额外造成1次 20% 的对应属性欢愉伤害，本次攻击消耗战技点则额外触发1次；攻击者欢愉度低于爻光时以爻光欢愉度计算。【阿哈】的欢愉技还可使敌方全体受伤提高16%并受到欢愉伤害。" },
    { type: "秘技", name: "浮光过隙，百无禁忌", description: "下一次战斗开始时自动触发1次战技，此次触发不消耗战技点；爻光在队伍中时，击碎可破坏物立刻获得「红包」。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "童真蜡笔", count: 15 },
    { name: "造梦穰钢", count: 15 },
    { name: "梦现管锥", count: 15 },
    { name: "侵略凝块", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "《绒绒号》手绘分镜稿", count: 18 },
    { name: "《绒绒号》连载纪念刊", count: 69 },
    { name: "《绒绒号》典藏版合集", count: 139 },
    { name: "童真蜡笔", count: 41 },
    { name: "造梦穰钢", count: 56 },
    { name: "梦现管锥", count: 58 },
    { name: "灭流绝溢的缄默", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "huan-yu-man-yi-zhu-fu", reason: "专属光锥，战技终结技提升队友欢愉度。" },
    { id: "hua-hua-shi-jie-mi-ren-yan", reason: "暴伤与战技点加成，提升全队欢愉度。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度，加速战技循环与回能。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击与终结技增伤，强化欢愉伤害。" },
  ],
  portrait: "/assets/characters/yao-guang.png",
  color: "#E8E4D9",
  tags: ["阿哈时刻", "欢愉伤害", "附加伤害"],
};
