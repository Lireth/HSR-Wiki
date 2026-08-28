import type { Material } from "./character";
import type { Path } from "./character";

export type LightConeRarity = 3 | 4 | 5;

export interface LightConeSkill {
  name: string;
  /** 模板文本，形如 "使装备者的暴击伤害提高 {0}%，战技与终结技造成的伤害提高 {1}%。" */
  description: string;
  /** 叠影 R1–R5：单参数为 number[]（长度 5），多参数为 number[][]（5 行） */
  valuesBySuperimposition: number[] | number[][];
}

export interface LightCone {
  id: string;
  name: string;
  rarity: LightConeRarity;
  path: Path;
  baseStats: { hp: number; atk: number; def: number };
  skill: LightConeSkill;
  ascensionMaterials: Material[];
  recommendedCharacters: { id: string; reason: string }[];
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  art: string;
}
