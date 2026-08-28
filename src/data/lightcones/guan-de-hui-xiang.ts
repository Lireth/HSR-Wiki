import type { LightCone } from "../../types/lightcone";

export const guanDeHuiXiang: LightCone = {
  id: "guan-de-hui-xiang",
  name: "棺的回响",
  rarity: 5,
  path: "丰饶",
  baseStats: { hp: 1164, atk: 582, def: 396 },
  skill: {
    name: "荆棘",
    description: "使装备者的攻击力提高 {0}%。当装备者施放攻击后，每击中1名不同的敌方目标，恢复 {1} 点能量，每次攻击最多通过该方式恢复3次能量。当装备者施放终结技后，使我方全体速度提高 {2} 点，持续1回合。",
    valuesBySuperimposition: [[24, 3.0, 12], [28, 3.5, 14], [32, 4.0, 16], [36, 4.5, 18], [40, 5.0, 20]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "工造机杼", count: 20 },
    { name: "工造迴轮", count: 20 },
    { name: "工造浑心", count: 14 },
    { name: "丰饶之种", count: 4 },
    { name: "生命之芽", count: 12 },
    { name: "永恒之花", count: 15 },
  ],
  recommendedCharacters: [
    { id: "luocha", reason: "专属光锥，攻击回能与全体提速完美契合。" },
    { id: "lingsha", reason: "高频攻击治疗角色，回能加速终结技循环。" },
  ],
  rating: 5,
  review: "5★ 丰饶输出型治疗毕业光锥，攻击力、回能与全体提速一应俱全。",
  art: "/assets/lightcones/guan-de-hui-xiang.png",
};
