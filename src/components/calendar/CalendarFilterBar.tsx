import { EVENT_TYPE_META } from "../../services/calendarService";
import type { EventType } from "../../types/calendar";
import { NeoButton, NeoCheckbox, NeoSelect } from "../neo";
import { useArrayParam, useClearParams, useStringParam } from "../../hooks/useQueryFilters";

export function CalendarFilterBar({ versions }: { versions: string[] }) {
  const [types, toggleType] = useArrayParam<EventType>("types");
  const [version, setVersion] = useStringParam("version");
  const clearAll = useClearParams();

  return (
    <div className="mb-6 border-4 border-black bg-white p-4 shadow-neo-md">
      <div className="flex flex-wrap items-center gap-2">
        {(Object.keys(EVENT_TYPE_META) as EventType[]).map((t) => (
          <NeoCheckbox key={t} checked={types.includes(t)} onChange={() => toggleType(t)} label={EVENT_TYPE_META[t].label} />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <NeoSelect value={version} onChange={(ev) => setVersion(ev.target.value)} aria-label="版本筛选">
          <option value="">全部版本</option>
          {versions.map((v) => (
            <option key={v} value={v}>版本 {v}</option>
          ))}
        </NeoSelect>
        <NeoButton variant="ghost" onClick={() => clearAll(["types", "version"])}>清除筛选</NeoButton>
      </div>
    </div>
  );
}
