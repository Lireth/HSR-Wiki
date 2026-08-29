import { CalendarDays, ChevronRight, Sparkles, Swords, Users } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router";
import { NeoBadge, NeoButton, NeoCard } from "../components/neo";
import { GAME_META } from "../data/game-meta";
import { CHARACTERS } from "../data/characters";
import { LIGHTCONES } from "../data/lightcones";
import { getUpcomingEvents } from "../services/calendarService";
import { CALENDAR_EVENTS } from "../data/calendar-events";

function Hero() {
  return (
    <section className="relative mb-12 grid gap-10 overflow-hidden lg:grid-cols-[3fr_2fr]">
      <div className="relative z-10 py-6">
        <div className="mb-6 flex flex-wrap gap-3">
          <NeoBadge color="black" className="-rotate-2">非官方粉丝百科</NeoBadge>
          <NeoBadge color="secondary" className="rotate-1">当前版本 {GAME_META.currentVersion}</NeoBadge>
        </div>
        <h1 className="font-black leading-[0.9] tracking-tighter">
          <span className="block text-outline text-7xl sm:text-8xl">星穹铁道</span>
          <span className="mt-2 inline-block -rotate-1 border-4 border-black bg-neo-accent px-4 py-1 text-6xl shadow-neo-lg sm:text-7xl">百科全舒</span>
        </h1>
        <p className="mt-6 max-w-xl font-bold text-xl leading-relaxed">
          游戏日历、角色图鉴、光锥图鉴——一站式掌握星穹列车时刻表。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/calendar"><NeoButton variant="primary">查看游戏日历 <ChevronRight className="h-5 w-5" strokeWidth={3} /></NeoButton></Link>
          <Link to="/characters"><NeoButton variant="outline">角色图鉴</NeoButton></Link>
        </div>
      </div>
      <div className="relative hidden min-h-80 border-4 border-black bg-white bg-halftone shadow-neo-xl lg:block">
        <span className="text-outline absolute left-6 top-6 font-black text-9xl tracking-tighter">{GAME_META.currentVersion}</span>
        <Sparkles className="absolute bottom-8 right-8 h-24 w-24 animate-spin-slow" strokeWidth={3} />
        <NeoBadge color="accent" className="absolute right-10 top-10 rotate-6 text-base">UP 池速查</NeoBadge>
        <NeoBadge color="muted" className="absolute bottom-24 left-10 -rotate-6 text-base">活动倒计时</NeoBadge>
      </div>
    </section>
  );
}

function EventMarquee() {
  // 渲染期计算今天：模块级常量会在 SPA 跨天常驻时过期
  const upcoming = useMemo(() => getUpcomingEvents(CALENDAR_EVENTS, new Date(), 6), []);
  if (upcoming.length === 0) return null;
  const items = [...upcoming, ...upcoming]; // 复制一份实现无缝滚动
  return (
    <div className="mb-12 overflow-hidden border-y-8 border-black bg-black py-3" aria-label="即将到来的事件">
      <div className="animate-marquee flex w-max items-center gap-8">
        {items.map((e, i) => (
          <Link key={`${e.id}-${i}`} to="/calendar" className="flex shrink-0 items-center gap-2 font-black uppercase tracking-widest text-neo-secondary hover:text-white">
            <span className="h-3 w-3 bg-neo-accent" /> {e.title} · {e.start}
          </Link>
        ))}
      </div>
    </div>
  );
}

const ENTRIES = [
  { to: "/calendar", icon: CalendarDays, title: "游戏日历", desc: "版本更新、前瞻直播、活动与 UP 池日期一览，倒计时提醒不错过任何奖励。", bg: "bg-neo-accent", stat: `${CALENDAR_EVENTS.length} 个事件`, num: "01" },
  { to: "/characters", icon: Users, title: "角色图鉴", desc: "技能、培养材料、推荐光锥与遗器，支持多维筛选与角色对比。", bg: "bg-neo-secondary", stat: `${CHARACTERS.length} 名角色`, num: "02" },
  { to: "/lightcones", icon: Swords, title: "光锥图鉴", desc: "叠影效果、突破材料与强度评价，为每个角色找到最优解。", bg: "bg-neo-muted", stat: `${LIGHTCONES.length} 把光锥`, num: "03" },
];

function EntryCards() {
  return (
    <section className="grid gap-8 md:grid-cols-3">
      {ENTRIES.map((e) => (
        <Link key={e.to} to={e.to} className="block">
          <NeoCard hover className="relative h-full p-6">
            <NeoBadge color="black" className="absolute -top-4 -right-4 rotate-3">{e.num}</NeoBadge>
            <span className={`mb-5 inline-flex border-4 border-black p-3 ${e.bg}`}><e.icon className="h-8 w-8" strokeWidth={3} /></span>
            <h2 className="mb-2 font-black text-3xl">{e.title}</h2>
            <p className="mb-4 font-bold leading-snug">{e.desc}</p>
            <div className="border-t-4 border-black pt-3 font-black uppercase tracking-widest">{e.stat}</div>
          </NeoCard>
        </Link>
      ))}
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventMarquee />
      <EntryCards />
    </>
  );
}
