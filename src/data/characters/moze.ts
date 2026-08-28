import type { Character } from "../../types/character";

export const moze: Character = {
  id: "moze",
  name: "貊泽",
  rarity: 4,
  element: "雷",
  path: "巡猎",
  faction: "仙舟「曜青」",
  description: "标记【猎物】后隐入离场的影卫，队友攻击触发附加伤害与追加攻击。",
  stats: { hp: 811, atk: 599, def: 352, speed: 111, critRate: 5, critDmg: 50, taunt: 75, energy: 120 },
  skills: [
    { type: "普攻", name: "飞铙", description: "对指定敌方单体造成等同于貊泽 50% 攻击力的雷属性伤害。" },
    { type: "战技", name: "迅羽掠袭", description: "使指定敌方单体成为【猎物】，并对其造成等同于 150% 攻击力的雷属性伤害，同时获得 9 点充能。" },
    { type: "终结技", name: "锋入幽渺，影出凌厉", description: "对指定敌方单体造成等同于 270% 攻击力的雷属性伤害，并对该目标发动 1 次天赋的追加攻击。", energyCost: 120 },
    { type: "天赋", name: "伸天卑飞，折翅为芒", description: "场上存在【猎物】时貊泽进入离场状态；我方攻击【猎物】后，貊泽额外造成 30% 攻击力的雷属性附加伤害并消耗 1 点充能，每消耗 3 点充能对【猎物】发动 1 次 160% 攻击力的追加攻击。" },
    { type: "秘技", name: "胁翼匿迹", description: "进入持续 20 秒的隐身状态且不会被敌人发现；隐身中攻击敌人进入战斗时，自身造成的伤害提高 30%，持续 2 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "工造机杼", count: 12 },
    { name: "工造迴轮", count: 13 },
    { name: "工造浑心", count: 15 },
    { name: "兽棺之钉", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "陨铁弹丸", count: 18 },
    { name: "命定死因", count: 69 },
    { name: "逆时一击", count: 139 },
    { name: "工造机杼", count: 41 },
    { name: "工造迴轮", count: 56 },
    { name: "工造浑心", count: 58 },
    { name: "吉光片羽", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "fan-nao-zhe-xing-fu-zhe", reason: "暴击与追击增伤，温驯联动天赋附加伤害。" },
    { id: "wo-jiang-xun-zheng-zhui-lie", reason: "追击攒层使终结技无视防御，契合离场机制。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度加成，提升附加伤害与追击频率。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与增伤加成，补强终结技与追击伤害。" },
  ],
  portrait: "/assets/characters/moze.png",
  color: "#C084FC",
  tags: ["追加攻击", "附加伤害", "行动提前"],
};
