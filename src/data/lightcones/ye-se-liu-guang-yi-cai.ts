import type { LightCone } from "../../types/lightcone";

export const yeSeLiuGuangYiCai: LightCone = {
  id: "ye-se-liu-guang-yi-cai",
  name: "夜色流光溢彩",
  rarity: 5,
  path: "和谐",
  baseStats: { hp: 952, atk: 635, def: 463 },
  skill: {
    name: "抚慰",
    description: "我方角色每次攻击时，使装备者获得1层【歌咏】，每层【歌咏】使装备者的能量恢复效率提高{0}%，最多叠加5层。装备者施放终结技时，移除【歌咏】并获得【华彩】，【华彩】使装备者的攻击力提高{1}%，使我方全体造成的伤害提高{2}%，持续1回合。",
    valuesBySuperimposition: [
      [3, 48, 24],
      [3.5, 60, 28],
      [4, 72, 32],
      [4.5, 84, 36],
      [5, 96, 40],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "蓄梦元件", count: 20 },
    { name: "流梦阀门", count: 20 },
    { name: "造梦马达", count: 14 },
    { name: "云际音符", count: 4 },
    { name: "空际小节", count: 12 },
    { name: "天外乐章", count: 15 },
  ],
  recommendedCharacters: [
    { id: "robin", reason: "知更鸟专属，终结技期间全队增伤爆表。" },
    { id: "ruan-mei", reason: "高频终结技配合，攻击加成收益最大化。" },
  ],
  rating: 5,
  review: "知更鸟专属，攻击加成与全队增伤极致。",
  art: "/assets/lightcones/ye-se-liu-guang-yi-cai.png",
};
