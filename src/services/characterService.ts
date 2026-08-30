import type { Character, Element, Path, Rarity } from "../types/character";

export type CharacterSortKey = "rarity-desc" | "name-asc";

export interface CharacterFilters {
  elements?: Element[];
  paths?: Path[];
  rarities?: Rarity[];
  keyword?: string;
  sort?: CharacterSortKey;
}

function sortCharacters(chars: Character[], key: CharacterSortKey): Character[] {
  const sorted = [...chars];
  if (key === "name-asc") {
    sorted.sort((x, y) => x.name.localeCompare(y.name, "zh"));
  } else {
    sorted.sort((x, y) => y.rarity - x.rarity || x.name.localeCompare(y.name, "zh"));
  }
  return sorted;
}

export function filterCharacters(chars: Character[], f: CharacterFilters): Character[] {
  const kw = f.keyword?.trim().toLowerCase();
  const result = chars.filter((c) => {
    if (f.elements?.length && !f.elements.includes(c.element)) return false;
    if (f.paths?.length && !f.paths.includes(c.path)) return false;
    if (f.rarities?.length && !f.rarities.includes(c.rarity)) return false;
    if (kw) {
      const hay = `${c.name} ${c.faction} ${c.element} ${c.path} ${c.description} ${c.tags.join(" ")}`.toLowerCase();
      if (!hay.includes(kw)) return false;
    }
    return true;
  });
  return sortCharacters(result, f.sort ?? "rarity-desc");
}

export function getCharacterById(chars: Character[], id: string): Character | undefined {
  return chars.find((c) => c.id === id);
}

/** 构建 id → Character 索引，供组件内多次查找（推荐光锥/对比/关联事件）时以 O(1) 替代反复线性扫描 */
export function buildCharacterIndex(chars: Character[]): Map<string, Character> {
  return new Map(chars.map((c) => [c.id, c]));
}

/** 按入参顺序返回，忽略未知 id（对比功能用） */
export function getCharactersByIds(chars: Character[], ids: string[]): Character[] {
  return ids
    .map((id) => getCharacterById(chars, id))
    .filter((c): c is Character => Boolean(c));
}
