import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
      <>Home Layout</>
      <Outlet />
    </>
  );
};

export default HomeLayout;
