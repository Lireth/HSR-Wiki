import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "../../utils/cn";

const LINKS = [
  { to: "/calendar", label: "日历" },
  { to: "/characters", label: "角色" },
  { to: "/lightcones", label: "光锥" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-8 border-black bg-neo-bg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="inline-block -rotate-2 border-4 border-black bg-neo-accent px-3 py-1.5 font-black text-xl tracking-tight shadow-neo-sm transition-transform duration-200 hover:rotate-0">
          HSR·WIKI
        </Link>
        <div className="hidden items-center gap-3 md:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "border-4 px-4 py-2 font-black uppercase tracking-widest transition-all duration-100",
                  isActive ? "border-black bg-neo-secondary shadow-neo-sm" : "border-transparent hover:border-black hover:bg-neo-muted hover:shadow-neo-sm"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <button type="button" aria-label="打开菜单" onClick={() => setOpen(!open)} className="inline-flex h-14 w-14 items-center justify-center border-4 border-black bg-white shadow-neo-sm btn-press md:hidden">
          {open ? <X className="h-7 w-7" strokeWidth={3} /> : <Menu className="h-7 w-7" strokeWidth={3} />}
        </button>
      </nav>
      {open && (
        <div className="border-t-4 border-black bg-neo-bg md:hidden">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({ isActive }) => cn("block border-b-4 border-black px-4 py-4 font-black uppercase tracking-widest", isActive && "bg-neo-secondary")}>
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
