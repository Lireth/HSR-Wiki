import type { Character } from "../../types/character";

export const jingliu: Character = {
  id: "jingliu",
  name: "镜流",
  rarity: 5,
  element: "冰",
  path: "毁灭",
  faction: "仙舟「罗浮」",
  description: "被抹去名字的罗浮前剑首，进入【转魄】状态以暴击与巨幅攻击强化碾压战局。",
  stats: { hp: 1435, atk: 679, def: 485, speed: 96, critRate: 5, critDmg: 50, taunt: 75, energy: 140 },
  skills: [
    { type: "普攻", name: "流影方晖", description: "对指定敌方单体造成等同于镜流攻击力 50% 的冰属性伤害。" },
    { type: "战技", name: "无罅飞光", description: "对指定敌方单体造成等同于镜流攻击力 200% 的冰属性伤害，并获得 1 层【朔望】；【转魄】状态下强化为【寒川映月】，对其相邻目标额外造成 125% 攻击力的冰属性伤害，且不消耗战技点。" },
    { type: "终结技", name: "昙华生灭，天河泻梦", description: "对指定敌方单体造成等同于镜流攻击力 300% 的冰属性伤害，并对其相邻目标造成 150% 攻击力的冰属性伤害；攻击结束后获得 1 层【朔望】。", energyCost: 140 },
    { type: "天赋", name: "澹月转魄", description: "拥有 2 层【朔望】时进入【转魄】状态，行动提前 100% 并提高 50% 暴击率，战技强化且仅能使用强化战技；施放攻击时消耗队友 4% 生命上限的生命值，并根据我方全体生命值消耗总量的 540% 提高攻击力，最高不超过自身基础攻击力的 180%。" },
    { type: "秘技", name: "古镜照神", description: "制造持续 20 秒的特殊领域，领域内敌人陷入冻结状态；与其进入战斗后立即恢复 15 点能量、获得 1 层【朔望】，并以 100% 基础概率使敌方目标冻结 1 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 15 },
    { name: "苦寒晶壳", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "破碎残刃", count: 18 },
    { name: "无生残刃", count: 69 },
    { name: "净世残刃", count: 139 },
    { name: "永寿幼芽", count: 41 },
    { name: "永寿天华", count: 56 },
    { name: "永寿荣枝", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "ci-shen-wei-jian", reason: "专属光锥，队友受击叠层增伤并无视防御，契合转魄爆发。" },
    { id: "zai-huo-de-yuan-chu", reason: "4星选择，消耗生命后回血增伤，契合转魄消耗机制。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度加成，适配暴击爆发输出。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与增伤，补足暴伤体系面板。" },
  ],
  portrait: "/assets/characters/jingliu.png",
  color: "#7DD3FC",
  tags: ["技能强化", "攻击力", "暴击率"],
};
