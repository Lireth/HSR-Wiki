import { memo } from "react";
import { Link } from "react-router";
import type { LightCone } from "../../types/lightcone";
import { SafeImage, StarRating } from "../neo";

export const LightConeCard = memo(function LightConeCard({ cone }: { cone: LightCone }) {
  return (
    <Link to={`/lightcones/${cone.id}`} className="block border-4 border-black bg-white shadow-neo-md card-lift">
      <div className="relative">
        <SafeImage src={cone.art} alt={cone.name} className="aspect-4/5 w-full object-cover" loading="lazy" />
        <span className="absolute top-2 left-2 border-2 border-black bg-white px-1.5 font-black">{cone.rarity}★</span>
        <span className="absolute top-2 right-2 border-2 border-black bg-neo-muted px-1.5 py-0.5 font-black text-xs">{cone.path}</span>
      </div>
      <div className="border-t-4 border-black px-3 py-2">
        <p className="font-black text-lg">{cone.name}</p>
        <StarRating value={cone.rating} size={12} className="mt-1" />
      </div>
    </Link>
  );
});
