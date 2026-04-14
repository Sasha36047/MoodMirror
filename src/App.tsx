import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Layout } from "./components/Layout";
import { Onboarding } from "./components/Onboarding";
import { HomePage } from "./pages/Home";
import { MoviesPage } from "./pages/Movies";
import { MusicPage } from "./pages/Music";
import { BooksPage } from "./pages/Books";
import { ActivitiesPage } from "./pages/Activities";
import { MindPage } from "./pages/Mind";
import { FavoritesPage } from "./pages/Favorites";
import { SettingsPage } from "./pages/Settings";

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(!localStorage.getItem("mood-selected"));
  if (showOnboarding) return <Onboarding onFinish={() => setShowOnboarding(false)} />;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/mind" element={<MindPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
