import type { Character } from "../../types/character";

export const serval: Character = {
  id: "serval",
  name: "希露瓦",
  rarity: 4,
  element: "雷",
  path: "智识",
  faction: "贝洛伯格",
  description: "贝洛伯格机械师，钟爱摇滚的前银鬃铁卫，以触电持续伤害与群攻火力点亮舞台。",
  stats: { hp: 917, atk: 652, def: 374, speed: 104, critRate: 5, critDmg: 50, taunt: 100, energy: 100 },
  skills: [
    { type: "普攻", name: "雷鸣音阶", description: "对指定敌方单体造成等同于希露瓦攻击力 50% 的雷属性伤害。" },
    { type: "战技", name: "电光石火间", description: "对指定敌方单体及其相邻目标分别造成等同于希露瓦攻击力 140% 和 60% 的雷属性伤害，并以 80% 基础概率使目标陷入【触电】状态，持续 2 回合；【触电】状态下每回合开始时受到等同于希露瓦攻击力 104% 的雷属性持续伤害。" },
    { type: "终结技", name: "机械热潮登场！", description: "对敌方全体造成等同于希露瓦攻击力 180% 的雷属性伤害，并使【触电】状态下的敌方目标延长 2 回合【触电】持续时间。", energyCost: 100 },
    { type: "天赋", name: "燃情和弦", description: "施放攻击后，对所有处于【触电】状态的敌方目标造成等同于希露瓦攻击力 72% 的雷属性附加伤害。" },
    { type: "秘技", name: "晚安，贝洛伯格", description: "立即攻击敌人，进入战斗后对敌方随机单体造成等同于希露瓦攻击力 50% 的雷属性伤害，并以 100% 基础概率使每个敌方单体陷入【触电】状态，持续 3 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 246400 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 13 },
    { name: "铁卫勋章", count: 12 },
    { name: "往日之影的雷冠", count: 50 },
  ],
  traceMaterials: [
  { name: "信用点", count: 3000000 },
  { name: "灵感之钥", count: 18 },
  { name: "启迪之钥", count: 69 },
  { name: "智识之钥", count: 139 },
  { name: "铁卫扣饰", count: 41 },
  { name: "铁卫军徽", count: 56 },
  { name: "铁卫勋章", count: 58 },
  { name: "守护者的悲愿", count: 12 },
  { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "night-on-the-milky-way", reason: "敌人越多攻击加成越高，群攻触电流收益显著。" },
    { id: "today-is-another-peaceful-day", reason: "4★ 平民选择，稳定增伤与触电附加伤害相辅相成。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击力与速度提升，加快触电施加与附加伤害频率。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与终结技增伤，强化群攻爆发。" },
  ],
  portrait: "/assets/characters/serval.png",
  color: "#C084FC",
  tags: ["持续伤害", "群攻", "触电"],
};
