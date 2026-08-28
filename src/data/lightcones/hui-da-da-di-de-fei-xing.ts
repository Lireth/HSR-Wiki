import type { LightCone } from "../../types/lightcone";

export const huiDaDaDiDeFeiXing: LightCone = {
  id: "hui-da-da-di-de-fei-xing",
  name: "回到大地的飞行",
  rarity: 5,
  path: "和谐",
  baseStats: { hp: 1164, atk: 476, def: 529 },
  skill: {
    name: "再启程",
    description: "当装备者对我方单体角色施放战技或终结技后，装备者恢复 {0} 点能量，同时使技能目标获得1层【圣咏】，持续3回合，最多叠加3层，每层【圣咏】使持有者造成的伤害提高 {1}%。装备者每对我方单体角色施放2次战技或终结技后，恢复1个战技点。",
    valuesBySuperimposition: [
      [6, 15],
      [6.5, 17],
      [7, 19],
      [7.5, 21],
      [8, 24],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "思绪末屑", count: 20 },
    { name: "印象残晶", count: 20 },
    { name: "欲念碎镜", count: 14 },
    { name: "云际音符", count: 4 },
    { name: "空际小节", count: 12 },
    { name: "天外乐章", count: 15 },
  ],
  recommendedCharacters: [
    { id: "sunday", reason: "专属光锥，单体强化循环与回能极佳。" },
    { id: "bronya", reason: "单体战技辅助，增伤与战技点循环契合。" },
  ],
  rating: 5,
  review: "星期日专属，回能、增伤与战技点循环三位一体。",
  art: "/assets/lightcones/hui-da-da-di-de-fei-xing.png",
};
