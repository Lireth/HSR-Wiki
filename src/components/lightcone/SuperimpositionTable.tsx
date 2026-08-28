import type { LightConeSkill } from "../../types/lightcone";
import { superimpositionRows } from "../../services/lightconeService";

/** 将模板中的 {0}/{1}… 替换为对应叠影等级数值 */
function renderDescription(skill: LightConeSkill, row: number[]): string {
  return skill.description.replace(/\{(\d+)\}/g, (_, i) => String(row[Number(i)]));
}

export function SuperimpositionTable({ skill }: { skill: LightConeSkill }) {
  const rows = superimpositionRows(skill);
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr>
            <th className="border-4 border-black bg-neo-muted px-2 py-2 font-black uppercase">叠影</th>
            {rows.map((_, i) => (
              <th key={i} className="border-4 border-black bg-neo-secondary px-2 py-2 font-black">R{i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border-4 border-black bg-neo-muted px-2 py-2 font-black">效果</th>
            {rows.map((row, i) => (
              <td key={i} className="border-4 border-black px-2 py-2 text-left font-bold">{renderDescription(skill, row)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
