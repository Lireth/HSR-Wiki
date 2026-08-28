import type { LightCone } from "../../types/lightcone";

export const jingZhongGuWo: LightCone = {
  id: "jing-zhong-gu-wo",
  name: "镜中故我",
  rarity: 5,
  path: "和谐",
  baseStats: { hp: 1058, atk: 529, def: 529 },
  skill: {
    name: "彻骨梅香",
    description: "使装备者击破特攻提高 {0}%。装备者施放终结技后，使我方全体造成的伤害提高 {1}%，持续3回合，并且若装备者击破特攻大于等于150%，则恢复1个战技点。每个波次开始时，我方全体立即恢复 {2} 点能量，同类技能无法重复生效。",
    valuesBySuperimposition: [[60, 24, 10.0], [70, 28, 12.5], [80, 32, 15.0], [90, 36, 17.5], [100, 40, 20.0]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "永寿幼芽", count: 20 },
    { name: "永寿天华", count: 20 },
    { name: "永寿荣枝", count: 14 },
    { name: "谐乐小调", count: 4 },
    { name: "家族颂歌", count: 12 },
    { name: "群星乐章", count: 15 },
  ],
  recommendedCharacters: [
    { id: "ruan-mei", reason: "专属光锥，击破增伤与战技点回复完美契合。" },
    { id: "tribbie", reason: "终结技辅助型和谐，全体增伤与回能收益高。" },
  ],
  rating: 5,
  review: "5★ 击破辅助毕业光锥，阮梅专属，战技点回复与全体增伤极为稀缺。",
  art: "/assets/lightcones/jing-zhong-gu-wo.png",
};
