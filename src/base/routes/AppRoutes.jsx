import { Routes, Route } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<HomeRoutes />} />
      <Route path="/auth/*" element={<>jjjjj</>} />
    </Routes>
  );
};

export default AppRoutes;
