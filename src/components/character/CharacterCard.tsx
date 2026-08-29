import { GitCompareArrows, Star } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router";
import type { Character } from "../../types/character";
import { cn } from "../../utils/cn";
import { SafeImage, StarRating } from "../neo";

export const CharacterCard = memo(function CharacterCard({ character, compareIds, onToggleCompare }: {
  character: Character;
  compareIds: string[];
  onToggleCompare: (id: string) => void;
}) {
  const selected = compareIds.includes(character.id);
  return (
    <div className="relative">
      <Link to={`/characters/${character.id}`} className="block border-4 border-black bg-white shadow-neo-md card-lift">
        <div className="relative" style={{ backgroundColor: character.color }}>
          <SafeImage src={character.portrait} alt={character.name} className="aspect-3/4 w-full object-cover" loading="lazy" />
          <span className="absolute top-2 left-2 border-2 border-black bg-white px-1.5 font-black">
            <StarRating value={character.rarity} size={12} />
          </span>
          <span className="absolute top-2 right-2 border-2 border-black bg-white px-1.5 py-0.5 font-black text-xs">{character.element}</span>
        </div>
        <div className="border-t-4 border-black px-3 py-2">
          <p className="font-black text-xl">{character.name}</p>
          <p className="font-bold text-sm uppercase tracking-widest">{character.path} · {character.faction}</p>
        </div>
      </Link>
      <button
        type="button"
        aria-label={`选择 ${character.name} 参与对比`}
        onClick={() => onToggleCompare(character.id)}
        className={cn(
          "absolute bottom-14 right-2 inline-flex h-10 w-10 cursor-pointer items-center justify-center border-4 border-black shadow-neo-sm btn-press",
          selected ? "bg-neo-accent" : "bg-white"
        )}
      >
        <GitCompareArrows className="h-5 w-5" strokeWidth={3} />
      </button>
      {selected && <Star className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 fill-neo-accent stroke-black" strokeWidth={2.5} />}
    </div>
  );
});
