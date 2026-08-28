import type { Character } from "../../types/character";

export const yukong: Character = {
  id: "yukong",
  name: "驭空",
  rarity: 4,
  element: "虚数",
  path: "和谐",
  faction: "仙舟罗浮",
  description: "天舶司「驰道」商团首领，以【鸣弦号令】提升全队攻击与暴击的老练射手。",
  stats: { hp: 917, atk: 599, def: 374, speed: 107, critRate: 5, critDmg: 50, taunt: 100, energy: 130 },
  skills: [
    { type: "普攻", name: "流镝", description: "对指定敌方单体造成等同于驭空攻击力 50% 的虚数属性伤害。" },
    { type: "战技", name: "天阙鸣弦", description: "获得 2 层【鸣弦号令】，持有期间我方全体攻击力提高 80%，每次我方目标回合结束时移除 1 层。" },
    { type: "终结技", name: "贯云饮羽", description: "若持有【鸣弦号令】，使我方全体暴击率提高 28%、暴击伤害提高 65%，并对指定敌方单体造成等同于驭空攻击力 380% 的虚数属性伤害。", energyCost: 130 },
    { type: "天赋", name: "箭彻七札", description: "施放普攻时额外造成等同于驭空攻击力 80% 的虚数属性伤害，并使本次攻击削韧值提高 100%，该效果 1 回合后可再次触发。" },
    { type: "秘技", name: "云鸢逐风", description: "进入持续 20 秒的冲刺状态，移动速度提高 35%；主动攻击敌人进入战斗时获得 2 层【鸣弦号令】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "工造机杼", count: 12 },
    { name: "工造迴轮", count: 13 },
    { name: "工造浑心", count: 12 },
    { name: "往日之影的金饰", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 2400000 },
    { name: "谐乐小调", count: 12 },
    { name: "家族颂歌", count: 54 },
    { name: "群星乐章", count: 105 },
    { name: "工造机杼", count: 28 },
    { name: "工造迴轮", count: 42 },
    { name: "工造浑心", count: 42 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 5 },
  ],
  recommendedLightCones: [
    { id: "but-the-battle-isnt-over", reason: "5★ 和谐光锥，战技后回能与全队增伤强化辅助能力。" },
    { id: "memories-of-the-past", reason: "击败敌人回能，加速终结技循环以稳定提供暴击增益。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度提升保证增益覆盖，攻击加成兼顾客场输出。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "全队攻击力提升，与天赋加攻效果叠加。" },
  ],
  portrait: "/assets/characters/yukong.png",
  color: "#FDE047",
  tags: ["辅助", "加攻", "暴击提升"],
};
