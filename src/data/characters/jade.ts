import type { Character } from "../../types/character";

export const jade: Character = {
  id: "jade",
  name: "翡翠",
  rarity: 5,
  element: "量子",
  path: "智识",
  faction: "星际和平公司",
  description: "指定【收债人】触发追加攻击的群攻输出，叠【当品】不断抬高暴伤的慈玉女士。",
  stats: { hp: 1086, atk: 659, def: 509, speed: 103, critRate: 5, critDmg: 50, taunt: 100, energy: 140 },
  skills: [
    { type: "普攻", name: "挞楚抽薪", description: "对指定敌方单体造成等同于翡翠 45% 攻击力的量子属性伤害，并对其相邻目标造成等同于 15% 攻击力的量子属性伤害。" },
    { type: "战技", name: "恣肆吞併的担保", description: "指定我方单体成为【收债人】，速度提高 30 点持续 3 回合；其每次攻击后翡翠对每个击中的目标造成 25% 攻击力量子附加伤害，并消耗其生命上限 2% 的生命值。" },
    { type: "终结技", name: "堕此欲渊，立此狱契", description: "对敌方全体造成等同于 240% 攻击力的量子属性伤害，并强化天赋追加攻击：伤害倍率提高 80%，强化效果可生效 2 次。", energyCost: 140 },
    { type: "天赋", name: "剔烁之牙", description: "自身或【收债人】攻击每击中 1 名敌人获得 1 点充能，达 8 点后对敌方全体发动 120% 攻击力追加攻击；发动时获得 5 层【当品】，每层暴击伤害提高 2.4%，最多叠加 50 层。" },
    { type: "秘技", name: "猎手的视界", description: "使一定范围内敌人陷入 10 秒【盲从】且不主动攻击；主动进入战斗后对敌方全体造成 50% 攻击力量子伤害，并立即获得 15 层【当品】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 12 },
    { name: "炙梦喷枪", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "凌乱草图", count: 18 },
    { name: "动态线稿", count: 69 },
    { name: "精致色稿", count: 139 },
    { name: "蓄梦元件", count: 41 },
    { name: "流梦阀门", count: 56 },
    { name: "造梦马达", count: 58 },
    { name: "同愿的遗音", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "pian-pian-xi-wang-wu-jia", reason: "专属光锥，暴击与追击增伤无视防御质变。" },
    { id: "night-on-the-milky-way", reason: "敌人越多攻击叠层越高，契合群攻追击环境。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度加成，加速充能并抬高追击伤害。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与暴伤加成，放大【当品】叠层收益。" },
  ],
  portrait: "/assets/characters/jade.png",
  color: "#818CF8",
  tags: ["追加攻击", "群攻", "暴击伤害"],
};
