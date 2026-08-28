import type { Character } from "../../types/character";
import { LIGHTCONES } from "../../data/lightcones";
import { NeoPanel } from "../neo";
import { Link } from "react-router";

const STAT_ROWS: { label: string; get: (c: Character) => number; fmt?: (v: number) => string }[] = [
  { label: "生命值", get: (c) => c.stats.hp },
  { label: "攻击力", get: (c) => c.stats.atk },
  { label: "防御力", get: (c) => c.stats.def },
  { label: "速度", get: (c) => c.stats.speed },
  { label: "暴击率", get: (c) => c.stats.critRate, fmt: (v) => `${v}%` },
  { label: "暴击伤害", get: (c) => c.stats.critDmg, fmt: (v) => `${v}%` },
  { label: "嘲讽值", get: (c) => c.stats.taunt },
  { label: "能量上限", get: (c) => c.stats.energy },
];

export function CompareTable({ a, b }: { a: Character; b: Character }) {
  return (
    <div id="compare" className="mb-10 scroll-mt-28">
      <NeoPanel title="角色对比" headColor="accent">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-[1fr_auto_1fr]">
          {[a, b].map((c) => (
            <Link key={c.id} to={`/characters/${c.id}`} className="text-center">
              <img src={c.portrait} alt={c.name} className="mx-auto w-28 border-4 border-black" style={{ backgroundColor: c.color }} />
              <p className="mt-2 font-black text-2xl">{c.name}</p>
              <p className="font-bold text-sm">{c.element} · {c.path} · {c.rarity}★</p>
            </Link>
          ))}
          <span className="hidden self-center font-black text-4xl md:block">VS</span>
        </div>
        <table className="mt-6 w-full border-collapse">
          <tbody>
            {STAT_ROWS.map((row) => {
              const va = row.get(a);
              const vb = row.get(b);
              return (
                <tr key={row.label} className="border-b-2 border-black">
                  <th className="border-r-2 border-black px-2 py-2 text-left font-black uppercase">{row.label}</th>
                  <td className={`px-2 py-2 text-center font-bold ${va > vb ? "bg-neo-secondary font-black" : ""}`}>{row.fmt ? row.fmt(va) : va}</td>
                  <td className={`px-2 py-2 text-center font-bold ${vb > va ? "bg-neo-secondary font-black" : ""}`}>{row.fmt ? row.fmt(vb) : vb}</td>
                </tr>
              );
            })}
            <tr className="border-b-2 border-black">
              <th className="border-r-2 border-black px-2 py-2 text-left font-black uppercase">推荐光锥</th>
              <td colSpan={2} className="px-2 py-2">
                <div className="grid grid-cols-2 gap-4">
                  {[a, b].map((c) => (
                    <ul key={c.id} className="font-bold">
                      {c.recommendedLightCones.map((r) => {
                        const lc = LIGHTCONES.find((l) => l.id === r.id);
                        return (
                          <li key={r.id}>
                            {lc ? <Link to={`/lightcones/${lc.id}`} className="underline">{lc.name}</Link> : r.id} — {r.reason}
                          </li>
                        );
                      })}
                    </ul>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </NeoPanel>
    </div>
  );
}
