import type { LightCone } from "../../types/lightcone";

export const huPo: LightCone = {
  id: "hu-po",
  name: "琥珀",
  rarity: 3,
  path: "存护",
  baseStats: { hp: 846, atk: 264, def: 330 },
  skill: {
    name: "静滞",
    description: "使装备者的防御力提高 {0}%。当装备者当前生命值百分比小于50%时，其防御力额外提高 {1}%。",
    valuesBySuperimposition: [
      [16, 16],
      [20, 20],
      [24, 24],
      [28, 28],
      [32, 32],
    ],
  },
  ascensionMaterials: [
    { name: "信用点", count: 231000 },
    { name: "熄灭原核", count: 12 },
    { name: "微光原核", count: 10 },
    { name: "蠢动原核", count: 8 },
    { name: "青铜的执着", count: 2 },
    { name: "寒铁的誓言", count: 6 },
    { name: "琥珀的坚守", count: 9 },
  ],
  recommendedCharacters: [
    { id: "march7th", reason: "护盾量吃防御加成，残血额外增防提升坦度。" },
    { id: "trailblazer-preservation", reason: "常受击压血线，稳定吃到低血增防效果。" },
  ],
  rating: 2,
  review: "三星防御光锥，低血量额外加成，存护前期过渡。",
  art: "/assets/lightcones/hu-po.png",
};
