import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { PageHeader } from "../components/layout/PageHeader";
import { LightConeCard } from "../components/lightcone/LightConeCard";
import { LightConeFilters } from "../components/lightcone/LightConeFilters";
import { NeoButton } from "../components/neo";
import { LIGHTCONES } from "../data/lightcones";
import { filterLightCones } from "../services/lightconeService";
import type { LightConeSortKey } from "../services/lightconeService";
import type { Path } from "../types/character";
import type { LightConeRarity } from "../types/lightcone";
import { useArrayParam, useStringParam } from "../hooks/useQueryFilters";

export default function LightConesPage() {
  const [, setParams] = useSearchParams();
  const [keyword] = useStringParam("q");
  const [paths] = useArrayParam("paths");
  const [raritiesRaw] = useArrayParam("rarities");
  const [sort] = useStringParam("sort", "rarity-desc");

  const filtered = useMemo(
    () =>
      filterLightCones(LIGHTCONES, {
        keyword,
        paths: paths as Path[],
        rarities: raritiesRaw.map(Number).filter((r): r is LightConeRarity => r === 3 || r === 4 || r === 5),
        sort: sort as LightConeSortKey,
      }),
    [keyword, paths, raritiesRaw, sort]
  );

  return (
    <>
      <PageHeader title="光锥图鉴" badge="LIGHT CONES" description="叠影效果、突破材料与强度评价，按命途与星级筛选。" />
      <LightConeFilters />
      <p className="mb-4 text-sm font-bold text-neutral-600">共 {filtered.length} 枚光锥</p>
      {filtered.length === 0 ? (
        <div className="border-4 border-black bg-white p-10 text-center shadow-neo-md">
          <p className="mb-4 font-black text-2xl">没有符合条件的光锥</p>
          <NeoButton variant="outline" onClick={() => setParams({})}>清除全部筛选</NeoButton>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((c) => (
            <LightConeCard key={c.id} cone={c} />
          ))}
        </div>
      )}
    </>
  );
}
