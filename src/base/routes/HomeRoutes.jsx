import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/overview/home/Home";
import HomeLayout from "../layouts/HomeLayout";
import LiquidityPool from "../../pages/overview/liquidity-pool";
import { PersionalInfo } from "../../components/pofilesectiontap/PersionalInfo";
import { AddUser } from "../../pages/AddUser";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/liquidity-pool" element={<LiquidityPool />} />
        <Route
          path="/transaction-management"
          element={<>Transaction Management</>}
        />
        <Route path="/user-management" element={<>User Management</>} />
        <Route path="/payment" element={<>Payment</>} />
        <Route path="/staking-pool" element={<>Staking Pool</>} />

        <Route path="/profile" element={<PersionalInfo />} />
        <Route path="/profile/add-user" element={<AddUser />} />
        {/* <Route path="/not-found" element={<NotFound />} />
        <Route path="/network-error" element={<NetworkError />} />
      
        <Route path="*" element={<Navigate to={"/not-found"} />} /> */}
      </Route>
    </Routes>
  );
};

export default HomeRoutes;
