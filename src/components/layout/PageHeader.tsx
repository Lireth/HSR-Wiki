import type { ReactNode } from "react";
import { NeoBadge } from "../neo";

export function PageHeader({ title, badge, description, children }: { title: string; badge?: string; description?: string; children?: ReactNode }) {
  return (
    <div className="relative mb-8">
      <div className="absolute -top-6 right-2 hidden h-24 w-24 animate-spin-slow border-4 border-black bg-neo-muted md:block" />
      {badge && <NeoBadge color="black" className="mb-4 -rotate-2">{badge}</NeoBadge>}
      <h1 className="w-fit -rotate-1 border-4 border-black bg-white px-4 py-2 font-black text-4xl tracking-tight shadow-neo-md sm:text-6xl">{title}</h1>
      {description && <p className="mt-4 max-w-2xl font-bold leading-relaxed">{description}</p>}
      {children}
    </div>
  );
}
