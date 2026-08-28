import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { PageHeader } from "../components/layout/PageHeader";
import { CharacterCard } from "../components/character/CharacterCard";
import { CharacterFilters } from "../components/character/CharacterFilters";
import { CompareBar } from "../components/character/CompareBar";
import { CompareTable } from "../components/character/CompareTable";
import { NeoButton } from "../components/neo";
import { CHARACTERS } from "../data/characters";
import { filterCharacters, getCharactersByIds } from "../services/characterService";
import type { Element, Path, Rarity } from "../types/character";
import { useArrayParam, useStringParam } from "../hooks/useQueryFilters";

export default function CharactersPage() {
  const [params, setParams] = useSearchParams();
  const [keyword] = useStringParam("q");
  const [elements] = useArrayParam("elements");
  const [paths] = useArrayParam("paths");
  const [raritiesRaw] = useArrayParam("rarities");
  const [compare, , clearCompare] = useArrayParam("compare");

  const filtered = useMemo(
    () =>
      filterCharacters(CHARACTERS, {
        keyword,
        elements: elements as Element[],
        paths: paths as Path[],
        rarities: raritiesRaw.map(Number).filter((r): r is Rarity => r === 4 || r === 5),
      }),
    [params]
  );
  const compareChars = getCharactersByIds(CHARACTERS, compare);

  const toggleCompare = (id: string) => {
    const next = compare.includes(id) ? compare.filter((c) => c !== id) : compare.length < 2 ? [...compare, id] : compare;
    setParams((prev) => {
      const p = new URLSearchParams(prev);
      if (next.length) p.set("compare", next.join(","));
      else p.delete("compare");
      return p;
    });
  };

  return (
    <>
      <PageHeader title="角色图鉴" badge="CHARACTERS" description="按属性、命途、星级筛选，选择两名角色进行对比。" />
      <CharacterFilters />
      {compareChars.length === 2 && <CompareTable a={compareChars[0]} b={compareChars[1]} />}
      {filtered.length === 0 ? (
        <div className="border-4 border-black bg-white p-10 text-center shadow-neo-md">
          <p className="mb-4 font-black text-2xl">没有符合条件的角色</p>
          <NeoButton variant="outline" onClick={() => setParams({})}>清除全部筛选</NeoButton>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((c) => (
            <CharacterCard key={c.id} character={c} compareIds={compare} onToggleCompare={toggleCompare} />
          ))}
        </div>
      )}
      <CompareBar ids={compare} onToggle={toggleCompare} onClear={clearCompare} />
    </>
  );
}
