import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
