import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar as Data } from "./../data/navbar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full h-[70px] bg-[#212429] sticky top-0 z-[1000] flex items-center justify-between px-10">
      <h1 className="text-3xl text-white tracking-wider">Portfolio.</h1>
      <ul className=" items-center gap-7 md:flex hidden ">
        {Data.map(({ name, path }, index) => (
          <li key={index}>
            <Link
              to={path}
              className="text-xl tracking-wider text-[#cccaca] hover:text-white"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <span className="md:hidden" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} className="text-white text-xl" />
      </span>
      {/* Mobile menu */}
      <div
        className={`w-full absolute md:hidden bg-[#212429] top-[70px] left-0 transition-['height'] duration-300 ${
          open ? "visible py-5 h-fit opacity-100" : "invisible h-0 opacity-0"
        }`}
      >
        <ul className="w-full  flex flex-col gap-3">
          {Data.map(({ name, path }, index) => (
            <li className="flex justify-center" key={index}>
              <Link
                to={path}
                onClick={() => setOpen(false)}
                className=" text-xl tracking-wider text-[#cccaca] hover:text-white"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
