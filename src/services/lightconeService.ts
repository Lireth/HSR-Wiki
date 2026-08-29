import type { Path } from "../types/character";
import type { LightCone, LightConeSkill } from "../types/lightcone";

export type LightConeSortKey = "rarity-desc" | "rating-desc";

export interface LightConeFilters {
  paths?: Path[];
  rarities?: (3 | 4 | 5)[];
  keyword?: string;
  sort?: LightConeSortKey;
}

/** 叠影数值归一化为 5 行（每行 = 该叠影等级的一组模板参数） */
export function superimpositionRows(skill: LightConeSkill): number[][] {
  const v = skill.valuesBySuperimposition;
  return typeof v[0] === "number" ? (v as number[]).map((n) => [n]) : (v as number[][]);
}

export function filterLightCones(cones: LightCone[], f: LightConeFilters): LightCone[] {
  const kw = f.keyword?.trim().toLowerCase();
  const result = cones.filter((c) => {
    if (f.paths?.length && !f.paths.includes(c.path)) return false;
    if (f.rarities?.length && !f.rarities.includes(c.rarity)) return false;
    if (kw && !`${c.name} ${c.skill.name} ${c.path} ${c.skill.description} ${c.review}`.toLowerCase().includes(kw)) return false;
    return true;
  });
  const sorted = [...result];
  if (f.sort === "rating-desc") sorted.sort((x, y) => y.rating - x.rating || y.rarity - x.rarity);
  else sorted.sort((x, y) => y.rarity - x.rarity || y.rating - x.rating || x.name.localeCompare(y.name, "zh"));
  return sorted;
}

export function getLightConeById(cones: LightCone[], id: string): LightCone | undefined {
  return cones.find((c) => c.id === id);
}

/** 构建 id → LightCone 索引，供组件内多次查找时以 O(1) 替代反复线性扫描 */
export function buildLightConeIndex(cones: LightCone[]): Map<string, LightCone> {
  return new Map(cones.map((c) => [c.id, c]));
}
