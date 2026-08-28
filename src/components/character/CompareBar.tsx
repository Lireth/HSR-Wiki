import { GitCompareArrows, Trash2 } from "lucide-react";
import { CHARACTERS } from "../../data/characters";

export function CompareBar({ ids, onToggle, onClear }: { ids: string[]; onToggle: (id: string) => void; onClear: () => void }) {
  if (ids.length === 0) return null;
  const chars = ids
    .map((id) => CHARACTERS.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 border-4 border-black bg-neo-secondary px-4 py-3 shadow-neo-xl">
      <GitCompareArrows className="h-6 w-6" strokeWidth={3} />
      {chars.map((c) => (
        <button key={c.id} type="button" onClick={() => onToggle(c.id)} className="cursor-pointer border-4 border-black bg-white px-3 py-1.5 font-black shadow-neo-sm btn-press">
          {c.name} ×
        </button>
      ))}
      {ids.length < 2 && <span className="font-black uppercase">再选 1 名角色</span>}
      <a href="#compare" className={`border-4 border-black px-3 py-1.5 font-black shadow-neo-sm btn-press ${ids.length === 2 ? "bg-neo-accent" : "pointer-events-none bg-white opacity-50"}`}>开始对比</a>
      <button type="button" aria-label="清空对比选择" onClick={onClear} className="inline-flex h-10 w-10 cursor-pointer items-center justify-center border-4 border-black bg-white shadow-neo-sm btn-press">
        <Trash2 className="h-5 w-5" strokeWidth={3} />
      </button>
    </div>
  );
}
