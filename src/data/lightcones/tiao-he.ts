import type { LightCone } from "../../types/lightcone";

export const tiaoHe: LightCone = {
  id: "tiao-he",
  name: "调和",
  rarity: 3,
  path: "和谐",
  baseStats: { hp: 846, atk: 317, def: 264 },
  skill: {
    name: "家族",
    description: "进入战斗时，我方全体速度提高 {0} 点，持续1回合。",
    valuesBySuperimposition: [12, 14, 16, 18, 20],
  },
  ascensionMaterials: [
  { name: "信用点", count: 231000 },
  { name: "熄灭原核", count: 12 },
  { name: "微光原核", count: 10 },
  { name: "蠢动原核", count: 8 },
  { name: "谐乐小调", count: 2 },
  { name: "家族颂歌", count: 6 },
  { name: "群星乐章", count: 9 },
  ],
  recommendedCharacters: [
    { id: "tingyun", reason: "开局加速全队，增益辅助价值提升。" },
    { id: "asta", reason: "开局提速契合辅助定位，过渡实用。" },
  ],
  rating: 2,
  review: "3★ 和谐光锥。开局全体加速一回合，过渡可用，收益有限。",
  art: "/assets/lightcones/tiao-he.png",
};
