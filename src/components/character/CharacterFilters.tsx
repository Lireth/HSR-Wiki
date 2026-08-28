import { ELEMENTS, ELEMENT_COLORS, PATHS } from "../../data/colors";
import { NeoButton, NeoCheckbox, NeoInput } from "../neo";
import type { Rarity } from "../../types/character";
import { useArrayParam, useClearParams, useStringParam } from "../../hooks/useQueryFilters";

export function CharacterFilters() {
  const [keyword, setKeyword] = useStringParam("q");
  const [elements, toggleElement] = useArrayParam("elements");
  const [paths, togglePath] = useArrayParam("paths");
  const [rarities, toggleRarity] = useArrayParam("rarities");
  const clearAll = useClearParams();

  return (
    <div className="mb-8 border-4 border-black bg-white p-4 shadow-neo-md">
      <NeoInput placeholder="搜索角色 / 阵营 / 标签…" value={keyword} onChange={(e) => setKeyword(e.target.value)} aria-label="搜索角色" />
      <div className="mt-4 flex flex-wrap gap-2">
        {ELEMENTS.map((el) => (
          <NeoCheckbox key={el} checked={elements.includes(el)} onChange={() => toggleElement(el)} label={el} color={ELEMENT_COLORS[el]} />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {PATHS.map((p) => (
          <NeoCheckbox key={p} checked={paths.includes(p)} onChange={() => togglePath(p)} label={p} />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {([4, 5] as Rarity[]).map((r) => (
          <NeoCheckbox key={r} checked={rarities.includes(String(r))} onChange={() => toggleRarity(String(r))} label={`${r}★`} />
        ))}
        <NeoButton variant="ghost" onClick={() => clearAll(["elements", "paths", "rarities", "q"])}>清除筛选</NeoButton>
      </div>
    </div>
  );
}
