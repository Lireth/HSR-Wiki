import type { Character } from "../../types/character";

export const sparxie: Character = {
  id: "sparxie",
  name: "火花",
  rarity: 5,
  element: "火",
  path: "欢愉",
  faction: "假面愚者",
  description: "连续消耗战技点的欢愉输出，可产出大量笑点并基于笑点提升全队暴击伤害。",
  stats: { hp: 1047, atk: 640, def: 460, speed: 107, critRate: 5, critDmg: 50, taunt: 100, energy: 160 },
  skills: [
    { type: "普攻", name: "哑火了吗", description: "对指定敌方单体造成等同于火花 100% 攻击力的火属性伤害。" },
    { type: "战技", name: "尖叫！火花花连线中", description: "开启直播连线，使普攻变为【百花齐放，胜者独享！】并发动1次【互动陷阱】，本次技能内可重复发动，最多20次。互动陷阱提高强化普攻倍率并随机获得礼物（笑点或战技点）；施放本技能不视为使用战技。" },
    { type: "终结技", name: "万我狂欢，镜头不要停", description: "获得2个笑点，对敌方全体造成等同于火花（0.6×欢愉度+50%）攻击力的火属性伤害。", energyCost: 160 },
    { type: "天赋", name: "幕后花手", description: "持有【好活当赏】时，强化普攻对目标及相邻单位造成欢愉伤害，每发动1次【互动陷阱】额外对随机受击目标造成1次20%欢愉伤害，施放终结技也可造成欢愉伤害。欢愉技【信号溢出：好戏返场！】对敌方全体造成50%欢愉伤害并追加20次弹射伤害，获得的【爆点】可抵扣战技点消耗。" },
    { type: "秘技", name: "流量变现", description: "使一定区域内的敌人陷入10秒【拉黑】状态无法发现我方；主动攻击拉黑敌人进入战斗后，对敌方全体造成等同于火花50%攻击力的火属性伤害，并为我方恢复2个战技点。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "童真蜡笔", count: 15 },
    { name: "造梦蘸钢", count: 15 },
    { name: "梦现管锥", count: 15 },
    { name: "明辉日珥", count: 65 },
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
    { id: "hua-hua-shi-jie-mi-ren-yan", reason: "专属光锥，暴伤与耗点无视防御契合连续连线输出。" },
    { id: "dang-ta-jue-ding-kan-jian", reason: "速度与全队双爆提升，波次回能加速循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，强化普攻与连线输出节奏。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，放大终结技爆发。" },
  ],
  portrait: "/assets/characters/sparxie.png",
  color: "#FF9F45",
  tags: ["SP", "阿哈时刻", "技能强化"],
};
