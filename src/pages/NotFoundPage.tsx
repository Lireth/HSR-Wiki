import { Link } from "react-router";
import { NeoButton } from "../components/neo";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-8 py-20">
      <p className="text-outline font-black text-9xl rotate-2 tracking-tighter">404</p>
      <p className="-rotate-1 border-4 border-black bg-neo-secondary px-4 py-2 font-black text-xl shadow-neo-md">这个页面被虚无吞没了！</p>
      <Link to="/"><NeoButton variant="primary">返回首页</NeoButton></Link>
    </div>
  );
}
