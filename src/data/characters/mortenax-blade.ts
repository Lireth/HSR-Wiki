import type { Character } from "../../types/character";

export const mortenaxBlade: Character = {
  id: "mortenax-blade",
  name: "千冶•刃",
  rarity: 5,
  element: "火",
  path: "虚无",
  faction: "星核猎手",
  description: "展开结界获得强化的输出，频繁施加减防易伤并触发额外战技追击。",
  stats: { hp: 1358, atk: 543, def: 485, speed: 107, critRate: 5, critDmg: 50, taunt: 100, energy: 160 },
  skills: [
    { type: "普攻", name: "残锋，掠尽", description: "对指定敌方单体造成等同于千冶•刃 50% 生命上限的火属性伤害，并使目标陷入嘲讽状态，持续1回合。" },
    { type: "战技", name: "刃下，归葬", description: "消耗等同于自身生命上限10%的生命值，对敌方全体造成72%生命上限的火属性伤害，并额外造成4次伤害，每次对随机单体造成24%生命上限的火属性伤害。不消耗战技点，生命值不足时降至1点。" },
    { type: "终结技", name: "骸骨当炉，血肉即薪", description: "使敌方全体陷入【煞火缠身】：防御力降低30%、受到的伤害提高50%，持续2回合；随后消耗20%生命上限展开结界并获得【无量忿怒】：暴击率提高20%、暴伤提高60%、普攻强化并解锁强化终结技【千冶铸一，万劫烬灭】（对敌方全体造成350%生命上限的火属性伤害）。", energyCost: 160 },
    { type: "天赋", name: "因果尽偿", description: "结界持续期间，我方目标每次攻击敌方后，使对应目标陷入【煞火缠身】并使千冶•刃获得1点充能；充能达到9点且当前生命值大于1时，消耗充能恢复25点能量并额外施放1次视为追加攻击的战技。" },
    { type: "秘技", name: "十方无赦", description: "立即攻击一定范围内的所有敌人；进入战斗后使敌方全体陷入嘲讽状态持续1回合，并使自身受到的伤害降低90%，持续2回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "童真蜡笔", count: 15 },
    { name: "造梦蘸钢", count: 15 },
    { name: "梦现管锥", count: 15 },
    { name: "明辉日珥", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "法吉娜之泪", count: 18 },
    { name: "法吉娜之酒", count: 69 },
    { name: "法吉娜之心", count: 139 },
    { name: "童真蜡笔", count: 41 },
    { name: "造梦蘸钢", count: 56 },
    { name: "梦现管锥", count: 58 },
    { name: "灭流绝溢的缄默", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "the-unreachable-side", reason: "专属光锥，生命上限与受击全队增伤完美契合。" },
    { id: "in-the-name-of-the-world", reason: "对负面状态敌人增伤，契合减防易伤与嘲讽。" },
  ],
  recommendedRelics: [
    { set: "生命的庭园", piece: "4件套", reason: "生命上限提升直接强化伤害与生存，耗血流核心。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，兼顾生存容错与面板输出。" },
  ],
  portrait: "/assets/characters/mortenax-blade.png",
  color: "#FF9F45",
  tags: ["SP", "秘技群攻", "消耗生命值"],
};
