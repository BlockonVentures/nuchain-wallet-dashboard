import React from "react";
import Logo from "../assets/images/Logo.png";
import home from "../assets/images/home.png";
<<<<<<< HEAD
import liquidityPool from "../assets/images/liquidity-pool.png";
=======
import liquidityPool from "../assets/images/liquidity-pool.svg";
import LiquidityPoolImage from "../assets/components/LiquidityPoolImage";
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
import paymentGateway from "../assets/images/payment-gateway.png";
import profile from "../assets/images/profile.png";
import stakingPool from "../assets/images/staking-pool.png";
import transactionManagement from "../assets/images/transaction-management.png";
import userManagement from "../assets/images/user-management.png";
<<<<<<< HEAD

const Sidebar = () => {
=======
import Dashboard from "../components/Dashboard";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../assets/components/DashboardIcon";
import TransactionManagementIcon from "../assets/components/TransactionManagementIcon";
import UserManagementIcon from "../assets/components/UserManagementIcon";
import StakingIcon from "../assets/components/StakingIcon";

const Sidebar = () => {
  // const [activeComponent, setActiveComponent] = useState("Dashboard");

  // const LiquidityPool = () => <div>Liquidity Pool Content</div>;
  // const TransactionManagement = () => <div>Transaction Management Content</div>;
  // const UserManagement = () => <div>User Management Content</div>;
  // const PaymentGateway = () => <div>Payment Gateway Content</div>;
  // const StakingPool = () => <div>Staking Pool Content</div>;
  // const Profile = () => <div>Profile Content</div>;

  // const renderComponent = () => {
  //   switch (activeComponent) {
  //     case "Dashboard":
  //       return <Dashboard />;
  //     case "LiquidityPool":
  //       return <LiquidityPool />;
  //     case "TransactionManagement":
  //       return <TransactionManagement />;
  //     case "UserManagement":
  //       return <UserManagement />;
  //     case "PaymentGateway":
  //       return <PaymentGateway />;
  //     case "StakingPool":
  //       return <StakingPool />;
  //     case "Profile":
  //       return <Profile />;
  //     default:
  //       return <Dashboard />;
  //   }
  // };
  const location = useLocation();

>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
  return (
    <div className="hidden sm:block w-[26%] bg-white shadow-lg h-screen">
      {/* Logo Section */}
      <div className="p-4 flex items-center mb-7">
        <img src={Logo} alt="logo" className="h-12 w-auto" />
      </div>

      {/* Navigation Menu */}
      <ul className="space-y-6 pl-0 px-4">
        <li className="text-[#6F7074] text-[11.25px] flex items-center rounded-lg cursor-pointer transition-all duration-200">
<<<<<<< HEAD
          {/* <span className="material-icons-outlined mr-3 text-purple-700">
            dashboard
          </span> */}
          <span className="w-5 h-5">
            <img src={home} alt="home" />
          </span>

          <span className="ml-1 text-[#8712C2] text-xs font-bold">
            Dashboard
          </span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={liquidityPool} alt="home" />
          </span>
          <span className="ml-1">Liquidity Pool</span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={transactionManagement} alt="home" />
          </span>
          <span className="ml-1">Transaction Management</span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={userManagement} alt="home" />
          </span>
          <span className="ml-1">User Management</span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={paymentGateway} alt="home" />
          </span>
          <span className="ml-1">Payment Gateway</span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={stakingPool} alt="home" />
          </span>
          <span className="ml-1">Staking Pool</span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={profile} alt="home" />
          </span>
          <span className="ml-1">Profile</span>
=======
          <Link
            to="/"
            className={`flex items-center no-underline ${
              location.pathname === "/"
                ? "text-[#8712C2] font-bold"
                : "text-[#6F7074]"
            }`}
          >
            <span className="w-5 h-5">
              <DashboardIcon fill={location.pathname === "/" ? true : false} />
            </span>

            <span className="ml-1">Dashboard</span>
          </Link>
        </li>
        <li className=" text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <Link
            to="/liquidity-pool"
            className={`flex items-center no-underline ${
              location.pathname === "/liquidity-pool"
                ? "text-[#8712C2] font-bold"
                : "text-[#6F7074]"
            }`}
          >
            <span className="w-5 h-5	">
              <LiquidityPoolImage
                fill={location.pathname === "/liquidity-pool" ? true : false}
              />
              {/* <img src={  location.pathname === "/liquidity-pool"?liquidityPool :liquidityPool} alt="home" /> */}
            </span>
            <span className="ml-1">Liquidity Pool</span>
          </Link>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <Link
            to="/transaction-management"
            className={`flex items-center no-underline ${
              location.pathname === "/transaction-management"
                ? "text-[#8712C2] font-bold"
                : "text-[#6F7074]"
            }`}
          >
            <span className="w-5 h-5">
              <TransactionManagementIcon
                fill={
                  location.pathname === "/transaction-management" ? true : false
                }
              />
            </span>
            <span className="ml-1">Transaction Management</span>
          </Link>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center rounded-lg cursor-pointer transition-all duration-200">
          <Link
            to="/user-management"
            className={`flex items-center no-underline ${
              location.pathname === "/user-management"
                ? "text-[#8712C2] font-bold"
                : "text-[#6F7074]"
            }`}
          >
            <span className="w-5 h-5">
              <UserManagementIcon
                fill={location.pathname === "/user-management" ? true : false}
              />
            </span>
            <span className="ml-1">User Management</span>
          </Link>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center rounded-lg cursor-pointer transition-all duration-200">
          <Link
            to="/payment"
            className={`flex items-center no-underline ${
              location.pathname === "/payment"
                ? "text-[#8712C2] font-bold"
                : "text-[#6F7074]"
            }`}
          >
            <span className="w-5 h-5">
              <img src={paymentGateway} alt="home" />
            </span>
            <span className="ml-1">Payment Gateway</span>
          </Link>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <Link
            to="/staking-pool"
            className={`flex items-center no-underline ${
              location.pathname === "/staking-pool"
                ? "text-[#8712C2] font-bold"
                : "text-[#6F7074]"
            }`}
          >
            <span className="w-5 h-5 ">
              <StakingIcon
                fill={location.pathname === "/staking-pool" ? true : false}
              />
            </span>
            <span className="ml-1">Staking Pool</span>
          </Link>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <Link
            to="/profile"
            className={`flex items-center no-underline ${
              location.pathname === "/profile"
                ? "text-[#8712C2] font-bold "
                : "text-[#6F7074]"
            }`}
          >
            <span className="w-5 h-5">
              <img src={profile} alt="home" />
            </span>
            <span className="ml-1">Profile</span>
          </Link>
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
