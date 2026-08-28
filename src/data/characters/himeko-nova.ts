import type { Character } from "../../types/character";

export const himekoNova: Character = {
  id: "himeko-nova",
  name: "姬子•启行",
  rarity: 5,
  element: "火",
  path: "智识",
  faction: "星穹列车",
  description: "操控拓星者机甲的输出，全队可呼唤支援攻击，终结技造成多重爆发伤害。",
  stats: { hp: 1125, atk: 756, def: 485, speed: 98, critRate: 5, critDmg: 50, taunt: 100, energy: 150 },
  skills: [
    { type: "普攻", name: "点燃第一里航标", description: "对敌方单体造成等同于姬子•启行 100% 攻击力的火属性伤害。" },
    { type: "战技", name: "升起领航的烽火", description: "立即恢复所有助战技使用次数，并获得【领航旗语】：我方全体造成的伤害提高20%，且每回合开始时恢复1次助战技使用次数，持续3回合。" },
    { type: "终结技", name: "我们，亦是逐星的巨人", description: "立即操控「拓星者」，对指定敌方单体最多造成762%攻击力的火属性伤害，对其他目标最多造成252%；【超频粒子光束】次数耗尽后发动最后一击，对随机单体造成3次80%攻击力的火属性伤害。", energyCost: 150 },
    { type: "天赋", name: "共赴灼热的远征", description: "在场时展开境界【拓星视界】并出现「拓星者」，我方全体获得助战技使用次数；使用助战技视为姬子•启行施放战技，自身获得20%全属性抗性穿透与80%暴击伤害，攻击时可无视弱点削减韧性并触发火属性击破。" },
    { type: "秘技", name: "拓星巡航", description: "秘技点上限提高3点；使用后进入30秒【巡航】状态，消耗2点秘技点攻击范围内所有敌人，进入战斗后每个波次开始时立即施放1次战技；攻击普通敌人直接消灭。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "童真蜡笔", count: 15 },
    { name: "造梦蘸钢", count: 15 },
    { name: "梦现管锥", count: 15 },
    { name: "明辉日珥", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "天体模型", count: 18 },
    { name: "星系框架", count: 69 },
    { name: "银河沙盘", count: 139 },
    { name: "童真蜡笔", count: 41 },
    { name: "造梦蘸钢", count: 56 },
    { name: "梦现管锥", count: 58 },
    { name: "灭流绝溢的缄默", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "night-on-the-milky-way", reason: "多目标攻击力叠加，击破增伤契合无视弱点。" },
    { id: "before-dawn", reason: "暴伤与战技终结技增伤，强化助战技与终结技。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，支撑助战技与终结技输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，放大机甲爆发。" },
  ],
  portrait: "/assets/characters/himeko-nova.png",
  color: "#FF9F45",
  tags: ["SP", "境界", "助战技"],
};
