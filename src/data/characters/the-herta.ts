import type { Character } from "../../types/character";

export const theHerta: Character = {
  id: "the-herta",
  name: "大黑塔",
  rarity: 5,
  element: "冰",
  path: "智识",
  faction: "空间站「黑塔」",
  description: "天才俱乐部#83，借【解读】标记层层放大伤害的冰属性对群输出。",
  stats: { hp: 1164, atk: 679, def: 485, speed: 99, critRate: 5, critDmg: 50, taunt: 100, energy: 220 },
  skills: [
    { type: "普攻", name: "开窍了吗", description: "对指定敌方单体造成等同于大黑塔 50% 攻击力的冰属性伤害。" },
    { type: "战技", name: "格局打开", description: "对指定敌方单体造成等同于大黑塔 70% 攻击力的冰属性伤害并施加1层【解读】，随后对本次命中目标及其相邻目标造成 70% 攻击力的冰属性伤害，该效果可重复2次。" },
    { type: "终结技", name: "早说了是魔法吧", description: "对敌方全体造成等同于大黑塔 200% 攻击力的冰属性伤害，并使自身攻击力提高 80%，持续3回合；施放后立即行动并获得1层【灵感】，持有【灵感】时战技强化为【我有一个大胆的想法】，造成更高伤害并触发【解读】层数收益。", energyCost: 220 },
    { type: "天赋", name: "拿来吧你", description: "敌方目标进入战斗时被施加1层【解读】，每个波次开始时对随机目标施加25层；强化战技主目标持有【解读】时，每层使主目标受到的伤害提高 8%、其他目标 4%，最多叠加42层，施放后主目标层数重置为1层，目标离场或被消灭时层数转移。" },
    { type: "秘技", name: "看看好看的", description: "下一次战斗开始时攻击力提高60%，持续2回合；可在地图中标记最多3个普通战利品位置。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "熄灭原核", count: 15 },
    { name: "微光原核", count: 15 },
    { name: "蠢动原核", count: 15 },
    { name: "冷藏梦箱", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "凌乱草图", count: 18 },
    { name: "动态线稿", count: 69 },
    { name: "精致色稿", count: 139 },
    { name: "熄灭原核", count: 41 },
    { name: "微光原核", count: 56 },
    { name: "蠢动原核", count: 58 },
    { name: "吉光片羽", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "an-instant-before-a-gaze", reason: "专属光锥，220点能量吃满终结技增伤。" },
    { id: "before-dawn", reason: "强化战技与终结技，追加攻击再获增伤。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "攻击与速度提升，加速【解读】铺层节奏。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率提升，强化终结技与追加攻击。" },
  ],
  portrait: "/assets/characters/the-herta.png",
  color: "#7DD3FC",
  tags: ["对群输出", "攻击强化", "自身立即行动"],
};
