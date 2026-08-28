import type { Character } from "../../types/character";

export const bronya: Character = {
  id: "bronya",
  name: "布洛妮娅",
  rarity: 5,
  element: "风",
  path: "和谐",
  faction: "贝洛伯格·银鬃铁卫",
  description: "贝洛伯格「大守护者」的继承人，银鬃铁卫统领，可让队友立即再次行动并解除控制，是顶级再动辅助。",
  stats: { hp: 1241, atk: 582, def: 533, speed: 99, critRate: 5, critDmg: 50, taunt: 100, energy: 120 },
  skills: [
    { type: "普攻", name: "驭风的子弹", description: "对指定敌方单体造成等同于布洛妮娅攻击力 50% 的风属性伤害。" },
    { type: "战技", name: "作战再部署", description: "解除指定我方单体的 1 个负面状态，使其立即行动，并使其造成的伤害提高 33%，持续 1 回合。" },
    { type: "终结技", name: "贝洛伯格进行曲", description: "我方全体攻击力提高 33%，并使全体暴击伤害提高等同于布洛妮娅暴击伤害的 12% 加 12%，持续 2 回合。", energyCost: 120 },
    { type: "天赋", name: "先人一步", description: "施放普攻后，布洛妮娅的下一次行动提前 15%。" },
    { type: "秘技", name: "在旗帜下", description: "使用秘技后，下一次战斗开始时我方全体攻击力提高 15%，持续 2 回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "铁卫扣饰", count: 15 },
    { name: "铁卫军徽", count: 15 },
    { name: "铁卫勋章", count: 15 },
    { name: "暴风之眼", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "谐乐小调", count: 18 },
    { name: "家族颂歌", count: 69 },
    { name: "群星乐章", count: 139 },
    { name: "铁卫扣饰", count: 41 },
    { name: "铁卫军徽", count: 56 },
    { name: "铁卫勋章", count: 58 },
    { name: "守护者的悲愿", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "but-the-battle-isnt-over", reason: "专属光锥，战技点回复与增伤完美契合其再动机制。" },
    { id: "memories-of-the-past", reason: "4★ 选择，击破特攻与回能加速终结技循环。" },
  ],
  recommendedRelics: [
    { set: "骇域漫游的信使", piece: "4件套", reason: "提高速度并在施放终结技后为全队提速，抢先为队友再动。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "全队攻击力提升，辅助毕业配置。" },
  ],
  portrait: "/assets/characters/bronya.png",
  color: "#6EE7B7",
  tags: ["辅助", "再动", "增伤"],
};
