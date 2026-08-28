import type { Character } from "../../types/character";

export const evanescia: Character = {
  id: "evanescia",
  name: "绯英",
  rarity: 5,
  element: "物理",
  path: "欢愉",
  faction: "二相乐园",
  description: "快速积累好活当赏的输出，能量与好活当赏双向联动加速终结技循环。",
  stats: { hp: 1047, atk: 737, def: 460, speed: 104, critRate: 5, critDmg: 50, taunt: 100, energy: 480 },
  skills: [
    { type: "普攻", name: "课业•突击检查", description: "对指定敌方单体造成等同于绯英 100% 攻击力的物理属性伤害。" },
    { type: "战技", name: "风纪•尺出缭判", description: "对敌方单体造成等同于绯英300%攻击力的物理属性伤害，对相邻目标造成150%攻击力伤害，并额外获得10个笑点。" },
    { type: "终结技", name: "剑歌•神鬼无赦", description: "对敌方全体造成等同于绯英160%攻击力的物理属性伤害，随后造成5次伤害，每次对随机单体造成120%攻击力的物理属性伤害。", energyCost: 480 },
    { type: "天赋", name: "青春•韶华无限", description: "获得等同于暴击伤害20%的欢愉度；获得能量时同步获得等值【好活当赏】，反之亦然（单次不超过100点）。累计240点能量时触发【狐狸老师】追加攻击，对敌方全体造成100%攻击力物理伤害并恢复10点能量；持有【好活当赏】时战技与终结技附加欢愉伤害。欢愉技【绯色•不乐即斩】对敌方全体造成110%欢愉伤害并获得5点【好活当赏】。" },
    { type: "秘技", name: "落英•散者皆忆", description: "立即攻击一定范围内的所有敌人；进入战斗后，对敌方全体造成等同于绯英100%攻击力的物理属性伤害并获得20点【好活当赏】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "童真蜡笔", count: 15 },
    { name: "造梦蘸钢", count: 15 },
    { name: "梦现管锥", count: 15 },
    { name: "侵略凝块", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "《绒绒号》手绘分镜稿", count: 18 },
    { name: "《绒绒号》连载纪念刊", count: 69 },
    { name: "《绒绒号》典藏版合集", count: 139 },
    { name: "童真蜡笔", count: 41 },
    { name: "造梦蘸钢", count: 56 },
    { name: "梦现管锥", count: 58 },
    { name: "灭流绝溢的缄默", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "xie-hou-yu-xia-yi-ge-hua-ji", reason: "暴伤与高能量回能加成，480能量上限完美契合。" },
    { id: "hua-hua-shi-jie-mi-ren-yan", reason: "暴伤与耗点无视防御，强化战技与欢愉伤害。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，加速终结技循环与输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，契合高能量爆发。" },
  ],
  portrait: "/assets/characters/evanescia.png",
  color: "#E8E4D9",
  tags: ["阿哈时刻", "召唤", "秘技群攻"],
};
