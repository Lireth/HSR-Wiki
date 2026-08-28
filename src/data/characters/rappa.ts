import type { Character } from "../../types/character";

export const rappa: Character = {
  id: "rappa",
  name: "乱破",
  rarity: 5,
  element: "虚数",
  path: "智识",
  faction: "巡海游侠",
  description: "群体击破输出，终结技结印获得额外回合与无视弱点削韧的强化普攻。",
  stats: { hp: 1086, atk: 717, def: 460, speed: 96, critRate: 5, critDmg: 50, taunt: 100, energy: 140 },
  skills: [
    { type: "普攻", name: "忍术•七转八起", description: "对指定敌方单体造成等同于乱破 50% 攻击力的虚数属性伤害。" },
    { type: "战技", name: "忍切•初志贯彻", description: "对敌方全体造成等同于乱破 120% 攻击力的虚数属性伤害。" },
    { type: "终结技", name: "忍道•极•爱死天流", description: "进入【结印】状态，立即获得 1 个额外回合与 3 点【彩墨】，弱点击破效率提高 50%、击破特攻提高 30%；结印中普攻强化为对单体及相邻目标造成 100%/50% 攻击力伤害、第 3 段对全体造成 100% 攻击力伤害，每段消耗 1 点【彩墨】，耗尽时退出。", energyCost: 140 },
    { type: "天赋", name: "忍•科学•堪忍袋", description: "敌方弱点被击破时获得 1 点充能（上限 10 点）；强化普攻第 3 段时对敌方全体额外造成 60% 虚数击破伤害并消耗全部充能，每点充能使该伤害倍率提高 50%。" },
    { type: "秘技", name: "忍步•血义理", description: "进入持续 20 秒的【涂鸦】状态快速移动并可抵挡所有攻击；主动进入战斗对每个敌人造成 30 点无视弱点削韧与 200% 虚数击破伤害，相邻目标 180%。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 12 },
    { name: "一曲合弦的幻景", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "凌乱草图", count: 18 },
    { name: "动态线稿", count: 69 },
    { name: "精致色稿", count: 139 },
    { name: "蓄梦元件", count: 41 },
    { name: "流梦阀门", count: 56 },
    { name: "造梦马达", count: 58 },
    { name: "同愿的遗音", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "ren-fa-tie-liao-luan-po-mo", reason: "专属光锥，击破特攻与自回能契合结印循环。" },
    { id: "today-is-another-peaceful-day", reason: "140 点能量上限转化稳定增伤，终结技循环流畅。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度与技能增伤，配合结印强化普攻的群体输出。" },
    { set: "戍卫风雪的铁卫", piece: "2件套", reason: "受击减伤提高站场生存，保障多段强化普攻。" },
  ],
  portrait: "/assets/characters/rappa.png",
  color: "#FDE047",
  tags: ["技能强化", "超击破", "击破特攻"],
};
