import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/overview/home/Home";
import HomeLayout from "../layouts/HomeLayout";
<<<<<<< HEAD
=======
import LiquidityPool from "../../pages/overview/liquidity-pool";
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
<<<<<<< HEAD

=======
        <Route path="/liquidity-pool" element={<LiquidityPool />} />
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
        {/* <Route path="/not-found" element={<NotFound />} />
        <Route path="/network-error" element={<NetworkError />} />
      
        <Route path="*" element={<Navigate to={"/not-found"} />} /> */}
      </Route>
    </Routes>
  );
};

export default HomeRoutes;
