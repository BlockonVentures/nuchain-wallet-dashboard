import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
<<<<<<< HEAD
=======
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3

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
<<<<<<< HEAD
    <div data-testid="HomeLayout">
      {/* <>Home Layout</> */}
      <Outlet />
    </div>

=======
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
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
  );
};

export default HomeLayout;
