import React from "react";
import Notifications from "../assets/images/notifications.png";
import Dnd from "../assets/images/dnd.png";
import { useLocation } from "react-router-dom";
// import { FaBell } from "react-icons/fa"; // For notification icon (use any icon library)

const Navbar = () => {
  const { pathname } = useLocation();
  // Map of paths to page titles
  const pageTitles = {
    "/": "Main Dashboard",
    "/liquidity-pool": "Liquidity Pool Management",
    // Add more routes and titles as needed
  };

  // Dynamic title based on pathname
  const pageTitle = pageTitles[pathname] || "Unknown Page";
  const breadcrumb =
    pathname === "/" ? "Pages/Dashboard" : `Pages${pathname.replace("-", " ")}`;

  return (
    <div className="px-6 py-4 flex justify-between items-center flex-wrap">
      {/* Breadcrumb or Title */}
      <div className="mb-4 md:mb-0">
        <p className="text-sm text-gray-500 capitalize">{breadcrumb}</p>

        <h1 className="text-2xl font-bold text-gray-800">{pageTitle}</h1>
      </div>

      {/* Right-side Icons and Search */}
      <div className="flex items-center space-x-3 md:space-x-6">
        {/* Search bar */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-64 bg-white rounded-full focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-2.5 right-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M16.25 9.5a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0z"
            />
          </svg>
        </div>

        {/* Notification icon */}
        <button className="relative text-gray-500 w-5">
          <img src={Notifications} alt="notifications" />
          {/* <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs rounded-full px-1">
            3
          </span> */}
        </button>

        {/* DND Icon */}
        <button className="relative text-gray-500 w-4">
          <img src={Dnd} alt="dnd" />
        </button>

        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-purple-500"
        />
      </div>
    </div>
  );
};

export default Navbar;
