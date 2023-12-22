import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-wrap fixed justify-between w-full bg-#f1f1f1 px-5  lg:px-20 md:px-20 py-5">
        <div className="">
          <Link to="/">
            <p className="text-black lg:text-[2vmax] hover:cursor-pointer font-bold text-center font-['Irish-Grover']">
              Talent Zone
            </p>
          </Link>
        </div>
        <div
          className={`flex justify-between items-center lg:gap-8 gap-5  font-bold text-center text-md  `}
        >
          <Link to="/signup">
            <p className="hover:cursor-pointer lg:text-[1.2vmax] hover:text-blue-500 active:text-blue-500 hover:scale-[1.1] ease-in-out duration-200 ">
              Register
            </p>
          </Link>
          <Link to="/login">
            <p className="hover:cursor-pointer lg:text-[1.2vmax] hover:text-blue-500 active:text-blue-500 hover:scale-[1.1] ease-in-out duration-200">
              Login
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
