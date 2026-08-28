import type { Character } from "../../types/character";

export const tribbie: Character = {
  id: "tribbie",
  name: "缇宝",
  rarity: 5,
  element: "量子",
  path: "和谐",
  faction: "翁法罗斯",
  description: "命运的三位一体，展开结界增伤并赋予全属性穿透的量子辅助。",
  stats: { hp: 1047, atk: 523, def: 727, speed: 96, critRate: 5, critDmg: 50, taunt: 100, energy: 120 },
  skills: [
    { type: "普攻", name: "一百层的小火箭", description: "对指定敌方单体造成等同于缇宝 15% 生命上限的量子属性伤害，对相邻目标造成等同于缇宝 7.5% 生命上限的量子属性伤害。" },
    { type: "战技", name: "礼物都去哪儿了", description: "获得【神启】，持续3回合：持有期间我方全体全属性抗性穿透提高 24%。" },
    { type: "终结技", name: "猜猜这里住着谁", description: "对敌方全体造成等同于缇宝 30% 生命上限的量子属性伤害并开启结界，持续2回合：结界内敌方受到的伤害提高 30%，我方攻击后每有1名目标受到攻击，对被攻击目标中生命值最高者造成等同于缇宝 12% 生命上限的量子属性附加伤害。", energyCost: 120 },
    { type: "天赋", name: "好忙好忙的缇宝", description: "我方其他角色施放终结技后，缇宝发动追加攻击，对敌方全体造成等同于缇宝 18% 生命上限的量子属性伤害，该效果每名角色最多触发1次，缇宝施放终结技时重置次数。" },
    { type: "秘技", name: "开心你就拍拍手", description: "使用秘技后，进入战斗时获得【神启】，持续3回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膜", count: 15 },
    { name: "荣耀洗礼身躯", count: 15 },
    { name: "暗帷月华", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "云际音符", count: 18 },
    { name: "空际小节", count: 69 },
    { name: "天外乐章", count: 139 },
    { name: "恐惧踏碎血肉", count: 41 },
    { name: "勇气撕裂胸膜", count: 56 },
    { name: "荣耀洗礼身躯", count: 58 },
    { name: "同愿的遗音", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "jin-xue-ming-ke-de-shi-dai", reason: "专属光锥，终结技回收战技点优化循环。" },
    { id: "dance-dance-dance", reason: "120能量终结技高频，全队行动提前。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度提升，更快开出结界与追加攻击。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，直接放大其伤害机制。" },
  ],
  portrait: "/assets/characters/tribbie.png",
  color: "#818CF8",
  tags: ["结界增益", "抗性穿透", "附加伤害"],
};
