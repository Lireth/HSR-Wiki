import { useMemo } from "react";
import { PATHS } from "../../data/colors";
import { LIGHTCONES } from "../../data/lightcones";
import type { LightConeRarity } from "../../types/lightcone";
import { NeoButton, NeoCheckbox, NeoInput, NeoSelect } from "../neo";
import { useArrayParam, useClearParams, useStringParam } from "../../hooks/useQueryFilters";

export function LightConeFilters() {
  const [keyword, setKeyword] = useStringParam("q");
  const [paths, togglePath] = useArrayParam("paths");
  const [raritiesRaw, toggleRarity] = useArrayParam("rarities");
  const [sort, setSort] = useStringParam("sort", "rarity-desc");
  const clearAll = useClearParams();
  // 仅显示当前图鉴中有实装数据的命途，与 wiki 筛选表行为一致
  const availablePaths = useMemo(() => PATHS.filter((p) => LIGHTCONES.some((c) => c.path === p)), []);

  return (
    <div className="mb-8 border-4 border-black bg-white p-4 shadow-neo-md">
      <NeoInput placeholder="搜索光锥名称 / 命途 / 技能效果 / 评价…" value={keyword} onChange={(e) => setKeyword(e.target.value)} aria-label="搜索光锥" />
      <div className="mt-4 flex flex-wrap gap-2">
        {availablePaths.map((p) => (
          <NeoCheckbox key={p} checked={paths.includes(p)} onChange={() => togglePath(p)} label={p} />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {([3, 4, 5] as LightConeRarity[]).map((r) => (
          <NeoCheckbox key={r} checked={raritiesRaw.includes(String(r))} onChange={() => toggleRarity(String(r))} label={`${r}★`} />
        ))}
        <NeoSelect value={sort} onChange={(e) => setSort(e.target.value)} aria-label="排序方式">
          <option value="rarity-desc">按稀有度排序</option>
          <option value="rating-desc">按强度评价排序</option>
        </NeoSelect>
        <NeoButton variant="ghost" onClick={() => { clearAll(["paths", "rarities", "q", "sort"]); }}>清除筛选</NeoButton>
      </div>
    </div>
  );
}
