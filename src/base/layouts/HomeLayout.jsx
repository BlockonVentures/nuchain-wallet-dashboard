import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const HomeLayout = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <>
      {/* <>Home Layout</> */}
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-grow overflow-y-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
