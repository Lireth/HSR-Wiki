import { ArrowLeft, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router";
import { NeoBadge, NeoButton, NeoPanel, StarRating } from "../components/neo";
import { CHARACTERS } from "../data/characters";
import { LIGHTCONES } from "../data/lightcones";
import { getCharacterById } from "../services/characterService";
import type { SkillType } from "../types/character";

type BadgeColor = "accent" | "secondary" | "muted" | "black" | "white";

const SKILL_COLOR: Record<SkillType, BadgeColor> = {
  普攻: "white",
  战技: "secondary",
  终结技: "accent",
  天赋: "muted",
  秘技: "black",
};

function MaterialList({ items }: { items: { name: string; count: number }[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((m) => (
        <li key={m.name} className="flex items-center justify-between border-2 border-black bg-neo-bg px-3 py-2 font-bold">
          <span>{m.name}</span>
          <span className="border-2 border-black bg-white px-1.5 font-black">×{m.count}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CharacterDetailPage() {
  const { id } = useParams();
  const character = getCharacterById(CHARACTERS, id ?? "");

  if (!character) {
    return (
      <div className="py-20 text-center">
        <p className="mb-6 font-black text-4xl">未找到该角色</p>
        <Link to="/characters"><NeoButton variant="outline">返回角色图鉴</NeoButton></Link>
      </div>
    );
  }

  const statRows = [
    ["生命值", character.stats.hp], ["攻击力", character.stats.atk], ["防御力", character.stats.def],
    ["速度", character.stats.speed], ["暴击率", `${character.stats.critRate}%`], ["暴击伤害", `${character.stats.critDmg}%`],
    ["嘲讽值", character.stats.taunt], ["能量上限", character.stats.energy],
  ] as const;

  return (
    <>
      <Link to="/characters" className="mb-6 inline-flex items-center gap-1 font-black uppercase tracking-widest hover:bg-black hover:px-1 hover:text-white">
        <ArrowLeft className="h-5 w-5" strokeWidth={3} /> 返回图鉴
      </Link>
      <div className="grid items-start gap-10 lg:grid-cols-[320px_1fr]">
        <div className="rotate-1 border-4 border-black p-3 shadow-neo-xl" style={{ backgroundColor: character.color }}>
          <img src={character.portrait} alt={character.name} className="w-full border-4 border-black" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-black text-6xl tracking-tighter">{character.name}</h1>
            <StarRating value={character.rarity} size={22} />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <NeoBadge color="accent">{character.element}</NeoBadge>
            <NeoBadge color="secondary">{character.path}命途</NeoBadge>
            <NeoBadge>{character.faction}</NeoBadge>
            {character.tags.map((t) => (
              <NeoBadge key={t} color="muted">{t}</NeoBadge>
            ))}
          </div>
          <p className="mt-4 border-4 border-black bg-white p-4 font-bold leading-relaxed shadow-neo-md">{character.description}</p>

          <NeoPanel title="满级数据（80 级）" headColor="secondary" className="mt-8">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {statRows.map(([label, value]) => (
                <div key={label} className="border-4 border-black bg-neo-bg p-2 text-center">
                  <p className="font-black text-xs uppercase tracking-widest">{label}</p>
                  <p className="font-black text-xl">{value}</p>
                </div>
              ))}
            </div>
          </NeoPanel>

          <NeoPanel title="技能" headColor="accent" className="mt-8">
            <ul className="flex flex-col gap-3">
              {character.skills.map((s) => (
                <li key={s.name} className="border-2 border-black p-3">
                  <p className="flex items-center gap-2 font-black">
                    <NeoBadge color={SKILL_COLOR[s.type]}>{s.type}</NeoBadge>
                    {s.name}
                    {s.energyCost && <span className="font-bold text-sm">· 能量 {s.energyCost}</span>}
                  </p>
                  <p className="mt-1.5 font-bold leading-relaxed">{s.description}</p>
                </li>
              ))}
            </ul>
          </NeoPanel>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <NeoPanel title="晋阶材料" headColor="muted"><MaterialList items={character.ascensionMaterials} /></NeoPanel>
        <NeoPanel title="行迹材料" headColor="muted"><MaterialList items={character.traceMaterials} /></NeoPanel>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <NeoPanel title="推荐光锥" headColor="black">
          <ul className="flex flex-col gap-3">
            {character.recommendedLightCones.map((r) => {
              const lc = LIGHTCONES.find((l) => l.id === r.id);
              return (
                <li key={r.id}>
                  <Link to={`/lightcones/${r.id}`} className="flex items-center justify-between gap-2 border-4 border-black bg-white p-3 font-bold shadow-neo-sm hover:bg-neo-muted">
                    <span>
                      <span className="font-black">{lc?.name ?? r.id}</span>
                      <span className="block text-sm">{r.reason}</span>
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0" strokeWidth={3} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </NeoPanel>
        <NeoPanel title="推荐遗器" headColor="black">
          <ul className="flex flex-col gap-3">
            {character.recommendedRelics.map((r) => (
              <li key={r.set} className="border-4 border-black bg-white p-3 font-bold">
                <p className="font-black">{r.set}{r.piece ? ` · ${r.piece}` : ""}</p>
                <p className="text-sm">{r.reason}</p>
              </li>
            ))}
          </ul>
        </NeoPanel>
      </div>
    </>
  );
}
