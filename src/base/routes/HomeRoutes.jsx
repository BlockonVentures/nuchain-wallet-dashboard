import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/overview/home/Home";
import HomeLayout from "../layouts/HomeLayout";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/liquidity-pool" element={<>jjjj</>} />
        {/* <Route path="/not-found" element={<NotFound />} />
        <Route path="/network-error" element={<NetworkError />} />
      
        <Route path="*" element={<Navigate to={"/not-found"} />} /> */}
      </Route>
    </Routes>
  );
};

export default HomeRoutes;
