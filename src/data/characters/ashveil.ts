import type { Character } from "../../types/character";

export const ashveil: Character = {
  id: "ashveil",
  name: "不死途",
  rarity: 5,
  element: "雷",
  path: "巡猎",
  faction: "巡海游侠",
  description: "标记【饲饵】高频追加攻击的雷属性输出，并提升全队暴伤、降低敌方防御。",
  stats: { hp: 854, atk: 776, def: 388, speed: 106, critRate: 5, critDmg: 50, taunt: 75, energy: 150 },
  skills: [
    { type: "普攻", name: "利爪，授以礼仪", description: "对指定敌方单体造成等同于不死途 100% 攻击力的雷属性伤害。" },
    { type: "战技", name: "鞭哨，逐尽恶兽", description: "使指定敌方单体成为【饲饵】并造成200%攻击力雷属性伤害；若该目标为【饲饵】则额外造成100%攻击力伤害并恢复1点战技点。场上存在【饲饵】时，敌方全体防御力降低40%。" },
    { type: "终结技", name: "飨宴，自始无终", description: "使指定敌方单体成为【饲饵】并造成400%攻击力雷属性伤害，随后立即发动1次强化天赋追加攻击；拥有【婪酣】时消耗4层可额外造成200%攻击力伤害，追击中目标被消灭会继续追击新【饲饵】。", energyCost: 150 },
    { type: "天赋", name: "宿怨，切齿奉还", description: "初始拥有2点充能，最多3点。【饲饵】受到我方其他目标攻击后，固定恢复8点能量并消耗1点充能对其发动追加攻击，造成200%攻击力雷属性伤害，随后获得2层【婪酣】，最多叠加12层。" },
    { type: "秘技", name: "吃吧，可憎的手", description: "使一定区域内的敌人陷入10秒晕眩状态；主动攻击晕眩敌人进入战斗时，对敌方全体造成100%雷属性伤害，并获得1点充能。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "童真蜡笔", count: 15 },
    { name: "造梦蘸钢", count: 15 },
    { name: "梦现管锥", count: 15 },
    { name: "狂雷扫弦", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "纷争血尘", count: 18 },
    { name: "战魂血珀", count: 69 },
    { name: "天谴血矛", count: 139 },
    { name: "童真蜡笔", count: 41 },
    { name: "造梦蘸钢", count: 56 },
    { name: "梦现管锥", count: 58 },
    { name: "灭流绝溢的缄默", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "fan-nao-zhe-xing-fu-zhe", reason: "暴击率与追加攻击增伤，温驯提高全队暴伤。" },
    { id: "yi-chang-huang-yan-de-zhong-mu", reason: "暴击与攻击加成，追击触发全队易伤。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，普攻与追击输出循环更顺。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，补足爆发面板。" },
  ],
  portrait: "/assets/characters/ashveil.png",
  color: "#C084FC",
  tags: ["追加攻击", "秘技无受击"],
};
