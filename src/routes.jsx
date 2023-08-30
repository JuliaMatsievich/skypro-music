import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { MyPlaylist } from "./pages/myPlaylist";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites" element={<MyPlaylist />} />
    </Routes>
  );
};