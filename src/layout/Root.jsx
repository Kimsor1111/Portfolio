import { Navbar } from "./../components";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
