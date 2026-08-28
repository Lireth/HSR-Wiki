import type { Character } from "../../types/character";

export const yunli: Character = {
  id: "yunli",
  name: "云璃",
  rarity: 5,
  element: "物理",
  path: "毁灭",
  faction: "仙舟「朱明」",
  description: "受击自动扩散反击的猎剑士，格挡嘲讽后以勘破斩灭回击敌人。",
  stats: { hp: 1358, atk: 679, def: 460, speed: 94, critRate: 5, critDmg: 50, taunt: 75, energy: 240 },
  skills: [
    { type: "普攻", name: "翻风转日", description: "对指定敌方单体造成等同于云璃 50% 攻击力的物理属性伤害。" },
    { type: "战技", name: "飞铗震赫", description: "回复等同于 30% 攻击力+200 的生命值，并对指定敌方单体造成 120% 攻击力、相邻目标 60% 攻击力的物理属性伤害。" },
    { type: "终结技", name: "剑为地纪，刃惊天宗", description: "获得【格挡】并嘲讽敌方全体至下个回合结束，下一次反击暴击伤害提高 100%；受击或格挡结束时立即反击【勘破•灭】或【勘破•斩】。", energyCost: 240 },
    { type: "天赋", name: "闪铄", description: "受到敌方攻击后额外恢复 15 点能量并立即反击，对攻击者造成 120% 攻击力、相邻目标 60% 攻击力的物理属性伤害；无反击目标时改为攻击随机敌人。" },
    { type: "秘技", name: "后发先至", description: "获得【招架】持续 20 秒，期间攻击敌人或受击进入战斗时，立即对随机敌方单体施放【勘破•灭】且本次伤害提高 80%。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "工造机杼", count: 15 },
    { name: "工造迴轮", count: 15 },
    { name: "工造浑心", count: 12 },
    { name: "星际和平工作证", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "步离犬牙", count: 18 },
    { name: "狼毒锯牙", count: 69 },
    { name: "月狂獠牙", count: 139 },
    { name: "工造机杼", count: 41 },
    { name: "工造迴轮", count: 56 },
    { name: "工造浑心", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "something-irreplaceable", reason: "受击后回复与增伤常驻，契合高频受击反击。" },
    { id: "ci-shen-wei-jian", reason: "队友受击叠层暴伤与无视防御，反击吃满收益。" },
  ],
  recommendedRelics: [
    { set: "戍卫风雪的铁卫", piece: "4件套", reason: "受击减伤提高站场容错，稳定触发格挡反击。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与增伤加成，强化反击与勘破伤害。" },
  ],
  portrait: "/assets/characters/yunli.png",
  color: "#E8E4D9",
  tags: ["反击", "嘲讽", "暴击伤害"],
};
