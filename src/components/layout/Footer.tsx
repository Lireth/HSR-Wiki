import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="mt-16 border-t-8 border-black bg-neo-secondary">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="inline-block w-fit rotate-1 border-4 border-black bg-white px-3 py-1 font-black text-xl shadow-neo-sm">HSR·WIKI</div>
        <nav className="flex flex-col gap-2">
          <Link to="/calendar" className="w-fit font-black uppercase tracking-widest hover:bg-black hover:px-1 hover:text-white">游戏日历</Link>
          <Link to="/characters" className="w-fit font-black uppercase tracking-widest hover:bg-black hover:px-1 hover:text-white">角色图鉴</Link>
          <Link to="/lightcones" className="w-fit font-black uppercase tracking-widest hover:bg-black hover:px-1 hover:text-white">光锥图鉴</Link>
        </nav>
        <p className="text-sm font-bold leading-relaxed">
          本站为非官方粉丝项目，与 miHoYo / HoYoverse 无关。游戏名称与相关素材版权归原权利方所有。数据为示例数据，正式使用请以游戏内信息为准。
        </p>
      </div>
    </footer>
  );
}
