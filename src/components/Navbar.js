import React, { Fragment } from "react";

const Navbar = () => {
  return (
      <div className="block">
        <div className="flex  fixed justify-between w-full bg-#f1f1f1 lg:px-20 lg:py-5">
          <div className="">
            <p className="text-black lg:text-[2vmax]  hover:cursor-pointer font-bold text-center font-['Irish-Grover']">
              Talent Zone
            </p>
          </div>
          <div
            className={`flex justify-between items-center lg:gap-8 font-bold text-center text-md  `}
          >
            <p className="hover:cursor-pointer lg:text-[1.2vmax] active:text-blue-500 hover:scale-[1.1] ease-in-out duration-200 ">
              Register
            </p>
            <p className="hover:cursor-pointer lg:text-[1.2vmax] active:text-blue-500 hover:scale-[1.1] ease-in-out duration-200">
              Login
            </p>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
