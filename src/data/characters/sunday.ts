import type { Character } from "../../types/character";

export const sunday: Character = {
  id: "sunday",
  name: "星期日",
  rarity: 5,
  element: "虚数",
  path: "和谐",
  faction: "星穹列车",
  description: "战技令队友及召唤物立即行动，终结技赋予高额暴伤增益的同谐辅助。",
  stats: { hp: 1241, atk: 640, def: 533, speed: 96, critRate: 5, critDmg: 50, taunt: 100, energy: 130 },
  skills: [
    { type: "普攻", name: "闪烁的劝诫", description: "对指定敌方单体造成等同于星期日 50% 攻击力的虚数属性伤害。" },
    { type: "战技", name: "纸与仪典的恩赐", description: "使指定我方单体及其召唤物立即行动，其造成的伤害提高 30%（拥有召唤物时额外提高 50%），持续 2 回合；对【蒙福者】施放后恢复 1 个战技点。" },
    { type: "终结技", name: "轻与伤痕的赞颂", description: "为指定我方单体恢复等同于 20% 能量上限的能量，使其及其召唤物成为【蒙福者】：暴击伤害提高，数值等同于星期日 30% 暴击伤害+12%，持续 3 回合。", energyCost: 130 },
    { type: "天赋", name: "倾诉之肉身", description: "施放战技时，使目标的暴击率提高 20%，持续 3 回合。" },
    { type: "秘技", name: "荣光之秘", description: "使用后，下一次战斗星期日首次对我方目标施放技能时，使该目标造成的伤害提高 50%，持续 2 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 12 },
    { name: "一曲合弦的幻景", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "云际音符", count: 18 },
    { name: "空际小节", count: 69 },
    { name: "天外乐章", count: 139 },
    { name: "熄灭原核", count: 41 },
    { name: "微光原核", count: 56 },
    { name: "蠢动原核", count: 58 },
    { name: "同愿的遗音", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "but-the-battle-isnt-over", reason: "战技增伤并回收战技点，契合高频拉条辅助。" },
    { id: "dance-dance-dance", reason: "终结技后全队行动提前，与拉条体系双重提速。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度加成改善出手循环，保证关键增益先行。" },
    { set: "戍卫风雪的铁卫", piece: "2件套", reason: "受击减伤提高生存，辅助位站场更稳。" },
  ],
  portrait: "/assets/characters/sunday.png",
  color: "#FDE047",
  tags: ["立即行动", "暴击伤害提升", "能量恢复"],
};
