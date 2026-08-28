import type { Character } from "../../types/character";

export const theDahlia: Character = {
  id: "the-dahlia",
  name: "大丽花",
  rarity: 5,
  element: "火",
  path: "虚无",
  faction: "焚化工",
  description: "制造特殊领域，将削韧转化为超击破伤害的火属性虚无角色。",
  stats: { hp: 1086, atk: 679, def: 606, speed: 96, critRate: 5, critDmg: 50, taunt: 100, energy: 130 },
  skills: [
    { type: "普攻", name: "拨弄…记忆绽开裂隙", description: "对指定敌方单体造成等同于大丽花攻击力 50% 的火属性伤害。" },
    { type: "战技", name: "舔舐…背叛伸出火舌", description: "开启结界持续3回合，对指定敌方单体及其相邻目标造成等同于大丽花攻击力 160% 的火属性伤害；结界期间我方全体弱点击破效率提高50%，敌方未处于弱点击破状态时承受的削韧值也可转化为超击破伤害。" },
    { type: "终结技", name: "沉溺…飞灰邀入墓床", description: "使敌方全体陷入【败谢】状态持续4回合，防御力降低 18% 并被添加所有【共舞者】属性的弱点；随后造成 300% 攻击力的火属性伤害，由敌方全体均分。", energyCost: 130 },
    { type: "天赋", name: "谁在害怕康士坦丝？", description: "进入战斗恢复35点能量，与击破特攻最高的队友共同成为【共舞者】；【共舞者】攻击弱点击破状态的敌人后，将本次削韧值转化为1次 60% 的超击破伤害。另一位【共舞者】攻击后大丽花追加5段 30% 攻击力的火属性弹射伤害，每次命中弱点击破目标将削韧转化为 200% 超击破伤害，每回合最多1次。" },
    { type: "秘技", name: "心，是最好的坟茔", description: "制造持续20秒的特殊领域，领域内敌人不会主动攻击；与其开战后立即开启战技结界，并将开战削韧值转化为1次60%的超击破伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 15 },
    { name: "明辉日珥", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "灼情之灵", count: 18 },
    { name: "星火之精", count: 69 },
    { name: "焚天之魔", count: 139 },
    { name: "蓄梦元件", count: 41 },
    { name: "流梦阀门", count: 56 },
    { name: "造梦马达", count: 58 },
    { name: "灭流绝溢的缄默", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "zhuo-jin-lian-yu-de-xin-hai", reason: "专属光锥，回能与炼狱暴伤增益兼备。" },
    { id: "in-the-name-of-the-world", reason: "对负面目标增伤，契合结界减防体系。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度，加快削韧与出伤节奏。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击与终结技增伤，提升超击破基数。" },
  ],
  portrait: "/assets/characters/the-dahlia.png",
  color: "#FF9F45",
  tags: ["特殊领域", "超击破", "弱点击破效率提升"],
};
