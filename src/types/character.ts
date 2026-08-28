export type Element = "物理" | "火" | "冰" | "雷" | "风" | "量子" | "虚数";
export type Path = "毁灭" | "巡猎" | "智识" | "和谐" | "虚无" | "存护" | "丰饶" | "记忆" | "欢愉";
export type Rarity = 4 | 5;

export interface Material {
  name: string;
  count: number;
}

export type SkillType = "普攻" | "战技" | "终结技" | "天赋" | "秘技";

export interface Skill {
  type: SkillType;
  name: string;
  description: string;
  energyCost?: number;
}

/** 80 级满级面板 */
export interface CharacterStats {
  hp: number;
  atk: number;
  def: number;
  speed: number;
  /** 暴击率，百分数值（5 = 5%） */
  critRate: number;
  critDmg: number;
  taunt: number;
  energy: number;
}

export interface Character {
  id: string;
  name: string;
  rarity: Rarity;
  element: Element;
  path: Path;
  faction: string;
  description: string;
  stats: CharacterStats;
  skills: Skill[];
  ascensionMaterials: Material[];
  traceMaterials: Material[];
  recommendedLightCones: { id: string; reason: string }[];
  recommendedRelics: { set: string; piece?: string; reason: string }[];
  portrait: string;
  color: string;
  tags: string[];
}
