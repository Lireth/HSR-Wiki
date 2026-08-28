import type { LightCone } from "../../types/lightcone";

export const meiMengXiaoZhenDaMaoXian: LightCone = {
  id: "mei-meng-xiao-zhen-da-mao-xian",
  name: "美梦小镇大冒险",
  rarity: 4,
  path: "和谐",
  baseStats: { hp: 952, atk: 423, def: 396 },
  skill: {
    name: "团结",
    description: "装备者施放普攻、战技、终结技中某一类型的技能后，为我方全体附加【童心】，【童心】可以使我方目标对应类型的技能所造成的伤害提高 {0}%。【童心】仅对装备者最新使用的技能类型生效，且不可叠加。",
    valuesBySuperimposition: [12, 14, 16, 18, 20],
  },
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "蓄梦元件", count: 15 },
    { name: "流梦阀门", count: 15 },
    { name: "造梦马达", count: 12 },
    { name: "云际音符", count: 3 },
    { name: "空际小节", count: 9 },
    { name: "天外乐章", count: 12 },
  ],
  recommendedCharacters: [
    { id: "robin", reason: "终结技为主辅助，全体对应技能伤害提升。" },
    { id: "tingyun", reason: "战技辅助频繁施放，童心增伤覆盖稳定。" },
  ],
  rating: 3,
  review: "4★ 和谐过渡光锥，对应类型技能增伤直观，前期辅助可选。",
  art: "/assets/lightcones/mei-meng-xiao-zhen-da-mao-xian.png",
};
