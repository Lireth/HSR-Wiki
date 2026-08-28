import type { Character } from "../../types/character";

export const march7thHunt: Character = {
  id: "march7th-hunt",
  name: "三月七•巡猎",
  rarity: 4,
  element: "虚数",
  path: "巡猎",
  faction: "星穹列车",
  description: "向队友拜师获得强化的巡猎输出，充能满后连斩式强化普攻输出。",
  stats: { hp: 1058, atk: 564, def: 441, speed: 102, critRate: 5, critDmg: 50, taunt: 75, energy: 110 },
  skills: [
    { type: "普攻", name: "荡涤妖邪琉璃剑", description: "对指定敌方单体造成等同于三月七 50% 攻击力的虚数属性伤害，随后获得 1 点充能。" },
    { type: "战技", name: "师父，请喝茶！", description: "使除自身外的我方指定单体成为【师父】，速度提高 10%；每次普攻或强化普攻伤害按【师父】命途触发：智识/毁灭/巡猎/记忆造成 20% 攻击力附加伤害，同谐/虚无/存护/丰饶使本次削韧值提高 100%。" },
    { type: "终结技", name: "盖世女侠三月七", description: "对指定敌方单体造成等同于 240% 攻击力的虚数属性伤害，并使下一次强化普攻初始段数增加 2 段、额外伤害固定概率提高 20%。", energyCost: 110 },
    { type: "天赋", name: "师父，我悟了！", description: "【师父】施放攻击或终结技后获得充能；充能达 7 点时立即行动且伤害提高 80%，普攻强化且无法施放战技，施放强化普攻消耗 7 点充能（充能上限 10 点）。" },
    { type: "秘技", name: "一气化三餐", description: "队友每施放 1 次秘技，下一次战斗开始时三月七获得 1 点充能（最多 3 点）；使用秘技后，下次战斗开始时恢复 30 点能量。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "掠夺的本能", count: 12 },
    { name: "篡改的野心", count: 13 },
    { name: "践踏的意志", count: 15 },
    { name: "风雪之角", count: 50 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "陨铁弹丸", count: 18 },
    { name: "命定死因", count: 69 },
    { name: "逆时一击", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "毁灭者的末路", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "in-the-night", reason: "速度转普攻增伤与终结技暴伤，契合高频强化普攻。" },
    { id: "chun-shui-chu-sheng", reason: "4星速度与增伤双提升，无伤时收益接近常驻。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度与技能增伤，强化多段普攻输出节奏。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击与暴伤加成，补足强化普攻的爆发上限。" },
  ],
  portrait: "/assets/characters/march7th-hunt.png",
  color: "#FDE047",
  tags: ["速度提升", "附加伤害", "技能强化"],
};
