import type { Character } from "../../types/character";

export const fugue: Character = {
  id: "fugue",
  name: "忘归人",
  rarity: 5,
  element: "火",
  path: "虚无",
  faction: "仙舟「罗浮」",
  description: "重获新生的狐人少女，赋予无视弱点削韧并引发超击破的火属性击破辅助。",
  stats: { hp: 1125, atk: 582, def: 557, speed: 102, critRate: 5, critDmg: 50, taunt: 100, energy: 130 },
  skills: [
    { type: "普攻", name: "焕焕辰尾", description: "对指定敌方单体造成等同于忘归人 50% 攻击力的火属性伤害；处于【炽灼】时普攻强化，对主目标造成 100%、相邻目标 50% 攻击力的火属性伤害。" },
    { type: "战技", name: "有道祥见，衔书摇风", description: "使指定我方单体获得【狐祈】并使自身进入【炽灼】，持续3回合：持有【狐祈】的目标击破特攻提高 30%，攻击没有对应属性弱点的敌人也能削减等同于原削韧值50%的韧性；持有【狐祈】的目标每次施放攻击时，忘归人有100%基础概率使受击的敌方目标防御力降低 18%，持续2回合。" },
    { type: "终结技", name: "阳极照世，离火满缀", description: "对敌方全体造成等同于忘归人 200% 攻击力的火属性伤害，本次攻击无视弱点属性削减敌方全体韧性，击破弱点时触发火属性的弱点击破效果。", energyCost: 130 },
    { type: "天赋", name: "善盈后福，德气流布", description: "忘归人在场时，敌方目标被额外附上等同于自身韧性上限40%的【云火昭】，初始韧性削减至0后可被继续削减，【云火昭】归零时目标再次受到弱点击破伤害；我方攻击处于弱点击破状态的敌方目标后，将本次攻击的削韧值转化为1次 100% 的超击破伤害。" },
    { type: "秘技", name: "炤炤彻旷", description: "使一定区域内的敌人陷入10秒晕眩；主动攻击晕眩的敌人，进入战斗后忘归人行动提前40%，并有100%基础概率使敌方每个单体目标陷入与战技相同的防御力降低状态，持续2回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 15 },
    { name: "过热钢刃", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "炽情之灵", count: 18 },
    { name: "星火之精", count: 69 },
    { name: "焚天之魔", count: 139 },
    { name: "永寿幼芽", count: 41 },
    { name: "永寿天华", count: 56 },
    { name: "永寿荣枝", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "chang-lu-zhong-you-gui-tu", reason: "专属光锥，击破特攻与击破易伤核心强化。" },
    { id: "hao-xi-kai-yan", reason: "战技稳定施加降防，叠层增伤并补攻击。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，加快超击破循环。" },
    { set: "生命的庭园", piece: "2件套", reason: "击破特攻提升，放大削韧与击破收益。" },
  ],
  portrait: "/assets/characters/fugue.png",
  color: "#FF9F45",
  tags: ["击破特攻提升", "超击破", "无视弱点削韧"],
};
