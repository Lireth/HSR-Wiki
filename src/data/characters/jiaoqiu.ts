import type { Character } from "../../types/character";

export const jiaoqiu: Character = {
  id: "jiaoqiu",
  name: "椒丘",
  rarity: 5,
  element: "火",
  path: "虚无",
  faction: "仙舟「曜青」",
  description: "施加【烬煨】提高敌方所受伤害并造成灼烧，终结技开启结界的辅助增伤角色。",
  stats: { hp: 1358, atk: 601, def: 509, speed: 98, critRate: 5, critDmg: 50, taunt: 100, energy: 100 },
  skills: [
    { type: "普攻", name: "仁火攻心", description: "对指定敌方单体造成等同于椒丘 50% 攻击力的火属性伤害。" },
    { type: "战技", name: "燔燎急袭", description: "对指定敌方单体造成 150% 攻击力、相邻目标 90% 攻击力的火属性伤害，并以 100% 基础概率对主目标施加 1 层【烬煨】。" },
    { type: "终结技", name: "鼎阵妙法，奇正相生", description: "将敌方【烬煨】层数统一设置为最高值，开启结界并对敌方全体造成 100% 攻击力火伤；结界内目标受到的终结技伤害提高 15%，行动时有 60% 基础概率被叠加 1 层【烬煨】，结界持续 3 回合。", energyCost: 100 },
    { type: "天赋", name: "四示八权，纤滋精味", description: "攻击击中敌人时以 100% 基础概率施加 1 层【烬煨】：1 层使目标受到的伤害提高 15%，此后每层再提高 5%（最多 5 层）；处于【烬煨】的目标视为灼烧状态，每回合开始受到 180% 攻击力的火属性持续伤害。" },
    { type: "秘技", name: "旺火却乱", description: "制造持续 15 秒的特殊领域，与其中的敌人进入战斗后对敌方全体造成 100% 攻击力火伤，并以 100% 基础概率施加 1 层【烬煨】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "永寿幼芽", count: 15 },
    { name: "永寿天华", count: 15 },
    { name: "永寿荣枝", count: 12 },
    { name: "忿火之心", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "炽情之灵", count: 18 },
    { name: "星火之精", count: 69 },
    { name: "焚天之魔", count: 139 },
    { name: "永寿幼芽", count: 41 },
    { name: "永寿天华", count: 56 },
    { name: "永寿荣枝", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "xing-yu-liu-shi-de-an", reason: "高频攻击触发泡影易伤，终结技增伤收益直接。" },
    { id: "gu-du-de-liao-yu", reason: "击破与持续伤害增伤，强化烬煨灼烧的消耗能力。" },
  ],
  recommendedRelics: [
    { set: "密林卧游的观星者", piece: "4件套", reason: "效果命中提升，保证【烬煨】与结界稳定施加。" },
    { set: "野穗伴行的快枪手", piece: "2件套", reason: "攻击力加成直接抬高持续伤害与增伤转化。" },
  ],
  portrait: "/assets/characters/jiaoqiu.png",
  color: "#FF9F45",
  tags: ["终结技易伤", "易伤", "持续伤害"],
};
