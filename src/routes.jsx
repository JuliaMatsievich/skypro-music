import { Routes, Route } from "react-router-dom";
import { MainPage } from './pages/main';
import { Favorites } from "./pages/favorites";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/favorites" element={<Favorites />} />

    </Routes>
  );
};