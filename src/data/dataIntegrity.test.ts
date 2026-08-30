// 数据完整性校验：随 `npm test` 运行，保证静态数据的字段、引用与素材文件始终有效
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { CHARACTERS } from "./characters/index";
import { LIGHTCONES } from "./lightcones/index";
import { CALENDAR_EVENTS } from "./calendar-events";
import { EVENT_TYPE_META } from "../services/calendarService";
import { superimpositionRows } from "../services/lightconeService";
import { parseISODate } from "../utils/date";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");

function collectErrors(): string[] {
  const errors: string[] = [];
  const lcIds = new Set(LIGHTCONES.map((l) => l.id));
  const chIds = new Set(CHARACTERS.map((c) => c.id));

  if (chIds.size !== CHARACTERS.length) errors.push("角色 id 存在重复");
  if (lcIds.size !== LIGHTCONES.length) errors.push("光锥 id 存在重复");
  if (new Set(CALENDAR_EVENTS.map((e) => e.id)).size !== CALENDAR_EVENTS.length) errors.push("日历事件 id 存在重复");

  for (const c of CHARACTERS) {
    if (!c.id || !c.name || !c.faction || !c.description || !c.portrait || !c.color) errors.push(`角色 ${c.id}: 缺少必填字段`);
    if (![4, 5].includes(c.rarity)) errors.push(`角色 ${c.id}: 稀有度异常 ${c.rarity}`);
    const s = c.stats;
    // 常规面板必须为正；energy 允许为 0（黄泉/飞霄等特殊能量机制角色无常规能量条）
    if (![s.hp, s.atk, s.def, s.speed, s.critRate, s.critDmg, s.taunt].every((v) => typeof v === "number" && v > 0)) errors.push(`角色 ${c.id}: stats 异常`);
    if (!(typeof s.energy === "number" && s.energy >= 0)) errors.push(`角色 ${c.id}: energy 异常 ${s.energy}`);
    if (c.skills.length !== 5) errors.push(`角色 ${c.id}: 技能数量 ${c.skills.length} ≠ 5`);
    const types = c.skills.map((k) => k.type).join(",");
    if (types !== "普攻,战技,终结技,天赋,秘技") errors.push(`角色 ${c.id}: 技能类型顺序异常 ${types}`);
    const ult = c.skills.find((k) => k.type === "终结技");
    // 常规角色终结技必须标注能量消耗；特殊能量角色（energy = 0）可省略或填 0
    if (s.energy > 0 && !ult?.energyCost) errors.push(`角色 ${c.id}: 终结技缺少 energyCost`);
    if (s.energy === 0 && ult?.energyCost) errors.push(`角色 ${c.id}: 特殊能量角色 energyCost 应为 0 或省略`);
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
    const rows = superimpositionRows(l.skill);
    if (rows.length !== 5) errors.push(`光锥 ${l.id}: 叠影行数 ${rows.length} ≠ 5`);
    const ph = [...l.skill.description.matchAll(/\{(\d)\}/g)].map((m) => Number(m[1]));
    for (const r of rows) if (r.length !== ph.length) errors.push(`光锥 ${l.id}: 占位符数 ${ph.length} 与数值列数 ${r.length} 不符`);
    if (![1, 2, 3, 4, 5].includes(l.rating)) errors.push(`光锥 ${l.id}: rating 异常 ${l.rating}`);
    if (!l.recommendedCharacters.length) errors.push(`光锥 ${l.id}: 缺少推荐角色`);
    for (const rc of l.recommendedCharacters) if (!chIds.has(rc.id)) errors.push(`光锥 ${l.id}: 推荐角色 id 不存在 ${rc.id}`);
    if (!existsSync(join(ROOT, "public", l.art.replace(/^\//, "")))) errors.push(`光锥 ${l.id}: art 文件不存在 ${l.art}`);
  }

  for (const e of CALENDAR_EVENTS) {
    if (!e.id || !e.title || !e.description) errors.push(`事件 ${e.id}: 缺少必填字段`);
    if (!(e.type in EVENT_TYPE_META)) errors.push(`事件 ${e.id}: 未知事件类型 ${e.type}`);
    try {
      const start = parseISODate(e.start);
      if (e.end !== undefined && parseISODate(e.end).getTime() < start.getTime()) errors.push(`事件 ${e.id}: 结束日期早于开始日期`);
    } catch {
      errors.push(`事件 ${e.id}: 日期格式非法 start=${e.start} end=${e.end ?? "-"}`);
    }
    if (e.time !== undefined && !/^([01]\d|2[0-3]):[0-5]\d$/.test(e.time)) errors.push(`事件 ${e.id}: 时间格式非法 ${e.time}`);
    for (const id of e.relatedCharacters ?? []) if (!chIds.has(id)) errors.push(`事件 ${e.id}: 关联角色 id 不存在 ${id}`);
    for (const id of e.relatedLightCones ?? []) if (!lcIds.has(id)) errors.push(`事件 ${e.id}: 关联光锥 id 不存在 ${id}`);
  }

  return errors;
}

describe("数据完整性校验", () => {
  it("角色 / 光锥 / 日历事件数据全部有效", () => {
    const errors = collectErrors();
    console.log(`角色总数: ${CHARACTERS.length}（5星 ${CHARACTERS.filter((c) => c.rarity === 5).length} / 4星 ${CHARACTERS.filter((c) => c.rarity === 4).length}）`);
    console.log(`光锥总数: ${LIGHTCONES.length}（5星 ${LIGHTCONES.filter((l) => l.rarity === 5).length} / 4星 ${LIGHTCONES.filter((l) => l.rarity === 4).length} / 3星 ${LIGHTCONES.filter((l) => l.rarity === 3).length}）`);
    console.log(`日历事件总数: ${CALENDAR_EVENTS.length}`);
    expect(errors, errors.join("\n")).toEqual([]);
  });
});
