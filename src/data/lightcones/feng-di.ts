import type { LightCone } from "../../types/lightcone";

export const fengDi: LightCone = {
  id: "feng-di",
  name: "锋镝",
  rarity: 3,
  path: "巡猎",
  baseStats: { hp: 846, atk: 317, def: 264 },
  skill: {
    name: "危机",
    description: "战斗开始时，使装备者的暴击率提高 {0}%，持续3回合。",
    valuesBySuperimposition: [12, 15, 18, 21, 24],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "熄灭原核", count: 12 },
    { name: "微光原核", count: 10 },
    { name: "蠢动原核", count: 8 },
    { name: "猎兽之矢", count: 2 },
    { name: "屠魔之矢", count: 6 },
    { name: "逐星之矢", count: 9 },
  ],
  recommendedCharacters: [
    { id: "danheng", reason: "开局暴击提升首轮输出，开荒期过渡可用。" },
    { id: "sushang", reason: "缺巡猎光锥时的临时选择，暴击收益直接。" },
  ],
  rating: 2,
  review: "3★ 巡猎开局暴击过渡，开荒期主C临时选择。",
  art: "/assets/lightcones/feng-di.png",
};
