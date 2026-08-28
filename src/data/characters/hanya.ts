import type { Character } from "../../types/character";

export const hanya: Character = {
  id: "hanya",
  name: "寒鸦",
  rarity: 4,
  element: "物理",
  path: "和谐",
  faction: "仙舟「罗浮」",
  description: "执掌冥谶天笔的十王司判官，以【承负】恢复战技点并强化队友速度攻击。",
  stats: { hp: 917, atk: 564, def: 352, speed: 110, critRate: 5, critDmg: 50, taunt: 100, energy: 140 },
  skills: [
    { type: "普攻", name: "冥谶天笔", description: "对指定敌方单体造成等同于寒鸦攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "生灭系缚", description: "对指定敌方单体造成等同于寒鸦攻击力 240% 的物理属性伤害，并使其陷入【承负】状态；我方每对【承负】目标施放 2 次攻击后立即恢复 1 个战技点，触发 2 次后自动解除。" },
    { type: "终结技", name: "十王赦令，遍土遵行", description: "使指定我方单体速度提高等同于寒鸦速度 20% 的数值，并使该目标攻击力提高 60%，持续 2 回合。", energyCost: 140 },
    { type: "天赋", name: "罚恶", description: "我方目标对陷入【承负】状态的敌方目标施放普攻、战技、终结技时，造成的伤害提高 30%，持续 2 回合。" },
    { type: "秘技", name: "判冥", description: "立即攻击敌人，进入战斗后对敌方随机单体附上等同于战技效果的【承负】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "工造机杼", count: 12 },
    { name: "工造迴轮", count: 13 },
    { name: "工造浑心", count: 12 },
    { name: "幽府通令", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "谐乐小调", count: 18 },
    { name: "家族颂歌", count: 69 },
    { name: "群星乐章", count: 139 },
    { name: "工造机杼", count: 41 },
    { name: "工造迴轮", count: 56 },
    { name: "工造浑心", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "but-the-battle-isnt-over", reason: "战技后增伤并恢复战技点，契合战技点辅助定位。" },
    { id: "memories-of-the-past", reason: "4星选择，攻击后回能加速终结技循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度加成提升终结技加攻数值与出手频率。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限加成，提升辅助生存能力。" },
  ],
  portrait: "/assets/characters/hanya.png",
  color: "#E8E4D9",
  tags: ["增伤", "战技点恢复", "速度提升"],
};
