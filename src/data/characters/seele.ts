import type { Character } from "../../types/character";

export const seele: Character = {
  id: "seele",
  name: "希儿",
  rarity: 5,
  element: "量子",
  path: "巡猎",
  faction: "贝洛伯格·下层区",
  description: "下层区的「蝴蝶」……在夜色中穿行的量子巡猎者，击破敌人后可获得再次行动的机会。",
  stats: { hp: 931, atk: 640, def: 363, speed: 115, critRate: 5, critDmg: 50, taunt: 75, energy: 120 },
  skills: [
    { type: "普攻", name: "幻镰", description: "对指定敌方单体造成等同于希儿攻击力 50% 的量子属性伤害。" },
    { type: "战技", name: "幻蝶", description: "对指定敌方单体造成等同于希儿攻击力 110% 的量子属性伤害，并被【割裂】状态覆盖。" },
    { type: "终结技", name: "彼岸蝶", description: "对指定敌方单体造成等同于希儿攻击力 255% 的量子属性伤害，并进入【增益状态】。", energyCost: 120 },
    { type: "天赋", name: "再现", description: "希儿击倒敌人后立即获得一次额外行动机会，并进入【增益状态】。" },
    { type: "秘技", name: "夜影", description: "使用秘技后，在接下来的 20 秒内进入隐身状态。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "掠夺的本能", count: 15 },
    { name: "篡改的野心", count: 15 },
    { name: "践踏的意志", count: 15 },
    { name: "虚幻铸铁", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "猎兽之矢", count: 18 },
    { name: "屠魔之矢", count: 69 },
    { name: "逐星之矢", count: 139 },
    { name: "掠夺的本能", count: 41 },
    { name: "篡改的野心", count: 56 },
    { name: "践踏的意志", count: 58 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "in-the-night", reason: "专属光锥，完美契合其高暴伤、高频输出的巡猎定位。" },
    { id: "today-is-another-peaceful-day", reason: "4★ 平民选择，战技/终结技使用频繁时收益稳定。" },
  ],
  recommendedRelics: [
    { set: "密林卧游的观星者", piece: "4件套", reason: "量子伤害与无视防御，量子主C通用毕业装。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "提供暴击率与增伤，补足面板。" },
  ],
  portrait: "/assets/characters/seele.png",
  color: "#818CF8",
  tags: ["输出", "单体爆发", "再动"],
};
