import type { Character } from "../../types/character";

export const hyacine: Character = {
  id: "hyacine",
  name: "风堇",
  rarity: 5,
  element: "风",
  path: "记忆",
  faction: "翁法罗斯",
  description: "昏光庭院的医师，召唤小伊卡高频治疗并提升全体生命上限。",
  stats: { hp: 1086, atk: 388, def: 630, speed: 110, critRate: 5, critDmg: 50, taunt: 100, energy: 140 },
  skills: [
    { type: "普攻", name: "当微风轻吻云沫", description: "对指定敌方单体造成等同于风堇 25% 生命上限的风属性伤害。" },
    { type: "战技", name: "爱在虹光洒落时", description: "召唤忆灵小伊卡，为除小伊卡外的我方全体回复等同于风堇 8% 生命上限+160 点的生命值，并为小伊卡回复等同于风堇 10% 生命上限+200 点的生命值。" },
    { type: "终结技", name: "飞入晨昏的我们", description: "召唤小伊卡，为除小伊卡外的我方全体回复等同于风堇 10% 生命上限+200 点的生命值、为小伊卡回复 12% 生命上限+240 点；风堇进入【雨过天晴】状态，持续3回合：我方全体生命上限提高 30%+600 点。", energyCost: 140 },
    { type: "天赋", name: "疗愈世间的晨曦", description: "忆灵小伊卡初始拥有等同于风堇50%生命上限的生命；风堇或小伊卡提供治疗时，小伊卡造成的伤害提高 80%，最多叠加3层。【雨过天晴】期间小伊卡持续治疗生命值降低的队友，并在风堇施放技能后自动追加忆灵技攻击。" },
    { type: "秘技", name: "天气正好，万物可爱！", description: "下一次战斗开始时，为我方全体回复等同于风堇 30% 生命上限+600 点的生命值，并使其生命上限提高20%，持续2回合。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "恐惧踏碎血肉", count: 15 },
    { name: "勇气撕裂胸膜", count: 15 },
    { name: "荣耀洗礼身躯", count: 15 },
    { name: "一杯酩酊的时代", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "思量的种", count: 18 },
    { name: "末那芽苗", count: 69 },
    { name: "阿赖耶华", count: 139 },
    { name: "恐惧踏碎血肉", count: 41 },
    { name: "勇气撕裂胸膜", count: 56 },
    { name: "荣耀洗礼身躯", count: 58 },
    { name: "同愿的遗音", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "yuan-hong-guang-yong-zhu-tian-kong", reason: "专属光锥，速度强化治疗并附加反打伤害。" },
    { id: "gu-shi-de-xia-yi-ye", reason: "生命上限提升，忆灵攻击后治疗量再增。" },
  ],
  recommendedRelics: [
    { set: "云无留迹的过客", piece: "4件套", reason: "治疗量与战技后回复全面强化奶量。" },
    { set: "不老者的仙舟", piece: "2件套", reason: "生命上限提升，治疗量与召唤物同步受益。" },
  ],
  portrait: "/assets/characters/hyacine.png",
  color: "#6EE7B7",
  tags: ["治疗", "忆灵", "生命上限提升"],
};
