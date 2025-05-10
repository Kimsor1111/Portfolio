import { useEffect } from "react";
import { Navbar } from "./../components";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Root = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
