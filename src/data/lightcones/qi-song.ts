import type { LightCone } from "../../types/lightcone";

export const qiSong: LightCone = {
  id: "qi-song",
  name: "齐颂",
  rarity: 3,
  path: "和谐",
  baseStats: { hp: 846, atk: 317, def: 264 },
  skill: {
    name: "协力",
    description: "进入战斗后，使我方全体的攻击力提高 {0}%。同类技能无法重复生效。",
    valuesBySuperimposition: [8, 9, 10, 11, 12],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "铁卫扣饰", count: 12 },
    { name: "铁卫军徽", count: 10 },
    { name: "铁卫勋章", count: 8 },
    { name: "谐乐小调", count: 2 },
    { name: "家族颂歌", count: 6 },
    { name: "群星乐章", count: 9 },
  ],
  recommendedCharacters: [
    { id: "asta", reason: "全队攻击词条互相补充，开局即生效。" },
    { id: "tingyun", reason: "辅助增攻叠加，全队常驻攻击提升。" },
  ],
  rating: 2,
  review: "3★ 和谐光锥。开局全队攻击加成，无法重复生效，前期辅助过渡可选。",
  art: "/assets/lightcones/qi-song.png",
};
