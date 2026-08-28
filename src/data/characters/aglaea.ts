import type { Character } from "../../types/character";

export const aglaea: Character = {
  id: "aglaea",
  name: "阿格莱雅",
  rarity: 5,
  element: "雷",
  path: "记忆",
  faction: "翁法罗斯",
  description: "背负「浪漫」火种的改衣师，与忆灵衣匠连携作战、越打越快的雷属性主C。",
  stats: { hp: 1241, atk: 698, def: 485, speed: 102, critRate: 5, critDmg: 50, taunt: 100, energy: 350 },
  skills: [
    { type: "普攻", name: "刺纹之蜜", description: "对指定敌方单体造成等同于阿格莱雅 50% 攻击力的雷属性伤害。" },
    { type: "战技", name: "高举吧，升华的名讳", description: "为忆灵衣匠回复等同于其生命上限 50% 的生命值；若衣匠不在场，则召唤衣匠并使自身立即行动。" },
    { type: "终结技", name: "共舞吧，命定的衣匠", description: "召唤衣匠并使阿格莱雅进入【至高之姿】：获得衣匠忆灵天赋的速度提高层数，每层使自身速度提高 15%，普攻强化为与衣匠的连携攻击【孤锋千吻】（对主目标分别造成 200% 攻击力的雷伤）且无法施放战技；行动序列出现倒计时，倒计时结束时衣匠自毁并解除【至高之姿】。", energyCost: 350 },
    { type: "天赋", name: "金玫之指", description: "忆灵衣匠初始速度为阿格莱雅的35%、生命为阿格莱雅生命上限的 66%+720 点；阿格莱雅攻击时使目标陷入【间隙织线】，攻击该状态下的敌人后额外造成等同于阿格莱雅 30% 攻击力的雷属性附加伤害，衣匠行动时自动施放忆灵技【刺纹之陷】。" },
    { type: "秘技", name: "披星百裂", description: "召唤衣匠一同发起攻击，进入战斗后恢复30点能量，对敌方全体造成等同于阿格莱雅100%攻击力的雷属性伤害，并使随机目标陷入【间隙织线】状态。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膜", count: 15 },
    { name: "荣耀洗礼身躯", count: 15 },
    { name: "兽棺之钉", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "思量的种", count: 18 },
    { name: "末那芽苗", count: 69 },
    { name: "阿赖耶华", count: 139 },
    { name: "恐惧踏碎血肉", count: 41 },
    { name: "勇气撕裂胸膜", count: 56 },
    { name: "荣耀洗礼身躯", count: 58 },
    { name: "吉光片羽", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "ni-jiang-qi-shen-ge-chang", reason: "专属光锥，行动提前与全队提速契合连携。" },
    { id: "jiang-guang-yin-zhi-cheng-huang-jin", reason: "基础速度转化为攻击，攻击叠层强化暴伤。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度直接转化为攻击与行动频率。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率提升，强化连携与终结技输出。" },
  ],
  portrait: "/assets/characters/aglaea.png",
  color: "#C084FC",
  tags: ["忆灵", "高速主C", "连携攻击"],
};
