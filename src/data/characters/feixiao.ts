import type { Character } from "../../types/character";

export const feixiao: Character = {
  id: "feixiao",
  name: "飞霄",
  rarity: 5,
  element: "风",
  path: "巡猎",
  faction: "仙舟「曜青」",
  description: "以【飞黄】施放终结技的追击输出，全队攻击即可充能，出手迅捷无匹。",
  stats: { hp: 1047, atk: 601, def: 388, speed: 112, critRate: 5, critDmg: 50, taunt: 75, energy: 0 },
  skills: [
    { type: "普攻", name: "闪裂", description: "对指定敌方单体造成等同于飞霄 50% 攻击力的风属性伤害。" },
    { type: "战技", name: "钺贯", description: "对指定敌方单体造成等同于 200% 攻击力的风属性伤害，随后立即对该目标额外发动 1 次天赋的追加攻击。" },
    { type: "终结技", name: "凿破大荒", description: "以 6 点【飞黄】激活（上限 12 点）：对指定单体造成最多 700% 攻击力的风属性伤害，期间无视弱点属性削减韧性，目标未处于弱点击破状态时弱点击破效率提高 100%；最后再造成 160% 攻击力的风属性伤害。飞霄不使用常规能量，依靠攻击次数积攒【飞黄】。" },
    { type: "天赋", name: "雷狩", description: "我方目标每施放 2 次攻击，飞霄获得 1 点【飞黄】；队友对敌方施放攻击后，飞霄立即对主目标发动 110% 攻击力追加攻击（每回合 1 次），并使自身造成的伤害提高 60%，持续 2 回合。" },
    { type: "秘技", name: "岚身", description: "进入持续 20 秒的【陷锋】状态牵引敌人并提高移速，进入战斗后获得 1 点【飞黄】；每个波次开始时对敌方全体造成 200% 攻击力风伤且必定暴击，牵引每多 1 名敌人倍率提高 100%（上限 1000%）。" },
  ],
  ascensionMaterials: [
    { name: "信用点", count: 308000 },
    { name: "工造机杼", count: 15 },
    { name: "工造迴轮", count: 15 },
    { name: "工造浑心", count: 12 },
    { name: "一杯酩酊的时代", count: 65 },
  ],
  traceMaterials: [
    { name: "信用点", count: 3000000 },
    { name: "陨铁弹丸", count: 18 },
    { name: "命定死因", count: 69 },
    { name: "逆时一击", count: 139 },
    { name: "工造机杼", count: 41 },
    { name: "工造迴轮", count: 56 },
    { name: "工造浑心", count: 58 },
    { name: "无穷假身的遗恨", count: 12 },
    { name: "命运的足迹", count: 8 },
  ],
  recommendedLightCones: [
    { id: "wo-jiang-xun-zheng-zhui-lie", reason: "专属光锥，追击攒层使终结技无视防御。" },
    { id: "fan-nao-zhe-xing-fu-zhe", reason: "暴击与追击增伤，温驯暴伤联动高频追击。" },
  ],
  recommendedRelics: [
    { set: "野穗伴行的快枪手", piece: "4件套", reason: "速度与攻击加成，加快充能与追击输出节奏。" },
    { set: "停转的萨尔索图", piece: "2件套", reason: "暴击率与暴伤加成，放大终结技与追击上限。" },
  ],
  portrait: "/assets/characters/feixiao.png",
  color: "#6EE7B7",
  tags: ["追加攻击", "暴击伤害", "特殊能量"],
};
