import type { Character } from "../../types/character";

export const robin: Character = {
  id: "robin",
  name: "知更鸟",
  rarity: 5,
  element: "物理",
  path: "和谐",
  faction: "匹诺康尼",
  description: "天环族歌者，以【协奏】全队增攻并触发附加伤害的物理同谐辅助。",
  stats: { hp: 1280, atk: 640, def: 485, speed: 102, critRate: 5, critDmg: 50, taunt: 100, energy: 160 },
  skills: [
    { type: "普攻", name: "扑翼白声", description: "对指定敌方单体造成等同于知更鸟攻击力 50% 的物理属性伤害。" },
    { type: "战技", name: "翎之咏叹调", description: "使我方全体造成的伤害提高 50%，持续3回合，知更鸟每回合开始时持续回合数减1。" },
    { type: "终结技", name: "千音迭奏，群星赋格", description: "知更鸟进入【协奏】状态，使除自身以外的队友立即行动；期间我方全体攻击力提高，数值等同于知更鸟攻击力的 22.8% + 200 点，且我方目标每次施放攻击后，知更鸟额外造成1次等同于自身 120% 攻击力的物理附加伤害（暴击率固定100%、暴击伤害固定150%）。协奏期间知更鸟免疫控制类负面状态且无法行动；行动序列出现【协奏】倒计时（固定90点速度），结束时知更鸟退出【协奏】并立即行动。", energyCost: 160 },
    { type: "天赋", name: "调性合颂", description: "使我方全体暴击伤害提高 20.0%；我方目标攻击敌方目标后，知更鸟额外为自身恢复2点能量。" },
    { type: "秘技", name: "酣醉序曲", description: "施放后在自身周围展开持续15秒的特殊领域，领域内敌人不会对知更鸟发动攻击并跟随其移动；期间进入战斗后，每个波次开始时知更鸟恢复5点能量。我方制造的领域效果最多存在1个。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 15 },
    { name: "星际和平工作证", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "谐乐小调", count: 18 },
    { name: "家族颂歌", count: 69 },
    { name: "群星乐章", count: 139 },
    { name: "蓄梦元件", count: 41 },
    { name: "流梦阀门", count: 56 },
    { name: "造梦马达", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "jing-zhong-gu-wo", reason: "终结技后全队增伤，契合协奏输出窗口。" },
    { id: "but-the-battle-isnt-over", reason: "增伤与战技点收益，辅助通用毕业装。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击加成直接抬升全队增攻与附加伤害。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命提升生存，攻击加成强化增攻量。" },
  ],
  portrait: "/assets/characters/robin.png",
  color: "#E8E4D9",
  tags: ["加攻", "立即行动", "附加伤害"],
};
