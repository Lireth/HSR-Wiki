import type { LightCone } from "../../types/lightcone";

export const woJiangXunZhengZhuiLie: LightCone = {
  id: "wo-jiang-xun-zheng-zhui-lie",
  name: "我将，巡征追猎",
  rarity: 5,
  path: "巡猎",
  baseStats: { hp: 952, atk: 635, def: 463 },
  skill: {
    name: "震慑",
    description: "使装备者的暴击率提高{0}%。装备者施放追加攻击时，获得1层【流光】，最多叠加2层。每层【流光】使装备者造成的终结技伤害无视目标{1}%的防御力。装备者回合结束时，移除1层【流光】。",
    valuesBySuperimposition: [
      [15, 27],
      [17.5, 30],
      [20, 33],
      [22.5, 36],
      [25, 39],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "机杼", count: 20 },
    { name: "迥轮", count: 20 },
    { name: "浑心", count: 14 },
    { name: "陨铁弹丸", count: 4 },
    { name: "命定死因", count: 12 },
    { name: "逆时一击", count: 15 },
  ],
  recommendedCharacters: [
    { id: "feixiao", reason: "飞霄专属，追加攻击攒层终结技无视防御。" },
    { id: "topaz", reason: "高频追加攻击，双吃暴击与无视收益。" },
  ],
  rating: 5,
  review: "飞霄专属，暴击与终结技无视防御。",
  art: "/assets/lightcones/wo-jiang-xun-zheng-zhui-lie.png",
};
