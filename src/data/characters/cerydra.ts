import type { Character } from "../../types/character";

export const cerydra: Character = {
  id: "cerydra",
  name: "刻律德菈",
  rarity: 5,
  element: "风",
  path: "和谐",
  faction: "翁法罗斯",
  description: "授予【军功】提升队友攻击，攻击附带追加伤害的风属性同谐辅助。",
  stats: { hp: 1358, atk: 620, def: 485, speed: 99, critRate: 5, critDmg: 50, taunt: 100, energy: 130 },
  skills: [
    { type: "普攻", name: "易位，兵贵神速", description: "对指定敌方单体造成等同于刻律德菈攻击力 50% 的风属性伤害。" },
    { type: "战技", name: "升变，士皆可帅", description: "使指定我方单体获得【军功】并使刻律德菈获得1点充能（上限8点）；充能达6点时【军功】升级为【爵位】并解除其控制类负面状态。持有【爵位】者战技暴击伤害提高 72%、全属性抗性穿透提高 10%，施放战技时触发【奇袭】，结束后消耗6点充能变回【军功】。" },
    { type: "终结技", name: "世事如棋，四步堪杀", description: "获得2点充能，对敌方全体造成等同于刻律德菈攻击力 240% 的风属性伤害；若场上不存在持有【军功】的角色，优先使队伍第一位角色获得【军功】。", energyCost: 130 },
    { type: "天赋", name: "荣光属于凯撒", description: "持有【军功】的角色攻击力提高，数值等同于刻律德菈攻击力的 24%；其施放攻击后，刻律德菈额外造成1次 60% 攻击力的风属性附加伤害，最多触发20次，施放终结技时重置。" },
    { type: "秘技", name: "先手优势", description: "使用秘技后获得【军功】，切换行动角色时【军功】随之转移；下一次战斗开始时自动对持有【军功】的角色施放1次不消耗战技点的战技。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "预兆似有若无", count: 15 },
    { name: "悲鸣由远及近", count: 15 },
    { name: "哀叹漫无止息", count: 15 },
    { name: "暮晖烬蕾", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "云际音符", count: 18 },
    { name: "空际小节", count: 69 },
    { name: "天外乐章", count: 139 },
    { name: "预兆似有若无", count: 41 },
    { name: "悲鸣由远及近", count: 56 },
    { name: "哀叹漫无止息", count: 58 },
    { name: "阳雷的遥想", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "jin-xue-ming-ke-de-shi-dai", reason: "专属光锥，回战技点并强化队友战技。" },
    { id: "but-the-battle-isnt-over", reason: "战技后增伤回点，强化辅助循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度，增益与附加伤害兼顾。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击与终结技增伤，附加伤害更高。" },
  ],
  portrait: "/assets/characters/cerydra.png",
  color: "#6EE7B7",
  tags: ["加攻", "附加伤害", "暴伤提升"],
};
