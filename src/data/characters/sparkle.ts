import type { Character } from "../../types/character";

export const sparkle: Character = {
  id: "sparkle",
  name: "花火",
  rarity: 5,
  element: "量子",
  path: "和谐",
  faction: "假面愚者",
  description: "假面愚者戏剧大师，恢复战技点、提升暴伤并全队增伤的同谐辅助。",
  stats: { hp: 1397, atk: 523, def: 485, speed: 101, critRate: 5, critDmg: 50, taunt: 100, energy: 110 },
  skills: [
    { type: "普攻", name: "独角戏", description: "对指定敌方单体造成等同于花火攻击力 50% 的量子属性伤害。" },
    { type: "战技", name: "梦游鱼", description: "使指定我方单体的暴击伤害提高，数值等同于花火 24.0% 暴击伤害 + 45.0%，持续1回合，并使该目标行动提前50%；对自身施放时不触发行动提前效果。" },
    { type: "终结技", name: "一人千役", description: "为我方恢复4个战技点，并使我方全体获得【谜诡】：持有【谜诡】的目标触发花火天赋的增伤效果每层额外提高 10.0%，持续2回合。", energyCost: 110 },
    { type: "天赋", name: "叙述性诡计", description: "花火在场时，战技点上限额外增加2点；我方目标每消耗1点战技点，使我方全体造成的伤害提高 6.0%，持续2回合，最多叠加3层。" },
    { type: "秘技", name: "不可靠叙事者", description: "使用后，我方全体进入持续20秒的【迷误】状态，不会被敌人发现；【迷误】期间进入战斗时为我方恢复3个战技点。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "思绪末屑", count: 15 },
    { name: "印象残晶", count: 15 },
    { name: "欲念碎镜", count: 15 },
    { name: "炙梦喷枪", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "谐乐小调", count: 18 },
    { name: "家族颂歌", count: 69 },
    { name: "群星乐章", count: 139 },
    { name: "思绪末屑", count: 41 },
    { name: "印象残晶", count: 56 },
    { name: "欲念碎镜", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "jing-zhong-gu-wo", reason: "专属光锥，终结技后全队增伤并波次回能。" },
    { id: "but-the-battle-isnt-over", reason: "战技后增伤并回收战技点，耗点队伍绝配。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度与攻击加成，先手行动强化辅助节奏。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命提升容错，速度达120后攻击再增强。" },
  ],
  portrait: "/assets/characters/sparkle.png",
  color: "#818CF8",
  tags: ["暴击伤害", "行动提前", "战技点恢复"],
};
