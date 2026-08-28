import type { Character } from "../../types/character";

export const xueyi: Character = {
  id: "xueyi",
  name: "雪衣",
  rarity: 4,
  element: "量子",
  path: "毁灭",
  faction: "仙舟「罗浮」",
  description: "借偃偶还阳的十王司判官，以削韧充能的追加攻击削减敌方韧性。",
  stats: { hp: 1058, atk: 599, def: 396, speed: 103, critRate: 5, critDmg: 50, taunt: 75, energy: 120 },
  skills: [
    { type: "普攻", name: "破魔锥", description: "对指定敌方单体造成等同于雪衣攻击力 50% 的量子属性伤害。" },
    { type: "战技", name: "摄伏诸恶", description: "对指定敌方单体造成等同于雪衣攻击力 140% 的量子属性伤害，同时对其相邻目标造成 70% 攻击力的量子属性伤害。" },
    { type: "终结技", name: "天罚贯身", description: "对指定敌方单体造成等同于雪衣攻击力 250% 的量子属性伤害，本次攻击无视弱点属性削减敌方韧性；削减的韧性越多伤害越高，最多提高 60%。", energyCost: 120 },
    { type: "天赋", name: "十王圣断，业报恒常", description: "施放攻击削减敌方韧性时叠加【恶报】，队友削减韧性后额外叠加 1 层，最多 8 层；叠至上限时消耗全部【恶报】发动追加攻击，对敌方随机单体造成 3 次 90% 攻击力的量子属性伤害。" },
    { type: "秘技", name: "斩立决", description: "立即攻击敌人，进入战斗后对敌方全体造成等同于雪衣 80% 攻击力的量子属性伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "熄灭原核", count: 12 },
    { name: "微光原核", count: 13 },
    { name: "蠢动原核", count: 12 },
    { name: "苍猿之钉", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "破碎残刃", count: 18 },
    { name: "无生残刃", count: 69 },
    { name: "净世残刃", count: 139 },
    { name: "熄灭原核", count: 41 },
    { name: "微光原核", count: 56 },
    { name: "蠢动原核", count: 58 },
    { name: "蛀星孕灾的旧恶", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "ming-ji-yu-xin-de-yue-ding", reason: "伴生光锥，击破特攻加成契合削韧输出体系。" },
    { id: "something-irreplaceable", reason: "攻击力与伤害提高，受击回血契合毁灭站场定位。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度加成，适配削韧追击输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与增伤，补足输出面板。" },
  ],
  portrait: "/assets/characters/xueyi.png",
  color: "#818CF8",
  tags: ["追加攻击", "自身伤害提升", "无视弱点削韧"],
};
