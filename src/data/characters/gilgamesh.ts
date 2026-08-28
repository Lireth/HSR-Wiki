import type { Character } from "../../types/character";

export const gilgamesh: Character = {
  id: "gilgamesh",
  name: "吉尔伽美什",
  rarity: 5,
  element: "雷",
  path: "毁灭",
  faction: "异界(Fate系列)",
  description: "由【兴致】驱动终结技爆发的输出，队友行动积攒兴致并加速自身行动。",
  stats: { hp: 1125, atk: 717, def: 509, speed: 97, critRate: 5, critDmg: 50, taunt: 75, energy: 360 },
  skills: [
    { type: "普攻", name: "漫不经心", description: "对敌方单体造成等同于吉尔伽美什 100% 攻击力的雷属性伤害。" },
    { type: "战技", name: "王之财宝", description: "获得【王来承认】：造成伤害时无视目标30%的防御力，持续3回合；对指定敌方单体造成280%攻击力的雷属性伤害，对相邻目标造成140%攻击力伤害。" },
    { type: "终结技", name: "天地乖离•开辟之星", description: "对敌方全体造成等同于吉尔伽美什400%攻击力的雷属性伤害，并额外造成10次伤害，每次对随机单体造成100%攻击力的雷属性伤害。", energyCost: 360 },
    { type: "天赋", name: "「尽情取悦本王吧」", description: "我方队友施放终结技时获得【王来背负】，终结技伤害提高40%；我方其他目标行动时获得1点【兴致】，每点提高10%速度；【兴致】首次达到10点进入【来兴致了！】状态，该状态下仅能施放战技，施放后清空【兴致】。" },
    { type: "秘技", name: "天之锁", description: "制造特殊领域，使范围内敌人陷入【王来允许】停止行动；主动攻击进入战斗后对敌方全体造成雷属性伤害，并获得3点【兴致】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 15 },
    { name: "狂雷扫弦", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "四相，过河照君", count: 18 },
    { name: "六合，王手飞车", count: 69 },
    { name: "万色，愚者自将", count: 139 },
    { name: "熄灭原核", count: 41 },
    { name: "微光原核", count: 56 },
    { name: "蠢动原核", count: 58 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "suo-jian-ji-wo", reason: "专属光锥，终结技按耗能增伤并提高全队暴伤。" },
    { id: "mei-you-hui-bao-de-jia-mian", reason: "暴伤提升，能量上限360触发回能与攻击加成。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，强化终结技爆发面板。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，完美契合终结技输出。" },
  ],
  portrait: "/assets/characters/gilgamesh.png",
  color: "#C084FC",
  tags: ["联动", "特殊领域", "连携技"],
};
