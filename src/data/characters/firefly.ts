import type { Character } from "../../types/character";

export const firefly: Character = {
  id: "firefly",
  name: "流萤",
  rarity: 5,
  element: "火",
  path: "毁灭",
  faction: "星核猎手",
  description: "身着装甲「萨姆」作战，以终结技进入完全燃烧状态获得强化的击破输出角色。",
  stats: { hp: 814, atk: 523, def: 776, speed: 104, critRate: 5, critDmg: 50, taunt: 75, energy: 240 },
  skills: [
    { type: "普攻", name: "指令-闪燃推进", description: "对指定敌方单体造成等同于装甲「萨姆」50% 攻击力的火属性伤害。" },
    { type: "战技", name: "指令-天火轰击", description: "消耗等同自身生命上限 40% 的生命值，固定恢复等同自身 60% 能量上限的能量，对指定敌方单体造成等同于 200% 攻击力的火属性伤害；若生命值不足则降至 1 点，并使自身下一次行动提前 25%。" },
    { type: "终结技", name: "火萤Ⅳ型-完全燃烧", description: "进入「完全燃烧」状态并行动提前 100%，获得强化普攻与强化战技；状态内速度提高 60 点，施放攻击时弱点击破效率提高 50%、目标所受击破伤害提高 20%。", energyCost: 240 },
    { type: "天赋", name: "茧式源火中枢", description: "生命值越低受到伤害越低，不高于 20% 时减伤最高达 40%；「完全燃烧」下减伤维持最大且效果抵抗提高 30%。能量恢复至上限时解除自身所有负面效果。" },
    { type: "秘技", name: "Δ指令-焦土陨击", description: "跳跃滞空自由移动 5 秒后下落攻击范围内敌人，每个波次开始时为敌方全体添加火属性弱点（持续 2 回合），并造成等同于 200% 攻击力的火属性伤害。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "思绪末屑", count: 15 },
    { name: "印象残晶", count: 15 },
    { name: "欲念碎镜", count: 12 },
    { name: "忿火之心", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "步离犬牙", count: 18 },
    { name: "狼毒锯牙", count: 69 },
    { name: "月狂獠牙", count: 139 },
    { name: "思绪末屑", count: 41 },
    { name: "印象残晶", count: 56 },
    { name: "欲念碎镜", count: 58 },
    { name: "同愿的遗音", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "meng-ying-gui-yu-he-chu", reason: "专属光锥，高额击破特攻并使目标溃败增伤减速。" },
    { id: "ming-ji-yu-xin-de-yue-ding", reason: "4星击破特攻加成，终结技后暴击率提升直接。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度与攻击加成，契合强化普攻循环与超击破。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，缓解战技烧血带来的生存压力。" },
  ],
  portrait: "/assets/characters/firefly.png",
  color: "#FF9F45",
  tags: ["技能强化", "击破特攻", "超击破"],
};
