import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/overview/home/Home";
import HomeLayout from "../layouts/HomeLayout";
import LiquidityPool from "../../pages/overview/liquidity-pool";
import { PersionalInfo } from "../../components/pofilesectiontap/PersionalInfo";
import { TransectionManageMent } from "../../pages/TransectionManageMent";
import { UserManagement } from "../../pages/UserManagement";
import { Payment } from "../../pages/Payment";
import { StackingPool } from "../../pages/StackingPool";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/liquidity-pool" element={<LiquidityPool />} />
        <Route
          path="/transaction-management"
          element={<TransectionManageMent/>}
        />
        <Route path="/user-management" element={<UserManagement/>} />
        <Route path="/payment" element={<Payment/>} />

        <Route path="/staking-pool" element={<StackingPool/>} />

        <Route path="/profile" element={<PersionalInfo />} />
        {/* <Route path="/not-found" element={<NotFound />} />
        <Route path="/network-error" element={<NetworkError />} />
      
        <Route path="*" element={<Navigate to={"/not-found"} />} /> */}
      </Route>
    </Routes>
  );
};

export default HomeRoutes;
