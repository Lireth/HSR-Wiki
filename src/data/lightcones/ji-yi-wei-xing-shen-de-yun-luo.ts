import type { LightCone } from "../../types/lightcone";

export const jiYiWeiXingShenDeYunLuo: LightCone = {
  id: "ji-yi-wei-xing-shen-de-yun-luo",
  name: "记一位星神的陨落",
  rarity: 5,
  path: "毁灭",
  baseStats: { hp: 1058, atk: 529, def: 396 },
  skill: {
    name: "扑火",
    description: "当装备者施放攻击时，使装备者本场战斗中的攻击力提高 {0}%，该效果最多叠加4层。当装备者击破敌方目标弱点后，造成的伤害提高 {1}%，持续2回合。",
    valuesBySuperimposition: [[8, 12], [10, 15], [12, 18], [14, 21], [16, 24]],
  },
  ascensionMaterials: [
    { name: "信用点", count: 385000 },
    { name: "蠕动原核", count: 20 },
    { name: "微光原核", count: 20 },
    { name: "熄灭原核", count: 14 },
    { name: "破碎残刃", count: 4 },
    { name: "无生残刃", count: 12 },
    { name: "净世残刃", count: 15 },
  ],
  recommendedCharacters: [
    { id: "blade", reason: "高频攻击快速叠层，攻击加成收益大。" },
    { id: "firefly", reason: "行迹转化击破特攻，攻击词条双收益。" },
  ],
  rating: 4,
  review: "5★ 毁灭光锥。黑塔商店兑换，满叠攻击加成可观，多数毁灭角色的毕业选择。",
  art: "/assets/lightcones/ji-yi-wei-xing-shen-de-yun-luo.png",
};
