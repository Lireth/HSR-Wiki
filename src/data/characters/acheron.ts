import type { Character } from "../../types/character";

export const acheron: Character = {
  id: "acheron",
  name: "黄泉",
  rarity: 5,
  element: "雷",
  path: "虚无",
  faction: "自灭者",
  description: "独行银河的刀客，积攒【残梦】释放终结技的雷属性虚无输出。",
  stats: { hp: 1125, atk: 698, def: 436, speed: 101, critRate: 5, critDmg: 50, taunt: 100, energy: 0 },
  skills: [
    { type: "普攻", name: "三途枯榷", description: "对指定敌方单体造成等同于黄泉攻击力 50% 的雷属性伤害。" },
    { type: "战技", name: "八雷飞渡", description: "获得1点【残梦】，为指定敌方单体附上1层【集真赤】，对其造成等同于黄泉攻击力 160% 的雷属性伤害，同时对其相邻目标造成等同于黄泉攻击力 60% 的雷属性伤害。" },
    { type: "终结技", name: "残梦尽染，一刀缭断", description: "依次发动3次【啼泽雨斩】和1次【黄泉返渡】：【啼泽雨斩】对指定敌方单体造成雷属性伤害，并消去目标最多3层【集真赤】，消去时立即对敌方全体造成等同于黄泉攻击力 15.0% 的雷属性伤害（随消去层数额外提高）；【黄泉返渡】对敌方全体造成等同于黄泉攻击力 120% 的雷属性伤害并移除所有【集真赤】。对指定单体总计最多造成等同于黄泉攻击力 372% 的雷属性伤害，对其他目标最多 300%。终结技期间无法为敌方附上【集真赤】；【残梦】达到9点时可激活终结技。", energyCost: 0 },
    { type: "天赋", name: "红叶时雨，万倾一空", description: "终结技期间可无视弱点属性削减敌方韧性，并使敌方全体全属性抗性降低 20%，持续至终结技结束。任意单位施放技能使敌方目标陷入负面效果时，黄泉获得1点【残梦】并为【集真赤】最多的目标附上1层【集真赤】，每次施放技能最多触发1次。" },
    { type: "秘技", name: "四相断我", description: "立即攻击敌人，每个波次开始时获得【四相断我】；对敌方全体造成等同于黄泉 200% 攻击力的雷属性伤害，无视弱点属性削减敌方全体韧性，击破弱点时触发雷属性弱点击破效果；施放终结技后获得1点【残梦】并附上1层【集真赤】。攻击普通敌人立即消灭且不进入战斗，未击中敌人时不消耗秘技点。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 15 },
    { name: "炼形者雷枝", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "黯淡黑曜", count: 18 },
    { name: "虚空黑曜", count: 69 },
    { name: "沉沦黑曜", count: 139 },
    { name: "蓄梦元件", count: 41 },
    { name: "流梦阀门", count: 56 },
    { name: "造梦马达", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "xing-yu-liu-shi-de-an", reason: "专属光锥，暴伤与终结技增伤完美契合。" },
    { id: "in-the-name-of-the-world", reason: "对负面目标增伤，战技提升命中与攻击。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，拉高终结技斩杀线。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，强化爆发伤害。" },
  ],
  portrait: "/assets/characters/acheron.png",
  color: "#C084FC",
  tags: ["特殊能量", "减抗", "群攻"],
};
