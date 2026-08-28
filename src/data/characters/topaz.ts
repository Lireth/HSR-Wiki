import type { Character } from "../../types/character";

export const topaz: Character = {
  id: "topaz",
  name: "托帕&账账",
  rarity: 5,
  element: "火",
  path: "巡猎",
  faction: "星际和平公司",
  description: "石心十人之一的高级干部，与账账协同以追加攻击体系追讨债务与伤害。",
  stats: { hp: 931, atk: 620, def: 412, speed: 110, critRate: 5, critDmg: 50, taunt: 75, energy: 130 },
  skills: [
    { type: "普攻", name: "赤字…", description: "对指定敌方单体造成等同于托帕攻击力 50% 的火属性伤害。" },
    { type: "战技", name: "支付困难？", description: "使指定敌方单体陷入【负债证明】状态，其受到的追加攻击伤害提高 50%；账账对该目标造成等同于托帕 150% 攻击力的火属性伤害，施放此技能造成的伤害视为追加攻击。" },
    { type: "终结技", name: "扭亏为盈！", description: "使账账进入【涨幅惊人！】状态：伤害倍率提高 150%、暴击伤害提高 25%，且陷入【负债证明】的敌方目标受到我方普攻、战技或终结技攻击时账账行动提前 50%；账账施放 2 次攻击后退出该状态。", energyCost: 130 },
    { type: "天赋", name: "猪市？！", description: "战斗开始时召唤账账（初始拥有 80 点速度），账账行动时发动追加攻击，对陷入【负债证明】状态的敌方单体造成等同于托帕 150% 攻击力的火属性伤害；该目标受到我方追加攻击时账账行动提前 50%。" },
    { type: "秘技", name: "明补", description: "托帕入场时召唤账账，自动搜寻范围内的战利品与扑满；主动施放后，下一场战斗中账账施放首次攻击后托帕恢复 60 点能量。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "铁卫扣饰", count: 15 },
    { name: "铁卫军徽", count: 15 },
    { name: "铁卫勋章", count: 15 },
    { name: "过热钢刃", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "猎兽之矢", count: 18 },
    { name: "屠魔之矢", count: 69 },
    { name: "逐星之矢", count: 139 },
    { name: "铁卫扣饰", count: 41 },
    { name: "铁卫军徽", count: 56 },
    { name: "铁卫勋章", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "fan-nao-zhe-xing-fu-zhe", reason: "专属光锥，追击增伤与暴伤叠层完美契合账账体系。" },
    { id: "dian-ge-guan-zhu-ba", reason: "4星选择，普攻与战技增伤，满能量时收益更高。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度加成，适配追击输出节奏。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与增伤，补足追击伤害面板。" },
  ],
  portrait: "/assets/characters/topaz.png",
  color: "#FF9F45",
  tags: ["召唤", "追加攻击", "暴击伤害"],
};
