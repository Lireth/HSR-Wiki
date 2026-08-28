import type { Character } from "../../types/character";

export const archer: Character = {
  id: "archer",
  name: "Archer",
  rarity: 5,
  element: "量子",
  path: "巡猎",
  faction: "异界(Fate系列)",
  description: "可在同一回合内连放战技，队友攻击后追加攻击并恢复战技点的量子巡猎输出。",
  stats: { hp: 1164, atk: 620, def: 485, speed: 105, critRate: 5, critDmg: 50, taunt: 75, energy: 220 },
  skills: [
    { type: "普攻", name: "干将•莫邪", description: "对指定敌方单体造成等同于Archer攻击力 50% 的量子属性伤害。" },
    { type: "战技", name: "伪•螺旋剑", description: "进入【回路连接】状态，对指定敌方单体造成等同于Archer攻击力 360% 的量子属性伤害；状态下施放战技后本回合不会结束，并使战技伤害提高 100%（可叠加2层）。主动施放5次战技或战技点不足时退出该状态。" },
    { type: "终结技", name: "无限剑制", description: "对指定敌方单体造成等同于Archer攻击力 1000% 的量子属性伤害，并获得2点充能，最多可拥有4点充能。", energyCost: 220 },
    { type: "天赋", name: "心眼（真）", description: "队友对敌方目标施放攻击后，Archer消耗1点充能立即对主目标发动追加攻击，造成等同于Archer攻击力 200% 的量子属性伤害，并恢复1个战技点；若施放前目标被消灭则改为对随机单体发动。" },
    { type: "秘技", name: "千里眼", description: "立即攻击敌人，进入战斗后对敌方全体造成等同于Archer 200% 攻击力的量子属性伤害，并获得1点充能。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 15 },
    { name: "暗帷月华", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "陨铁弹丸", count: 18 },
    { name: "命定死因", count: 69 },
    { name: "逆时一击", count: 139 },
    { name: "熄灭原核", count: 41 },
    { name: "微光原核", count: 56 },
    { name: "蠢动原核", count: 58 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "li-xiang-ran-shao-de-di-yu", reason: "专属光锥，连放战技叠层大幅加攻。" },
    { id: "in-the-night", reason: "暴击率提升，高速度转增伤与暴伤。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度与攻击加成，追击循环更流畅。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击提升，强化终结技与追加攻击。" },
  ],
  portrait: "/assets/characters/archer.png",
  color: "#818CF8",
  tags: ["追加攻击", "战技点恢复", "联动"],
};
