import Logo from "../assets/images/Logo.png";
import LiquidityPoolImage from "../assets/components/LiquidityPoolImage";
import paymentGateway from "../assets/images/payment-gateway.png";
import profile from "../assets/images/profile.png";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../assets/components/DashboardIcon";
import TransactionManagementIcon from "../assets/components/TransactionManagementIcon";
import UserManagementIcon from "../assets/components/UserManagementIcon";
import StakingIcon from "../assets/components/StakingIcon";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="hidden sm:block w-[26%] max-w-[250px] bg-white shadow-lg h-screen">
      {/* Logo Section */}
      <div className="flex items-center p-4 mb-7">
        <img src={Logo} alt="logo" className="w-auto h-12" />
      </div>

      {/* Navigation Menu */}
      <ul className="px-4 pl-0 space-y-6">
        <li className="text-[#6F7074] text-[11.25px] flex items-center rounded-lg cursor-pointer transition-all duration-200">
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
            <span className="w-5 h-5 ">
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
        {/* <li className="text-[#6F7074] text-[11.25px] flex items-center rounded-lg cursor-pointer transition-all duration-200">
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
        </li> */}
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
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
