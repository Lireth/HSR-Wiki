// 临时完整性校验（校验后删除）。运行：npx vitest run scripts/verify-data.test.mjs
import { it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { CHARACTERS } from "../src/data/characters/index";
import { LIGHTCONES } from "../src/data/lightcones/index";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors: string[] = [];
const lcIds = new Set(LIGHTCONES.map((l) => l.id));
const chIds = new Set(CHARACTERS.map((c) => c.id));

for (const c of CHARACTERS) {
  if (!c.id || !c.name || !c.faction || !c.description || !c.portrait || !c.color) errors.push(`角色 ${c.id}: 缺少必填字段`);
  if (![4, 5].includes(c.rarity)) errors.push(`角色 ${c.id}: 稀有度异常 ${c.rarity}`);
  const s = c.stats;
  if (![s.hp, s.atk, s.def, s.speed, s.critRate, s.critDmg, s.taunt, s.energy].every((v) => typeof v === "number" && v > 0)) errors.push(`角色 ${c.id}: stats 异常`);
  if (c.skills.length !== 5) errors.push(`角色 ${c.id}: 技能数量 ${c.skills.length} ≠ 5`);
  const types = c.skills.map((k) => k.type).join(",");
  if (types !== "普攻,战技,终结技,天赋,秘技") errors.push(`角色 ${c.id}: 技能类型顺序异常 ${types}`);
  const ult = c.skills.find((k) => k.type === "终结技");
  if (!ult?.energyCost) errors.push(`角色 ${c.id}: 终结技缺少 energyCost`);
  if (!c.ascensionMaterials.length || !c.traceMaterials.length) errors.push(`角色 ${c.id}: 材料缺失`);
  if (!c.recommendedLightCones.length) errors.push(`角色 ${c.id}: 缺少推荐光锥`);
  for (const rlc of c.recommendedLightCones) if (!lcIds.has(rlc.id)) errors.push(`角色 ${c.id}: 推荐光锥 id 不存在 ${rlc.id}`);
  if (!c.recommendedRelics.length) errors.push(`角色 ${c.id}: 缺少推荐遗器`);
  if (!c.tags.length) errors.push(`角色 ${c.id}: 缺少 tags`);
  if (!existsSync(join(ROOT, "public", c.portrait.replace(/^\//, "")))) errors.push(`角色 ${c.id}: portrait 文件不存在 ${c.portrait}`);
}

for (const l of LIGHTCONES) {
  if (!l.id || !l.name || !l.review || !l.art) errors.push(`光锥 ${l.id}: 缺少必填字段`);
  if (![3, 4, 5].includes(l.rarity)) errors.push(`光锥 ${l.id}: 稀有度异常 ${l.rarity}`);
  const b = l.baseStats;
  if (![b.hp, b.atk, b.def].every((v) => typeof v === "number" && v > 0)) errors.push(`光锥 ${l.id}: baseStats 异常`);
  const v = l.skill.valuesBySuperimposition;
  const rows = Array.isArray(v[0]) ? (v as number[][]) : [v as number[]];
  if (rows.length !== 5) errors.push(`光锥 ${l.id}: 叠影行数 ${rows.length} ≠ 5`);
  const ph = [...l.skill.description.matchAll(/\{(\d)\}/g)].map((m) => Number(m[1]));
  for (const r of rows) if (r.length !== ph.length) errors.push(`光锥 ${l.id}: 占位符数 ${ph.length} 与数值列数 ${r.length} 不符`);
  if (![1, 2, 3, 4, 5].includes(l.rating)) errors.push(`光锥 ${l.id}: rating 异常 ${l.rating}`);
  if (!l.recommendedCharacters.length) errors.push(`光锥 ${l.id}: 缺少推荐角色`);
  for (const rc of l.recommendedCharacters) if (!chIds.has(rc.id)) errors.push(`光锥 ${l.id}: 推荐角色 id 不存在 ${rc.id}`);
  if (!existsSync(join(ROOT, "public", l.art.replace(/^\//, "")))) errors.push(`光锥 ${l.id}: art 文件不存在 ${l.art}`);
}

it("数据完整性校验", () => {
  console.log(`角色总数: ${CHARACTERS.length}（5星 ${CHARACTERS.filter((c) => c.rarity === 5).length} / 4星 ${CHARACTERS.filter((c) => c.rarity === 4).length}）`);
  console.log(`光锥总数: ${LIGHTCONES.length}（5星 ${LIGHTCONES.filter((l) => l.rarity === 5).length} / 4星 ${LIGHTCONES.filter((l) => l.rarity === 4).length} / 3星 ${LIGHTCONES.filter((l) => l.rarity === 3).length}）`);
  expect(errors, errors.join("\n")).toEqual([]);
});
