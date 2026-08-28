import type { Character } from "../../types/character";

export const aventurineWaveflair: Character = {
  id: "aventurine-waveflair",
  name: "砂金•戏浪",
  rarity: 5,
  element: "量子",
  path: "欢愉",
  faction: "星际和平公司",
  description: "与全队攻击联动频繁施放欢愉技的输出，热意点数强化阿哈时刻爆发。",
  stats: { hp: 1164, atk: 485, def: 606, speed: 107, critRate: 5, critDmg: 50, taunt: 100, energy: 130 },
  skills: [
    { type: "普攻", name: "激流，正中红心", description: "对指定敌方单体造成等同于砂金•戏浪 100% 攻击力的量子属性伤害。" },
    { type: "战技", name: "绝杀，热砂沸腾", description: "对敌方全体造成等同于砂金•戏浪240%攻击力的量子属性伤害，获得4个笑点和4点【热意】。" },
    { type: "终结技", name: "胜局，凌越飓浪之上", description: "对敌方全体造成等同于砂金•戏浪400%攻击力的量子属性伤害，获得6个笑点和8点【热意】，并使自身速度提高30%，持续4回合。", energyCost: 130 },
    { type: "天赋", name: "抛注，听深渊回响", description: "队友施放攻击后获得1点【热意】（上限30）和1个笑点；【热意】达到10点时立即施放固定计入20笑点的【举杯！敬炽烈一夏】，并使下次阿哈时刻的欢愉技强化为【All in！敬炽烈一夏】；持有【好活当赏】时战技与终结技附加40%/72%量子属性欢愉伤害。" },
    { type: "秘技", name: "于静水掀起风浪", description: "快速向前移动并攻击接触到的敌人，移动过程中可抵挡所有攻击；进入战斗后对敌方全体造成100%攻击力的量子属性伤害，获得2点【热意】和20点【好活当赏】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 15 },
    { name: "嗤笑丑面", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "《绒绒号》手绘分镜稿", count: 18 },
    { name: "《绒绒号》连载纪念刊", count: 69 },
    { name: "《绒绒号》典藏版合集", count: 139 },
    { name: "蓄梦元件", count: 41 },
    { name: "流梦阀门", count: 56 },
    { name: "造梦马达", count: 58 },
    { name: "伪觉者的期许", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "xiang-lang-hua-zhi-xia-sheng-xia", reason: "专属光锥，暴击与欢愉技强化，波次回战技点。" },
    { id: "dang-ta-jue-ding-kan-jian", reason: "速度与全队双爆提升，回能加速欢愉循环。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度攻击加成，冲击140点触发欢愉度增益。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补足爆发面板。" },
  ],
  portrait: "/assets/characters/aventurine-waveflair.png",
  color: "#818CF8",
  tags: ["SP", "阿哈时刻", "技能强化"],
};
