import type { Character } from "../../types/character";

export const silverwolf999: Character = {
  id: "silverwolf-999",
  name: "银狼LV.999",
  rarity: 5,
  element: "虚数",
  path: "欢愉",
  faction: "星核猎手",
  description: "变身为无敌玩家展开结界的输出，消耗战技点触发特殊攻击并支援全队。",
  stats: { hp: 1047, atk: 388, def: 654, speed: 110, critRate: 5, critDmg: 50, taunt: 100, energy: 0 },
  skills: [
    { type: "普攻", name: "拳头硬了！", description: "对指定敌方单体造成等同于银狼LV.999 100% 攻击力的虚数属性伤害。" },
    { type: "战技", name: "Shoot属性大爆发", description: "获得5个笑点，对敌方全体造成等同于银狼LV.999 160% 攻击力的虚数属性伤害。" },
    { type: "终结技", name: "无敌玩家，启动！", description: "特殊能量机制：消耗60点【隐藏分】而非常规能量进入【无敌玩家】状态并行动提前100%，展开结界；我方每消耗1个战技点有概率触发【头号补给盲盒】，造成90%欢愉伤害并随机触发大剑真伤、恢复战技点或获得笑点。", energyCost: 0 },
    { type: "天赋", name: "有我在，把把都是顺风局", description: "【隐藏分】达到60点后可激活终结技；每点【隐藏分】使暴击率提高0.4%，暴击率达100%后每点改为提高暴击伤害0.8%；【无敌玩家】期间免疫控制，完整施放3次强化普攻后退出并清空【隐藏分】；持有【好活当赏】时普攻战技附加40%欢愉伤害。" },
    { type: "秘技", name: "朋友，这才是T0级秘技", description: "召唤【怪怪怪味豆】自动搜寻并攻击普通敌人，消耗1个秘技点立即将其消灭；每个波次开始时触发1次头号补给盲盒，固定计入99点【好活当赏】。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "童真蜡笔", count: 15 },
    { name: "造梦蘸钢", count: 15 },
    { name: "梦现管锥", count: 15 },
    { name: "纷争先兆", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "《绒绒号》手绘分镜稿", count: 18 },
    { name: "《绒绒号》连载纪念刊", count: 69 },
    { name: "《绒绒号》典藏版合集", count: 139 },
    { name: "童真蜡笔", count: 41 },
    { name: "造梦蘸钢", count: 56 },
    { name: "梦现管锥", count: 58 },
    { name: "灭流绝溢的缄默", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "huan-ying-lai-dao-yin-he-cheng", reason: "速度与无视防御提升，终结技直接获取笑点。" },
    { id: "dang-ta-jue-ding-kan-jian", reason: "全队双爆提升，契合暴击率转暴伤机制。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度助力达成160点，触发欢愉度增益。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率加成与隐藏分双爆联动，放大输出。" },
  ],
  portrait: "/assets/characters/silverwolf-999.png",
  color: "#FDE047",
  tags: ["SP", "阿哈时刻", "特殊能量"],
};
