import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ErrorBoundary } from "./components/layout/ErrorBoundary";
import { Layout } from "./components/layout/Layout";
import { NotFoundPage } from "./pages/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const CalendarPage = lazy(() => import("./pages/CalendarPage"));
const CharactersPage = lazy(() => import("./pages/CharactersPage"));
const CharacterDetailPage = lazy(() => import("./pages/CharacterDetailPage"));
const LightConesPage = lazy(() => import("./pages/LightConesPage"));
const LightConeDetailPage = lazy(() => import("./pages/LightConeDetailPage"));

function PageFallback() {
  return <div className="h-64 animate-pulse border-4 border-black bg-white shadow-neo-md" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="calendar" element={<CalendarPage />} />
              <Route path="characters" element={<CharactersPage />} />
              <Route path="characters/:id" element={<CharacterDetailPage />} />
              <Route path="lightcones" element={<LightConesPage />} />
              <Route path="lightcones/:id" element={<LightConeDetailPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
