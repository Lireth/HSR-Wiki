import type { Character } from "../../types/character";

export const trailblazerHarmony: Character = {
  id: "trailblazer-harmony",
  name: "开拓者•同谐",
  rarity: 5,
  element: "虚数",
  path: "和谐",
  faction: "星穹列车",
  description: "星穹列车旅人，赋予全队击破特攻并引发超击破的虚数同谐辅助。",
  stats: { hp: 1086, atk: 446, def: 679, speed: 105, critRate: 5, critDmg: 50, taunt: 100, energy: 140 },
  skills: [
    { type: "普攻", name: "摇摆的礼仪", description: "对指定敌方单体造成等同于开拓者攻击力 50% 的虚数属性伤害。" },
    { type: "战技", name: "中场馈赠的雨", description: "对指定敌方单体造成等同于开拓者攻击力 50% 的虚数属性伤害，并额外造成4次伤害，每次对随机敌方单体造成等同于开拓者攻击力 50% 的虚数属性伤害。" },
    { type: "终结技", name: "喧嚣的舞灯巡游", description: "为我方全体附上【伴舞】效果，持续3回合（开拓者每回合开始时持续回合数减1）；持有【伴舞】的我方目标击破特攻提高 30%，并且攻击处于弱点击破状态下的敌方目标后，会将本次攻击的削韧值转化为1次超击破伤害。", energyCost: 140 },
    { type: "天赋", name: "全屏段的高空踏歌", description: "当有敌方目标的弱点被击破时，开拓者立即恢复 10 点能量。" },
    { type: "秘技", name: "即刻！独奏团", description: "使用后，下一次战斗开始时使我方全体的击破特攻提高30%，持续2回合。" },
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
    { name: "谐乐小调", count: 18 },
    { name: "家族颂歌", count: 69 },
    { name: "群星乐章", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "but-the-battle-isnt-over", reason: "战技后增伤，能量低于100时回收战技点。" },
    { id: "wei-le-ming-ri-de-lv-tu", reason: "终结技后增伤，活动免费获取易满叠。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度与攻击提升，高频行动触发超击破。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命提升容错，速度120以上攻击加成。" },
  ],
  portrait: "/assets/characters/trailblazer-harmony.png",
  color: "#FDE047",
  tags: ["击破特攻提升", "超击破", "能量"],
};
