import type { Character } from "../../types/character";

export const tingyun: Character = {
  id: "tingyun",
  name: "停云",
  rarity: 4,
  element: "物理",
  path: "和谐",
  faction: "仙舟罗浮",
  description: "仙舟罗浮的「商贾」，可提升我方单体攻击力并为队友恢复能量。",
  stats: { hp: 846, atk: 529, def: 396, speed: 112, critRate: 5, critDmg: 50, taunt: 100, energy: 130 },
  skills: [
    { type: "普攻", name: "逐客令", description: "对指定敌方单体造成等同于停云攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "祥瑞赐福", description: "使指定我方单体攻击力提高，持续 3 回合。" },
    { type: "终结技", name: "庆赐天恩", description: "使指定我方单体立即恢复 50 点能量，其攻击力提高，持续 2 回合。", energyCost: 130 },
    { type: "天赋", name: "还神", description: "停云获得【赐福】状态时，为自身恢复能量。" },
    { type: "秘技", name: "天香", description: "使用秘技后，下一次战斗开始时立即恢复自身 30 点能量。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "永寿幼芽", count: 12 },
    { name: "永寿天华", count: 13 },
    { name: "永寿荣枝", count: 12 },
    { name: "往日之影的雷冠", count: 50 },
  ],
  traceMaterials: [
  { name: "信用点", count: 3000000 },
  { name: "谐乐小调", count: 18 },
  { name: "家族颂歌", count: 69 },
  { name: "群星乐章", count: 139 },
  { name: "永寿幼芽", count: 41 },
  { name: "永寿天华", count: 56 },
  { name: "永寿荣枝", count: 58 },
  { name: "毁灭者的末路", count: 12 },
  { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "memories-of-the-past", reason: "击败敌人回能，加速终结技循环。" },
    { id: "but-the-battle-isnt-over", reason: "5★ 上位选择，战技后回能与增伤。" },
  ],
  recommendedRelics: [
    { set: "生命的庭园", piece: "4件套", reason: "提高生命与速度，保证生存与出手频率。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "全队攻击力提升，辅助毕业配置。" },
  ],
  portrait: "/assets/characters/tingyun.png",
  color: "#E8E4D9",
  tags: ["辅助", "能量恢复", "增伤"],
};
