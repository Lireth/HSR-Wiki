import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { NeoBadge, NeoButton, NeoPanel, StarRating } from "../components/neo";
import { SuperimpositionTable } from "../components/lightcone/SuperimpositionTable";
import { CHARACTERS } from "../data/characters";
import { LIGHTCONES } from "../data/lightcones";
import { getLightConeById } from "../services/lightconeService";

export default function LightConeDetailPage() {
  const { id } = useParams();
  const cone = getLightConeById(LIGHTCONES, id ?? "");

  if (!cone) {
    return (
      <div className="py-20 text-center">
        <p className="mb-6 font-black text-4xl">未找到该光锥</p>
        <Link to="/lightcones"><NeoButton variant="outline">返回光锥图鉴</NeoButton></Link>
      </div>
    );
  }

  return (
    <>
      <Link to="/lightcones" className="mb-6 inline-flex items-center gap-1 font-black uppercase tracking-widest hover:bg-black hover:px-1 hover:text-white">
        <ArrowLeft className="h-5 w-5" strokeWidth={3} /> 返回图鉴
      </Link>
      <div className="grid items-start gap-10 lg:grid-cols-[300px_1fr]">
        <div className="-rotate-1 border-4 border-black bg-neo-muted p-3 shadow-neo-xl">
          <img src={cone.art} alt={cone.name} className="w-full border-4 border-black" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-black text-5xl tracking-tighter">{cone.name}</h1>
            <NeoBadge color="black">{cone.rarity}★</NeoBadge>
            <NeoBadge color="secondary">{cone.path}命途</NeoBadge>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {(["hp", "atk", "def"] as const).map((k) => (
              <div key={k} className="border-4 border-black bg-white px-4 py-2 text-center shadow-neo-sm">
                <p className="font-black text-xs uppercase tracking-widest">{k === "hp" ? "生命" : k === "atk" ? "攻击" : "防御"}</p>
                <p className="font-black text-2xl">{cone.baseStats[k]}</p>
              </div>
            ))}
            <div className="border-4 border-black bg-neo-accent px-4 py-2 text-center shadow-neo-sm">
              <p className="font-black text-xs uppercase tracking-widest">强度评价</p>
              <StarRating value={cone.rating} size={18} />
            </div>
          </div>
          <NeoPanel title={`技能 · ${cone.skill.name}`} headColor="accent" className="mt-6">
            <SuperimpositionTable skill={cone.skill} />
          </NeoPanel>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <NeoPanel title="突破材料" headColor="muted">
          <ul className="flex flex-col gap-2">
            {cone.ascensionMaterials.map((m) => (
              <li key={m.name} className="flex items-center justify-between border-2 border-black bg-neo-bg px-3 py-2 font-bold">
                <span>{m.name}</span>
                <span className="border-2 border-black bg-white px-1.5 font-black">×{m.count}</span>
              </li>
            ))}
          </ul>
        </NeoPanel>
        <NeoPanel title="适用角色推荐" headColor="muted">
          <ul className="flex flex-col gap-3">
            {cone.recommendedCharacters.map((r) => {
              const c = CHARACTERS.find((x) => x.id === r.id);
              return (
                <li key={r.id}>
                  <Link to={`/characters/${r.id}`} className="block border-4 border-black bg-white p-3 font-bold shadow-neo-sm hover:bg-neo-muted">
                    <span className="font-black">{c?.name ?? r.id}</span>
                    <span className="block text-sm">{r.reason}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </NeoPanel>
      </div>

      <NeoPanel title="培养建议" headColor="black" className="mt-8">
        <p className="font-bold text-lg leading-relaxed">{cone.review}</p>
      </NeoPanel>
    </>
  );
}
