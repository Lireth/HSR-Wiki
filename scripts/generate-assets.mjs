// 生成风格化 SVG 素材（角色立绘 / 光锥图），运行：npm run gen:assets
// 版权安全：程序化生成，不含任何游戏美术。花名册需与 src/data 保持同步。
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const CHARACTERS = [
  ["seele", "希儿", "#818CF8"], ["jingyuan", "景元", "#C084FC"], ["fuxuan", "符玄", "#818CF8"],
  ["himeko", "姬子", "#FF9F45"], ["welt", "瓦尔特", "#FDE047"], ["bronya", "布洛妮娅", "#6EE7B7"],
  ["clara", "克拉拉", "#E8E4D9"], ["gepard", "杰帕德", "#7DD3FC"], ["bailu", "白露", "#C084FC"],
  ["tingyun", "停云", "#E8E4D9"], ["danheng", "丹恒", "#6EE7B7"], ["march7th", "三月七", "#7DD3FC"],
  ["silverwolf", "银狼", "#818CF8"], ["luocha", "罗刹", "#FDE047"], ["blade", "刃", "#6EE7B7"],
  ["argenti", "银枝", "#E8E4D9"], ["kafka", "卡芙卡", "#C084FC"], ["danhenglunae", "丹恒•饮月", "#FDE047"],
  ["arlan", "阿兰", "#C084FC"], ["herta", "黑塔", "#7DD3FC"], ["asta", "艾丝妲", "#FF9F45"],
  ["natasha", "娜塔莎", "#E8E4D9"], ["pela", "佩拉", "#7DD3FC"], ["sampo", "桑博", "#6EE7B7"],
  ["serval", "希露瓦", "#C084FC"], ["sushang", "素裳", "#E8E4D9"], ["qingque", "青雀", "#818CF8"],
  ["yukong", "驭空", "#FDE047"], ["luka", "卢卡", "#E8E4D9"], ["lynx", "玲可", "#818CF8"],
  ["guinaifen", "桂乃芬", "#FF9F45"],
];

const LIGHTCONES = [
  ["in-the-night", "于夜色中", "#1f2937"], ["before-dawn", "拂晓之前", "#f59e0b"],
  ["but-the-battle-isnt-over", "但战斗还未结束", "#0ea5e9"], ["moment-of-victory", "制胜的瞬间", "#7c3aed"],
  ["in-the-name-of-the-world", "以世界之名", "#0f766e"], ["something-irreplaceable", "无可取代的东西", "#dc2626"],
  ["memories-of-the-past", "记忆中的模样", "#eab308"], ["today-is-another-peaceful-day", "今日亦是和平的一日", "#16a34a"],
  ["landau-s-choice", "朗道的选择", "#475569"], ["shared-feeling", "同一种心情", "#f472b6"],
  ["loop", "渊环", "#334155"], ["mutual-demise", "乐圮", "#b91c1c"],
  ["night-on-the-milky-way", "银河铁道之夜", "#1e3a5f"], ["sleep-like-the-dead", "如泥酣眠", "#3b2f63"],
  ["time-waits-for-no-one", "时节不居", "#0f766e"], ["the-unreachable-side", "她已闭上双眼", "#7c2d12"],
  ["patience-is-all-you-need", "只需等待", "#4a1d96"], ["brighter-than-the-sun", "比阳光更明亮的", "#b45309"],
  ["an-instant-before-a-gaze", "片刻，留在眼底", "#9d174d"], ["good-night-and-sleep-well", "晚安与睡颜", "#312e81"],
  ["day-one-of-my-new-life", "余生的第一天", "#155e75"], ["geniuses-repose", "天才们的休憩", "#365314"],
  ["woof-walk-time", "汪！散步时间！", "#a16207"], ["planetary-rendezvous", "与行星相会", "#1d4ed8"],
  ["dance-dance-dance", "舞！舞！舞！", "#be185d"],
];

function star(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const rad = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 === 0 ? r : r * 0.42;
    pts.push(`${(cx + rr * Math.cos(rad)).toFixed(1)},${(cy + rr * Math.sin(rad)).toFixed(1)}`);
  }
  return pts.join(" ");
}

function characterSvg(name, color) {
  const ch = name[0];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400">
  <defs>
    <pattern id="ht" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="1.6" fill="#000" opacity="0.14"/>
    </pattern>
  </defs>
  <rect width="300" height="400" fill="${color}"/>
  <rect width="300" height="400" fill="url(#ht)"/>
  <polygon points="${star(150, 168, 118)}" fill="none" stroke="#000" stroke-width="7" transform="rotate(-8 150 168)"/>
  <text x="150" y="232" font-family="'Noto Sans SC',sans-serif" font-size="170" font-weight="900" text-anchor="middle" fill="#FFFDF5" stroke="#000" stroke-width="8" paint-order="stroke">${ch}</text>
  <text x="150" y="352" font-family="'Noto Sans SC',sans-serif" font-size="34" font-weight="900" text-anchor="middle" fill="#000">${name}</text>
  <rect x="8" y="8" width="284" height="384" fill="none" stroke="#000" stroke-width="6"/>
</svg>
`;
}

function lightconeSvg(name, color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="300" viewBox="0 0 240 300">
  <defs>
    <pattern id="dg" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="10" height="24" fill="#000" opacity="0.12"/>
    </pattern>
  </defs>
  <rect width="240" height="300" fill="${color}"/>
  <rect width="240" height="300" fill="url(#dg)"/>
  <polygon points="${star(120, 130, 74)}" fill="#FFFDF5" stroke="#000" stroke-width="6" transform="rotate(10 120 130)"/>
  <text x="120" y="248" font-family="'Noto Sans SC',sans-serif" font-size="22" font-weight="900" text-anchor="middle" fill="#FFFDF5" stroke="#000" stroke-width="5" paint-order="stroke">${name}</text>
  <rect x="6" y="6" width="228" height="288" fill="none" stroke="#000" stroke-width="5"/>
</svg>
`;
}

const chDir = join(ROOT, "public", "assets", "characters");
const lcDir = join(ROOT, "public", "assets", "lightcones");
mkdirSync(chDir, { recursive: true });
mkdirSync(lcDir, { recursive: true });

for (const [id, name, color] of CHARACTERS) writeFileSync(join(chDir, `${id}.svg`), characterSvg(name, color));
for (const [id, name, color] of LIGHTCONES) writeFileSync(join(lcDir, `${id}.svg`), lightconeSvg(name, color));
console.log(`生成完成：${CHARACTERS.length} 角色 + ${LIGHTCONES.length} 光锥`);
